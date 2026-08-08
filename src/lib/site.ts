/**
 * Canonical origin for the site. Single source of truth for metadata,
 * OG tags, structured data, sitemap and robots.
 *
 * Was previously hardcoded as "https://hrshkshri.me" in six files — a domain
 * that no longer resolves, which broke every social preview and canonical URL.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.hrshkshri.com";
