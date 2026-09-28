import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/content/work";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study by Harsh Keshari";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

/**
 * Per-study social card. Every /work/<slug> used to unfurl with the same
 * /og-image.jpg as the homepage, so pasting a specific write-up into a Slack
 * or a DM said "someone's portfolio" rather than which system it describes.
 *
 * Satori (what ImageResponse runs on) supports a flexbox subset only: every
 * element needs an explicit display, there is no grid, and shorthand is
 * unreliable — so this is deliberately plain. Text only, no diagram: rendering
 * the real canvas here would mean reimplementing the layout engine against a
 * renderer that cannot run it.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f0f0f",
            color: "#fafafa",
            fontSize: 64,
          }}
        >
          Harsh Keshari
        </div>
      ),
      size
    );
  }

  const facts = study.facts.slice(0, 2);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f0f0f",
          padding: "72px 80px",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a3a3a3",
            }}
          >
            <span>{study.period}</span>
            {study.org ? <span style={{ color: "#fbbf24" }}>{study.org}</span> : null}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              marginTop: 20,
            }}
          >
            {study.title}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: "#d4d4d4",
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            {study.summary.length > 150
              ? `${study.summary.slice(0, 150).trimEnd()}…`
              : study.summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid #292929",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 48 }}>
            {facts.map((fact) => (
              <div
                key={fact.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: 18,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#737373",
                  }}
                >
                  {fact.label}
                </span>
                <span style={{ fontSize: 26, color: "#e5e5e5", marginTop: 6 }}>
                  {fact.value.length > 34
                    ? `${fact.value.slice(0, 34).trimEnd()}…`
                    : fact.value}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#a3a3a3" }}>
            hrshkshri.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
