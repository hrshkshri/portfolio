"use client";

import ErrorState from "@/components/github/ErrorState";

/**
 * Route-level boundary. Without this, a failure here escalates to
 * global-error.tsx and takes down the whole app shell (nav included).
 */
export default function GitHubError({ reset }: { error: Error; reset: () => void }) {
  return <ErrorState onRetry={reset} />;
}
