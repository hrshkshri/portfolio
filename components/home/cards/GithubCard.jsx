import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const GithubCard = () => {
  return (
    <Link href="https://github.com/hrshkshri" className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col justify-between space-y-3 drop-shadow-[0_10px_8px_rgba(82,82,82,0.04)] transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
      <AiFillGithub className="w-10 h-10 hover:text-amber-500" />
      <p className="font-bold text-2xl font-sans">Github</p>
    </Link>
  );
};

export default GithubCard;
