import type { Metadata, Viewport } from "next";
import { Rampart_One } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/layout/NavigationWrapper";
import { SITE_URL } from "@/lib/site";

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rampart",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harsh Keshari | Full Stack Developer",
    template: "%s | Harsh Keshari",
  },
  description:
    "Full Stack Developer passionate about building scalable web applications and contributing to open source. Currently working as a Fullstack Engineer at Experiment Labs.",
  keywords: [
    "Harsh Keshari",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Open Source",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Harsh Keshari", url: SITE_URL }],
  creator: "Harsh Keshari",
  publisher: "Harsh Keshari",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Harsh Keshari Portfolio",
    title: "Harsh Keshari | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Keshari - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
    firstName: "Harsh",
    lastName: "Keshari",
    username: "hrshkshri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Keshari | Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    creator: "@hrshkshri",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// Keeps the mobile browser chrome (URL bar, safe areas) dark instead of white.
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0f0f0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rampartOne.variable}>
      {/* Extensions (Grammarly et al.) stamp attributes on <body> before hydration */}
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-neutral-900 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}
