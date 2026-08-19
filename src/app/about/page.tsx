import React from "react";
import StructuredData from "@/components/shared/StructuredData";
import About from "@/components/about/About";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "Where I work, what I've built, and what I've contributed to in open source.",
  socialTitle: "About Harsh Keshari",
  socialDescription: "Where I work, what I've built, and my open source work.",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harsh Keshari",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Experiment Labs",
  },
  description:
    "Software developer at Experiment Labs. I build web apps and work on open source.",
  sameAs: [
    "https://github.com/hrshkshri",
    "https://www.linkedin.com/in/hrshkshri/",
    "https://twitter.com/hrshkshri",
  ],
  email: "mailto:harshkeshari100@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Open Source",
    "Web Development",
  ],
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={personSchema} />
      <About />
    </>
  );
}
