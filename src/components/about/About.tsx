"use client";

import React from "react";
import Building from "./Building";
import Experience from "./Experience";
import OpenSource from "./OpenSource";
import Header from "./Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-28 md:pb-16">
        {/* Header Section */}
        <div className="mb-12">
          <Header />
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <Experience />
        </section>

        {/* Open Source Section */}
        <section className="mb-16">
          <OpenSource />
        </section>

        {/* Currently Building */}
        <Building />

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400 text-sm">
            This journey continues... 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
