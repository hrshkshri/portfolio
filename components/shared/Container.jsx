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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      <div className="w-full h-screen flex overflow-hidden">
        <div className="h-full w-1/4 flex flex-col justify-between border-r border-gray-700 sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
          <div className="flex flex-col space-y-5 justify-between my-5">
            <Link
              href="/home"
              className={`flex items-center justify-center rounded ${
                activeRoute === "home"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              {/* <AiFillHome className="w-8 h-8 mx-2" /> */}
              <span className="sm:max-lg:hidden">Home</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center justify-center rounded ${
                activeRoute === "about"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              {/* <AiFillFlag className="w-8 h-8 mx-2" /> */}
              <span className="sm:max-lg:hidden">about</span>
            </Link>
            <Link
              href="/whatido"
              className={`flex items-center justify-center rounded ${
                activeRoute === "whatido"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              {/* <SiMarketo className="w-8 h-8 mx-2" /> */}
              <span className="sm:max-lg:hidden">What I Do</span>
            </Link>
            <Link
              href="/mywork"
              className={`flex items-center justify-center rounded ${
                activeRoute === "mywork"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
            >
              {/* <SiMarketo className="w-8 h-8 mx-2" /> */}
              <span className="sm:max-lg:hidden">My Work</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center justify-center rounded ${
                activeRoute === "contact"
                  ? `bg-neutral-900/50`
                  : `bg-neutral-900/25 hover:bg-neutral-900/40`
              } font-bold py-2 px-4 mx-5`}
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
      {/* <div className="navbar flex justify-between border-t border-gray-700 p-2 hidden min-[320px]:max-sm:block">
        <div className="flex justify-between">
          <Link
            href="/feed"
            className={`flex items-center justify-center rounded ${
              activeRoute === "feed"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <AiFillHome className="text-lg" />
          </Link>
          <Link
            href="/challenges"
            className={`flex items-center justify-center rounded ${
              activeRoute === "challenges"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <AiFillFlag className="text-lg" />
          </Link>
          <button className="rounded-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mx-5 focus:outline-none focus:shadow-outline flex items-center justify-center space-x-2">
            <AiOutlinePlus className="text-2xl" />
          </button>
          <Link
            href="/marketplace"
            className={`flex items-center justify-center rounded ${
              activeRoute === "marketplace"
                ? `bg-neutral-900/50`
                : `bg-neutral-900/25 hover:bg-neutral-900/40`
            } font-bold py-2 px-4`}
          >
            <SiMarketo className="text-lg" />
          </Link>

          <button className="logout-button flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <AiOutlineLogout className="text-lg" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Container;
