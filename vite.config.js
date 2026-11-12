import { defineConfig } from "vite";
import { pages, getPageHref } from "./src/pages.js";
import { renderPage } from "./src/render.js";
import { renderMetadata } from "./src/metadata.js";

export default defineConfig({
  base: "/",
  plugins: [
    {
      name: "github-pages-route-entries",
      enforce: "post",
      generateBundle(_options, bundle) {
        const index = bundle["index.html"];
        if (!index || index.type !== "asset") {
          throw new Error("Missing built index.html for route entries");
        }
        const template = String(index.source);
        for (const page of pages) {
          const source = template
            .replace("<!-- page-metadata -->", renderMetadata(page.path))
            .replace('<div id="app"></div>', () => `<div id="app">${renderPage(page.path)}</div>`);
          if (page.path === "/") index.source = source;
          else this.emitFile({
            type: "asset",
            fileName: `${getPageHref(page.path).slice(1)}index.html`,
            source,
          });
        }
      },
    },
  ],
});
