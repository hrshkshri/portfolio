"use client";

import React, { useState, useEffect } from "react";
import { githubService, GitHubData } from "@/lib/api";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import Header from "./Header";
import StatsCards from "./StatsCards";
import ContributionGraph from "./ContributionGraph";

const GitHub: React.FC = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const result = await githubService.getGitHubData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <LoadingState />;
  if (!data || !data.user) return <ErrorState />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header user={data.user} />
        <StatsCards user={data.user} />
        <ContributionGraph />
      </div>
    </div>
  );
};

export default GitHub;
