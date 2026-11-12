import { cmtAcknowledgment } from "./acknowledgment.js";

export const standardPageContent = {
  "/ai-use-policy": {
    title: "AI use policy",
    subtitle: "Peer Review and Responsible Use of AI",
    body: `
      <p>AIMC is committed to rigorous, constructive, and responsible peer review that recognizes the diversity of scientific, artistic, and practice-based approaches represented within the conference community.</p>
      <p>Research papers will undergo double-blind peer review. Music and workshop submissions will undergo single-blind peer review.</p>

      <h2 class="body-copy-heading">AI Use and Disclosure</h2>
      <p>AIMC recognizes the central role of AI in the research and artistic practices represented at the conference. However, all contributors remain responsible for the originality, accuracy, integrity, and ethical implications of their submissions.</p>
      <p>Authors must disclose the use of generative AI tools in preparing submitted materials, including their use in generating or modifying text, code, images, audio, or other content. Disclosures should identify the tools used, their purpose, and the parts of the submission affected.</p>
      <p>Such disclosures must be included in an acknowledgement or dedicated statement within the submission.</p>
      <p>AI systems may not be listed as authors.</p>
      <p>When preparing scholarly submissions, AI assistance should be limited to supporting the presentation of the work, such as improving language or clarity. Authors must develop and take responsibility for the research ideas, analysis, and conclusions. This does not prevent research or artistic submissions from studying or creating with AI, provided its role is disclosed.</p>

      <h2 class="body-copy-heading">AI Use in the Review Process</h2>
      <p>The use of AI tools for the purpose of reviewing submissions is strictly prohibited.</p>
      <ul>
        <li>The use of online AI or LLM-based tools poses a risk to confidentiality, as submitted manuscripts contain unpublished and sensitive material.</li>
        <li>Peer reviews must reflect the independent, critical, and expert judgment of the assigned reviewers.</li>
        <li>AI systems do not possess the domain expertise, accountability, or scholarly responsibility required for scientific peer review.</li>
      </ul>
      <p>Violation of this policy may result in sanctions, including removal from the reviewer pool.</p>

    `,
  },
  "/calls": {
    title: "Call for Contributions",
    subtitle: "The 8th Conference on AI Music Creativity",
    body: `
      <div class="call-highlights">
      <article class="call-deadline">
      <h2 class="body-copy-subheading"><time datetime="2027-02-21">February 21st, 2027</time>: </h2>
        <p>Abstract submission deadline for papers, music, and workshops.</p>
      </article>
      <article class="call-deadline">
      <h2 class="body-copy-subheading"><time datetime="2027-02-28">February 28th, 2027</time>: </h2>
        <p>Full submission deadline for papers, music, and workshops.</p>
      </article>
      <aside class="call-review-notice">
      <h2 class="body-copy-subheading">*** New Reviewing Process in 2027 ***</h2>
        <p>Please take the time to examine the <a href="#reviewer-participation"><i>Reviewer Participation</i></a> section, as authors of submissions are required to participate in the reviewing process.</p>
      </aside>
      </div>
      <details class="call-section">
      <summary><h2>2027 Conference Theme: <br>At the Limits of Immersion</h2></summary>
      <div class="call-section-content">
      <p>Immersion in music is often associated with fully enveloping audiovisual environments, virtual reality, and sensory technologies designed to simulate or intensify embodied experience. 
        AI is transforming these familiar forms of immersion, introducing new possibilities for generating responsive environments and adapting musical and sensory experiences in real time. 
        At the same time, immersion can also be understood as a condition of living within a social, technological, creative, ecological, and material environment increasingly shaped by AI. 
        As AI technologies continue to mature through cycles of adoption and normalization, musical creators are increasingly immersed in the infrastructures through which these systems operate. 
        Even for those who do not engage directly with AI technologies, these systems may increasingly shape aspects of the broader environments in which music is imagined, produced, performed, and experienced.
      </p>
      <p>For this edition of AIMC, we especially welcome contributions that address the subject of immersion on sensorial, creative, and conceptual levels. 
        What are the most important and unique affordances that emerging technologies offer to immersive experience in art and music? 
        What does it mean to create, perform, and listen to music in a world increasingly mediated by AI? 
        And how might musical practices engage with, challenge, or make perceptible the technological arrangements and broader consequences of this immersion?
      </p>
      <p>The theme also invites critical reflection on the social, cultural, political, ethical and ecological dimensions of AI-mediated musical experience. 
        As computational systems become increasingly pervasive, how do they reshape authorship, artistic identity, listening practices, cultural diversity, and the relationships between musicians and their audiences? 
        What possibilities emerge from immersive technological environments, and what perspectives, forms of participation, or creative alternatives might they exclude?
      </p>
      <p>AIMC 2027 welcomes contributions that explore, extend, question, or challenge the limits of immersion, 
        whether through scientific inquiry, artistic experimentation, technological development, or critical reflection.
      </p>
      <p><b>Submissions addressing the conference theme are particularly encouraged, but contributions on any topic relevant to AI and musical creativity are welcome.</b></p>
      </p>
      <details class="call-subsection">
      <summary><h3>Topics of interest : </h3></summary>
      <div class="call-section-content">
      <p>Indicative topics include, but are not limited to:</p>
      <ul>
        <li><b>AI and Musical Creativity:</b> Computational creativity, generative music systems, human–AI co-creation, autonomous creative agents, and collaborative composition.</li>
        <li><b>Immersive and Spatial Audio:</b> Spatial sound, immersive audio environments, AI-assisted spatialization, adaptive soundscapes, and interactive sonic installations.</li>
        <li><b>Musical Performance and Embodiment: </b>Intelligent instruments, gesture-based interaction, musical robotics, live coding, improvisation, embodied cognition, and human–machine performance.</li>
        <li><b>Generative Systems and Sound Technologies: </b>Machine learning for music generation, synthesis, transformation, audio production, sound design, and controllable generative systems.</li>
        <li><b>Musical Interaction and Interfaces: </b>Human-computer interaction, creative interfaces, multimodal systems, interactive installations, and new paradigms for musical engagement.</li>
        <li><b>Machine Listening and Musical Understanding: </b>Music information retrieval, computational analysis, auditory perception, machine listening, and AI-assisted musicology.</li>
        <li><b>Perception, Presence, and Experience: </b>Musical immersion, attention, agency, listening practices, aesthetic evaluation, and the perception of AI-generated or AI-mediated music.</li>
        <li><b>Artistic Research and Experimental Practice: </b>Practice-based and practice-led research, experimental music, sound art, audiovisual works, interdisciplinary performance, and critical artistic approaches to AI.</li>
        <li><b>Cultural, Social, and Ethical Perspectives:</b> Authorship, ownership, dataset provenance, consent, bias, cultural representation, accessibility, environmental sustainability, musical labour, and the political economy of AI.</li>
        <li><b>Education, Communities, and Musical Futures:</b> AI in music education, participatory creation, collaborative systems, community engagement, cultural heritage, and emerging forms of musical practice.</li>
      </ul>
      <p>We especially welcome contributions that bridge disciplinary boundaries, combine research with artistic practice, 
        or question established assumptions about artificial intelligence and musical creativity.
      </p>
      </div></details>
      </div></details>
      <section class="call-categories">
      <h2 class="body-copy-heading">Submission categories</h2>
      <p>AIMC 2027 invites contributions in three categories: 
        <br><b>(1) Research papers, (2) Music and Sound Art, and (3) Workshops.</b>
      </p> 
      <p>All submissions will undergo peer review appropriate to their category. 
        Accepted contributions will be presented during the conference, and their associated papers will be included in the conference's open-access proceedings, 
        subject to final publication requirements.
      </p>

      <details class="call-subsection">
      <summary><h3>1. Research papers</h3></summary>
      <div class="call-section-content">
      <p>We invite original research contributions addressing theoretical, empirical, computational, artistic, historical, and critical perspectives on AI and musical creativity.</p>
      <p>Submissions may present new systems, methods, experiments, analytical frameworks, artistic research, or critical perspectives. 
        Contributions should demonstrate a clearly articulated research question, appropriate methodology, and a meaningful contribution to knowledge or practice.</p>
      <p>We welcome research that combines technical development with artistic exploration, as well as contributions from the humanities and social sciences 
        that critically examine the relationships between music, creativity, and artificial intelligence.</p>
      <p>Papers addressing the conference theme might investigate immersive AI-driven performance systems, embodied musical interaction, generative environments, 
        distributed creative agency, or the cultural implications of increasing computational mediation. However, papers need not directly address immersion to be considered.</p>
      <h4 class="call-detail-heading">Submission requirements:</h4>
      <ul>
        <li><b>Length:</b> 6 pages, excluding the abstract, figure captions, acknowledgements, ethics statement, references, and appendices.</li>
        <li><b>Abstract:</b> Short text clearly identifying the paper's principal contribution.</li>
        <li><b>Format:</b> Submissions must use the official AIMC templates, available in LaTeX and Word.</li>
        <li><b>Originality:</b> Submitted work must be original and not previously published or simultaneously under review elsewhere. If duplication is discovered the submission will be rejected.</li>
        <li><b>Anonymity:</b> Papers must be anonymized for double-blind peer review. Authors should take reasonable steps to remove identifying information from the manuscript and supplementary materials.</li>
        <li><b>Supplementary materials:</b> Authors are encouraged to include audio, video, images, software, datasets, code repositories, and other material that supports their contribution. These should be accessible to reviewers through appropriate links with anonymity preserved.</li>
      </ul>
      <p><i><b>Ethics:</b> Authors are encouraged to include, when necessary, an ethics statement addressing relevant issues such as research involving human participants, 
        dataset provenance, consent, and potential social or environmental impacts.</i></p>
      <h4 class="call-detail-heading">Review and presentation:</h4>
        <p>Research papers will be evaluated on relevance, originality, research quality, methodological appropriateness, significance, clarity, and ethical considerations. 
        The use of large language models (LLMs) in preparing manuscripts must comply with the <a href="https://2027.aimusiccreativity.org/ai-use-policy/" target="_blank" rel="noopener noreferrer">AIMC AI Use Policy</a>. 
        Failure to disclose such use will result in rejection.      </p>
      <p>Accepted papers will be included in the AIMC 2027 proceedings and presented at the conference through oral or poster presentations, 
        as determined by the Scientific Program Committee.      </p>
      <p>Authors presenting new musical tools, instruments, interactive systems, or creative software may be invited to provide a hands-on demonstration. </p>

      </div></details>
      <details class="call-subsection">
      <summary><h3>2. Music and Sound Art</h3></summary>
      <div class="call-section-content">
      <p>AIMC 2027 invites submissions of original musical works, performances, sound art, and interdisciplinary artistic projects that engage with artificial intelligence 
        and musical creativity. We welcome a broad diversity of artistic aesthetics, approaches, and technologies, ranging from experimental electronic music and 
        algorithmic composition to instrumental performance, improvisation, live coding, audiovisual works, and interactive environments.</p>
      <p>Works may use AI directly as part of their creative or performative processes, critically engage with AI technologies, or explore the aesthetic and 
        conceptual implications of artificial intelligence without necessarily relying on machine learning as a production tool.</p>
      <p>In relation to the theme <b>At the Limits of Immersion</b>, we particularly encourage works exploring spatial sound, embodied interaction, intelligent instruments, 
        human–AI improvisation, adaptive environments, and the relationships between performers, audiences, and computational systems.      </p>
      <p>The conference concerts will take place at the <a href="https://www.cirmmt.org/en/facilities" target="_blank" rel="noopener noreferrer">Multimedia Room</a> 
        of Centre for Interdisciplinary Research in Music Media and Technology (CIRMMT) at McGill University. 
        Its performance facilities provide opportunities for exploring multichannel and immersive sound practices. 
        However, submissions are not required to use immersive or spatial audio technologies.</p>
      <p>Submissions may include, but are not limited to:
      <ul>
        <li>AI-assisted composition and performance.</li>
        <li>Human–AI improvisation and co-creative musical systems.</li>
        <li>Live coding, algorave, and live electronic music.</li>
        <li>Electroacoustic, acousmatic, and experimental music.</li>
        <li>Spatial and immersive audio compositions.</li>
        <li>Intelligent instruments, musical robotics, and interactive performance.</li>
        <li>Generative audiovisual works and interdisciplinary performances.</li>
        <li>Sonification and data-driven musical practices.</li>
        <li>Artistic works critically examining AI, authorship, creativity, and technological mediation.</li>
      </ul>
      <h4 class="call-detail-heading">Submission requirements:</h4>
      <p>Musical works must be submitted through Microsoft CMT and include the following materials:</p>
      <h5 class="call-material-heading">A. Documentation of the work</h5>
      <p>A recording of the proposed work, submitted as an audio or video file (MP3 or MP4), or a link to an accessible online recording or demonstration. 
      </p>
      <p>For works involving interactive systems, improvisation, or performance-specific technologies, 
        documentation should adequately convey the artistic concept and the proposed performance.
      </p>
      <h5 class="call-material-heading">B. Companion paper</h5>
      <p>An 800–1,000-word paper, excluding the title, abstract, and references, prepared using the official AIMC template.</p>
      <p>The paper must include:</p>
      </p>
      <ul>
        <li>Title of the work.</li>
        <li>Abstract of no more than 150 words.</li>
        <li>Description of the artistic concept and its relationship to AI and musical creativity.</li>
        <li>Contextualization within relevant artistic or research practices.</li>
        <li>Description of the creative methods, technologies, and processes involved.</li>
        <li>Where relevant, a discussion of the work's relationship to the conference theme.</li>
      </ul>
      <p>Accepted companion papers will be published in the AIMC 2027 proceedings.</p>
      <h5 class="call-material-heading">C. Technical rider</h5>
      <p>A seperate document detailing:</p>
      <ul>
        <li>Names, affiliations, and short biographies of contributors (maximum 150 words per person).</li>
        <li>Proposed performance duration.</li>
        <li>Instrumentation and number of performers.</li>
        <li>Technical equipment provided by the artists.</li>
        <li>Technical equipment requested from the organizers.</li>
        <li>Audio, video, spatialization, and computer requirements.</li>
        <li>Stage layout, setup time, and any special performance requirements.</li>
        <li>Accessibility requirements.</li>
        <li>Links to additional documentation, scores, or technical specifications, where relevant.</li>
      </ul>
      <p>The technical rider does not require a specific template and will be used for programming and organizational purposes.</p>
      <h4 class="call-detail-heading">Review and programming:</h4>
      <p>Music submissions will undergo single-blind peer review, considering artistic quality, originality, relevance, the integration or critical exploration of AI, and technical feasibility.</p>
      <p>To accommodate a varied artistic program, submissions of <b>less than 15 minutes</b> are encouraged. Longer proposals may be considered when artistically justified and compatible with the program.</p>
      <p>The Music Program Committee may request adjustments to duration, technical setup, or performance format and may group selected works into concerts that encourage thematic or aesthetic coherence.</p>
      <p>Artists are generally expected to perform their own works or provide the required performers and specialized equipment. Specific technical arrangements will be confirmed with accepted contributors.</p>


      </div></details>
      <details class="call-subsection">
      <summary><h3>3. Workshops and Tutorials</h3></summary>
      <div class="call-section-content">
      <p>AIMC 2027 invites proposals for workshops and tutorials that encourage active participation, collaborative exploration, and the exchange of knowledge and practices related to AI and musical creativity.</p>
      <p>In connection with <b>At the Limits of Immersion</b>, possible approaches include hands-on experimentation with immersive sound environments, embodied and gestural interfaces, generative musical systems, human–AI improvisation, and collaborative creative processes.</p>
      <p>As well as these more technically-oriented workshops, we are also very interested in experimental, participatory, and exploratory formats that expand what a workshop can be across artistic, theoretical, critical, and interdisciplinary contexts. As such, proposals need not focus on software demonstrations or technical training; they may also engage participants in collective creation, critical discussion, experimental performances that are not necessarily served by a concert-hall setting, listening practices, or active/participatory exploration of research questions through experimental pedagogy.</p>
      <h4 class="call-detail-heading">Format:</h4>
      <p>Workshops and tutorials should emphasize active engagement: possible formats include hands-on tutorials, collaborative creation sessions, participatory demonstrations, collective listening activities, and experimental performance-workshops.</p>
      <p>Proposals may request durations ranging from short sessions of approximately one hour to more extensive half-day activities. A range of spaces, from smaller individual rooms to larger collaborative work areas, will be available to accommodate different workshop formats and technical requirements. Authors of Research Paper submissions may also develop a Workshop that complement their proposal.</p>
      <p>The final duration and scheduling of accepted workshops will be determined in consultation with the Workshop Chair, taking into account the proposed activity, available facilities, and overall conference program.</p>
      <h4 class="call-detail-heading">Submission requirements:</h4>
      <p>Proposals must be submitted through Microsoft CMT and include the following:</p>
      <h5 class="call-material-heading">A. Workshop or tutorial paper</h5>
      <p>An 800–1,000-word paper, excluding the title, abstract, and references, prepared using the official AIMC template.    </p>
      <p>The paper should include:</p>
      <ul>
        <li>Title of the workshop or tutorial.</li>
        <li>Abstract of no more than 150 words.</li>
        <li>Objectives, scope, and relevance to AI and musical creativity.</li>
        <li>Background and contextualization within relevant research or artistic practices.</li>
        <li>Description of the proposed activities and methods.</li>
        <li>Description of the participatory or hands-on nature of the session.</li>
        <li>Expected learning outcomes, experiences, or creative results.</li>
        <li>Intended audience and any prerequisite knowledge, skills, or software.</li>
        <li>Preferred duration and maximum number of participants.</li>
      </ul>
      <p>Accepted workshop papers will be published in the AIMC 2027 proceedings.</p>
      <h5 class="call-material-heading">B. Technical rider</h5>
      <p>A seperate document detailing:</p>
      <ul>
        <li>Names, affiliations, and short biographies of workshop leaders (maximum 150 words per person).</li>
        <li>Technical equipment <b>provided by facilitators</b>: List any technical equipment, materials, printouts, or tools that workshop facilitators will bring themselves.</li>
        <li>Ideal room configuration, including tables and chairs, whiteboards vs projector vs television, and access to sound systems as stereo or multichannel.</li>
        <li>Additional technical equipment <b>provided by the organizers</b>: Specify additional requests for audio/video equipment, cable types and estimated lengths, microphones, mic stands, and any other accessories. Please note that the number of available audio interfaces (sound cards) is limited.</li>
        <li>Equipment, software, or materials <b>required from participants</b>.</li>
        <li>Proposed duration and anticipated number of participants.</li>
        <li><b>Optional: Accessibility requirements</b>. Indicate any accessibility accommodations or arrangements you need to facilitate your workshop.</li>
        <li>Links to relevant demonstrations, GitHub repos, project websites, examples, or supporting materials, where applicable.</li>
      </ul>
      <p>Software and hardware required for the proposed activities should be sufficiently developed and tested to support the workshop.</p>
       <h4 class="call-detail-heading">Review and programming:</h4>
      <p>Workshop and tutorial proposals will undergo single-blind peer review and will be evaluated based on relevance, originality, quality of the proposed activities, potential for meaningful participant engagement, and technical feasibility.</p>
      <p>Organizers may request modifications to the format, duration, or technical requirements of accepted workshops to accommodate the conference schedule and available facilities.</p>



      </div></details>
      </section>
      <details class="call-section" id="reviewer-participation">
      <summary><h2>Reviewer participation</h2></summary>
      <div class="call-section-content">
      <p>To support a fair and sustainable review process, AIMC 2027 will introduce a shared reviewing responsibility for submitting authors.</p>
      <p><b>Authors submitting research papers will be asked to contribute to the peer-review process, 
        or nominate a qualified co-author or representative willing to do so. Failure to do so will result in a withdrawal of the submitted paper.</b></p>
      <p>The exact eligibility requirements, reviewing obligations, and exceptions for early-career researchers or independent contributors 
        will be communicated before the deadline for this call.</p>

      </div></details>
      <section class="call-dates" aria-labelledby="important-dates">
      <h2 class="body-copy-heading" id="important-dates">Important dates & info</h2>
      <ul>
        <li><b><time datetime="2026-11-09">November 9, 2026</time>:</b> Call for Contributions opens.</li>
        <li><b><time datetime="2027-02-21">February 21st, 2027</time>:</b> Abstract submission deadline for papers, music, and workshops.</li>
        <li><b><time datetime="2027-02-28">February 28th, 2027</time>:</b> Full submission deadline for papers, music, and workshops.</li>
        <li><b><time datetime="2027-05-03">May 3rd, 2027</time>:</b> Notification of acceptance.</li>
        <li><b><time datetime="2027-06-07">June 7th, 2027</time>:</b> Camera-ready deadline.</li>
        <li><b><time datetime="2027-08-18">August 18th</time> to <time datetime="2027-08-20">20th, 2027</time>:</b> Conference dates.</li>
      </ul>
      <p>All submission deadlines will follow the <a href="https://time.is/Anywhere_on_Earth" target="_blank" rel="noopener noreferrer">Anywhere on Earth (AoE) convention</a>.</p> 
      <p>At least one author or contributor of each accepted submission will be required to register for the conference and present the accepted work in its assigned format.      </p>
      </section>
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
      <h2 class="body-copy-subheading">Acknowledgment</h2>
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
        The <a href="https://www.stm.info/en/info/fares/transit-fares/yul-aeroport-centre-ville-747" target="_blank" rel="noopener noreferrer">747 YUL Aéroport / Centre-Ville express bus</a>, which 
        operates 24-7 with departures every 10-15 minutes, takes approximately 45 to 70 minutes and serves several stops in downtown Montréal before arriving at the Berri-UQAM 
        metro station. Several fares allow you to board the 747, including the YUL Aéroport fare, a 24-hour pass,
        or any pass of longer duration (such as the <a href="https://www.stm.info/en/info/fares/transit-fares/3-day-all-modes" target="_blank" rel="noopener noreferrer">Zone A 3-day All Modes pass</a>).  
    </p>
    <p>
        For a faster journey downtown, taxis are available outside of the arrivals terminal at all times. Trips between the airport and downtown Montréal are charged a fixed rate
        of $49.45 (taxes included) and typically take 20 to 30 minutes. Ride-sharing services are also available at the airport, with fares varying according to demand and travel time.
    </p>
    <b>Public transportation</b> 
    <p>
        Montréal's public transportation system is one of the most efficient ways to travel throughout the city. Operated primarily by the 
        <a href="https://www.stm.info/en" target="_blank" rel="noopener noreferrer">Société de transport de Montréal</a> (STM), the network includes four metro lines and an extensive bus system. 
        The city's <a href="https://rem.info/en" target="_blank" rel="noopener noreferrer">Réseau Express Métropolitain</a> (REM), an automated light-rail system, is integrated with the STM fare 
        system and provides a quick one-stop connection between McGill University (McGill station, downtown Montréal) and Université de Montréal (Édouard-Montpetit station).
        Most visitors attending AIMC 2027 will only need to travel within Zone A, which covers the Island of Montréal. 
    </p>
    <p> 
        Transit fares can be purchased at fare vending machines located in all metro and REM stations, as well as in certain convenience stores and pharmacies. 
        For conference attendees, the <a href="https://www.stm.info/en/info/fares/transit-fares/3-day-all-modes" target="_blank" rel="noopener noreferrer">Zone A 3-day All Modes pass</a> offers good value.
        At $21.75, it provides unlimited travel for three consecutive days
        on STM buses, the metro, the REM (within Zone A). 
    </p>
    <b>BIXI Bike Sharing</b> 
    <p>
        <a href="https://bixi.com/en/one-way-passes/" target="_blank" rel="noopener noreferrer"><i>BIXI</i></a> is Montréal's public bike-sharing system, offering thousands of bicycles 
        (standard and electric) at numerous stations across the city. It provides a flexible way to travel during the summer months, with stations located 
        near both conference venues and throughout downtown.  
    </p>
    <figure class="transit-map">
      <img
        src="/images/stm_map-interactive.png"
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
        <a href="https://musicalmetacreation.org/" target="_blank" rel="noopener noreferrer">Musical Metacreation</a> (MuMe)
        and the
        <a href="https://aimusiccreativity.org/about/" target="_blank" rel="noopener noreferrer">Computer Simulation of Music Creativity</a>
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
        <a href="https://aimusiccreativity.org" target="_blank" rel="noopener noreferrer">https://aimusiccreativity.org</a>
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
        website at <a href="https://aimusiccreativity.org" target="_blank" rel="noopener noreferrer">https://aimusiccreativity.org</a>.
      </p>
      <p>
        Join the AIMC mailing list: <a href="https://groups.google.com/g/musicalmetacreation" target="_blank" rel="noopener noreferrer">AIMC Community Group</a>.
      </p>
    `,
  },
};

