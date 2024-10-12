import Container from "@/components/layout/Container";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Harsh",
  description: "Harsh Keshari's Portfolio",
  // Open Graph Metadata
  openGraph: {
    title: "Harsh Keshari",
    description: "Welcome to my portfolio!",
    url: "https://github.com/hrshkshri",
    siteName: "Harsh Keshari",
    images: [
      {
        url: "https://github.com/hrshkshri.png",
        width: 800,
        height: 800,
        alt: "Harsh Keshari's GitHub Profile Picture",
      },
    ],
    type: "website",
  },
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image", // Can be 'summary' or 'summary_large_image'
    title: "Harsh Keshari",
    description: "Harsh Keshari's Portfolio",
    image: "https://x.com/hrshkshri/photo",
    url: "https://x.com/hrshkshri",
  },
  // LinkedIn Metadata
  linkedin: {
    title: "Harsh Keshari",
    description: "Welcome to my portfolio on LinkedIn!",
    url: "https://www.linkedin.com/in/hrshkshri/",
    image: "https://github.com/hrshkshri.png", // Use a suitable image for LinkedIn
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content="@hrshkshri" />
        <meta name="twitter:creator" content="@hrshkshri" />
        <meta name="twitter:url" content={metadata.twitter.url} />

        {/* LinkedIn Open Graph meta tags */}
        <meta property="og:title" content={metadata.linkedin.title} />
        <meta
          property="og:description"
          content={metadata.linkedin.description}
        />
        <meta property="og:image" content={metadata.linkedin.image} />
        <meta property="og:url" content={metadata.linkedin.url} />
        <meta property="og:type" content="profile" />

        {/* Favicon */}
        <link rel="icon" href="https://github.com/hrshkshri.png" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://github.com/hrshkshri.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://github.com/hrshkshri.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://github.com/hrshkshri.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          href="https://github.com/hrshkshri.png"
          sizes="180x180"
        />

        {/* Webpage performance and security */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' https://vercel.com; object-src 'none';"
        />

        {/* Preload fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-neutral-200">
        <Container>{children}</Container>

        {/* Lazy-load analytics for performance */}
        <Analytics lazy />
        <SpeedInsights lazy />
      </body>
    </html>
  );
}
