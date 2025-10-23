import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { openSourceContributions } from "../shared/constant";
import { renderTextWithBold } from "../shared/utils";

const OpenSource: React.FC = () => {

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Open Source Contributions</h1>
            <div className="mt-5 space-y-6">
                {openSourceContributions.map((contribution, index) => (
                    <div key={index} className="border-l-2 border-neutral-700 pl-4 transition ease-in-out duration-300 hover:border-amber-500">
                        <div className="p-2">
                            {/* Role and Organization Header */}
                            <div className="mb-3">
                                <div className="flex items-start justify-between mb-1">
                                    <div className="flex-1">
                                        <span className="font-semibold text-neutral-100 text-sm">
                                            {contribution.role}
                                        </span>
                                        <span className="text-neutral-300 text-sm"> at </span>
                                        <Link
                                            href={contribution.organizationUrl}
                                            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contribution.organization}
                                            <MdArrowOutward className="w-3 h-3" />
                                        </Link>
                                    </div>
                                    {contribution.period && (
                                        <p className="text-neutral-400 text-xs font-medium ml-2 whitespace-nowrap">
                                            {contribution.period}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Achievements */}
                            <ul className="ml-2 space-y-1">
                                {contribution.achievements.map((achievement, achievementIndex) => (
                                    <li key={achievementIndex} className="text-neutral-400 text-xs leading-relaxed flex items-start">
                                        <span className="text-amber-500 mr-2 mt-1 text-xs">•</span>
                                        <span className="flex-1">{renderTextWithBold(achievement)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpenSource;
