import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

interface ProductLink {
  href: string;
  label: string;
}

interface TeamCredit {
  name: string;
  href: string;
}

/**
 * Drives the status dot. This replaces a hardcoded "Live in Production"
 * heading over an unconditional pulsing amber dot — the heading kept claiming
 * uptime for products whose hosts had gone down, and it stated the obvious
 * besides. The dot carries it now; no card announces that it is shipped.
 */
type ProductStatus = "live" | "beta" | "offline";

const STATUS_DOT: Record<ProductStatus, string> = {
  live: "bg-amber-400 animate-pulse",
  beta: "bg-sky-400",
  offline: "bg-neutral-600",
};

interface Product {
  name: string;
  status: ProductStatus;
  badge?: string;
  /** Shown when the project wasn't solo — credits the collaborator. */
  team?: TeamCredit;
  description: string;
  tags: string[];
  links: ProductLink[];
  /** Slug in src/content/work.ts. Adds a link through to the case study. */
  caseStudy?: string;
}

const products: Product[] = [
  {
    name: "Crelyzor",
    status: "live",
    caseStudy: "crelyzor",
    description:
      "All-in-one productivity SaaS for solo professionals — replaces HiHello (cards) + Cal.com (scheduling) + Otter.ai (meeting AI) + Todoist (tasks). Live with billing, AI meeting intelligence, and scheduling.",
    tags: ["PERN Stack", "TypeScript", "LLM · Gemini", "Deepgram STT", "AI Summarization", "Ask AI (SSE)", "Recall.ai", "Bull · Redis", "Docker"],
    links: [
      { href: "https://crelyzor.hrshkshri.com", label: "crelyzor.hrshkshri.com" },
      { href: "https://youtu.be/lQWSQ-r3zXQ", label: "Demo" },
    ],
  },
  {
    name: "Claukit",
    status: "live",
    caseStudy: "claukit",
    description:
      "Your Claude companion — a browser extension + CLI that surfaces token usage, cache reads, and rate limits in real time, with usage bars for the 5-hour and 7-day limits.",
    tags: ["TypeScript", "Browser Extension", "Node.js CLI"],
    links: [
      { href: "https://www.npmjs.com/package/claukit", label: "npmjs.com/package/claukit" },
      { href: "https://www.youtube.com/watch?v=opDPxKR_zfE", label: "Demo" },
    ],
  },
  {
    name: "Fitted",
    status: "live",
    caseStudy: "fitted",
    badge: "Android Beta",
    team: { name: "Ashwath Kannan", href: "https://github.com/Ash-2k3" },
    description:
      "Your wardrobe, digitized — snap a photo of a garment, get an auto-cut-out flat lay, swipe tops and bottoms into outfits, and plan them on a calendar. Expo app on Android, FastAPI backend on Cloud Run, photos in private storage behind presigned URLs.",
    tags: ["Expo · React Native", "FastAPI · Python", "Postgres · SQLAlchemy", "rembg · U²-Net", "GCP Cloud Run", "Cloud SQL · GCS"],
    links: [{ href: "https://fitted.hrshkshri.com", label: "fitted.hrshkshri.com" }],
  },
];

const Building: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold">Projects</h2>

      <div className="space-y-4 mt-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/40"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`w-2 h-2 rounded-full ${STATUS_DOT[product.status]}`}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                {product.badge && (
                  <span className="text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border border-amber-400/40 text-amber-400/90">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                {product.description}
              </p>
              {product.team && (
                <p className="text-xs text-neutral-500">
                  Built with{" "}
                  <a
                    href={product.team.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 underline decoration-neutral-700 underline-offset-2 hover:text-amber-400 hover:decoration-amber-400/50 transition-colors"
                  >
                    {product.team.name}
                  </a>
                  .
                </p>
              )}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-4">
              {product.caseStudy && (
                <Link
                  href={`/work/${product.caseStudy}`}
                  // Three cards each saying "Read the case study" is ambiguous
                  // read aloud, so the accessible name carries the project.
                  aria-label={`Read the ${product.name} case study`}
                  // No hover state by choice — these are click targets, and the
                  // amber-400/amber-300 shift was near-invisible anyway. Keyboard
                  // focus is still covered by the :focus-visible ring in globals.
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400"
                >
                  Read the case study
                  <MdArrowOutward className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
              {product.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-400"
                >
                  {link.label}
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The flat index. Not in the sidebar — About and Work would compete for
          the same intent — so this is the entry point from here. It is also the
          only surface that reaches the two studies which exist solely as
          drill-down targets inside the platform diagram. */}
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-amber-400 transition-colors duration-150 mt-5"
      >
        All six case studies
        <MdArrowOutward className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default Building;
