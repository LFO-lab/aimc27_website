import { pages, getPage, getPageHref } from "./pages.js";
import { standardPageContent } from "./content.js";

function getAssetPath(path) {
  return `/${path}`;
}

const navigationItems = [
  pages[0],
  {
    title: "Calls",
    children: [pages[1], pages[2], pages.find((page) => page.path === "/ai-use-policy")],
  },
  {
    title: "Program",
    children: [pages[3], pages[4], pages[5]],
  },
  {
    title: "For Attendees",
    children: [pages[6], pages[7], pages[8], pages[9], pages[10]],
  },
  ...pages.slice(11).filter((page) => page.path !== "/ai-use-policy"),
];

export function renderPage(pathname) {
  const currentPage = getPage(pathname);
  const isHomePage = currentPage.path === "/";
  const pageContent = standardPageContent[currentPage.path];

  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <a class="site-title" href="${getPageHref("/")}" aria-label="AIMC27 homepage">
        <img
          src="${getAssetPath("images/aimc_logo_white_short.svg")}"
          alt="AIMC"
          class="site-logo"
        >
      </a>
      <nav class="site-nav" aria-label="Main navigation">
        ${navigationItems
          .map(
            (item) => item.children
              ? `
                <div class="nav-dropdown${item.children.some((page) => page.path === currentPage.path) ? " nav-dropdown--active" : ""}">
                  <button class="nav-dropdown-trigger" type="button" aria-haspopup="true">
                    ${item.title}
                    <span class="nav-dropdown-arrow" aria-hidden="true"></span>
                  </button>
                  <div class="nav-dropdown-menu">
                    ${item.children.map((page) => `
                      <a
                        href="${getPageHref(page.path)}"
                        ${page.path === currentPage.path ? 'aria-current="page"' : ""}
                      >
                        ${page.title}
                      </a>
                    `).join("")}
                  </div>
                </div>
              `
              : `
              <a
                href="${getPageHref(item.path)}"
                ${item.path === currentPage.path ? 'aria-current="page"' : ""}
              >
                ${item.title}
              </a>
            `,
          )
          .join("")}
      </nav>
    </header>
    <main id="main-content" tabindex="-1" class="page${isHomePage ? " page--home" : ""}${pageContent ? " page--standard" : ""}">
      ${
        isHomePage
          ? `
            <section class="home-subheader" aria-labelledby="home-title">
              <img
                src="${getAssetPath("images/MMR.jpeg")}"
                alt=""
                class="home-subheader-image"
              >
              <div class="home-subheader-content">
                <p class="eyebrow">The 8th Conference on AI Music Creativity</p>
                <h1 id="home-title">AIMC 2027</h1>
                <p class="hero-theme">At the Limits of Immersion</p>
                <div class="hero-details" aria-label="Conference details">
                  <span>August 18–20, 2027</span>
                  <span>Montréal, Québec, Canada</span>
                </div>
                <div class="hero-actions">
                  <a class="button button--primary" href="${getPageHref("/calls")}">Submit your work</a>
                  <a class="button button--secondary" href="${getPageHref("/venues-and-travel")}">Plan your visit</a>
                </div>
              </div>
            </section>
            <section class="home-body">
              <article class="theme-panel">
                <p class="section-kicker">2027 conference theme</p>
                <h2>At the Limits<br>of Immersion</h2>
                <div class="theme-copy">
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
                </div>
              </article>
              <article class="dates-panel" aria-labelledby="important-dates">
                <p class="section-kicker">Mark your calendar</p>
                <h2 id="important-dates">Important dates</h2>
                <ol class="date-list">
                  <li><time datetime="2026-11-09"><span>Nov</span> 09</time><p>Call opens<small>2026</small></p></li>
                  <li><time datetime="2027-02-21"><span>Feb</span> 21</time><p>Paper abstract deadline<small>2027</small></p></li>
                  <li><time datetime="2027-02-28"><span>Feb</span> 28</time><p>Full submission deadline<small>2027</small></p></li>
                  <li><time datetime="2027-05-03"><span>May</span> 03</time><p>Notifications of acceptance<small>2027</small></p></li>
                  <li><time datetime="2027-06-07"><span>Jun</span> 07</time><p>Camera-ready deadline<small>2027</small></p></li>
                  <li><time datetime="2027-07-02"><span>Jul</span> 02</time><p>Early-bird registration<small>2027</small></p></li>
                  <li><time datetime="2027-08-08"><span>Aug</span> 08</time><p>Regular registration<small>2027</small></p></li>
                  <li class="date-list-highlight"><time datetime="2027-08-18"><span>Aug</span> 18–20</time><p>AIMC 2027 conference<small>Montréal</small></p></li>
                </ol>
              </article>
            </section>
            <section class="pathways" aria-labelledby="pathways-title">
              <div class="pathways-heading">

                <h2 id="pathways-title">Find your way in:</h2>
              </div>
              <div class="pathway-grid">
                <a class="pathway-card pathway-card--yellow" href="${getPageHref("/calls")}">
                  <span class="pathway-number">01</span><h3>Submit</h3><p>Share research, artistic work, and new approaches to AI music creativity.</p><span class="pathway-link">View calls <span aria-hidden="true">→</span></span>
                </a>
                <a class="pathway-card pathway-card--blue" href="${getPageHref("/program")}">
                  <span class="pathway-number">02</span><h3>Attend</h3><p>Discover the program, workshops, keynotes, and registration information.</p><span class="pathway-link">Explore the program <span aria-hidden="true">→</span></span>
                </a>
                <a class="pathway-card pathway-card--navy" href="${getPageHref("/venues-and-travel")}">
                  <span class="pathway-number">03</span><h3>Montréal</h3><p>Plan your trip and explore two venues at the heart of a vibrant artistic city.</p><span class="pathway-link">Plan your visit <span aria-hidden="true">→</span></span>
                </a>
              </div>
            </section>
          `
          : pageContent
            ? `
              <header class="page-banner">
                <div class="page-banner-inner">
                  <p class="eyebrow">AIMC 2027 · Montréal</p>
                  <h1 id="page-title">${pageContent.title}</h1>
                  ${pageContent.subtitle ? `<p class="lead">${pageContent.subtitle}</p>` : ""}
                </div>
              </header>
              <section class="page-content" aria-labelledby="page-title">
                <div class="body-copy${currentPage.path === "/calls" ? " call-copy" : ""}">
                  ${pageContent.body}
                </div>
              </section>
            `
          : `
            <h1>${currentPage.title}</h1>
            <p class="lead">future content</p>
          `
      }
    </main>
    <footer class="site-footer">
      <div class="footer-heading">
        <p class="section-kicker">August 18–20, 2027 · Montréal</p>
        <p class="footer-title">AI Music Creativity</p>
      </div>
      <div class="footer-logos" aria-label="Partner institutions">
        <img src="${getAssetPath("images/udem-logo.png")}" alt="Universite de Montreal">
        <img src="${getAssetPath("images/mcgill-logo.png")}" alt="McGill University">
        <img src="${getAssetPath("images/CIRMMT-logo.svg")}" alt="CIRMMT">
      </div>
      <div class="footer-funder">
        <img src="${getAssetPath("images/sshrc-fip-full-color-eng.jpg")}" alt="Social Sciences and Humanities Research Council of Canada">
      </div>
      <p class="footer-copyright">© 2026 AI Music Creativity (AIMC). All rights reserved.</p>
    </footer>
  `;
}

