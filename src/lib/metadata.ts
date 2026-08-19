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
  alt: "Harsh Keshari — Software Developer",
  type: "image/jpeg",
};

export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  socialDescription,
}: {
  title?: string;
  description: string;
  path: string;
  socialTitle: string;
  socialDescription?: string;
}): Metadata {
  const ogDescription = socialDescription ?? description;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      locale: "en_US",
      siteName: "Harsh Keshari Portfolio",
      title: socialTitle,
      description: ogDescription,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@hrshkshri",
      title: socialTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
  };
}
