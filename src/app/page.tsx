import Home from "@/components/home/Home";
import StructuredData from "@/components/shared/StructuredData";
import { pageMetadata } from "@/lib/metadata";
import { homeSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Harsh Keshari — founding engineer at Experiment Labs. My work, my projects, and how to reach me.",
  socialTitle: "Harsh Keshari — Founding Engineer",
  socialDescription: "Founding engineer at Experiment Labs.",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeSchema} />
      <Home />
    </>
  );
}
