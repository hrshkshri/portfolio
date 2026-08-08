import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import type { CaseStudy, Flow } from "@/content/work";
import { renderTextWithBold } from "@/components/shared/utils";

const Diagram: React.FC<{ flow: Flow }> = ({ flow }) => (
  <figure className="my-7 border border-neutral-800/60 rounded-2xl bg-black/40 px-5 py-6">
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {flow.nodes.map((node, i) => (
        <React.Fragment key={node.label}>
          {i > 0 && (
            <span className="text-neutral-400 text-sm" aria-hidden="true">
              →
            </span>
          )}
          <span
            className={`text-xs rounded-lg border px-3 py-2 ${
              node.hl
                ? "border-amber-400/50 text-amber-400"
                : "border-neutral-800 text-neutral-300 bg-neutral-900/50"
            }`}
          >
            {node.label}
          </span>
        </React.Fragment>
      ))}
    </div>
    <figcaption className="text-xs text-neutral-400 text-center mt-4 leading-relaxed">
      {flow.caption}
    </figcaption>
  </figure>
);

const CaseStudyView: React.FC<{ study: CaseStudy }> = ({ study }) => {
  return (
    <div className="w-full min-h-[100svh] px-6 md:px-16 pt-10 md:pt-16 pb-28 md:pb-16">
      <div className="max-w-4xl">
        <Link
          href="/work"
          className="text-xs text-neutral-400 hover:text-amber-400 transition-colors duration-150"
        >
          ← Work
        </Link>

        <header className="mt-5">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
            {study.org ? `${study.org} · ${study.period}` : study.period}
          </p>
          <h1 className="font-Rampart text-5xl md:text-7xl text-white leading-none mt-3">
            {study.title}.
          </h1>
          <p className="text-base text-neutral-300 max-w-xl leading-relaxed mt-5">
            {study.summary}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 md:gap-14 mt-12 items-start">
          <article>
            {study.sections.map((section) => (
              <section key={section.heading} className="mb-9 last:mb-0">
                <h2 className="text-xs tracking-[0.16em] uppercase text-neutral-400 font-medium mb-3">
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-neutral-300 leading-[1.75] mb-3.5 last:mb-0"
                  >
                    {renderTextWithBold(para)}
                  </p>
                ))}
                {section.flow && <Diagram flow={section.flow} />}
              </section>
            ))}
          </article>

          <dl className="md:border-l border-t md:border-t-0 border-neutral-800 pt-6 md:pt-0 md:pl-5">
            {study.facts.map((fact) => (
              <div key={fact.label} className="mb-4 last:mb-0">
                <dt className="text-[11px] tracking-[0.14em] uppercase text-neutral-400">
                  {fact.label}
                </dt>
                <dd className="text-sm text-neutral-300 mt-1">{fact.value}</dd>
              </div>
            ))}
            {study.href && (
              <div className="mt-5 pt-4 border-t border-neutral-800">
                <a
                  href={study.href.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-150"
                >
                  {study.href.label}
                  <MdArrowOutward className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
