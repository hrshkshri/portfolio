import React from "react";
import StructuredData from "@/components/shared/StructuredData";
import About from "@/components/about/About";
import { pageMetadata } from "@/lib/metadata";
import { aboutSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "Where I work, what I've built, and what I've contributed to in open source.",
  socialTitle: "About Harsh Keshari",
  socialDescription: "Where I work, what I've built, and my open source work.",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutSchema} />
      <About />
    </>
  );
}
