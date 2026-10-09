import { pages } from "./pages.js";
import { cmtAcknowledgment } from "./acknowledgment.js";


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

const app = document.querySelector("#app");
const basePath = import.meta.env.BASE_URL;
const standardPageContent = {
  "/ai-use-policy": {
    title: "AI use policy",
    subtitle: "Peer Review and Responsible Use of AI",
    body: `
      <p>AIMC is committed to rigorous, constructive, and responsible peer review that recognizes the diversity of scientific, artistic, and practice-based approaches represented within the conference community.</p>
      <p>Research papers will undergo double-blind peer review. Music and workshop submissions will undergo single-blind peer review.</p>

      <h2 class="body-copy-subheading">AI Use and Disclosure</h2>
      <p>AIMC recognizes the central role of AI in the research and artistic practices represented at the conference. However, all contributors remain responsible for the originality, accuracy, integrity, and ethical implications of their submissions.</p>
      <p>Authors must disclose the use of generative AI tools in preparing submitted materials, including their use in generating or modifying text, code, images, audio, or other content. Disclosures should identify the tools used, their purpose, and the parts of the submission affected.</p>
      <p>Such disclosures must be included in an acknowledgement or dedicated statement within the submission.</p>
      <p>AI systems may not be listed as authors.</p>
      <p>When preparing scholarly submissions, AI assistance should be limited to supporting the presentation of the work, such as improving language or clarity. Authors must develop and take responsibility for the research ideas, analysis, and conclusions. This does not prevent research or artistic submissions from studying or creating with AI, provided its role is disclosed.</p>

      <h2 class="body-copy-subheading">AI Use in Peer Review</h2>
      <p><strong>The use of generative AI or large language models to evaluate, summarize, or write peer reviews of confidential submissions is prohibited.</strong> Reviewers must provide their own independent assessments and must not upload confidential submissions to external generative AI services.</p>

    `,
  },
  "/calls": {
    title: "Call for submissions",
    subtitle: "",
    body: `
      <p>Coming soon.</p>
    `,
  },
  "/reviewing-process": {
    title: "Reviewing process",
    subtitle: "",
    body: `
      <!-- TODO: Update this temporary AIMC 2026 reviewing-process text for AIMC 2027. -->
      <p>AIMC 2026’s program committee is assembled from experts in the AI music research community and listed on the AIMC 2026 website. Paper program committee members will be assigned 2-5 papers to review. Each paper should receive at least 3 reviews. Senior paper program committee members will be assigned additional meta-review duties. Music and Tutorial/Workshop committee members will be assigned 2-4 submissions to review, each submission should receive at least 2 reviews.</p>
      <p>Paper program committee members will be assigned 3-5 papers to review. Each paper should receive at least 3 reviews. Senior paper program committee members will be assigned additional meta-review duties.</p>
      <p>For each paper, reviewers will be asked to:</p>
      <ul>
        <li>Rate the paper on a scale from 1 ( strong reject) to 5 (strong accept).</li>
        <li>Rate the reviewer’s own confidence on a scale of 1 (low confidence) to 5 (high confidence).</li>
        <li>Indicate whether the submission would be better suited to a demo session for work in development.</li>
        <li>Provide a written review to the authors.</li>
        <li>Add any additional confidential comments to the paper chair.</li>
      </ul>
      <p>Reviews should show substantial engagement with the paper and provide constructive, respectful feedback. Reviews should begin with a short summary of the paper to confirm the reviewer’s understanding of the work. They should contain a clear rationale for the score given and a statement of any expectations of revisions needed for acceptance. Reviewers should take reasonable steps not to identify themselves and should avoid recommending their own work for citation.</p>
      <p>Reviews should consider the following:</p>
      <ul>
        <li>Relevance to AIMC community and grounding in relevant literature.</li>
        <li>The originality or novelty of the submission as a contribution to the conference.</li>
        <li>The artistic/scientific/theoretical quality of the submission.</li>
        <li>The readability and organisation of this paper.</li>
        <li>The appropriate use of methodology and reasonableness of claims.</li>
        <li>Ethical standards.</li>
        <li>Relationship of the submission to the conference theme.</li>
      </ul>
      <p>Reviewers should clearly call out unreasonable claims, potentially misleading use of evidence, or a weak methodology, such as the following:</p>
      <ul>
        <li>Papers that seek to show the benefits of a new algorithm, program, process etc. should do so via rich analysis of users’ experience, seeking to identify shortcomings as well as benefits, and avoiding ungrounded affirmations.</li>
        <li>Papers that seek to show benefits of applying AI music to areas such as health, wellbeing, disability support, community participation and inclusion, or the democratisation of creative practices, should show a depth of engagement with the problem space. For example, if a paper suggests benefits of AI music to people with disability, reviewers should rightly question whether such work has been well-grounded in an understanding of the needs of those communities.</li>
        <li>There is no formal expectation for quantitative user results or performer benchmarks, and AIMC welcomes practice-based and practice-led approaches to new knowledge. While more formal results will significantly improve a paper’s impact, and should be encouraged, authors and reviewers should equally scrutinise the claims made in relation to those results. Formal studies can both benefit and undermine, if done badly, a great piece of academic work.</li>
      </ul>
      <p>After reviewing, a light metareview process will follow. The purpose of metareviewing is to address contradictions between reviewers and align scoring standards. Metareviwers should review the reviews and ask reviewers to discuss any points of contradiction. They should then collate and summarise the key points, clearly stating any revisions needed, and provide a final rating (1-5, strong reject to strong accept). During discussion, reviewers should not update their original comments or scores unless they have made a clear error.</p>
      <p>The chair will make final decisions based on the meta review ratings. In discussion with senior PC members, they reserve the right to make final decisions on acceptance considering issues of equity, diversity and inclusion and the overall academic profile of the conference.</p>
      <p>The reviewing process for the Music submissions follows the same general principles as the paper reviewing process, but is more streamlined. Music submissions will be subject to single-blind peer review by at least two reviewers. There will be no meta-reviewing phase, and the final decisions will be taken jointly by the music chairs, depending on the quality of the proposed activities and limits imposed by the conference schedule. Contributors may be requested to slightly adapt their proposals to better fit the schedule and/or other organizational requirements.</p>
      <p>The reviewing process for the tutorial/workshop submissions follows the same general principles as the paper reviewing process, but is more streamlined. Tutorial/workshop submissions will be subject to single-blind peer review by at least two reviewers. There will be no meta-reviewing phase, and the final decisions will be taken jointly by the tutorial/workshop chairs, depending on the quality of the proposed activities and limits imposed by the conference schedule. Contributors may be requested to slightly adapt their proposals to better fit the schedule and/or other organizational requirements.</p>
      <h2>Acknowledgment</h2>
      <p>
        ${cmtAcknowledgment}
      </p>
    `,
  },
  "/program": {
    title: "Program",
    subtitle: "",
    body: `
      <p>Program details will be announced soon.</p>
    `,
  },
  "/tutorials-and-workshops": {
    title: "Tutorials and workshops",
    subtitle: "",
    body: `
      <p>Tutorials and workshops will be announced soon.</p>
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
    subtitle: "",
    body: `
      <p>Coming soon.</p>
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
        <i> * All fees are in Canadian Dollars ($CAD) and are subject to change. </i>
      </p>
    `,
  },
  "/venues-and-travel": {
    title: "Venues and travel",
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
    `,
  },
  "/accommodation": {
    title: "Accommodation",
    subtitle: "",
    body: `
      <p>Accomodation details coming soon.</p>
    `,
  },
  "/accessibility": {
    title: "Accessibility",
    subtitle: "",
    body: `
      <p>Accessibility statements coming soon.</p>
    `,
  },
  "/about": {
    title: "About AIMC",
    subtitle: "",
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
                  <b>Scientific Co-Chair: Bob L. Sturm </b>| KTH Royal Institute of Technology, Stockholm, Sweden
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
                <br>
                  <b>Scientific assistant: Uandha Fernandes Barbosa </b>| Concordia University, Montréal, Canada
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
    <h2 class="body-copy-heading">Contact information</h2>
    <p>
        If you have any questions or need further information about this edition of 
        the AI Music Creativity Conference, please feel free to reach out to us using the contact information below:
      </p> 
      <p>
        <b>Conference Chair:</b> <a href="mailto:chair@aimusiccreativity.org">chair@aimusiccreativity.org</a> 
      </p>
      <p>
        <b>Scientific Chairs:</b> <a href="mailto:paper@aimusiccreativity.org">paper@aimusiccreativity.org</a>
      </p>
      <p>
        <b>Artistic Chair:</b> <a href="mailto:music@aimusiccreativity.org">music@aimusiccreativity.org</a> 
      </p>
      <p>
        <b>Workshop Chair:</b> <a href="mailto:workshop@aimusiccreativity.org">workshop@aimusiccreativity.org</a> 
      </p>
      <p>
      <br>
        For inquiries regarding the AI Music Creativity Association, please visit the main AIMC 
        website at <a href="https://aimusiccreativity.org">https://aimusiccreativity.org</a>.
      </p>
      <p>
        Join the AIMC mailing list: <a href="https://groups.google.com/g/musicalmetacreation">AIMC Community Group</a>.
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
  const routePath = stripTrailingSlash(getRoutePath(window.location.pathname));

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
