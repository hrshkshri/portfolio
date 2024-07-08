import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const OpenSource = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Open Source Contributions</h1>
      <div className="mt-5">
        <div className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-amber-500">
          <div className="group relative mb-1 p-2">
            <div className="flex flex-col justify-normal">
              <p className="font-semibold text-amber-500">The Oppia Foundations</p>
              <div className="text-sm italic space-x-2 flex items-center">
                <Link href="https://www.livepreview.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
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
                <Link href="https://www.livepreview.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
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
                <Link href="https://www.livepreview.com" className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                  <span className="flex items-center text-neutral-500">
                    @CircuitVerse
                    <MdArrowOutward className="w-4 h-4 ml-1 text-neutral-500" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
