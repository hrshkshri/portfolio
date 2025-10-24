import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import NavigationWrapper from "@/components/layout/NavigationWrapper";

export const metadata: Metadata = {
  metadataBase: new URL('https://harshkeshari.dev'),
  title: {
    default: "Harsh Keshari | Full Stack Developer",
    template: "%s | Harsh Keshari"
  },
  description: "Full Stack Developer passionate about building scalable web applications and contributing to open source. Currently working as a Fullstack Engineer at Experiment Labs.",
  keywords: ["Harsh Keshari", "Full Stack Developer", "React", "Next.js", "Node.js", "Open Source", "Web Development", "Software Engineer"],
  authors: [{ name: "Harsh Keshari", url: "https://harshkeshari.dev" }],
  creator: "Harsh Keshari",
  publisher: "Harsh Keshari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshkeshari.dev",
    siteName: "Harsh Keshari Portfolio",
    title: "Harsh Keshari | Full Stack Developer",
    description: "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harsh Keshari - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Keshari | Full Stack Developer",
    description: "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
    creator: "@hrshkshri",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
        {/* <VisualEditsMessenger /> */}
      </body>
    </html>
  );
}