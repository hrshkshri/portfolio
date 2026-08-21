import React from "react";
import type { Architecture } from "@/content/work";
import { hashSeed, roughRect, roughLine, arrowHead } from "./sketch";

/**
 * Renders an {@link Architecture} as a hand-drawn tier diagram.
 *
 * Layout is computed rather than authored: tiers stack top to bottom, nodes
 * spread evenly across each tier, and edges resolve to anchor points from the
 * relative position of the two nodes. That keeps the content file describing
 * *what connects to what* instead of carrying coordinates, which is the whole
 * reason this isn't four bespoke SVGs.
 */

const VIEW_W = 780;
const GUTTER = 88; // left column for tier labels
const PAD_R = 14;
const PAD_T = 16;
const NODE_H = 56;
const TIER_GAP = 58;
const NODE_GAP = 18;
const MAX_NODE_W = 208;

const CONTENT_W = VIEW_W - GUTTER - PAD_R;

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
  tier: number;
}

const ArchitectureDiagram: React.FC<{ arch: Architecture; id: string }> = ({
  arch,
  id,
}) => {
  // ── layout ────────────────────────────────────────────────────────────────
  const boxes = new Map<string, Box>();

  arch.tiers.forEach((tier, ti) => {
    const n = tier.nodes.length;
    const rawW = (CONTENT_W - NODE_GAP * (n - 1)) / n;
    const w = Math.min(rawW, MAX_NODE_W);
    const rowW = w * n + NODE_GAP * (n - 1);
    const startX = GUTTER + (CONTENT_W - rowW) / 2;
    const y = PAD_T + ti * (NODE_H + TIER_GAP);

    tier.nodes.forEach((node, ni) => {
      boxes.set(node.id, {
        x: startX + ni * (w + NODE_GAP),
        y,
        w,
        h: NODE_H,
        tier: ti,
      });
    });
  });

  const viewH = PAD_T * 2 + arch.tiers.length * NODE_H + (arch.tiers.length - 1) * TIER_GAP;

  /** Anchor points chosen from where the two boxes sit relative to each other. */
  const anchors = (a: Box, b: Box) => {
    if (b.tier > a.tier) {
      return [a.x + a.w / 2, a.y + a.h, b.x + b.w / 2, b.y] as const;
    }
    if (b.tier < a.tier) {
      return [a.x + a.w / 2, a.y, b.x + b.w / 2, b.y + b.h] as const;
    }
    // Same tier — go side to side, leaving the box from whichever edge faces.
    return a.x < b.x
      ? ([a.x + a.w, a.y + a.h / 2, b.x, b.y + b.h / 2] as const)
      : ([a.x, a.y + a.h / 2, b.x + b.w, b.y + b.h / 2] as const);
  };

  const titleId = `arch-title-${id}`;
  const descId = `arch-desc-${id}`;

  return (
    <figure className="my-8">
      {/* Below ~700px the diagram would scale down past legibility, so it
          scrolls inside its own track instead of shrinking. */}
      <div className="overflow-x-auto rounded-2xl border border-neutral-800/70 bg-black/30">
        <svg
          viewBox={`0 0 ${VIEW_W} ${viewH}`}
          className="block w-full min-w-[680px]"
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
        >
          <title id={titleId}>Architecture diagram</title>
          <desc id={descId}>{arch.caption}</desc>

          {/* ── edges, drawn first so boxes sit on top of the line ends ── */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {arch.edges.map((edge) => {
              const a = boxes.get(edge.from);
              const b = boxes.get(edge.to);
              if (!a || !b) return null;

              const [x1, y1, x2, y2] = anchors(a, b);
              const seed = hashSeed(`${edge.from}->${edge.to}`);
              const stroke = edge.hl ? "#f59e0b" : "#525252";

              return (
                <g key={`${edge.from}->${edge.to}`}>
                  <path
                    d={roughLine(x1, y1, x2, y2, seed)}
                    stroke={stroke}
                    strokeWidth={1.4}
                    strokeDasharray={edge.dashed ? "5 5" : undefined}
                  />
                  <path
                    d={arrowHead(x1, y1, x2, y2)}
                    stroke={stroke}
                    strokeWidth={1.4}
                  />
                  {edge.label && (
                    <text
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 - 5}
                      textAnchor="middle"
                      className="font-Sketch"
                      fontSize={11}
                      fill="#8a8a8a"
                      // Punch the label through the line it sits on.
                      stroke="#0f0f0f"
                      strokeWidth={4}
                      paintOrder="stroke"
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* ── tier labels ── */}
          {arch.tiers.map((tier, ti) => (
            <text
              key={tier.label}
              x={GUTTER - 16}
              y={PAD_T + ti * (NODE_H + TIER_GAP) + NODE_H / 2 + 4}
              textAnchor="end"
              className="font-Sketch"
              fontSize={11}
              fill="#6b6b6b"
              letterSpacing="0.08em"
            >
              {tier.label.toUpperCase()}
            </text>
          ))}

          {/* ── nodes ── */}
          {arch.tiers.flatMap((tier) =>
            tier.nodes.map((node) => {
              const box = boxes.get(node.id)!;
              const seed = hashSeed(node.id);
              const stroke = node.hl ? "#fbbf24" : "#8f8f8f";

              return (
                <g key={node.id}>
                  {node.hl && (
                    <rect
                      x={box.x}
                      y={box.y}
                      width={box.w}
                      height={box.h}
                      rx={6}
                      fill="#fbbf24"
                      opacity={0.07}
                    />
                  )}
                  {/* Two passes — a pen going round the shape twice. */}
                  <path
                    d={roughRect(box.x, box.y, box.w, box.h, seed, 0)}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    opacity={0.9}
                  />
                  <path
                    d={roughRect(box.x, box.y, box.w, box.h, seed, 1)}
                    fill="none"
                    stroke={stroke}
                    strokeWidth={1}
                    strokeLinecap="round"
                    opacity={0.45}
                  />
                  <text
                    x={box.x + box.w / 2}
                    y={box.y + (node.sub ? 24 : 33)}
                    textAnchor="middle"
                    className="font-Sketch"
                    fontSize={14}
                    fontWeight={700}
                    fill={node.hl ? "#fbbf24" : "#e5e5e5"}
                  >
                    {node.label}
                  </text>
                  {node.sub && (
                    <text
                      x={box.x + box.w / 2}
                      y={box.y + 41}
                      textAnchor="middle"
                      className="font-Sketch"
                      fontSize={11}
                      fill="#909090"
                    >
                      {node.sub}
                    </text>
                  )}
                </g>
              );
            }),
          )}
        </svg>
      </div>
      <figcaption className="text-xs text-neutral-400 leading-relaxed mt-3 max-w-2xl">
        {arch.caption}
      </figcaption>
    </figure>
  );
};

export default ArchitectureDiagram;
