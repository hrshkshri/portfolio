import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { projectsData } from "../shared/constant";
import { renderTextWithBold } from "../shared/utils";

const Projects: React.FC = () => {

    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="mt-5 space-y-8">
                {projectsData.slice().reverse().map((project, index) => (
                    <div key={index} className="border-l-2 border-neutral-700 pl-4 transition ease-in-out duration-300 hover:border-amber-500">
                        <div className="p-2">
                            {/* Project Header */}
                            <div className="mb-3">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-neutral-100">{project.name}</h3>
                                    {project.tag && (
                                        <span className="text-amber-400 text-xs font-medium px-2 py-1 bg-amber-400/10 rounded">
                                            {project.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 text-sm">
                                    {project.liveLink && (
                                        <Link
                                            href={project.liveLink}
                                            className="text-amber-400 hover:text-amber-300 transition-colors duration-300 inline-flex items-center gap-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Preview
                                            <MdArrowOutward className="w-3 h-3" />
                                        </Link>
                                    )}
                                    <Link
                                        href={project.githubLink}
                                        className="text-neutral-300 hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                        <MdArrowOutward className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="ml-2 space-y-1 mb-4">
                                {project.description.map((desc, idx) => (
                                    <li key={idx} className="text-neutral-400 text-xs leading-relaxed flex items-start">
                                        <span className="text-amber-500 mr-2 mt-1 text-xs">•</span>
                                        <span className="flex-1">{renderTextWithBold(desc)}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Category and Tech Stack */}
                            <div className="ml-2 space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="font-semibold text-neutral-200 text-xs">Category:</span>
                                    <span className="text-neutral-400 text-xs">{project.category}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-semibold text-neutral-200 text-xs">Tech Stack:</span>
                                    <span className="text-neutral-400 text-xs">{project.techStack}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
