import Home from "@/components/home/Home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Harsh Keshari — software developer at Experiment Labs. My work, my projects, and how to reach me.",
  socialTitle: "Harsh Keshari — Software Developer",
  socialDescription: "Software developer at Experiment Labs.",
});

export default function HomePage() {
  return <Home />;
}
