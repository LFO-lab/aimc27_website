import { defineConfig } from "vite";
import { pages } from "./src/pages.js";
import { cmtAcknowledgment } from "./src/acknowledgment.js";

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

        // GitHub Pages serves files, so each route needs its own entry page.
        for (const page of pages.filter((page) => page.path !== "/")) {
          // Include the acknowledgment in HTML for verifiers that do not run JS.
          const source = page.path === "/reviewing-process"
            ? String(index.source).replace(
                '<div id="app"></div>',
                `<div id="app"><main><h1>Reviewing process</h1><h2>Acknowledgment</h2><p>${cmtAcknowledgment}</p></main></div>`,
              )
            : index.source;

          this.emitFile({
            type: "asset",
            fileName: `${page.path.slice(1)}/index.html`,
            source,
          });
        }
      },
    },
  ],
});
