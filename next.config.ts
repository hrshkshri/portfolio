import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},

  // No remotePatterns: every next/image source is now local (public/).
  // Re-add a specific host here if you ever optimize a remote image — never
  // a "**" wildcard, which turns /_next/image into an open proxy.
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // Home now renders at "/". Keep the old path working for existing links.
      { source: "/home", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
