import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="mt-5">
        <div className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
          <div className="group relative mb-8 p-4 transition duration-300 ease-in-out">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Project Name</p>
              <p className="font-light text-sm">May 2021 - August 2021</p>
            </div>
            <div className="text-sm italic space-x-2 flex items-center mt-1">
              <Link href="https://www.livepreview.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                <span className="flex items-center">
                  Live Preview
                  <MdArrowOutward className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link href="https://www.github.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                <span className="flex items-center">
                  GitHub
                  <MdArrowOutward className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
            <div className="text-neutral-500">
              <ul className="mt-4 text-sm list-disc list-inside space-y-1">
                <li>Developed a new feature for the Amazon Prime Video app that allows users to create and manage watch parties with friends and family.</li>
                <li>The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.</li>
              </ul>
              <div className="mt-4 flex items-center space-x-1">
                <p className="font-semibold group-hover:text-amber-500 transition ease-in-out duration-300">Tech Stack:</p>
                <p className="italic">React, Redux, Node.js, Express, MongoDB, Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
