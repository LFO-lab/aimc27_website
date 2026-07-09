const pages = [
  { title: "Home", path: "/" },
  { title: "Calls", path: "/calls" },
  { title: "Info", path: "/info" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const app = document.querySelector("#app");
const basePath = import.meta.env.BASE_URL;
const standardPageContent = {
  "/calls": {
    title: "Calls",
    subtitle: "AIMC 2027",
    body: `
      <p>future content</p>
    `,
  },
  "/info": {
    title: "Info",
    subtitle: "AIMC 2027",
    body: `
      <p>future content</p>
    `,
  },
  "/about": {
    title: "About AIMC",
    subtitle: "AI Music Creativity",
    body: `
      <p>
        The AI Music Creativity (AIMC) originates from the integration of
        <a href="https://musicalmetacreation.org/">Musical Metacreation</a> (MuMe)
        and the
        <a href="https://aimusiccreativity.org/about/">Computer Simulation of Music Creativity</a>
        (CSMC). The computational simulation of musical creativity continues to be an
        exciting and significant area of academic research, and is now making impacts in
        commercial realms. Such systems pose several theoretical and technical challenges,
        and are the result of an interdisciplinary effort that encompasses the domains of
        music, artificial intelligence, cognitive science and philosophy. This can be seen
        within the broader realm which studies the design and use of such generative tools
        and theories for music making: discovery and exploration of novel musical styles and
        content, collaboration between human performers and creative software “partners”,
        and design of systems in gaming and entertainment that dynamically generate or
        modify music.
      </p>
      <p>
        For more information, visit
        <a href="https://aimusiccreativity.org">https://aimusiccreativity.org</a>
      </p>
      <h2 class="body-copy-heading">People</h2>
                <p>
                  <b>Conference Chair:</b> Dominic Thibault | Email: dominic.thibault@umontreal.ca
                </p>      
    `,
  },
  "/contact": {
    title: "Contact Us",
    subtitle: "AIMC 2027",
    body: `
      <p>
        If you have any questions or need further information about this edition of 
        the AI Music Creativity Conference, please feel free to reach out to us using the contact information below:
      </p>
      <p>
        <b>Conference Chair:</b> Dominic Thibault | Email: dominic.thibault@umontreal.ca
      </p>
      <p>
        For inquiries regarding the AI Music Creativity Association, please visit the main AIMC 
        website at <a href="https://aimusiccreativity.org">https://aimusiccreativity.org</a>.
      </p>
    `,
  },
};

function stripTrailingSlash(path) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

function getPageHref(path) {
  if (path === "/") {
    return basePath;
  }

  const baseRoute = stripTrailingSlash(basePath);

  return `${baseRoute === "/" ? "" : baseRoute}${path}`;
}

function getAssetPath(path) {
  return `${basePath}${path.replace(/^\/+/, "")}`;
}

function getRoutePath(pathname) {
  const baseRoute = stripTrailingSlash(basePath);

  if (baseRoute !== "/" && pathname.startsWith(baseRoute)) {
    return pathname.slice(baseRoute.length) || "/";
  }

  return pathname;
}

function getCurrentPage() {
  const routePath = getRoutePath(window.location.pathname);

  return pages.find((page) => page.path === routePath) ?? pages[0];
}

function renderPage() {
  const currentPage = getCurrentPage();
  const isHomePage = currentPage.path === "/";
  const pageContent = standardPageContent[currentPage.path];

  document.title = `${currentPage.title} | AIMC27`;
  app.innerHTML = `
    <header class="site-header">
      <a class="site-title" href="${getPageHref("/")}" aria-label="AIMC27 homepage">
        <img
          src="${getAssetPath("images/aimc_logo_white_short.svg")}"
          alt="AIMC"
          class="site-logo"
        >
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        ${pages
          .map(
            (page) => `
              <a
                href="${getPageHref(page.path)}"
                ${page.path === currentPage.path ? 'aria-current="page"' : ""}
              >
                ${page.title}
              </a>
            `,
          )
          .join("")}
      </nav>
    </header>
    <main class="page${isHomePage ? " page--home" : ""}${pageContent ? " page--standard" : ""}">
      ${
        isHomePage
          ? `
            <section class="home-subheader" aria-labelledby="home-title">
              <img
                src="${getAssetPath("images/TEMP_marc-olivier-jodoin_mtl.jpg")}"
                alt=""
                class="home-subheader-image"
              >
              <div class="home-subheader-content">
                <p class="eyebrow">The 8th Conference on AI Music Creativity</p>
                <h1 id="home-title">AIMC 2027</h1>
                <p class="lead">August 18 - 20 2027<br> Montreal, Quebec, Canada</p>
              </div>
            </section>
            <section class="home-body">
              <article class="home-body-column">
                <h2 class="body-copy-heading">AIMC 2027 : At the Limits of Immersion</h2>
                <p>
                  As AI-driven systems increasingly shape musical creation, questions emerge not
                  only about the possibilities, but also about the limits of immersion. Our proposed
                  theme, At the Limits of Immersion, invites reflection on the perceptual, cognitive,
                  technical, and material boundaries encountered as immersive systems grow in
                  scale and complexity, as well as on the ways society itself is becoming increasingly
                  immersed in AI-driven cultures and processes.
                </p>
                <p>
                  What are the computational limits of generative models? Where do real-time
                  systems fail or resist control? How do data constraints, model architectures, and
                  infrastructure shape what immersion can become? At the same time, how do
                  perceptual, cultural, and ecological limits redefine the limits of this immersive
                  experience?
                </p>
                <p>
                  Rather than framing limits as constraints, the conference proposes them as
                  generative sites where scientific inquiry, engineering practice, artistic creation, and
                  critical reflection must meet.<br>
                </p>
              </article>
              <article class="home-body-column">
                <h2 class="body-copy-heading">Important Dates</h2>
                <p>body 2</p>
              </article>
            </section>
          `
          : pageContent
            ? `
              <section class="page-content" aria-labelledby="page-title">
                <p class="eyebrow">AIMC 2027</p>
                <h1 id="page-title">${pageContent.title}</h1>
                <p class="lead">${pageContent.subtitle}</p>
                <div class="body-copy">
                  ${pageContent.body}
                </div>
              </section>
            `
          : `
            <p class="eyebrow">AIMC 2027</p>
            <h1>${currentPage.title}</h1>
            <p class="lead">future content</p>
          `
      }
    </main>
    <footer class="site-footer">
      <div class="footer-logos" aria-label="Partner institutions">
        <img src="${getAssetPath("images/udem-logo.png")}" alt="Universite de Montreal">
        <img src="${getAssetPath("images/mcgill-logo.png")}" alt="McGill University">
        <img src="${getAssetPath("images/CIRMMT-logo.svg")}" alt="CIRMMT">
      </div>
      <p>© 2026 AI Music Creativity (AIMC). All rights reserved.</p>
    </footer>
  `;
}

window.addEventListener("popstate", renderPage);
document.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (!link || link.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, "", link.href);
  renderPage();
});

renderPage();
document.documentElement.dataset.ready = "true";
