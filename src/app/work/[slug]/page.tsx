import { notFound } from "next/navigation";
import CaseStudyView from "@/components/work/CaseStudyView";
import { caseStudies, getCaseStudy } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

// Fully static — the content is in the repo, so there is nothing to fetch.
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = study.org ? `${study.title} · ${study.org}` : study.title;
  return pageMetadata({
    title: study.title,
    path: `/work/${study.slug}`,
    description: study.summary,
    socialTitle: `${title} | Harsh Keshari`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyView study={study} />;
}
