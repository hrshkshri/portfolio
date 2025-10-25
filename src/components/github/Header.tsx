import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { RiSparklingFill } from "react-icons/ri";
import { GitHubUser } from "@/lib/api";

interface HeaderProps {
  user: GitHubUser;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
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
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 text-sm flex items-center gap-2 hover:text-purple-400 transition-colors group"
          >
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="group-hover:underline">@{user.login}</span>
            <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
      <a
        href={`https://github.com/${user.login}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-500/50 rounded-xl text-amber-400 hover:text-amber-300 font-medium transition-all flex items-center gap-2 group"
      >
        <span>View Profile</span>
        <FiExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
};

export default Header;
