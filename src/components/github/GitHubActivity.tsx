"use client";

import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { FiGitCommit, FiCode, FiExternalLink } from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa";

interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
}

interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
  events: GitHubEvent[];
}

const GitHubActivity: React.FC = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <AiFillGithub className="w-16 h-16 text-green-500 animate-pulse mx-auto mb-4" />
          <p className="text-neutral-400 text-lg">Loading GitHub activity...</p>
        </div>
      </div>
    );
  }

  if (!data || !data.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 text-lg">Failed to load GitHub data</p>
        </div>
      </div>
    );
  }

  const recentCommits = data.events
    .filter((e) => e.type === "PushEvent")
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <AiFillGithub className="w-12 h-12 text-green-500 animate-pulse" />
              <RiSparklingFill className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                GitHub Activity
              </h1>
              <a
                href={`https://github.com/${data.user.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 text-sm flex items-center gap-2 hover:text-purple-400 transition-colors group"
              >
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="group-hover:underline">@{data.user.login}</span>
                <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <a
            href={`https://github.com/${data.user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 rounded-xl text-amber-400 hover:text-amber-300 font-medium transition-all flex items-center gap-2 group"
          >
            <span>View Profile</span>
            <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-green-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <BsBookmark className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold text-white">
                {data.user.public_repos}
              </span>
            </div>
            <p className="text-neutral-400 text-sm">Repositories</p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <BsPeople className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold text-white">
                {data.user.followers}
              </span>
            </div>
            <p className="text-neutral-400 text-sm">Followers</p>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-green-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <BsPeople className="w-6 h-6 text-green-400" />
              <span className="text-3xl font-bold text-white">
                {data.user.following}
              </span>
            </div>
            <p className="text-neutral-400 text-sm">Following</p>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FiGitCommit className="w-6 h-6 text-green-500" />
              1,850 contributions in the last year
            </h2>
          </div>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=hrshkshri&theme=github-dark&hide_border=true&bg_color=000000&color=39d353&line=39d353&point=ffffff`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default GitHubActivity;
