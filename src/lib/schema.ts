import { SITE_URL } from "@/lib/site";
import type { CaseStudy } from "@/content/work";

/**
 * JSON-LD builders. One module so the Person entity is described identically
 * everywhere it appears — it used to exist only on /about, as a literal.
 *
 * Honest about payoff: of everything here only BreadcrumbList is eligible for a
 * visible SERP feature. Person/WebSite/ProfilePage/CollectionPage are
 * correctness and entity disambiguation, not rich results. TechArticle can
 * surface in Google's article treatments but is not guaranteed anything.
 *
 * Deliberately NO WebSite.potentialAction/SearchAction: there is no site
 * search, and claiming one that does not exist is the kind of thing Google
 * ignores at best.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

export const JOB_TITLE = "Founding Engineer";

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Harsh Keshari",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: JOB_TITLE,
  worksFor: {
    "@type": "Organization",
    name: "Experiment Labs",
    url: "https://www.linkedin.com/company/experiment-labs",
  },
  description:
    "Founding engineer at Experiment Labs. I build web apps, AI systems and the platforms underneath them.",
  sameAs: [
    "https://github.com/hrshkshri",
    "https://www.linkedin.com/in/hrshkshri/",
    "https://twitter.com/hrshkshri",
  ],
  email: "mailto:harshkeshari100@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Distributed Systems",
    "Retrieval-Augmented Generation",
    "Open Source",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: "Harsh Keshari",
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

/** Homepage: the entity home for both the person and the site. */
export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};

/** /about — a page *about* the person, with the Person as its main entity. */
export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: "About Harsh Keshari",
      isPartOf: { "@id": SITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
    personSchema,
  ],
};

function crumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

/**
 * A plain depth-1 page (/github, /calendar). WebPage + breadcrumbs only —
 * there is no richer type that would be honest about what these are.
 */
export const pageSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}#page`,
      url: `${SITE_URL}${path}`,
      name,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": PERSON_ID },
    },
    crumbs([
      { name: "Home", path: "/" },
      { name, path },
    ]),
  ],
});

/** /work — a collection page listing every study, in render order. */
export const workIndexSchema = (studies: CaseStudy[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/work#page`,
      url: `${SITE_URL}/work`,
      name: "Work",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: studies.length,
        itemListElement: studies.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/work/${s.slug}`,
          name: s.title,
        })),
      },
    },
    crumbs([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" },
    ]),
  ],
});

/**
 * A case study. TechArticle rather than BlogPosting: these are technical
 * write-ups of systems, not dated posts, and TechArticle is the closer type.
 * `dateModified` is only emitted when the content actually carries a date —
 * inventing one is worse than omitting it.
 */
export const caseStudySchema = (study: CaseStudy) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${SITE_URL}/work/${study.slug}#article`,
      url: `${SITE_URL}/work/${study.slug}`,
      headline: study.title,
      description: study.summary,
      inLanguage: "en",
      isPartOf: { "@id": SITE_ID },
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      keywords: study.tags.join(", "),
      ...(study.updated ? { dateModified: study.updated } : {}),
      ...(study.org ? { about: { "@type": "Organization", name: study.org } } : {}),
    },
    personSchema,
    crumbs([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" },
      { name: study.title, path: `/work/${study.slug}` },
    ]),
  ],
});
