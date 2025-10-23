import React from "react";
import Banner from "@/components/about/Banner";
import Experience from "@/components/about/Experience";
import Projects from "@/components/about/Projects";
import OpenSource from "@/components/about/OpenSource";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import type { Metadata } from "next";
import StructuredData from "@/components/shared/StructuredData";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Harsh Keshari - Full Stack Developer at Experiment Labs. Explore my professional experience, open source contributions, and personal projects.",
  openGraph: {
    title: "About Harsh Keshari | Full Stack Developer",
    description: "Professional experience, open source contributions, and projects by Harsh Keshari - Full Stack Developer passionate about building scalable web applications.",
    url: "https://harshkeshari.dev/about",
  },
  twitter: {
    title: "About Harsh Keshari | Full Stack Developer",
    description: "Professional experience, open source contributions, and projects by Harsh Keshari - Full Stack Developer passionate about building scalable web applications.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsh Keshari",
  url: "https://harshkeshari.dev",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Experiment Labs"
  },
  description: "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
  sameAs: [
    "https://github.com/hrshkshri",
    "https://www.linkedin.com/in/hrshkshri/",
    "https://twitter.com/hrshkshri"
  ],
  email: "mailto:harshkeshari100@gmail.com",
  knowsAbout: ["React", "Next.js", "Node.js", "Full Stack Development", "Open Source", "Web Development"]
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={personSchema} />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-neutral-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Harsh Keshari
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
              Passionate about building scalable web applications and contributing to open source.
              Currently working as a Fullstack Engineer at Experiment Labs, with experience in
              backend development, payment systems, and learning management platforms.
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

            {/* Banner */}
            <Banner />
          </div>

          {/* Journey Timeline */}
          <div className="space-y-16">
            {/* Experience Section */}
            <section>
              <Experience />
            </section>

            {/* Open Source Section */}
            <section>
              <OpenSource />
            </section>

            {/* Projects Section */}
            <section>
              <Projects />
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 text-sm">
              This journey continues... 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}