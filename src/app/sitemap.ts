import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { caseStudies } from "@/content/work";

/**
 * Generated at build time, so it can't go stale the way the old hand-written
 * public/sitemap.xml did (frozen at 2025-10, and it still listed both "/" and
 * the "/home" redirect).
 *
 * No changefreq and no priority: Google ignores both, and emitting them only
 * invites the belief that they are doing something.
 *
 * lastModified is emitted ONLY for a study that carries a real `updated` date.
 * It used to be `new Date()` for every URL, which meant a study untouched for
 * months claimed it changed on this deploy — a freshness signal that is wrong
 * every time is worse than no signal at all.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/work", "/about", "/github", "/calendar"];

  return [
    ...staticRoutes.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      ...(study.updated ? { lastModified: new Date(study.updated) } : {}),
    })),
  ];
}
