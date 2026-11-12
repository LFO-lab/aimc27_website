import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parse } from "parse5";
import { pages, getPage, getPageHref, siteUrl } from "../src/pages.js";
import { standardPageContent } from "../src/content.js";
import { getMetadata } from "../src/metadata.js";

function all(node, predicate) {
  return [...(predicate(node) ? [node] : []), ...(node.childNodes ?? []).flatMap((child) => all(child, predicate))];
}
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value;
const tags = (node, tag) => all(node, (item) => item.tagName === tag);
const text = (node) => node.nodeName === "#text" ? node.value :
  ["script", "style"].includes(node.tagName) ? "" : (node.childNodes ?? []).map(text).join(" ");
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const documents = new Map();

for (const page of pages) {
  const file = `dist${getPageHref(page.path)}index.html`;
  const errors = [];
  const html = await readFile(file, "utf8");
  const doc = parse(html, { onParseError: (error) => errors.push(error.code) });
  assert.deepEqual(errors, [], `${file}: HTML parse errors`);
  documents.set(page.path, doc);
  assert.equal(attr(tags(doc, "html")[0], "lang"), "en");
  assert.equal(tags(doc, "main").length, 1, `${file}: main landmark`);
  assert.equal(tags(doc, "h1").length, 1, `${file}: primary heading`);
  const main = tags(doc, "main")[0];
  assert.equal(attr(main, "id"), "main-content");
  const ids = all(doc, (node) => attr(node, "id") !== undefined).map((node) => attr(node, "id"));
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  const meta = getMetadata(page.path);
  assert.equal(text(tags(doc, "title")[0]), meta.title);
  assert.equal(tags(doc, "title").length, 1);
  const description = tags(doc, "meta").filter((node) => attr(node, "name") === "description");
  assert.equal(description.length, 1);
  assert.equal(attr(description[0], "content"), meta.description);
  const canonical = tags(doc, "link").filter((node) => attr(node, "rel") === "canonical");
  assert.equal(canonical.length, 1);
  assert.equal(attr(canonical[0], "href"), `${siteUrl}${getPageHref(page.path)}`);
  for (const [property, expected] of Object.entries({ "og:type": "website", "og:site_name": "AIMC 2027", "og:title": meta.title, "og:description": meta.description, "og:url": meta.canonical })) {
    const matches = tags(doc, "meta").filter((node) => attr(node, "property") === property);
    assert.equal(matches.length, 1);
    assert.equal(attr(matches[0], "content"), expected);
  }
  assert.ok(!tags(doc, "meta").some((node) => /robots/i.test(attr(node, "name") ?? "") && /noindex|nofollow/i.test(attr(node, "content") ?? "")));
  // Compare extracted main text with the complete source content, including disclosures.
  if (standardPageContent[page.path]) {
    const expectedText = normalize(text(parse(standardPageContent[page.path].body)));
    assert.ok(normalize(text(main)).includes(expectedText), `${file}: missing page content`);
  }
  const events = tags(doc, "script").filter((node) => attr(node, "type") === "application/ld+json");
  assert.equal(events.length, meta.event ? 1 : 0);
  if (events.length) {
    const event = JSON.parse(events[0].childNodes.map((node) => node.value).join(""));
    assert.equal(event["@type"], "Event");
    assert.equal(event.startDate, "2027-08-18");
    assert.equal(event.endDate, "2027-08-20");
    assert.equal(event.location.length, 2);
    assert.equal(event.url, `${siteUrl}/`);
  }
}

for (const [path, doc] of documents) {
  for (const link of tags(doc, "a")) {
    const href = attr(link, "href");
    if (!href) continue;
    const url = new URL(href, `${siteUrl}${getPageHref(path)}`);
    if (url.origin !== siteUrl) continue;
    const targetPage = getPage(url.pathname);
    assert.ok(targetPage, `${path}: broken internal link ${href}`);
    if (url.hash) {
      assert.ok(all(documents.get(targetPage.path), (node) => attr(node, "id") === decodeURIComponent(url.hash.slice(1))).length, `${path}: missing anchor ${href}`);
    }
  }
  for (const node of all(doc, (item) => attr(item, "aria-labelledby") !== undefined)) {
    for (const id of attr(node, "aria-labelledby").split(/\s+/)) {
      assert.ok(all(doc, (item) => attr(item, "id") === id).length, `${path}: missing accessible label ${id}`);
    }
  }
  for (const image of tags(doc, "img")) {
    assert.notEqual(attr(image, "alt"), undefined, `${path}: image without alt`);
  }
}
const calls = documents.get("/calls");
const callsText = normalize(text(tags(calls, "main")[0]));
for (const expected of ["February 21st, 2027", "Abstract submission deadline", "February 28th, 2027", "Full submission deadline", "Submission categories", "Research papers", "Music and Sound Art", "Workshops and Tutorials", "Camera-ready deadline", "Conference dates."]) {
  assert.ok(callsText.includes(expected), `Calls: missing ${expected}`);
}
for (const date of ["2027-02-21", "2027-02-28", "2027-05-03", "2027-06-07", "2027-08-18", "2027-08-20"]) {
  assert.ok(tags(calls, "time").some((node) => attr(node, "datetime") === date), `Calls: missing date ${date}`);
}
assert.ok(normalize(text(documents.get("/reviewing-process"))).includes("Acknowledgment"));
console.log(`Verified complete HTML, metadata, structured data, and internal links for ${pages.length} pages.`);
