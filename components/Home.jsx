import React from "react";
import Image from "next/image";
import Container from "./shared/Container";
import ParticleBackground from "./shared/Particle/ParticleBackground";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFileEarmarkText, BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Skills from "./Skills";

const Home = () => {
  return (
    <Container activeRoute={"home"}>
      {/* <ParticleBackground /> */}
      <div className="grid place-content-center min-h-screen" >
        <div className="w-full h-full flex flex-col justify-center space-y-2 p-10 text-white relative">
          <div className="flex space-x-1 items-center">
            <div className="flex flex-col">
              <h2 className="text-4xl text-neutral-400 font-medium font-sans">
                Hi, I'm{" "}
                <span className="text-6xl font-bold text-amber-400 drop-shadow-lg shadow-neutral-100 font-serif">
                  Harsh
                </span>
                .
              </h2>
              <h1 className="lg:text-9xl min-[320px]:max-lg:text-8xl  text-amber-200 font-bold font-Rampart ">
                I Code.
              </h1>
            </div>
            <Image
              className="block min-[320px]:max-lg:hidden"
              src="/Img/2.svg"
              alt="Logo"
              width={400}
              height={400}
            />
          </div>
          <div className="min-[320px]:max-md:flex min-[320px]:max-md:justify-center min-[320px]:max-md:items-center">
            <Image
              className="lg:hidden block"
              src="/Img/2.svg"
              alt="Logo"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 min-[320px]:max-lg:grid-cols-2 gap-4 grid-flow-row auto-rows-max text-neutral-200 m-4">
        <Link href="/about" className="col-span-2 bg-neutral-900 rounded-md px-5 py-5 flex flex-col space-y-3">
          <div>
            <Image
              className="bg-amber-500 rounded-full"
              src="/Img/Harsh.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="font-bold text-2xl font-serif">
            <span className="text-amber-500 font-bold">Harsh</span><br /><span className="text-white">Keshari</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-sans text-lg font-semibold">
              Full Stack Developer 💻 from India
            </p>
            <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-amber-500" />
          </div>
        </Link>
        <Link href="/resume" className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col justify-between space-y-3">
          <BsFileEarmarkText className="w-10 h-10 hover:text-amber-500" />
          <p className="font-bold text-2xl font-sans">Resume</p>
        </Link>
        <Link href="https://github.com/hrshkshri" className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col justify-between space-y-3">
          <AiFillGithub className="w-10 h-10 hover:text-amber-500" />
          <p className="font-bold text-2xl font-sans">Github</p>
        </Link>
      </div>
      <Skills />
      <div className="flex items-center justify-center space-x-5 text-neutral-50 p-5 m-2">
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
        <Link
          className="hover:text-amber-300"
          href="https://www.linkedin.com/in/hrshkshri/"
        >
          <AiFillLinkedin className="w-5 h-5" />
        </Link>
      </div>
    </Container>
  );
};

export default Home;
