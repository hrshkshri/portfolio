import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import type { CaseStudy, Flow } from "@/content/work";
import { renderTextWithBold } from "@/components/shared/utils";
import SystemDiagram from "./SystemDiagram";
import { FailureModeTable } from "./StudyBlocks";

/** The inline pipeline strip — a critical path, not a topology. */
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
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
              {study.period}
            </p>
            {study.org && (
              <span className="text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-neutral-700 text-neutral-300">
                {study.org}
              </span>
            )}
          </div>
          <h1 className="font-Rampart text-5xl md:text-7xl text-white leading-none mt-3">
            {study.title}.
          </h1>
          <p className="text-base text-neutral-300 max-w-xl leading-relaxed mt-5">
            {study.summary}
          </p>

          {/* A strip rather than a sidebar. Six short facts don't need a column
              of their own, and taking one cost the diagrams 256px on a page
              whose main content is 860px-wide diagrams. */}
          <dl className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-6 border-t border-neutral-800">
            {study.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[10px] tracking-[0.14em] uppercase text-neutral-500">
                  {fact.label}
                </dt>
                <dd className="text-[13px] text-neutral-300 mt-1">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          {study.href && (
            <a
              href={study.href.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-amber-400 mt-5"
            >
              {study.href.label}
              <MdArrowOutward className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </header>

        {/* min-w-0 still matters: a flex/grid ancestor would otherwise let the
            fixed-width diagram canvas push the page sideways. */}
        <article className="min-w-0 mt-12">
          {study.restricted && (
            <p className="text-xs text-neutral-400 leading-relaxed border-l-2 border-neutral-700 pl-4 mb-9">
              Employer work. The architecture here is described at the level of
              the pattern — no internal service names, schema, or infrastructure
              detail. What&apos;s public is what I can explain without
              publishing someone else&apos;s system.
            </p>
          )}

          {study.sections.map((section, si) => (
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
              {section.bullets && (
                <ul className="space-y-3 mt-1">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="text-amber-500/70 text-sm shrink-0 leading-[1.7]"
                        aria-hidden="true"
                      >
                        ◦
                      </span>
                      <p className="text-[15px] text-neutral-300 leading-[1.7]">
                        {renderTextWithBold(item)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              {section.systemDiagram && (
                <SystemDiagram
                  arch={section.systemDiagram}
                  id={`${study.slug}-${si}`}
                />
              )}
              {section.failureModes && (
                <FailureModeTable modes={section.failureModes} />
              )}
              {section.flow && <Diagram flow={section.flow} />}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default CaseStudyView;
