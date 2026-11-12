import { getPage, getPageHref, siteUrl } from "./pages.js";

const descriptions = {
  "/": "AIMC 2027, the 8th Conference on AI Music Creativity: At the Limits of Immersion. August 18–20, 2027, in Montréal, Québec, Canada.",
  "/calls": "Submit research papers, music and sound art, workshops, and tutorials to AIMC 2027. Abstracts due February 21, 2027; full submissions due February 28, 2027.",
  "/reviewing-process": "Learn about AIMC 2027 peer review, reviewer responsibilities, evaluation, and decision making for papers, music, and workshops.",
  "/program": "Conference program information for AIMC 2027, August 18–20, 2027, in Montréal, Canada.",
  "/tutorials-and-workshops": "Tutorial and workshop program information for the 8th Conference on AI Music Creativity, AIMC 2027.",
  "/keynotes": "Keynote information for AIMC 2027, the 8th Conference on AI Music Creativity in Montréal.",
  "/submission-info": "Submission information for contributions to AIMC 2027, the 8th Conference on AI Music Creativity.",
  "/registration": "Registration categories, fees, and deadlines for attending AIMC 2027 in Montréal, Canada.",
  "/venues-and-travel": "Plan your visit to AIMC 2027: Montréal transit, travel information, and venues at Université de Montréal and CIRMMT at McGill University.",
  "/accommodation": "Accommodation information for visitors attending AIMC 2027 in Montréal, Québec, Canada.",
  "/accessibility": "Accessibility information for AIMC 2027, the 8th Conference on AI Music Creativity in Montréal.",
  "/about": "Learn about the AI Music Creativity conference community and the organizing and steering committees for AIMC 2027.",
  "/contact": "Contact the AIMC 2027 conference, scientific, artistic, and workshop chairs and join the AI Music Creativity community mailing list.",
  "/ai-use-policy": "AIMC 2027 policy on responsible AI use, disclosure in submissions, and the prohibition of AI tools in peer review.",
};

export const conferenceEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${siteUrl}/#conference`,
  name: "AIMC 2027 — The 8th Conference on AI Music Creativity",
  description: descriptions["/"],
  startDate: "2027-08-18",
  endDate: "2027-08-20",
  url: `${siteUrl}/`,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: [
    {
      "@type": "Place",
      name: "Université de Montréal — Faculty of Music",
      address: {
        "@type": "PostalAddress",
        streetAddress: "200 Av. Vincent-D'Indy",
        addressLocality: "Outremont",
        addressRegion: "QC",
        postalCode: "H2V 2T2",
        addressCountry: "CA",
      },
    },
    {
      "@type": "Place",
      name: "CIRMMT — McGill University",
      address: {
        "@type": "PostalAddress",
        streetAddress: "527 Rue Sherbrooke O #8",
        addressLocality: "Montréal",
        addressRegion: "QC",
        postalCode: "H3A 1E3",
        addressCountry: "CA",
      },
    },
  ],
};

export function getMetadata(pathname) {
  const page = getPage(pathname);
  if (!page) throw new Error(`Unknown page: ${pathname}`);
  return {
    title: page.path === "/" ? "AIMC 2027 | AI Music Creativity Conference" : `${page.title} | AIMC 2027`,
    description: descriptions[page.path],
    canonical: `${siteUrl}${getPageHref(page.path)}`,
    event: ["/", "/calls"].includes(page.path) ? conferenceEvent : null,
  };
}

export function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// The same head fragment is used during the build and client-side navigation.
export function renderMetadata(pathname) {
  const { title, description, canonical, event } = getMetadata(pathname);
  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="AIMC 2027">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    ${event ? `<script type="application/ld+json">${JSON.stringify(event).replaceAll("<", "\\u003c")}</script>` : ""}
  `;
}
