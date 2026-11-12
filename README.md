# AIMC 2027 website

Official website for **AIMC 2027, the 8th Conference on AI Music Creativity**, taking place August 18–20, 2027, in Montréal, Québec, Canada. The conference theme is *At the Limits of Immersion*.

**Website:** [2027.aimusiccreativity.org](https://2027.aimusiccreativity.org/)

The site provides calls for contributions, submission and reviewing information, conference program updates, registration details, and practical information about venues, travel, and accommodation. It also introduces the conference community and organizing committees and provides contact information.

## Technology

The website uses JavaScript, HTML, and CSS, with Vite for local development and production builds. A shared renderer generates complete HTML pages at build time, making the published content available without JavaScript. Browser scripts enhance navigation and section links.

The production site is hosted on GitHub Pages. No application server or database is required.

## Run locally

Use Node.js 20 or a compatible newer version, with npm installed. From the repository directory:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. Source changes update the development preview automatically. Press **Ctrl+C** to stop the server.

To build and preview the production site:

```sh
npm run build
npm run preview
```

The build writes the publishable site to `dist/`. The production preview serves those generated files; run the build again after making changes you want to preview there.

## Project structure

| File or directory | Purpose |
| --- | --- |
| `src/content.js` | Text and HTML content for the standard pages. |
| `src/render.js` | Shared layout, navigation, homepage, and footer. |
| `src/pages.js` | Page titles, routes, and URL helpers. |
| `src/metadata.js` | Page titles and descriptions for search and sharing, canonical URLs, and conference structured data. |
| `src/main.js` | Browser navigation and section-link behavior. |
| `src/style.css` | Site styling and responsive layouts. |
| `src/acknowledgment.js` | Shared reviewing acknowledgment text. |
| `public/` | Static assets, including images and the favicon. |
| `index.html` | HTML document template. |
| `vite.config.js` | Build configuration and static page generation. |
| `scripts/check-build.js` | Automated checks of generated pages. |
| `.github/workflows/deploy.yml` | GitHub Pages build and deployment workflow. |

## Update the website

Edit standard page content in `src/content.js` and homepage content in `src/render.js`. Update styles in `src/style.css`, and place images or other static files in `public/`; files in this directory are served from the site root.

When adding a page, register its route in `src/pages.js`, add its content in `src/content.js`, and provide a description in `src/metadata.js`. Check its placement in the navigation defined in `src/render.js`.

Keep conference dates, venues, and other shared information consistent wherever they appear, including page metadata and structured data. The renderer is used by both Node.js during builds and the browser, so browser-specific behavior belongs in `src/main.js`.

## Check changes

`npm run build` generates the site and runs automated checks for page content, HTML structure, metadata, structured data, internal links, accessible labels, and submission deadlines. To rerun the checks against an existing build:

```sh
npm run check:build
```

Use the production preview to check desktop and mobile layouts, keyboard navigation, collapsible sections, section links, and browser Back/Forward. Page content and ordinary navigation should also remain usable with JavaScript disabled.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which installs dependencies, builds and checks the site, and deploys `dist/` to GitHub Pages. The workflow can also be started manually from the repository's Actions tab.

Published page URLs use trailing slashes, such as `/calls/`; GitHub Pages redirects the slashless equivalents. After deployment, verify the affected pages on the public website. Domain, CDN, and crawler-access settings are managed outside this repository.
