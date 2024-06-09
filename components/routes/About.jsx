import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsFileEarmarkText } from "react-icons/bs";

const About = () => {
  return (

    <div className="flex items-center justify-between space-x-3 m-5 text-neutral-200 rounded-md bg-neutral-900 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]">
      <div className="p-5">
        <p className="font-sans text-neutral-300 text-lg font-semibold">Hey 👋, I am <span className="text-2xl text-amber-500 font-bold">Harsh Keshari</span>;
          Open to internship and full-time opportunities focused on developing robust frontend and backend infrastructure.
        </p>
        <br />
        <Link href="https://drive.google.com/file/d/11yXiL8ymrC-d_9qcUts6OIv09PE6OBph/view" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300">
          <BsFileEarmarkText className="w-10 h-10 text-amber-500" />
        </Link>
      </div>
    </div>

  );
};

export default About;
