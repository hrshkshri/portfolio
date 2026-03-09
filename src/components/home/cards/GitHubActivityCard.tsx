import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const GitHubActivityCard: React.FC = () => {
  return (
    <Link
      href="/github"
      className="group border border-neutral-800 rounded-xl p-5 flex flex-col justify-between gap-8 hover:border-neutral-700 transition-colors duration-200 bg-neutral-950/40"
    >
      <AiFillGithub className="w-7 h-7 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200" />

      <div>
        <p className="font-semibold text-neutral-200 mb-1">GitHub</p>
        <p className="text-neutral-600 text-xs">Coding activity</p>
      </div>
    </Link>
  );
};

export default GitHubActivityCard;
