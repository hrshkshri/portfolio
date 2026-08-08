import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Only Rampart One is actually used (the three display headings), so it
        // is the only family loaded. Work Sans and Inter used to be fetched from
        // Google Fonts on every page load and applied to nothing.
        Rampart: ["var(--font-rampart)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
