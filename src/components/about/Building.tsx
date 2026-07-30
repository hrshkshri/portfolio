import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface ProductLink {
  href: string;
  label: string;
}

interface Product {
  name: string;
  description: string;
  tags: string[];
  links: ProductLink[];
}

const products: Product[] = [
  {
    name: "Crelyzor",
    description:
      "All-in-one productivity SaaS for solo professionals — replaces HiHello (cards) + Cal.com (scheduling) + Otter.ai (meeting AI) + Todoist (tasks). Live with billing, AI meeting intelligence, and scheduling.",
    tags: ["PERN Stack", "TypeScript", "LLM · Gemini", "Deepgram STT", "AI Summarization", "Ask AI (SSE)", "Recall.ai", "Bull · Redis", "Docker"],
    links: [{ href: "https://crelyzor.hrshkshri.com", label: "crelyzor.hrshkshri.com" }],
  },
  {
    name: "Claukit",
    description:
      "Your Claude companion — a browser extension + CLI that surfaces token usage, cache reads, and rate limits in real time, with usage bars for the 5-hour and 7-day limits.",
    tags: ["TypeScript", "Browser Extension", "Node.js CLI"],
    links: [
      { href: "https://www.npmjs.com/package/claukit", label: "npmjs.com/package/claukit" },
      { href: "https://www.youtube.com/watch?v=opDPxKR_zfE", label: "Demo" },
    ],
  },
];

const Building: React.FC = () => {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-bold">Projects</h1>
      <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mt-5 mb-4">
        Live in Production
      </p>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/40"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <h2 className="text-xl font-semibold text-white">{product.name}</h2>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                {product.description}
              </p>
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-4">
              {product.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Building;
