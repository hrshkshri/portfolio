import Image from "next/image";
import React from "react";
import Container from "./shared/Container";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (<Container activeRoute={"about"}>
    <div className="grid m-3 place-content-center min-h-screen">
      <div className="h-full flex justify-between space-x-3 text-neutral-200 rounded-md bg-neutral-900 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
        <div className="p-5">
          <p className="font-sans text-neutral-300 text-lg font-semibold">Hey 👋, I am <span className="text-2xl text-amber-500 font-bold">Harsh Keshari</span>; An accomplished Full-Stack Developer 💻 hailing all the way from India.
            <br />
            From crafting some seriously cool stuff on the web to pushing the boundaries of scalability, I can build snazzy front-end experiences with robust back-end systems.
            <br />
            But that's not all— I possess exceptional command over data structures and algorithms. So, whether it's bringing ideas to life or optimizing code for maximum efficiency, I can make things happen.
          </p>
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
  </Container>);
};

export default About;
