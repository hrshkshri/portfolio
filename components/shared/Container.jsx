"use client";
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
import ParticleBackground from "./Particle/ParticleBackground";

const Container = ({ children, activeRoute }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-full flex overflow-hidden">
        <div className="bg-black text-neutral-400 hidden md:block md:h-full md:w-1/6 md:flex md:flex-col md:items-center md:justify-between">
          <div className="flex flex-col justify-between my-5">
            <Link
              href="/home"
              className={`flex items-center hover:text-amber-100 ${activeRoute === "home" ? `text-white` : ``
                } font-medium py-2 px-4 mx-2`}
            >
              <AiOutlineHome className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">Home</span>
            </Link>
            <Link
              href="/whatido"
              className={`flex items-center hover:text-amber-100 ${activeRoute === "whatido" ? `text-white` : ``
                } font-medium py-2 px-4 mx-2`}
            >
              <BsPersonWorkspace className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">What I Do</span>
            </Link>
            <Link
              href="/mywork"
              className={`flex items-center hover:text-amber-100 ${activeRoute === "mywork" ? `text-white` : ``
                } font-medium py-2 px-4 mx-2`}
            >
              <BsJournalCode className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">My Work</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center hover:text-amber-100 ${activeRoute === "about" ? `text-white` : ``
                } font-medium py-2 px-4 mx-2`}
            >
              <BsFillPersonVcardFill className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">About</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center hover:text-amber-100 ${activeRoute === "contact" ? `text-white` : ``
                } font-medium py-2 px-4 mx-2`}
            >
              <MdOutlineSms className="w-5 h-5 mx-2" />
              <span className="sm:max-lg:hidden">Contact</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between space-y-2 py-3 ">
            <div className="flex items-center justify-center space-x-2 py-1">
              <Link
                className="hover:text-amber-300"
                href="https://twitter.com/hrshkshri"
              >
                <BsTwitter className="w-5 h-5" />
              </Link>
              <Link
                className="hover:text-amber-300"
                href="https://www.instagram.com/hrshkshri/"
              >
                <AiFillInstagram className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-2 py-1">
              <Link
                className="hover:text-amber-300"
                href="https://www.linkedin.com/in/hrshkshri/"
              >
                <AiFillLinkedin className="w-5 h-5" />
              </Link>
              <Link
                className="hover:text-amber-300"
                href="https://github.com/hrshkshri"
              >
                <AiFillGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-none ">
          {/* Your content */}
          <ParticleBackground />
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
