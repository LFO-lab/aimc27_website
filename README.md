# AIMC 2027 website

A Vite site deployed to GitHub Pages. All 14 routes are rendered to complete HTML during the build, so content and metadata are available without JavaScript.

## Local development

```sh
npm ci
npm run dev
```

The development server renders pages in the browser. To test the actual static output:

```sh
npm run build
npm run preview
```

Open the URL printed by Vite. View source or use `curl` against the preview to inspect the initial HTML. For example:

```sh
curl -L http://localhost:4173/calls/
```

## Editing

- `src/content.js`: page content, including the Calls deadlines.
- `src/render.js`: shared page layout, navigation, homepage, and footer. This module must remain usable in Node without browser APIs.
- `src/pages.js`: routes and canonical URL helpers. The site is hosted at the domain root.
- `src/metadata.js`: page descriptions, titles, Open Graph metadata, and conference Event JSON-LD. Keep the event dates and venues consistent with visible content.
- `src/main.js`: browser navigation and section-link enhancements. Production HTML is retained on initial load; ordinary page links and native disclosures also work without scripts.
- `vite.config.js`: generates `dist/index.html` and an `index.html` in each route directory, using the shared renderer.

## Validation and deployment

`npm run build` also runs `npm run check:build`. The checks parse every generated HTML document and verify complete page text, landmarks, metadata, event data, internal links, accessible labels, and Calls deadlines. The existing GitHub Actions deployment runs this same command before uploading `dist`.

Before deploying, check desktop/mobile layouts, keyboard navigation, disclosures, section links, and browser Back/Forward. With JavaScript disabled, page content and navigation must remain usable.

GitHub Pages redirects slashless routes such as `/calls` to `/calls/`; canonical URLs use the latter. After deployment, repeat HTTP checks against the public domain to verify HTTP 200 after redirects and the presence of actual conference text in the response. Cloudflare-managed crawler rules and firewall settings are external to this repository and must be checked separately when investigating access by a particular crawler.
