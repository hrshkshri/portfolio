import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { projectsData } from "../shared/constant";

const Projects = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Projects</h1>
            <div className="mt-5">
                {projectsData.map((project, index) => (
                    <div key={index} className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
                        <div className="group relative mb-8 p-4 transition duration-300 ease-in-out">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-lg">{project.name}</p>
                                <p className="font-light text-sm">{project.duration}</p>
                            </div>
                            <div className="text-sm italic space-x-2 flex items-center mt-1">
                                <Link href={project.liveLink} className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                                    <span className="flex items-center">
                                        Live Preview
                                        <MdArrowOutward className="w-4 h-4 ml-1" />
                                    </span>
                                </Link>
                                <Link href={project.githubLink} className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                                    <span className="flex items-center">
                                        GitHub
                                        <MdArrowOutward className="w-4 h-4 ml-1" />
                                    </span>
                                </Link>
                            </div>
                            <div className="text-neutral-500">
                                <ul className="mt-4 text-sm list-disc list-inside space-y-1">
                                    {project.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex items-center space-x-1">
                                    <p className="font-semibold group-hover:text-amber-500 transition ease-in-out duration-300">Tech Stack:</p>
                                    <p className="italic">{project.techStack}</p>
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
