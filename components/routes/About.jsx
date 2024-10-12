import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Experience from "../about/Experience";
import OpenSource from "../about/OpenSource";
import Projects from "../about/Projects";
import { resumeLink } from "../shared/constant";
import Banner from "../about/Banner";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-5 mx-5 my-8 text-neutral-200">
        <Banner />
        <Experience />
        <OpenSource />
        <Projects />
      </div>
    </>
  );
};

export default About;
