import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { experiences } from "../shared/constant";
import { renderTextWithBold } from "../shared/utils";

const Experience: React.FC = () => {

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Experience</h1>
            <div className="mt-5 space-y-8">
                {experiences.slice().reverse().map((experience, index) => (
                    <div key={index} className="border-l-2 border-neutral-700 pl-4 transition ease-in-out duration-300 hover:border-amber-500">
                        <div className="group relative p-2">
                            {/* Company and Role Header */}
                            <div className="mb-3">
                                <div className="flex items-center gap-2 mb-1">
                                    <Link
                                        href={experience.companyUrl}
                                        className="font-bold text-lg text-neutral-100 hover:text-amber-400 transition-colors duration-300 flex items-center gap-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {experience.company}
                                        <MdArrowOutward className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="italic text-neutral-300 text-sm">{experience.role}</p>
                                    <p className="text-neutral-400 text-sm font-medium">{experience.period}</p>
                                </div>
                            </div>

                            {/* Projects and Achievements */}
                            <div className="space-y-4">
                                {experience.projects.map((project, projectIndex) => (
                                    <div key={projectIndex} className="ml-2">
                                        <h4 className="font-semibold text-neutral-200 mb-2 text-sm">
                                            • {project.name}
                                        </h4>
                                        <ul className="ml-4 space-y-1">
                                            {project.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="text-neutral-400 text-xs leading-relaxed flex items-start">
                                                    <span className="text-amber-500 mr-2 mt-1 text-xs">◦</span>
                                                    <span className="flex-1">{renderTextWithBold(achievement)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
