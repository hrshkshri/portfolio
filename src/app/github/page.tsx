import GitHub from "@/components/github/GitHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Activity",
  description:
    "Explore Harsh Keshari's GitHub profile, repositories, contributions, and open source projects. View latest activity and coding statistics.",
  openGraph: {
    title: "GitHub Activity | Harsh Keshari",
    description:
      "Explore my GitHub profile, repositories, contributions, and open source projects.",
    url: "https://hrshkshri.me/github",
  },
  twitter: {
    title: "GitHub Activity | Harsh Keshari",
    description:
      "Explore my GitHub profile, repositories, contributions, and open source projects.",
  },
};

export default function GitHubPage() {
  return <GitHub />;
}
