import { ImageResponse } from "next/og";
import { caseStudies } from "@/content/work";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case studies by Harsh Keshari";

/** The index's own card — see the per-study one for the satori constraints. */
export default async function Image() {
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
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a3a3a3",
            }}
          >
            Harsh Keshari — Founding Engineer
          </div>
          <div
            style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 20 }}
          >
            Work.
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
            {caseStudies.length} systems, written up with the architecture and the
            parts that broke.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            borderTop: "1px solid #292929",
            paddingTop: 28,
          }}
        >
          {caseStudies.map((study) => (
            <span
              key={study.slug}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#e5e5e5",
                border: "1px solid #404040",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {study.title}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
