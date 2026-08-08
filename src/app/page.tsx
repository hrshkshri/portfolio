import Home from "@/components/home/Home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Harsh Keshari — full-stack engineer building AI-native products: agentic backends and the interfaces that sit on top of them.",
  socialTitle: "Harsh Keshari | Full Stack Developer",
});

export default function HomePage() {
  return <Home />;
}
