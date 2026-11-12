import { getPage } from "./pages.js";
import { renderPage } from "./render.js";
import { renderMetadata } from "./metadata.js";

const app = document.querySelector("#app");

function updateMetadata() {
  document.head.querySelectorAll('title, meta[name="description"], link[rel="canonical"], meta[property^="og:"], script[type="application/ld+json"]').forEach((element) => element.remove());
  document.head.insertAdjacentHTML("beforeend", renderMetadata(window.location.pathname));
}

function revealLinkedSection() {
  let id;
  try {
    id = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return false;
  }
  const target = document.getElementById(id);
  if (!target) return false;

  // Reveal targets inside nested disclosures as well as disclosures themselves.
  for (let element = target; element; element = element.parentElement) {
    if (element instanceof HTMLDetailsElement) element.open = true;
  }
  target.scrollIntoView();
  if (id === "main-content") {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }
  return true;
}

function navigate() {
  app.innerHTML = renderPage(window.location.pathname);
  updateMetadata();
  if (!revealLinkedSection()) {
    document.querySelector("main").focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

window.addEventListener("popstate", () => {
  if (getPage(window.location.pathname)) navigate();
  else window.location.reload();
});
window.addEventListener("hashchange", revealLinkedSection);
document.addEventListener("click", (event) => {
  const link = event.target.closest?.("a");
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      !link || link.hasAttribute("download") || (link.target && link.target !== "_self") ||
      link.origin !== window.location.origin || !getPage(link.pathname)) return;

  event.preventDefault();
  const samePage = link.pathname === window.location.pathname && link.search === window.location.search;
  window.history.pushState({}, "", link.href);
  if (samePage && link.hash) revealLinkedSection();
  else navigate();
});

// Production already has complete HTML. Render only the empty development shell.
if (!app.querySelector("main")) {
  if (getPage(window.location.pathname)) navigate();
} else {
  revealLinkedSection();
}
document.documentElement.dataset.ready = "true";
