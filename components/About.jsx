import Image from "next/image";
import React from "react";
import Container from "./shared/Container";
import Link from "next/link";
import { BsFileEarmarkText, BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (<Container activeRoute={"about"}>
    <div className="grid my-5 mx-3 place-content-center min-h-screen">
      <div className="h-full flex justify-between space-x-3 text-neutral-200 rounded-md bg-neutral-900 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
        <div className="p-5">
          <p className="font-sans text-neutral-300 text-lg font-semibold">Hey 👋, I am <span className="text-2xl text-amber-500 font-bold">Harsh Keshari</span>; An accomplished Full-Stack Developer 💻 hailing all the way from India.
            <br />
            From crafting some seriously cool stuff on the web to pushing the boundaries of scalability, I can build snazzy front-end experiences with robust back-end systems.
            <br />
            But that's not all— I possess exceptional command over data structures and algorithms. So, whether it's bringing ideas to life or optimizing code for maximum efficiency, I can make things happen.
          </p>
          <br />
          <Link href="https://drive.google.com/file/d/1Dj2JGk9VE8oj17z1CZOuz1spfIo_vG62/view?usp=drive_link" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300">
            <BsFileEarmarkText className="w-10 h-10 text-amber-500" />
          </Link>
        </div>
        <div>
          <Image
            className='rounded-md'
            src="/Img/about.png"
            alt="Logo"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
    <div className="flex text-white items-center justify-center space-x-3 p-3 ">
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
        href="https://www.linkedin.com/in/hrsh-kshri/"
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
  </Container>);
};

export default About;
