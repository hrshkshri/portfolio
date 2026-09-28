import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { caseStudies } from "@/content/work";

/**
 * Generated at build time, so `lastModified` can't go stale the way the old
 * hand-written public/sitemap.xml did (it was frozen at 2025-10 and still
 * listed both "/" and the "/home" redirect).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/github`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/calendar`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
