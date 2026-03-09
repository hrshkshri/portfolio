import React from "react";
import Link from "next/link";

const ProfileCard: React.FC = () => {
  return (
    <Link
      href="/about"
      className="group border border-neutral-800 rounded-xl p-5 flex flex-col justify-between gap-8 hover:border-neutral-700 transition-colors duration-200 bg-neutral-950/40"
    >
      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
      </div>

      <div>
        <p className="font-semibold text-neutral-200 mb-1">About</p>
        <p className="text-neutral-600 text-xs">Experience & projects</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
