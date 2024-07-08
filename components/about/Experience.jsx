import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { experiences } from "../shared/constant";

const Experience = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold">Experience</h1>
            <div className="mt-5">
                {experiences.map((experience, index) => (
                    <div key={index} className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
                        <div className="group relative mb-8 p-2">
                            <div className="flex justify-between">
                                <p className="font-semibold">{experience.role}</p>
                                <p className="font-light text-sm">{experience.period}</p>
                            </div>
                            <div className="text-sm italic flex items-center">
                                at,&nbsp;
                                <Link href={experience.companyUrl} className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                                    <span className="flex items-center">
                                        {experience.company}
                                        <MdArrowOutward className="w-4 h-4 text-neutral-100 ml-1" />
                                    </span>
                                </Link>
                            </div>
                            <ul className="mt-2 text-sm list-disc list-inside text-neutral-500">
                                {experience.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
