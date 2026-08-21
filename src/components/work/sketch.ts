/**
 * Geometry helpers for the hand-drawn architecture diagrams.
 *
 * Everything here is *deterministic*. The wobble that makes a box look drawn by
 * hand comes from a PRNG seeded off the shape's own identity, never from
 * `Math.random`, so a given diagram renders byte-identical on every build and on
 * both server and client. A random jitter would churn the HTML on every deploy
 * and risk a hydration mismatch for a purely decorative effect.
 */

/** mulberry32 — small, fast, and good enough for jitter. */
const makeRng = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/** FNV-1a, so a node's label seeds its own wobble and nothing else's. */
export const hashSeed = (input: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
};

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * One edge of a shape, as a quadratic curve bowing off the straight line.
 *
 * The control point sits at the midpoint pushed perpendicular to the edge, which
 * is what separates a hand-drawn line from a noisy one: the deviation is a
 * single smooth bow, not a per-point tremor.
 */
const bowedEdge = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  bow: number,
): string => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  // Unit normal, scaled by the bow amount.
  const nx = (-dy / len) * bow;
  const ny = (dx / len) * bow;
  return `Q${round(mx + nx)},${round(my + ny)} ${round(x2)},${round(y2)}`;
};

/**
 * A rectangle that looks drawn rather than computed.
 *
 * Corners are jittered and each side bows slightly. Returns a path string; call
 * it twice with different `pass` values to get the doubled-up stroke of a pen
 * gone round a shape twice, which is most of the hand-drawn read.
 */
export const roughRect = (
  x: number,
  y: number,
  w: number,
  h: number,
  seed: number,
  pass = 0,
): string => {
  const rng = makeRng(seed + pass * 7919);
  const amp = 1.6;
  const j = () => (rng() - 0.5) * 2 * amp;
  const bow = () => (rng() - 0.5) * 2 * 1.1;

  // Corners, each nudged off true.
  const tl: [number, number] = [x + j(), y + j()];
  const tr: [number, number] = [x + w + j(), y + j()];
  const br: [number, number] = [x + w + j(), y + h + j()];
  const bl: [number, number] = [x + j(), y + h + j()];

  // Overshoot the closing corner slightly — a pen stroke rarely lands exactly
  // where it started, and that tiny gap-or-overlap sells the effect.
  const close: [number, number] = [tl[0] + j() * 0.8, tl[1] + j() * 0.8];

  return [
    `M${round(tl[0])},${round(tl[1])}`,
    bowedEdge(tl[0], tl[1], tr[0], tr[1], bow()),
    bowedEdge(tr[0], tr[1], br[0], br[1], bow()),
    bowedEdge(br[0], br[1], bl[0], bl[1], bow()),
    bowedEdge(bl[0], bl[1], close[0], close[1], bow()),
  ].join(" ");
};

/** A connector between two points, bowed like a drawn line. */
export const roughLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  seed: number,
): string => {
  const rng = makeRng(seed);
  const j = () => (rng() - 0.5) * 1.6;
  const bow = (rng() - 0.5) * 2 * 2.2;
  return [
    `M${round(x1 + j())},${round(y1 + j())}`,
    bowedEdge(x1, y1, x2 + j(), y2 + j(), bow),
  ].join(" ");
};

/**
 * Two short strokes forming an arrowhead at (x2,y2), angled along the incoming
 * direction. Drawn as a path rather than an SVG marker so it inherits the same
 * rough stroke treatment as everything else.
 */
export const arrowHead = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  size = 7,
): string => {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const spread = 0.42;
  const ax = x2 - size * Math.cos(angle - spread);
  const ay = y2 - size * Math.sin(angle - spread);
  const bx = x2 - size * Math.cos(angle + spread);
  const by = y2 - size * Math.sin(angle + spread);
  return [
    `M${round(ax)},${round(ay)}`,
    `L${round(x2)},${round(y2)}`,
    `L${round(bx)},${round(by)}`,
  ].join(" ");
};
