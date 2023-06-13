"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineHome, AiFillFlag } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import {
  BsJournalCode,
  BsFillPersonVcardFill,
  BsPersonWorkspace,
} from "react-icons/bs";

const Container = ({ children, activeRoute }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-full flex overflow-hidden">
        <div className="hidden md:block md:h-full md:w-1/6 md:flex md:flex-col md:items-center md:justify-between md:border-r md:border-neutral-400 ">
          <div>my photo</div>
          <div className="flex flex-col justify-between my-5">
            <Link
              href="/home"
              className={`flex rounded ${
                activeRoute === "home" ? `` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <AiOutlineHome className="mx-2" />
              <span className="sm:max-lg:hidden">Home</span>
            </Link>
            <hr />
            <Link
              href="/whatido"
              className={`flex rounded ${
                activeRoute === "whatido" ? `` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsPersonWorkspace className="mx-2" />
              <span className="sm:max-lg:hidden">What I Do</span>
            </Link>
            <Link
              href="/mywork"
              className={`flex rounded ${
                activeRoute === "mywork" ? `` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsJournalCode className="mx-2" />
              <span className="sm:max-lg:hidden">My Work</span>
            </Link>
            <Link
              href="/about"
              className={`flex rounded ${
                activeRoute === "about" ? `` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsFillPersonVcardFill className=" mx-2" />
              <span className="sm:max-lg:hidden">About</span>
            </Link>
            <Link
              href="/contact"
              className={`flex rounded ${
                activeRoute === "contact" ? `` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <GrContact className=" mx-2" />
              <span className="sm:max-lg:hidden">Contact</span>
            </Link>
          </div>
          <div className="flex justify-between space-x-2 py-3 ">
            <Link href="/contact">
              <AiFillFlag className="" />
            </Link>
            <Link href="/contact">
              <AiFillFlag className="" />
            </Link>
            <Link href="/contact">
              <AiFillFlag className="" />
            </Link>
            <Link href="/contact">
              <AiFillFlag className="" />
            </Link>
            <Link href="/contact">
              <AiFillFlag className="" />
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none ">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="navbar  flex justify-between border-t border-gray-700 hidden min-[320px]:max-md:block">
        hola
      </div>
    </div>
  );
};

export default Container;
