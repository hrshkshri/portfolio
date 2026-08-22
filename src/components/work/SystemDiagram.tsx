"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { SystemArchitecture, DiagramNode } from "@/content/work";

/**
 * System-design diagram: free-form boxes on a coarse grid, grouped regions,
 * labelled edges, and a note that appears on hover, focus or tap.
 *
 * Layout comes from the content rather than being computed. That's a reversal
 * of the earlier tier diagram, and a deliberate one — a datacenter boundary
 * wrapping four nodes while a cache sits outside it isn't something a tier
 * stack can express, and these diagrams are read far more often than they're
 * edited.
 *
 * Placement is on a 12-column grid with fractional units allowed, so a group
 * can be a third of a row taller than the nodes inside it and still be
 * described in the same vocabulary.
 */

const CANVAS_W = 860; // fits inside max-w-4xl (896) with room to breathe
const PAD = 24;
const ROW_H = 92; // vertical pitch of one row unit
const NODE_GAP = 14; // inset that makes nodes sit inside their cell

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

const overlap = (a: Rect, b: Rect) =>
  Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) *
  Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));

/** Rough rendered height of a note card, used only to place it. */
const tipHeight = (note: string, caution?: string) =>
  52 + Math.ceil(note.length / 34) * 19 + (caution ? 26 + Math.ceil(caution.length / 36) * 18 : 0);

