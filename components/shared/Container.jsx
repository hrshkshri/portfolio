"use client";
import { useState } from "react";
import Link from "next/link";
// import {
//   AiFillHome,
//   AiFillFlag,
//   AiFillMessage,
//   AiOutlinePlus,
//   AiOutlineLogout,
// } from "react-icons/ai";
// import { SiMarketo } from "react-icons/si";
// import { FaUserCircle } from "react-icons/fa";

const Container = ({ children, activeRoute }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="">
      <div className="w-full h-screen flex overflow-hidden">
        <div className="hidden md:block md:h-full md:w-1/6 flex md:flex-col justify-between md:border-r md:border-neutral-400 ">
          <div>my photo</div>
          <div className="flex flex-col justify-between my-5">
            <Link
              href="/home"
              className={`flex rounded ${
                activeRoute === "home"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-2`}
            >
              {/* <AiFillHome className="w-8 h-8 mx-2" /> */}
              <span className="">Home</span>
            </Link>
            <hr />
            <Link
              href="/whatido"
              className={`flex items-center justify-center rounded ${
                activeRoute === "whatido"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-2`}
            >
              {/* <SiMarketo className="w-8 h-8 mx-2" /> */}
              <span className="">What I Do</span>
            </Link>
            <Link
              href="/mywork"
              className={`flex items-center justify-center rounded ${
                activeRoute === "mywork"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-2`}
            >
              {/* <SiMarketo className="w-8 h-8 mx-2" /> */}
              <span className="">My Work</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center justify-center rounded ${
                activeRoute === "about"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-2`}
            >
              {/* <AiFillFlag className="w-8 h-8 mx-2" /> */}
              <span className="">About</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center justify-center rounded ${
                activeRoute === "contact" ? `bg-neutral-900/5` : ``
              } font-bold py-2 px-4 mx-2`}
            >
              {/* <SiMarketo className="w-8 h-8 mx-2" /> */}
              <span className="sm:max-lg:hidden">Contact</span>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-auto mx-5 mb-3 space-y-5">
            xyz
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none ">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="navbar flex justify-between border-t border-gray-700 p-2 hidden min-[320px]:max-md:block">
        hola
      </div>
    </div>
  );
};

export default Container;
