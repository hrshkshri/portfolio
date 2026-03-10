"use client";

import React, { useState, useEffect } from "react";
import { githubService, GitHubData } from "@/lib/api";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { FiExternalLink } from "react-icons/fi";
import { openSourceContributions } from "@/components/shared/constant";
import { renderTextWithBold } from "@/components/shared/utils";
import { MdArrowOutward } from "react-icons/md";

const GitHub: React.FC = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const result = await githubService.getGitHubData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };
    fetchGitHubData();
  }, []);

  if (loading) return <LoadingState />;
  if (!data || !data.user) return <ErrorState />;

  const { user, repos } = data;

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex flex-col justify-end bg-black">

      {/* Background: faded contribution graph */}
      <div className="absolute inset-0 opacity-[0.07] flex items-center justify-center overflow-hidden pointer-events-none">
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${user.login}&theme=github-dark&hide_border=true&bg_color=000000&color=39d353&line=39d353&point=ffffff`}
          alt=""
          className="w-full scale-125"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-12 space-y-10">

        {/* Contribution graph */}
        <div className="border border-neutral-800/60 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm">
          <div className="px-5 pt-4 pb-1 flex items-center justify-between">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-600">Activity</p>
            <p className="text-xs text-neutral-600">1,850 contributions · last year</p>
          </div>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${user.login}&theme=github-dark&hide_border=true&bg_color=000000&color=39d353&line=39d353&point=ffffff`}
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>

        {/* Bottom two-column — mirrors home page layout */}
        <div className="grid grid-cols-2 items-end gap-8">

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
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-white">{user.public_repos}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-neutral-600 mt-0.5">repos</p>
              </div>
              <div className="w-px h-8 bg-neutral-800" />
              <div>
                <p className="text-3xl font-bold text-white">{user.followers}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-neutral-600 mt-0.5">followers</p>
              </div>
              <div className="w-px h-8 bg-neutral-800" />
              <div>
                <p className="text-3xl font-bold text-white">1,850</p>
                <p className="text-xs tracking-[0.15em] uppercase text-neutral-600 mt-0.5">commits</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
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
          <div className="flex flex-col gap-4 items-end text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-600">Repos</p>
            <div className="space-y-3 w-full max-w-xs">
              {repos.slice(0, 5).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="text-xs text-neutral-700">{repo.language}</span>
                  <span className="flex items-center gap-1.5 text-sm text-neutral-400 group-hover:text-amber-400 transition-colors duration-200">
                    {repo.name}
                    <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
        {/* Open Source Contributions */}
        <div className="border border-neutral-800/60 rounded-2xl p-6 bg-black/40 backdrop-blur-sm space-y-5">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-600">Open Source</p>
          {openSourceContributions.map((contribution, i) => (
            <div key={i} className="border-l border-neutral-800 pl-4 hover:border-amber-500/50 transition-colors duration-200">
              <div className="flex items-start justify-between gap-4 mb-2">
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
                  <p className="text-xs text-neutral-500 mt-0.5">{contribution.role}</p>
                </div>
                {contribution.period && (
                  <p className="text-xs text-neutral-600 whitespace-nowrap">{contribution.period}</p>
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
