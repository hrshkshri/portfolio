import React from "react";
import Link from "next/link";
import { caseStudies } from "@/content/work";

const WorkIndex: React.FC = () => {
  return (
    <div className="w-full min-h-[100svh] px-6 md:px-16 pt-16 md:pt-24 pb-28 md:pb-16">
      <div className="max-w-4xl">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">
          Selected Work
        </p>
        <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none mt-3">
          Built.
        </h1>
        <p className="text-base text-neutral-300 max-w-md leading-relaxed mt-5">
          Things I&apos;ve shipped, and what was actually hard about them.
        </p>

        <div className="mt-14 border-t border-neutral-800">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-3 items-start py-7 border-b border-neutral-800"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
                  {study.title}
                  <span className="text-amber-400/80 text-base transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed mt-2 max-w-2xl">
                  {study.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-neutral-400 border border-neutral-800 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-neutral-400 md:text-right md:whitespace-nowrap">
                {study.org && (
                  <>
                    {study.org}
                    <br className="hidden md:inline" />
                    <span className="md:hidden"> · </span>
                  </>
                )}
                {study.period}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkIndex;
