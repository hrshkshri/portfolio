import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsFileEarmarkText } from "react-icons/bs";

const About = () => {
  return (
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
          <Link href="https://drive.google.com/file/d/11yXiL8ymrC-d_9qcUts6OIv09PE6OBph/view" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300">
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
  );
};

export default About;
