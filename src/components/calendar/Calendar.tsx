"use client";

import React from "react";
import { FiMail } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

const Calendar: React.FC = () => {
  return (
    <div className="w-full min-h-[100svh] relative overflow-hidden flex flex-col bg-black">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Calendar embed — takes whatever height the copy below doesn't need.
          Previously pinned at a hardcoded bottom-[340px], which left a dead
          black band on mobile where cal.com's short content ran out. */}
      <div className="relative flex-1 min-h-[300px] md:min-h-[420px] overflow-hidden">
        {/* absolute, not height="100%": a percentage height cannot resolve
            against a flex-1 parent with no definite height (it collapses to
            the 150px iframe default). */}
        <iframe
          src="https://cal.com/hrshkshri?embed=true&theme=dark"
          allow="camera; microphone; autoplay; display-capture; clipboard-write"
          className="absolute inset-0 w-full h-full"
          style={{ border: "none", opacity: 0.85 }}
        />
        {/* Fade bottom of iframe into the page */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* Bottom content — mirrors home page */}
      <div className="relative z-10 w-full px-6 md:px-16 pt-6 pb-28 md:pb-12 grid grid-cols-1 md:grid-cols-2 items-end gap-6 md:gap-8">

        {/* Left */}
        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Get in touch
            </p>
            <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
              Meet.
            </h1>
          </div>

          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            Pick a time that works for you — or reach out directly at{" "}
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="text-neutral-200 hover:text-amber-400 transition-colors"
            >
              harshkeshari100@gmail.com
            </a>
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="mailto:harshkeshari100@gmail.com"
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="/about"
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              My Work →
            </a>
          </div>
        </div>

        {/* Right: contact links */}
        <div className="flex flex-col gap-8 items-start text-left md:items-end md:text-right">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">Contact</p>
            <div className="flex items-center gap-4">
              {[
                { href: "mailto:harshkeshari100@gmail.com", icon: FiMail, label: "Email" },
                { href: "https://github.com/hrshkshri", icon: AiFillGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/hrshkshri", icon: BsLinkedin, label: "LinkedIn" },
                { href: "https://twitter.com/hrshkshri", icon: BsTwitterX, label: "X (Twitter)" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  // Icon-only link: without this, screen readers announce "link"
                  // with no indication of where it goes.
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-200 rounded"
                >
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calendar;
