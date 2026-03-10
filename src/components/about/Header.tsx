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
      <div className="flex items-center gap-2 mb-8">
        {[
          { href: "https://github.com/hrshkshri", icon: AiFillGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/hrshkshri/", icon: AiFillLinkedin, label: "LinkedIn" },
          { href: "https://twitter.com/hrshkshri", icon: BsTwitter, label: "Twitter" },
          { href: "mailto:harshkeshari100@gmail.com", icon: AiFillMail, label: "Email" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5 transition-all duration-200 text-xs"
          >
            <link.icon className="w-3.5 h-3.5" />
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
