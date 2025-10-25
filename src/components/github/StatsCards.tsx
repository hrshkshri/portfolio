import React from "react";
import { BsPeople, BsBookmark } from "react-icons/bs";
import { GitHubUser } from "@/lib/api";

interface StatsCardsProps {
  user: GitHubUser;
}

const StatsCards: React.FC<StatsCardsProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-green-500/50 transition-all">
        <div className="flex items-center justify-between mb-2">
          <BsBookmark className="w-6 h-6 text-green-400" />
          <span className="text-3xl font-bold text-white">
            {user.public_repos}
          </span>
        </div>
        <p className="text-neutral-400 text-sm">Repositories</p>
      </div>

      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-blue-500/50 transition-all">
        <div className="flex items-center justify-between mb-2">
          <BsPeople className="w-6 h-6 text-blue-400" />
          <span className="text-3xl font-bold text-white">
            {user.followers}
          </span>
        </div>
        <p className="text-neutral-400 text-sm">Followers</p>
      </div>

      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 border border-neutral-700 hover:border-green-500/50 transition-all">
        <div className="flex items-center justify-between mb-2">
          <BsPeople className="w-6 h-6 text-green-400" />
          <span className="text-3xl font-bold text-white">
            {user.following}
          </span>
        </div>
        <p className="text-neutral-400 text-sm">Following</p>
      </div>
    </div>
  );
};

export default StatsCards;
