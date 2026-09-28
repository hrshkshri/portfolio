import type { Metadata } from "next";

/**
 * Next merges metadata *shallowly*: a page that declares its own `openGraph`
 * replaces the root one wholesale, rather than merging into it. Every page here
 * declared `openGraph` to set a title/description, which silently dropped the
 * root's `images` — so no page emitted og:image, and twitter:card fell back
 * from "summary_large_image" to "summary".
 *
 * This builder re-attaches the shared bits so that can't happen again.
 */
const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Harsh Keshari — Founding Engineer",
  type: "image/jpeg",
};

const HANDLE = "@hrshkshri";
const AUTHOR = "Harsh Keshari";

/**
 * A case study is an article, not a profile. The type used to be hardcoded to
 * "profile" for every route, which was false on seven of eleven and — because
 * Next keys the openGraph union on it — made `article:published_time`,
 * `modified_time`, `author` and `section` unreachable.
 */
type OgType = "profile" | "article" | "website";

interface ArticleFacts {
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  socialDescription,
  type = "profile",
  image = true,
  article,
}: {
  title?: string;
  description: string;
  path: string;
  socialTitle: string;
  socialDescription?: string;
  type?: OgType;
  /**
   * `false` omits og:image/twitter:image entirely so Next's file convention
   * (opengraph-image.tsx) supplies them instead. An explicit `images` here
   * wins over the generated file, so a route with its own card MUST opt out
   * or the generated image is built and then silently ignored.
   */
  image?: boolean;
  article?: ArticleFacts;
}): Metadata {
  const ogDescription = socialDescription ?? description;

  const shared = {
    locale: "en_US",
    siteName: "Harsh Keshari Portfolio",
    title: socialTitle,
    description: ogDescription,
    url: path,
    ...(image ? { images: [OG_IMAGE] } : {}),
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          ...shared,
          type: "article",
          authors: [AUTHOR],
          ...(article?.publishedTime ? { publishedTime: article.publishedTime } : {}),
          ...(article?.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
          ...(article?.section ? { section: article.section } : {}),
          ...(article?.tags ? { tags: article.tags } : {}),
        }
      : type === "website"
        ? { ...shared, type: "website" }
        : {
            ...shared,
            type: "profile",
            firstName: "Harsh",
            lastName: "Keshari",
            username: "hrshkshri",
          };

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      site: HANDLE,
      creator: HANDLE,
      title: socialTitle,
      description: ogDescription,
      ...(image ? { images: [OG_IMAGE.url] } : {}),
    },
  };
}
