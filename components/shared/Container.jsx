"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHome,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdOutlineSms } from "react-icons/md";
import {
  BsJournalCode,
  BsFillPersonVcardFill,
  BsPersonWorkspace,
  BsTwitter,
} from "react-icons/bs";

const Container = ({ children, activeRoute }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-full flex overflow-hidden">
        <div className="bg-gray-950 text-neutral-400 hidden md:block md:h-full md:w-1/6 md:flex md:flex-col md:items-center md:justify-between">
          {/* <div className="relative">
          <div className="bg-amber-300 w-1/6 p-20 rounded-full absolute -left-10 -top-5 z-[-1]"></div>
            <div className="rounded-full">
              <Image className="rounded-full" src="/Img/img3.png" alt="Logo" width={200} height={200} />
            </div>
          </div> */}
          <div className="flex flex-col justify-between my-5">
            <Link
              href="/home"
              className={`flex items-center hover:text-white ${
                activeRoute === "home" ? `text-white` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <AiOutlineHome className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">Home</span>
            </Link>
            <Link
              href="/whatido"
              className={`flex items-center hover:text-white ${
                activeRoute === "whatido" ? `text-white` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsPersonWorkspace className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">What I Do</span>
            </Link>
            <Link
              href="/mywork"
              className={`flex items-center hover:text-white ${
                activeRoute === "mywork" ? `text-white` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsJournalCode className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">My Work</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center hover:text-white ${
                activeRoute === "about" ? `text-white` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <BsFillPersonVcardFill className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">About</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center hover:text-white ${
                activeRoute === "contact" ? `text-white` : ``
              } font-medium py-2 px-4 mx-2`}
            >
              <MdOutlineSms className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">Contact</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between space-y-2 py-3 ">
            <div className="flex items-center justify-center space-x-2 py-1">
              <Link
                className="hover:text-white"
                href="https://twitter.com/hrshkshri"
              >
                <BsTwitter className="w-5 h-5" />
              </Link>
              <Link
                className="hover:text-white"
                href="https://www.instagram.com/hrshkshri/"
              >
                <AiFillInstagram className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-2 py-1">
              <Link
                className="hover:text-white"
                href="https://www.linkedin.com/in/hrshkshri/"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </Link>
              <Link
                className="hover:text-white"
                href="https://github.com/hrshkshri"
              >
                <AiFillGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none ">
          {/* Your content */}
          {children}
        </div>
      </div>
      <div className="bg-gray-950 text-white navbar  flex justify-between border-t border-gray-700 hidden min-[320px]:max-md:block">
        hola
      </div>
    </div>
  );
};

export default Container;
