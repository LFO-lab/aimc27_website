import { defineConfig } from "vite";
import { pages } from "./src/pages.js";

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
          this.emitFile({
            type: "asset",
            fileName: `${page.path.slice(1)}/index.html`,
            source: index.source,
          });
        }
      },
    },
  ],
});
