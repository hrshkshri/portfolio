"use client";

import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsCalendar3, BsFileEarmarkText } from "react-icons/bs";

// `onMobile` marks the links the bottom tab bar doesn't already cover.
const LINKS = [
  { label: "View My Work", href: "/about", onMobile: false },
  { label: "GitHub", href: "/github", icon: AiFillGithub, onMobile: true },
  { label: "Get In Touch", href: "/calendar", icon: BsCalendar3, onMobile: false },
  { label: "Resume", href: "/resume.pdf", icon: BsFileEarmarkText, onMobile: true },
];

const Greeting: React.FC = () => {
  // Exactly one viewport on every breakpoint — the mobile tab bar floats over the
  // hero, so the copy below just pads itself clear of it rather than shrinking it.
  return (
    <div className="w-full min-h-[100svh] relative overflow-hidden flex flex-col justify-end">

      {/* Full bleed photo — anchored high on mobile so the face clears the copy */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Local, not the 665 KB PNG on a third-party Supabase bucket that was
            being requested at 8000x8000. This is the LCP element. */}
        <Image
          src="/hero-harsh.webp"
          alt="Harsh Keshari"
          width={731}
          height={1280}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="h-full w-full object-cover object-[50%_12%] md:w-auto md:object-contain md:object-center"
          priority
          fetchPriority="high"
        />
      </div>

      {/* Scrim — vertical for the bottom bar, horizontal to protect the left column */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />

      {/* Bottom bar */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-28 md:pb-12 grid grid-cols-1 md:grid-cols-2 items-end gap-8">

        {/* Left: main content */}
        <div className="space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Harsh Keshari
            </p>
            <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
              I Build.
            </h1>
          </div>

          <p className="text-base text-neutral-300 max-w-md leading-relaxed">
            Software developer at Experiment Labs. I build web apps — the
            backends and the interfaces that sit on top of them.
          </p>

          <ul className="text-sm text-neutral-400 max-w-md leading-relaxed space-y-1.5">
            <li className="flex gap-2">
              <span className="text-amber-400/70 select-none">›</span>
              <span>
                <a
                  href="https://crelyzor.hrshkshri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-400 transition-colors duration-150"
                >
                  Crelyzor
                </a>{" "}
                — AI-native workspace for contacts, meetings, and tasks.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400/70 select-none">›</span>
              <span>
                <a
                  href="https://www.npmjs.com/package/claukit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-400 transition-colors duration-150"
                >
                  Claukit
                </a>{" "}
                — real-time usage companion for Claude.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400/70 select-none">›</span>
              <span>
                <a
                  href="https://fitted.hrshkshri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-amber-400 transition-colors duration-150"
                >
                  Fitted
                </a>{" "}
                — your wardrobe, digitized: build outfits, plan the week.
              </span>
            </li>
          </ul>

          {/* Mobile only — desktop uses the right column. */}
          <div className="flex md:hidden items-center gap-5">
            {LINKS.filter((l) => l.onMobile).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-100 transition-colors duration-150"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: links. Hidden on mobile — the tab bar covers it. */}
        <div className="hidden md:flex flex-col gap-8 items-end text-right">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Links
            </p>
            <div className="space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-end gap-2 text-base text-neutral-400 hover:text-neutral-100 transition-colors duration-150"
                >
                  {link.label}
                  {link.icon && <link.icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Greeting;
