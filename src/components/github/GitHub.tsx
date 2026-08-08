import React from "react";
import { githubServerService } from "@/lib/server";
import ErrorState from "./ErrorState";
import { FiExternalLink } from "react-icons/fi";
import { openSourceContributions } from "@/components/shared/constant";
import { renderTextWithBold } from "@/components/shared/utils";
import { MdArrowOutward } from "react-icons/md";

/**
 * Third-party activity graph. custom_title overrides the service default
 * ("<Full Name>'s Contribution Graph"), which reads oddly in first person here.
 */
const activityGraphUrl = (username: string) =>
  `https://github-readme-activity-graph.vercel.app/graph?username=${username}&custom_title=${encodeURIComponent(
    "My contribution graph",
  )}&theme=github-dark&hide_border=true&bg_color=000000&color=39d353&line=39d353&point=ffffff`;

/**
 * Server Component. This used to be a client component fetching in useEffect,
 * which meant: blank -> "Loading..." -> content, over two network hops
 * (browser -> /api/github -> GitHub). Now the data is fetched on the server in
 * one hop and the HTML arrives populated, so there is no loading flash and
 * crawlers see real content. Streaming fallback lives in app/github/loading.tsx.
 */
const GitHub = async () => {
  let user, repos;
  try {
    ({
      data: { user, repos },
    } = await githubServerService.getAllData());
  } catch {
    // getAllData already logs; it only throws when there is no cached payload.
    return <ErrorState />;
  }

  if (!user) return <ErrorState />;

  return (
    <div className="w-full min-h-[100svh] relative overflow-hidden flex flex-col justify-end bg-black">

      {/* Background: faded contribution graph. Desktop only — on a phone it lands
          directly behind the repo list and just muddies the text. */}
      <div className="absolute inset-0 opacity-[0.07] hidden md:flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Plain <img>, not next/image: this is a third-party generated graph.
            Routing it through the optimizer would mean re-opening
            images.remotePatterns to a remote host for a purely decorative,
            desktop-only element. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activityGraphUrl(user.login)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full scale-125"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 pb-28 md:pb-12 space-y-10">

        {/* Contribution graph */}
        <div className="border border-neutral-800/60 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
          <div className="px-5 pt-4 pb-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 shrink-0">Activity</p>
            <p className="text-xs text-neutral-400">last 12 months</p>
          </div>
          {/* Same rationale as the watermark above. width/height reserve the
              aspect ratio so the card doesn't shift when the graph loads. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activityGraphUrl(user.login)}
            alt={`GitHub contribution graph for @${user.login} over the last 12 months`}
            width={1000}
            height={350}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom two-column — mirrors home page layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-8">

          {/* Left */}
          <div className="space-y-5">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
                @{user.login}
              </p>
              <h1 className="font-Rampart text-6xl md:text-8xl text-white leading-none">
                Code.
              </h1>
            </div>

            {/* Stats as editorial numbers */}
            {/* grid + divide-x rather than flex with literal divider elements:
                when the flex row wrapped, a divider was left orphaned at the
                end of the first line. */}
            {/* Every value here comes from the API. A hardcoded "1,850 commits"
                used to sit alongside these and would silently go stale. */}
            <div className="grid grid-cols-3 divide-x divide-neutral-800 max-w-md">
              {[
                { value: user.public_repos, label: "repos" },
                { value: user.followers, label: "followers" },
                { value: user.following, label: "following" },
              ].map((stat, i) => (
                <div key={stat.label} className={i === 0 ? "pr-4" : "px-4"}>
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-neutral-400 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`https://github.com/${user.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-200"
              >
                View Profile
              </a>
              <a
                href="/about"
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                My Work →
              </a>
            </div>
          </div>

          {/* Right: top repos */}
          <div className="flex flex-col gap-4 items-start text-left md:items-end md:text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">Repos</p>
            {/* DOM order is name-then-language; md:flex-row-reverse flips it so the
                name still hugs the right edge in the desktop right-hand column. */}
            <div className="w-full md:max-w-xs divide-y divide-neutral-800/50 border-y border-neutral-800/50 md:border-0">
              {repos.slice(0, 5).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-2.5 group md:flex-row-reverse"
                >
                  <span className="flex items-center gap-1.5 text-sm text-neutral-300 group-hover:text-amber-400 transition-colors duration-200">
                    {repo.name}
                    <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  {repo.language && (
                    <span className="text-xs text-neutral-400 shrink-0">{repo.language}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

        </div>
        {/* Open Source Contributions */}
        <div className="border border-neutral-800/60 rounded-2xl p-6 bg-black/40 backdrop-blur-sm space-y-5">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">Open Source</p>
          {openSourceContributions.map((contribution, i) => (
            <div key={i} className="border-l border-neutral-800 pl-4 hover:border-amber-500/50 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-0.5 md:gap-4 mb-2">
                <div>
                  <a
                    href={contribution.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-200 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                  >
                    {contribution.organization}
                    <MdArrowOutward className="w-3 h-3" />
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">{contribution.role}</p>
                </div>
                {contribution.period && (
                  <p className="text-xs text-neutral-400 whitespace-nowrap">{contribution.period}</p>
                )}
              </div>
              <ul className="space-y-1.5">
                {contribution.achievements.map((achievement, j) => (
                  <li key={j} className="text-xs text-neutral-400 leading-relaxed flex items-start gap-2">
                    <span className="text-amber-500 mt-1 shrink-0">◦</span>
                    <span>{renderTextWithBold(achievement)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default GitHub;
