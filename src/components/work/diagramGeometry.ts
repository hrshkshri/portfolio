/**
 * Geometry for the system diagrams — the single source of truth for how a
 * grid position becomes a rectangle.
 *
 * Split out of SystemDiagram so the layout test measures the same numbers the
 * component renders. A test that redeclares these constants stops agreeing
 * with the component the moment one of them changes, which is the only way
 * a layout test is worse than no layout test at all.
 */

/** Fits inside max-w-6xl's article column (896px) with room to breathe. */
export const CANVAS_W = 860;
export const PAD = 24;
/** Vertical pitch of one row unit. */
export const ROW_H = 92;
/** Inset that makes a node sit inside its cell. Groups use 0 and so sit outside. */
export const NODE_GAP = 14;
export const DEFAULT_COLS = 12;

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const cellRect = (
  col: number,
  row: number,
  cw: number,
  rh: number,
  gap: number,
  cols: number = DEFAULT_COLS,
): Rect => {
  const colW = (CANVAS_W - PAD * 2) / cols;
  return {
    x: PAD + col * colW + gap / 2,
    y: PAD + row * ROW_H + gap / 2,
    w: cw * colW - gap,
    h: rh * ROW_H - gap,
  };
};

export const canvasHeight = (rows: number) => PAD * 2 + rows * ROW_H;

/** Area two rectangles share. Zero when they don't touch. */
export const overlapArea = (a: Rect, b: Rect) =>
  Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) *
  Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
