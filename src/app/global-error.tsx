"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-neutral-100 antialiased">
        <main className="min-h-[100svh] flex flex-col items-center justify-center gap-6 px-6 text-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
              Something broke
            </p>
            <h1 className="text-2xl font-semibold">This page hit an error.</h1>
            <p className="mt-2 text-sm text-neutral-400 max-w-sm">
              Not your fault. Try again, or head back to the homepage.
            </p>
            {error.digest && (
              <p className="mt-4 text-xs text-neutral-400 font-mono">
                ref: {error.digest}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <button
              onClick={reset}
              className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] transition-colors duration-150"
            >
              Try again
            </button>
            {/* Deliberately a plain <a>, not next/link: global-error replaces the
                root layout after the React tree has already failed, so the router
                context Link depends on may not be usable. A full page load is the
                reliable escape hatch here. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="text-sm text-neutral-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded transition-colors duration-150"
            >
              Go home →
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