const SystemDiagram: React.FC<{ arch: SystemArchitecture; id: string }> = ({ arch, id }) => {
  // Hover previews; a click pins so the note survives the pointer leaving.
  //
  // Hover wins over the pin, not the other way round. Pinned-wins meant that
  // after any click, hovering a different box did nothing — you had to click
  // twice, once to move the pin and again to believe it.
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const active = hovered ?? pinned;

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPinned(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pinned]);

  const cols = arch.cols ?? 12;
  const colW = (CANVAS_W - PAD * 2) / cols;
  const canvasH = PAD * 2 + arch.rows * ROW_H;

  const cell = (col: number, row: number, cw: number, rh: number, gap: number): Rect => ({
    x: PAD + col * colW + gap / 2,
    y: PAD + row * ROW_H + gap / 2,
    w: cw * colW - gap,
    h: rh * ROW_H - gap,
  });

  const rects = new Map<string, Rect>();
  for (const n of arch.nodes) {
    rects.set(n.id, cell(n.col, n.row, n.cw ?? 2, n.rh ?? 1, NODE_GAP));
  }

  /**
   * Anchors, in two passes.
   *
   * First decide which side of each box an edge should use — whichever axis
   * dominates. Then spread the edges that landed on the same side along it,
   * because a cycle puts an arrival and a departure on one edge of one box,
   * and at a single midpoint they sit on top of each other and the direction
   * stops being readable.
   */
  type Side = "left" | "right" | "top" | "bottom";

  const sideOf = (a: Rect, b: Rect): Side => {
    const dx = b.x + b.w / 2 - (a.x + a.w / 2);
    const dy = b.y + b.h / 2 - (a.y + a.h / 2);
    if (Math.abs(dx) > Math.abs(dy)) return dx > 0 ? "right" : "left";
    return dy > 0 ? "bottom" : "top";
  };

  const flip: Record<Side, Side> = {
    left: "right",
    right: "left",
    top: "bottom",
    bottom: "top",
  };

  const sides = arch.edges.map((e) => {
    const a = rects.get(e.from);
    const b = rects.get(e.to);
    if (!a || !b) return null;
    const s = sideOf(a, b);
    return { fromSide: s, toSide: flip[s] };
  });

  // How many edges each (box, side) carries, and each edge's place in that run.
  const total = new Map<string, number>();
  const slot: { from: number; to: number }[] = [];
  const bump = (key: string) => {
    const n = total.get(key) ?? 0;
    total.set(key, n + 1);
    return n;
  };
  arch.edges.forEach((e, i) => {
    const s = sides[i];
    if (!s) return void slot.push({ from: 0, to: 0 });
    slot.push({
      from: bump(`${e.from}:${s.fromSide}`),
      to: bump(`${e.to}:${s.toSide}`),
    });
  });

  const pointOn = (r: Rect, side: Side, idx: number, n: number) => {
    const t = (idx + 1) / (n + 1); // one edge -> 0.5, the old midpoint
    if (side === "left") return { x: r.x, y: r.y + r.h * t };
    if (side === "right") return { x: r.x + r.w, y: r.y + r.h * t };
    if (side === "top") return { x: r.x + r.w * t, y: r.y };
    return { x: r.x + r.w * t, y: r.y + r.h };
  };

  const activeNode = arch.nodes.find((n) => n.id === active) ?? null;
  const activeRect = active ? rects.get(active) : null;

  /**
   * Try right, left, below and above; keep whichever covers the least of the
   * other boxes. Right-then-flip-left was the obvious rule and it put seven of
   * nine notes directly on top of another node.
   */
  const tip = (() => {
    if (!activeNode || !activeRect || !activeNode.note) return null;
    const W = 268;
    const H = tipHeight(activeNode.note, activeNode.caution);
    const M = 14;
    const r = activeRect;

    const candidates = [
      { x: r.x + r.w + M, y: r.y + r.h / 2 - H / 2 },
      { x: r.x - W - M, y: r.y + r.h / 2 - H / 2 },
      { x: r.x + r.w / 2 - W / 2, y: r.y + r.h + M },
      { x: r.x + r.w / 2 - W / 2, y: r.y - H - M },
    ];

    let best = { x: 8, y: 8 };
    let bestScore = Infinity;

    for (const c of candidates) {
      const x = clamp(c.x, 8, CANVAS_W - W - 8);
      const y = clamp(c.y, 8, Math.max(8, canvasH - H - 8));
      const box = { x, y, w: W, h: H };

      let score = 0;
      for (const [nid, nr] of rects) {
        if (nid !== activeNode.id) score += overlap(box, nr);
      }
      // Being shoved back inside the canvas is itself a bad sign.
      score += (Math.abs(x - c.x) + Math.abs(y - c.y)) * 3;

      if (score < bestScore) {
        bestScore = score;
        best = { x, y };
      }
    }
    return { ...best, w: W };
  })();

  const captionId = `diag-cap-${id}`;

  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-2xl border border-neutral-800/70 bg-black/30">
        <div
          className="relative"
          style={{ width: CANVAS_W, height: canvasH }}
          onMouseLeave={() => setHovered(null)}
        >
          {/* ── edges ───────────────────────────────────────────────────── */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={CANVAS_W}
            height={canvasH}
            aria-hidden="true"
          >
            <defs>
              <marker
                id={`arrow-${id}`}
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L8,4 L0,8" fill="none" stroke="#6f6f6f" strokeWidth="1.2" />
              </marker>
              <marker
                id={`arrow-hl-${id}`}
                viewBox="0 0 8 8"
                refX="7"
                refY="4"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L8,4 L0,8" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
              </marker>
            </defs>

            {arch.edges.map((e, i) => {
              const a = rects.get(e.from);
              const b = rects.get(e.to);
              const s = sides[i];
              if (!a || !b || !s) return null;
              const p1 = pointOn(a, s.fromSide, slot[i].from, total.get(`${e.from}:${s.fromSide}`)!);
              const p2 = pointOn(b, s.toSide, slot[i].to, total.get(`${e.to}:${s.toSide}`)!);
              const { x: x1, y: y1 } = p1;
              const { x: x2, y: y2 } = p2;
              const dim = active !== null && e.from !== active && e.to !== active;

              return (
                <g key={`${e.from}->${e.to}`} opacity={dim ? 0.25 : 1}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={e.hl ? "#f59e0b" : "#6f6f6f"}
                    strokeWidth={1.2}
                    strokeDasharray={e.dashed ? "5 4" : undefined}
                    markerEnd={`url(#arrow${e.hl ? "-hl" : ""}-${id})`}
                  />
                  {e.label && (
                    <text
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 - 6}
                      textAnchor="middle"
                      fontSize={10.5}
                      fill="#8f8f8f"
                      stroke="#0d0d0d"
                      strokeWidth={4}
                      paintOrder="stroke"
                      className="font-mono"
                    >
                      {e.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* ── groups, behind the nodes ────────────────────────────────── */}
          {arch.groups?.map((g) => {
            const r = cell(g.col, g.row, g.cw, g.rh, 0);
            return (
              <div
                key={g.id}
                // Decorative — must never sit between the pointer and a node.
                className={`absolute pointer-events-none rounded-xl border ${
                  g.solid ? "border-neutral-700" : "border-dashed border-neutral-700/70"
                }`}
                style={{ left: r.x, top: r.y, width: r.w, height: r.h }}
              >
                {g.label && (
                  <span
                    className={
                      g.solid
                        ? "absolute left-1/2 -translate-x-1/2 top-2.5 text-[13px] font-semibold text-neutral-100"
                        : "absolute left-3 top-2.5 text-[10px] tracking-[0.14em] uppercase text-neutral-500"
                    }
                  >
                    {g.label}
                  </span>
                )}
              </div>
            );
          })}

          {/* ── nodes ───────────────────────────────────────────────────── */}
          {arch.nodes.map((n) => {
            const r = rects.get(n.id)!;
            const isActive = active === n.id;
            const dim = active !== null && !isActive;
            const circle = n.shape === "circle";
            const size = circle ? Math.min(r.w, r.h) : 0;

            const common = {
              left: circle ? r.x + (r.w - size) / 2 : r.x,
              top: circle ? r.y + (r.h - size) / 2 : r.y,
              width: circle ? size : r.w,
              height: circle ? size : r.h,
            };

            const className = `absolute flex flex-col items-center justify-center text-center px-2.5 transition-all duration-150 ${
              circle ? "rounded-full" : "rounded-xl"
            } border ${
              isActive
                ? "border-amber-400 bg-neutral-900"
                : n.href
                  ? // A link needs its own weight. Sharing `hl`'s styling made
                    // amber read as "important" rather than "clickable", and a
                    // box you can open should not look like a box you can't.
                    "border-amber-400/80 bg-amber-400/[0.10] shadow-[0_0_0_3px_rgba(251,191,36,0.06)]"
                  : n.hl
                    ? "border-amber-400/45 bg-amber-400/[0.06]"
                    : "border-neutral-700 bg-neutral-900/60"
            } ${
              // A pin outlives the pointer, so it needs to be visible even
              // when the note is showing some other box.
              pinned === n.id ? "ring-1 ring-amber-400/60" : ""
            } ${dim ? "opacity-40" : "opacity-100"} ${
              n.href ? "cursor-pointer" : n.note ? "cursor-help" : ""
            }`;

            // Hover still previews the note on a linked box; only the click
            // differs, because navigating and pinning can't share one gesture.
            const hoverProps = n.note
              ? {
                  onMouseEnter: () => setHovered(n.id),
                  onFocus: () => setHovered(n.id),
                  onBlur: () => setHovered(null),
                }
              : {};

            const inner = (
              <>
                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    n.hl || isActive ? "text-amber-300" : "text-neutral-100"
                  } ${
                    // Underline plus an inline arrow — the two things every
                    // reader already recognises as "this goes somewhere",
                    // rather than a glyph tucked in a corner.
                    n.href
                      ? "underline decoration-amber-400/50 underline-offset-2"
                      : ""
                  }`}
                >
                  {n.label}
                  {n.href && (
                    <span className="ml-1 no-underline" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </span>
                {n.sub && (
                  <span className="text-[10.5px] text-neutral-400 leading-snug mt-1">
                    {n.sub}
                  </span>
                )}
                {n.href && (
                  <span
                    className="mt-2 text-[9px] tracking-[0.16em] uppercase text-amber-400 border border-amber-400/40 rounded-full px-2 py-0.5"
                    aria-hidden="true"
                  >
                    Case study
                  </span>
                )}
              </>
            );

            if (n.href) {
              return (
                <Link key={n.id} href={n.href} className={className} style={common} {...hoverProps}>
                  {inner}
                </Link>
              );
            }
            if (n.note) {
              return (
                <button
                  key={n.id}
                  type="button"
                  className={className}
                  style={common}
                  {...hoverProps}
                  onClick={() => setPinned(pinned === n.id ? null : n.id)}
                  aria-describedby={isActive ? `${id}-tip` : undefined}
                >
                  {inner}
                </button>
              );
            }
            return (
              <div key={n.id} className={className} style={common}>
                {inner}
              </div>
            );
          })}

          {/* ── note ────────────────────────────────────────────────────── */}
          {tip && activeNode && (
            <div
              id={`${id}-tip`}
              role="tooltip"
              // Never intercepts the pointer — a note that sits over the box
              // you're reaching for is what made hovering feel broken.
              className="absolute z-10 pointer-events-none rounded-xl border border-neutral-700 bg-neutral-950 shadow-xl shadow-black/60 px-4 py-3.5"
              style={{ left: tip.x, top: tip.y, width: tip.w }}
            >
              <p className="font-Sketch italic text-[15px] text-neutral-100 mb-2">
                {activeNode.label}
              </p>
              <p className="text-[12.5px] text-neutral-300 leading-relaxed">
                {activeNode.note}
              </p>
              {activeNode.caution && (
                <p className="text-[12px] text-amber-300/90 leading-relaxed mt-3 rounded-lg bg-amber-400/10 border border-amber-400/20 px-3 py-2">
                  {activeNode.caution}
                </p>
              )}
              {activeNode.href && (
                <p className="text-[12px] text-amber-400 mt-3">Read the case study →</p>
              )}
            </div>
          )}
        </div>
      </div>

      <figcaption
        id={captionId}
        className="font-Sketch text-[13px] text-neutral-400 leading-relaxed mt-3 max-w-2xl"
      >
        {arch.caption} Hover, or tap, any box for its note.
      </figcaption>

      {/* Every note in reading order, for screen readers and for anyone who
          can't hover. The visual tooltip is an enhancement over this. */}
      <ul className="sr-only">
        {arch.nodes
          .filter((n): n is DiagramNode & { note: string } => Boolean(n.note))
          .map((n) => (
            <li key={n.id}>
              {n.label}: {n.note} {n.caution ?? ""}
            </li>
          ))}
      </ul>
    </figure>
  );
};

export default SystemDiagram;
