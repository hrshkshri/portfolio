import { describe, it, expect } from "vitest";
import { caseStudies } from "@/content/work";
import type { SystemArchitecture } from "@/content/work";
import {
  CANVAS_W,
  PAD,
  NODE_GAP,
  DEFAULT_COLS,
  cellRect,
  canvasHeight,
  overlapArea,
  type Rect,
} from "./diagramGeometry";

/**
 * Diagram layouts are hand-placed on a grid, so nothing stops two boxes
 * landing on top of each other — and a diagram that overlaps still typechecks,
 * still builds, and still renders. It is only wrong to look at.
 *
 * This exists because a bulk edit once moved a node in the wrong study: a
 * whole-file find-and-replace matched an earlier diagram than the intended
 * one, silently overlapping two boxes on one page while leaving the page it
 * was meant to fix unchanged. Both survived every other check.
 */

const diagrams: { name: string; arch: SystemArchitecture }[] = caseStudies.flatMap((study) =>
  study.sections
    .filter((s) => s.systemDiagram)
    .map((s) => ({ name: `${study.slug} — ${s.heading}`, arch: s.systemDiagram! })),
);

const rectsOf = (arch: SystemArchitecture) => {
  const cols = arch.cols ?? DEFAULT_COLS;
  const nodes = new Map<string, Rect>();
  for (const n of arch.nodes) {
    nodes.set(n.id, cellRect(n.col, n.row, n.cw ?? 2, n.rh ?? 1, NODE_GAP, cols));
  }
  const groups = new Map<string, Rect>();
  for (const g of arch.groups ?? []) {
    groups.set(g.id, cellRect(g.col, g.row, g.cw, g.rh, 0, cols));
  }
  return { nodes, groups };
};

describe("system diagram layouts", () => {
  it("has at least one diagram to check", () => {
    expect(diagrams.length).toBeGreaterThan(0);
  });

  describe.each(diagrams)("$name", ({ arch }) => {
    const { nodes, groups } = rectsOf(arch);
    const all = [...nodes.values(), ...groups.values()];

    it("has no overlapping nodes", () => {
      const ids = [...nodes.keys()];
      const collisions: string[] = [];
      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          if (overlapArea(nodes.get(ids[i])!, nodes.get(ids[j])!) > 1) {
            collisions.push(`${ids[i]} / ${ids[j]}`);
          }
        }
      }
      expect(collisions).toEqual([]);
    });

    it("fits inside its declared canvas", () => {
      const bottom = Math.max(...all.map((r) => r.y + r.h));
      expect(bottom).toBeLessThanOrEqual(canvasHeight(arch.rows) + 1);
      expect(Math.min(...all.map((r) => r.x))).toBeGreaterThanOrEqual(0);
      expect(Math.max(...all.map((r) => r.x + r.w))).toBeLessThanOrEqual(CANVAS_W);
    });

    it("is balanced on the canvas", () => {
      const left = Math.min(...all.map((r) => r.x));
      const right = CANVAS_W - Math.max(...all.map((r) => r.x + r.w));
      const top = Math.min(...all.map((r) => r.y));
      const bottom = canvasHeight(arch.rows) - Math.max(...all.map((r) => r.y + r.h));
      expect(Math.abs(left - right)).toBeLessThanOrEqual(2);
      expect(Math.abs(top - bottom)).toBeLessThanOrEqual(2);
      expect(top).toBeGreaterThanOrEqual(PAD - 1);
    });

    it("keeps every node that touches a group fully inside it", () => {
      const escaping: string[] = [];
      for (const [gid, g] of groups) {
        for (const [nid, n] of nodes) {
          if (overlapArea(n, g) <= 1) continue;
          const contained =
            n.x >= g.x - 1 && n.y >= g.y - 1 && n.x + n.w <= g.x + g.w + 1 && n.y + n.h <= g.y + g.h + 1;
          if (!contained) escaping.push(`${nid} half-inside ${gid}`);
        }
      }
      expect(escaping).toEqual([]);
    });

    it("only draws edges between nodes that exist", () => {
      const dangling = arch.edges
        .filter((e) => !nodes.has(e.from) || !nodes.has(e.to))
        .map((e) => `${e.from} -> ${e.to}`);
      expect(dangling).toEqual([]);
    });
  });
});
