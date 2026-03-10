import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        Harsh Keshari
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 mb-4">
        Software Developer
      </p>
      <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
        I build software. That's what I am.
        <br /><br />
        Founding Engineer at Experiment Labs — built the LMS, CRM, AI interviewer, internship platform, payment infrastructure, and more from the ground up.
        <br /><br />
        Nights and weekends: building Crelyzor — a workspace where your contacts, meetings, and tasks actually know about each other.
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 mb-8">
        <a
          href="https://github.com/hrshkshri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-amber-400 transition-colors duration-300"
        >
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/hrshkshri/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-amber-400 transition-colors duration-300"
        >
          <AiFillLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/hrshkshri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-amber-400 transition-colors duration-300"
        >
          <BsTwitter className="w-6 h-6" />
        </a>
        <a
          href="mailto:harshkeshari100@gmail.com"
          className="text-neutral-400 hover:text-amber-400 transition-colors duration-300"
        >
          <AiFillMail className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default Header;
