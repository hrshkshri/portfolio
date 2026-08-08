import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center gap-6 px-6 text-center">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
          404
        </p>
        <h1 className="font-Rampart text-5xl md:text-7xl text-white leading-none">
          Lost.
        </h1>
        <p className="mt-4 text-sm text-neutral-400 max-w-sm">
          That page doesn&apos;t exist. It may have moved, or never did.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <Link
          href="/"
          className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] transition-colors duration-150"
        >
          Back home
        </Link>
        <Link
          href="/about"
          className="text-sm text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded transition-colors duration-150"
        >
          See my work →
        </Link>
      </div>
    </main>
  );
}
