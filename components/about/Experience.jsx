import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Experience</h1>
      <div className="mt-5">
        <div className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
          <div className="group relative mb-8 p-2">
            <div className="flex justify-between">
              <p className="font-semibold">Software Development Engineer Intern</p>
              <p className="font-light text-sm">May 2021 - August 2021</p>
            </div>
            <div className="text-sm italic flex items-center">
              at,&nbsp;
              <Link href="https://www.amazon.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
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
  );
};

export default Experience;
