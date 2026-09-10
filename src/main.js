const pages = [
  { title: "Home", path: "/" },
  { title: "Call for submissions", path: "/calls" },
  { title: "Reviewing process", path: "/reviewing-process" },
  { title: "Program", path: "/program" },
  { title: "Tutorials and workshops", path: "/tutorials-and-workshops" },
  { title: "Keynotes", path: "/keynotes" },
  { title: "Submission info", path: "/submission-info" },
  { title: "Registration", path: "/registration" },
  { title: "Venue and travel", path: "/venue-and-travel" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const navigationItems = [
  pages[0],
  {
    title: "Calls",
    children: [pages[1], pages[2]],
  },
  {
    title: "Program",
    children: [pages[3], pages[4], pages[5]],
  },
  {
    title: "For Attendees",
    children: [pages[6], pages[7], pages[8]],
  },
  ...pages.slice(9),
];

const app = document.querySelector("#app");
const basePath = import.meta.env.BASE_URL;
const standardPageContent = {
  "/calls": {
    title: "Call for submissions",
    subtitle: "AIMC 2027",
    body: `
      <p>Coming soon.</p>
    `,
  },
  "/reviewing-process": {
    title: "Reviewing process",
    subtitle: "AIMC 2027",
    body: `
      <p>Coming soon.</p>
    `,
  },
  "/program": {
    title: "Program",
    subtitle: "AIMC 2027",
    body: `
      <p>Coming soon.</p>
    `,
  },
  "/tutorials-and-workshops": {
    title: "Tutorials and workshops",
    subtitle: "AIMC 2027",
    body: `
      <p>Coming soon.</p>
    `,
  },
  "/keynotes": {
    title: "Keynotes",
    subtitle: "",
    body: `
      <p>Keynote details will be announced soon.</p>
    `,
  },
  "/submission-info": {
    title: "Submission info",
    subtitle: "AIMC 2027",
    body: `
      <p>future content</p>
    `,
  },
  "/registration": {
    title: "Registration",
    subtitle: "",
    body: `
      <p>
        Registration fees include access to all conference sessions, artistic programming, and
        daily coffee breaks, lunches and banquet dinner. 
      </p>
      <table class="registration-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Early-bird registration</th>
            <th>Regular registration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Regular (academic/professional)</td>
            <td>$ 450</td>
            <td>$ 600</td>
          </tr>
          <tr>
            <td>Student</td>
            <td>$ 175</td>
            <td>$ 250</td>
          </tr>
          <tr>
            <td>Independant artist</td>
            <td>$ 175</td>
            <td>$ 250</td>
          </tr>
        </tbody>
      </table>
      <br>
      <p>
        <i> * All fees are in Canadian Dollars ($CAD). </i>
      </p>
    `,
  },
  "/venue-and-travel": {
    title: "Venue and travel",
    subtitle: "AIMC 2027 will take place in Montreal, Quebec",
    body: `
    <h2 class="body-copy-heading">General information</h2> 
    <p>
        Montréal is located in Québec, a province of Canada where French
        is the dominant language of public life. Although most residents are
        bilingual and can communicate in English when needed, public
        signage and official displays are primarily in French. This cultural
        specificity contributes to Montréal's unique identity as a vibrant and
        multicultural city in which artistic and cultural activities are deeply
        embedded in everyday life.
      </p>
    <h2 class="body-copy-heading">Travel information</h2>
    <b>Getting around Montréal</b> 
    <p>
        Montréal offers a safe, efficient and accessible public transit network, making it convenient to travel between conference venues, accomodations, 
        and the city's many attractions. Both conference venues are located in pedestrian-friendly neighbourhoods, within walking distance to hotels, 
        restaurants and cultural attractions. Additionally, taxi and ride-sharing services are widely available in the city. 
    </p>
    <b>Montréal-Trudeau International Airport</b> 
    <p>
        Montréal-Trudeau International Airport (YUL) is located 20km from downtown Montréal. Travelling to and from the airport is possible by public transportation or taxi.
        The <a href="https://www.stm.info/en/info/fares/transit-fares/yul-aeroport-centre-ville-747">747 YUL Aéroport / Centre-Ville express bus</a>, which 
        operates 24-7 with departures every 10-15 minutes, takes approximately 45 to 70 minutes and serves several stops in downtown Montréal before arriving at the Berri-UQAM 
        metro station. Several fares allow you to board the 747, including the YUL Aéroport fare, a 24-hour pass,
        or any pass of longer duration (such as the <a href="https://www.stm.info/en/info/fares/transit-fares/3-day-all-modes">Zone A 3-day All Modes pass</a>).  
    </p>
    <p>
        For a faster journey downtown, taxis are available outside of the arrivals terminal at all times. Trips between the airport and downtown Montréal are charged a fixed rate
        of $49.45 (taxes included) and typically take 20 to 30 minutes. Ride-sharing services are also available at the airport, with fares varying according to demand and travel time.
    </p>
    <b>Public transportation</b> 
    <p>
        Montréal's public transportation system is one of the most efficient ways to travel throughout the city. Operated primarily by the 
        <a href="https://www.stm.info/en">Société de transport de Montréal</a> (STM), the network includes four metro lines and an extensive bus system. 
        The city's <a href="https://rem.info/en">Réseau Express Métropolitain</a> (REM), an automated light-rail system, is integrated with the STM fare 
        system and provides a quick one-stop connection between McGill University (McGill station, downtown Montréal) and Université de Montréal (Édouard-Montpetit station).
        Most visitors attending AIMC 2027 will only need to travel within Zone A, which covers the Island of Montréal. 
    </p>
    <p> 
        Transit fares can be purchased at fare vending machines located in all metro and REM stations, as well as in certain convenience stores and pharmacies. 
        For conference attendees, the <a href="https://www.stm.info/en/info/fares/transit-fares/3-day-all-modes">Zone A 3-day All Modes pass</a> offers good value.
        At $21.75, it provides unlimited travel for three consecutive days
        on STM buses, the metro, the REM (within Zone A). 
    </p>
    <b>BIXI Bike Sharing</b> 
    <p>
        <a href="https://bixi.com/en/one-way-passes/"><i>BIXI</i></a> is Montréal's public bike-sharing system, offering thousands of bicycles 
        (standard and electric) at numerous stations across the city. It provides a flexible way to travel during the summer months, with stations located 
        near both conference venues and throughout downtown.  
    </p>
    <figure class="transit-map">
      <img
        src="${getAssetPath("images/stm_map-interactive.png")}"
        alt="Map of Montréal's metro and rapid transit network"
        loading="lazy"
      >
      <figcaption>Map of Montréal's transit network</figcaption>
    </figure>
    <h2 class="body-copy-heading">Venues</h2>
    <div class="travel-routes">
      <article class="travel-route">
        <div class="route-map">
          <iframe
            title="Walking route from Édouard-Montpetit metro station to the Université de Montréal Faculty of Music"
            src="https://www.google.com/maps?output=embed&amp;saddr=%C3%89douard-Montpetit%2C+Montr%C3%A9al%2C+QC+H3T+1J3&amp;daddr=University+of+Montreal+-+Faculty+of+Music%2C+200+Vincent+D%27Indy+Ave%2C+Outremont%2C+QC+H2V+2T2&amp;dirflg=w"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
        <div class="travel-route-copy">
          <h3>Université de Montréal - Faculty of Music</h3>
          <p>200 Av. Vincent-D'Indy, Outremont, QC H2V 2T2, Canada</p>
          <p>From Édouard-Montpetit metro station, the Faculty of Music at Université de Montréal is a short walk away.</p>
          <p>Please note that the Faculty of Music is located on a hill and requires a 200-metre uphill walk. If you require accessibility accomodations to reach the venue,
              please contact the organizing team in advance. </p>
          <p class="route-map-link">
            <a href="https://maps.app.goo.gl/aysBeSUWobtRJ2d19" target="_blank" rel="noopener noreferrer">
              Open the walking route in Google Maps
            </a>
          </p>
        </div>
      </article>
      <article class="travel-route">
        <div class="route-map">
          <iframe
            title="Walking route from McGill metro station to CIRMMT"
            src="https://www.google.com/maps?output=embed&amp;saddr=McGill%2C+Montr%C3%A9al%2C+QC+H3A+1T9&amp;daddr=CIRMMT%2C+527+Rue+Sherbrooke+O+%238%2C+Montr%C3%A9al%2C+QC+H3A+1E3&amp;dirflg=w"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
        <div class="travel-route-copy">
          <h3>CIRMMT - McGill University</h3>
          <p>527 Rue Sherbrooke O #8, Montréal, QC H3A 1E3, Canada</p>
          <p>From McGill metro station, CIRMMT is a short walk away.</p>
          <p class="route-map-link">
            <a href="https://maps.app.goo.gl/m33eRmUB6WX68Rfq8" target="_blank" rel="noopener noreferrer">
              Open the walking route in Google Maps
            </a>
          </p>
        </div>
      </article>
    </div>
    <h2 class="body-copy-heading">Accomodation</h2> 
    <p>
        Montréal
    </p>
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
      <h2 class="body-copy-heading">Organizing Committee</h2>
                <p>
                  <b>Conference Chair: Dominic Thibault </b>| Université de Montréal, Montréal, Canada
                <br>
                  <b>Scientific Co-Chair: Gabriel Vigliensoni </b>| Concordia University, Montréal, Canada
                <br>                
                  <b>Artistic Chair: Eliot Britton </b>| McGill University, Montréal, Canada
                <br>
                  <b>Workshop Chair: Erin Gee </b>| Université de Montréal, Montréal, Canada
                <br>
                  <b>Local organization: Andrea Gozzi </b>| Université de Sherbrooke, Sherbrooke, Canada
                <br>
                  <b>Local organization: Caroline Traube </b>| Université de Montréal, Montréal, Canada
                <br>
                  <b>Coordination assistant: Samuel Gendron </b>| Université de Montréal, Montréal, Canada
                </p>
                
      <h2 class="body-copy-heading">Steering Committee</h2>
                <p>
                  <b>Philippe Pasquier</b> | Simon Fraser University, School of Interactive Arts and Technology, Canada
                  <br><b>Robin Laney</b> | The Open University, UK
                  <br><b>Roisin Loughran</b> | Dundalk Institute of Technology, Ireland
                  <br><b>Steven Jan</b> | University of Huddersfield, UK
                  <br><b>Valerio Velardo</b> | MusiMAP
                  <br><b>Bob L. T. Sturm</b> | Royal Institute of Technology (KTH), Sweden
                  <br><b>Artemi-Maria Gioti</b> | University of Music Carl Maria von Weber Dresden, Germany
                  <br><b>Thor Magnusson</b> | Future Music in the Music Department at the University of Sussex, UK and at the University of Iceland
                  <br><b>Chris Kiefer</b> | Music Technology Department School of Media, Arts and Humanities at the University of Sussex, UK
                  <br><b>Oded Ben-Tal</b> | Department of Performing Arts, Kingston University London, UK
                  <br><b>David De Roure</b> | Department of Enginnering Science, University of Oxford, UK
                  <br><b>Oliver Bown</b> | School of Art and Design, University of New South Wales (UNSW), Australia
                  <br><b>Geraint A. Wiggins</b> | Artificial Intelligence Lab, Vrije Universiteit Brussel (VUB), Belgium
                  <br><b>Filippo Carnovalini</b> | Artificial Intelligence Lab, Vrije Universiteit Brussel (VUB), Belgium 
                </p>
                <br>
    `,
  },
  "/contact": {
    title: "Contact Us",
    subtitle: "",
    body: `
      <p>
        If you have any questions or need further information about this edition of 
        the AI Music Creativity Conference, please feel free to reach out to us using the contact information below:
      </p> 
      <p>
        <b> chair@aimusiccreativity.org </b> 
      </p>
      <p>
        <b> paper@aimusiccreativity.org </b> 
      </p>
      <p>
        <b> music@aimusiccreativity.org </b> 
      </p>
      <p>
        <b> workshop@aimusiccreativity.org </b> 
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
    <main id="main-content" class="page${isHomePage ? " page--home" : ""}${pageContent ? " page--standard" : ""}">
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
                <p class="hero-theme">At the Limits of Immersion</p>
                <div class="hero-details" aria-label="Conference details">
                  <span>August 18–20, 2027</span>
                  <span>Montréal, Québec, Canada</span>
                </div>
                <div class="hero-actions">
                  <a class="button button--primary" href="${getPageHref("/calls")}">Submit your work</a>
                  <a class="button button--secondary" href="${getPageHref("/venue-and-travel")}">Plan your visit</a>
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
              <article class="dates-panel">
                <p class="section-kicker">Mark your calendar</p>
                <h2>Important dates</h2>
                <ol class="date-list">
                  <li><time datetime="2026-11-09"><span>Nov</span> 09</time><p>Call opens<small>2026</small></p></li>
                  <li><time datetime="2027-03-01"><span>Mar</span> 01</time><p>Paper abstract deadline<small>2027</small></p></li>
                  <li><time datetime="2027-03-08"><span>Mar</span> 08</time><p>Full submission deadline<small>2027</small></p></li>
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
                <a class="pathway-card pathway-card--navy" href="${getPageHref("/venue-and-travel")}">
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
                <div class="body-copy">
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
      <p class="footer-copyright">© 2026 AI Music Creativity (AIMC). All rights reserved.</p>
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
