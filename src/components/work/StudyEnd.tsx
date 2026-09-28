import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { caseStudies } from "@/content/work";

const EMAIL = "harshkeshari100@gmail.com";

/**
 * Closes a case study. Before this, a study terminated on its last section
 * heading: the most engaged visitor on the site — someone who had just read
 * ~1,200 words of architecture — was handed no ask and no second artifact,
 * with the only egress a "← About" link at the very top of the page.
 *
 * prev/next follow the `caseStudies` array order, which is what surfaces
 * learning-copilot (nothing else on the site links to it).
 */
const StudyEnd: React.FC<{ slug: string; title: string }> = ({ slug, title }) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const prev = i > 0 ? caseStudies[i - 1] : undefined;
  const next = i >= 0 && i < caseStudies.length - 1 ? caseStudies[i + 1] : undefined;

  // Prefilled so the reply lands identifiable instead of as "Hi".
  const subject = encodeURIComponent(`Re: the ${title} write-up`);

  return (
    <div className="mt-16 pt-8 border-t border-neutral-800">
      <p className="text-base text-neutral-300 leading-relaxed max-w-xl">
        This is the kind of system I build. If you&apos;re working on something
        similar, I&apos;d like to hear about it.
      </p>

      <div className="flex items-center gap-5 flex-wrap mt-5">
        <Link
          href="/calendar"
          className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-150"
        >
          Book 20 minutes
        </Link>
        <a
          href={`mailto:${EMAIL}?subject=${subject}`}
          className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-150"
        >
          {EMAIL}
        </a>
      </div>

      {(prev || next) && (
        <nav
          aria-label="Other case studies"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10"
        >
          {prev && (
            <Link
              href={`/work/${prev.slug}`}
              className="border border-neutral-800 rounded-xl p-4 hover:border-neutral-700 transition-colors duration-150"
            >
              <span className="text-[11px] tracking-[0.14em] uppercase text-neutral-500">
                Previous
              </span>
              <span className="block text-sm text-neutral-200 mt-1">
                {prev.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="border border-neutral-800 rounded-xl p-4 hover:border-neutral-700 transition-colors duration-150 sm:text-right sm:col-start-2"
            >
              <span className="text-[11px] tracking-[0.14em] uppercase text-neutral-500">
                Next
              </span>
              <span className="block text-sm text-neutral-200 mt-1">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}

      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-amber-400 mt-8"
      >
        All six case studies
        <MdArrowOutward className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default StudyEnd;
