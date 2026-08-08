import WorkIndex from "@/components/work/WorkIndex";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  path: "/work",
  description:
    "Case studies from Harsh Keshari — Crelyzor, an agentic learning copilot, a multi-tenant identity platform, and Claukit. What each one was, and what was hard about it.",
  socialTitle: "Work | Harsh Keshari",
  socialDescription:
    "Case studies: what I built, the decisions behind it, and what was actually hard.",
});

export default function WorkPage() {
  return <WorkIndex />;
}
