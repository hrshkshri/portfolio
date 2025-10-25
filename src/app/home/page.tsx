import Home from "@/components/home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Harsh Keshari's portfolio. Full Stack Developer passionate about building scalable web applications, contributing to open source, and solving complex problems with code.",
  openGraph: {
    title: "Harsh Keshari | Full Stack Developer",
    description:
      "Welcome to my portfolio. Explore my projects, skills, and journey as a Full Stack Developer.",
    url: "https://harshkeshari.dev/home",
  },
  twitter: {
    title: "Harsh Keshari | Full Stack Developer",
    description:
      "Welcome to my portfolio. Explore my projects, skills, and journey as a Full Stack Developer.",
  },
};

export default function HomePage() {
  return <Home />;
}
