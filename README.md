# hrshkshri.com

Personal site and portfolio for Harsh Keshari — full-stack engineer.

**Live:** [www.hrshkshri.com](https://www.hrshkshri.com)

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3**
- **next/font** for self-hosted Google Fonts (Work Sans, Rampart One)
- Deployed on **Vercel**

## Getting started

Requires Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
cp .env.example .env   # then fill in the values
pnpm dev               # http://localhost:3000
```

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config) |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm resume` | Compile `resume/resume.typ` → `public/resume.pdf` via [Typst](https://typst.app) |

## Environment

See `.env.example`. Only one variable is required for full functionality:

| Variable | Required | Purpose |
| --- | --- | --- |
| `GITHUB_TOKEN` | Recommended | Raises the GitHub API limit from 60/hr per IP (shared across all visitors) to 5,000/hr. Without it, `/github` degrades to cached or empty data under traffic. A fine-grained token with **no scopes** is enough — it only reads public data. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Overrides the canonical origin used for metadata, OG tags, sitemap and robots. Defaults to `https://www.hrshkshri.com`. |

## Structure

```
src/
  app/              App Router routes, metadata, sitemap.ts, robots.ts
    api/github/     Cached GitHub proxy (stale-on-error fallback)
  components/
    about/          About page sections
    calendar/       Scheduling page (cal.com embed)
    github/         GitHub activity page
    home/           Landing hero
    layout/         Sidebar + mobile tab bar
    shared/         Content constants, structured data, helpers
  lib/
    api/            Client-side fetchers (axios)
    server/         Server-only GitHub service
    site.ts         Canonical origin — single source of truth
resume/             Typst source for the résumé PDF
```

## Notes

- `/home` permanently redirects to `/`.
- The GitHub route caches for an hour and falls back to the last good payload if the API fails, so a rate-limit window degrades to slightly-stale data rather than an error page.
