import GitHub from "@/components/github/GitHub";
import { pageMetadata } from "@/lib/metadata";

// Regenerate hourly; the GitHub data does not change faster than that.
export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "GitHub Activity",
  path: "/github",
  description:
    "Explore Harsh Keshari's GitHub profile, repositories, contributions, and open source projects. View latest activity and coding statistics.",
  socialTitle: "GitHub Activity | Harsh Keshari",
  socialDescription:
    "Explore my GitHub profile, repositories, contributions, and open source projects.",
});

export default function GitHubPage() {
  return <GitHub />;
}
