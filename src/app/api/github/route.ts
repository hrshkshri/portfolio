import { NextResponse } from "next/server";

const GITHUB_USERNAME = "hrshkshri";
const GITHUB_API = "https://api.github.com";

export async function GET() {
  try {
    // Fetch user data
    const userResponse = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    // Fetch repos
    const reposResponse = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    // Fetch events (recent activity)
    const eventsResponse = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/events/public?per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (
      !userResponse.ok ||
      !reposResponse.ok ||
      !eventsResponse.ok
    ) {
      throw new Error("Failed to fetch GitHub data");
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();
    const eventsData = await eventsResponse.json();

    return NextResponse.json({
      user: userData,
      repos: reposData,
      events: eventsData,
    });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
