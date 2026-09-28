import { notFound } from "next/navigation";
import CaseStudyView from "@/components/work/CaseStudyView";
import StructuredData from "@/components/shared/StructuredData";
import { caseStudies, getCaseStudy } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";
import { caseStudySchema } from "@/lib/schema";

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
    // A write-up of a system is an article, not a profile — and the type is
    // what unlocks the article:* tags below.
    type: "article",
    article: {
      section: study.org ?? "Personal projects",
      tags: study.tags,
      ...(study.updated ? { modifiedTime: study.updated } : {}),
    },
    // Each study generates its own card in opengraph-image.tsx.
    image: false,
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

  return (
    <>
      <StructuredData data={caseStudySchema(study)} />
      <CaseStudyView study={study} />
    </>
  );
}
