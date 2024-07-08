import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { openSourceContributions } from "../shared/constant";

const OpenSource = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Open Source Contributions</h1>
            <div className="mt-5 border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
                {openSourceContributions.slice().reverse().map((contribution, index) => (
                    <div key={index}>
                        <div className="group relative mb-1 p-2 flex flex-col justify-normal">
                            <p className="font-semibold text-amber-500">{contribution.name}</p>
                            <div className="text-sm italic space-x-2 flex items-center">
                                <Link href={contribution.link} className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                                    <span className="flex items-center text-neutral-500">
                                        {contribution.handle}
                                        <MdArrowOutward className="w-4 h-4 ml-1 text-neutral-500" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenSource;
