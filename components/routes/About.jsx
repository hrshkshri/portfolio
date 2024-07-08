import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Project from "../shared/Project";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-5 mx-5 my-8 text-neutral-200">
        <div className="p-6 rounded-md bg-amber-500 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <p className="font-sans text-neutral-900 text-lg font-semibold text-center">
            Open to SDE/SWE internship and full-time roles focused on developing robust frontend and backend infrastructure.
          </p>
          <div className="mt-4 text-center">
            <Link href="https://drive.google.com/file/d/11yXiL8ymrC-d_9qcUts6OIv09PE6OBph/view">
              <span className="flex items-center justify-center space-x-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                <span className="text-neutral-900">Resume:</span>
                <MdArrowOutward className="w-5 h-5 text-neutral-900" />
              </span>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="mailto:harshkeshari100@gmail.com">
              <span className="flex items-center justify-center space-x-2 transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                <AiOutlineMail className="w-5 h-5 text-neutral-900" />
                <span className="text-neutral-900">harshkeshari100@gmail.com</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold">Experience</h1>
          <div className="mt-5">
            <div className="border-l-2 pl-1 hover:border-amber-500">
              <div className="group relative mb-8 p-2">
                <div className="flex justify-between">
                  <p className="font-semibold">Software Development Engineer Intern</p>
                  <p className="font-light text-sm">May 2021 - August 2021</p>
                </div>
                <div className="text-sm italic flex items-center">
                  at,&nbsp;
                  <Link href="https://www.amazon.com" className="transition duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                    <span className="flex items-center">
                      Amazon
                      <MdArrowOutward className="w-4 h-4 text-neutral-100 ml-1" />
                    </span>
                  </Link>
                </div>
                <ul className="mt-2 text-sm list-disc list-inside text-neutral-500">
                  <li>Developed a new feature for the Amazon Prime Video app that allows users to create and manage watch parties with friends and family.</li>
                  <li>The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold">Open Source Contributions</h1>
          <div className="mt-5">
            <div className="border-l-2 pl-1 hover:border-amber-500">
              <div className="group relative mb-1 p-2">
                <div className="flex flex-col justify-normal">
                  <p className="font-semibold text-amber-500">The Oppia Foundations</p>

                  <div className="text-sm italic space-x-2 flex items-center">
                    <Link href="https://www.livepreview.com" className="transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                      <span className="flex items-center text-neutral-500">
                        @oppia
                        <MdArrowOutward className="w-4 h-4 ml-1 text-neutral-500" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-normal">
                  <p className="font-semibold text-amber-500">Tailcall</p>

                  <div className="text-sm italic space-x-2 flex items-center">
                    <Link href="https://www.livepreview.com" className="transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                      <span className="flex items-center text-neutral-500">
                        @tailcallhq
                        <MdArrowOutward className="w-4 h-4 ml-1 text-neutral-500" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-normal">
                  <p className="font-semibold text-amber-500">CircuitVerse</p>

                  <div className="text-sm italic space-x-2 flex items-center">
                    <Link href="https://www.livepreview.com" className="transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                      <span className="flex items-center text-neutral-500">
                        @CircuitVerse
                        <MdArrowOutward className="w-4 h-4 ml-1  text-neutral-500" />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-xl font-bold">Projects</h1>
          <div className="mt-5">
            <div className="border-l-2 pl-1 hover:border-amber-500">
              <div className="group relative mb-8 p-4 transition duration-300 ease-in-out">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">Project Name</p>
                  <p className="font-light text-sm">May 2021 - August 2021</p>
                </div>
                <div className="text-sm italic space-x-2 flex items-center mt-1">
                  <Link href="https://www.livepreview.com" className="transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                    <span className="flex items-center">
                      Live Preview
                      <MdArrowOutward className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                  <Link href="https://www.github.com" className="transition ease-in-out duration-200 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
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
                    <p className="font-semibold">Tech Stack:</p>
                    <p className="italic">React, Redux, Node.js, Express, MongoDB, Tailwind CSS</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
