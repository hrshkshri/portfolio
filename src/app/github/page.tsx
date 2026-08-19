import GitHub from "@/components/github/GitHub";
import { pageMetadata } from "@/lib/metadata";

// Regenerate hourly; the GitHub data does not change faster than that.
export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "GitHub Activity",
  path: "/github",
  description:
    "My GitHub activity — repos, contributions, and what I've been committing lately.",
  socialTitle: "Harsh Keshari on GitHub",
  socialDescription: "Repos, contributions, and recent commits.",
});

export default function GitHubPage() {
  return <GitHub />;
}
