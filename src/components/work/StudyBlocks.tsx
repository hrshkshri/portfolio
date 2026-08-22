import React from "react";
import type { FailureMode } from "@/content/work";

/**
 * The failure-mode table — the one non-diagram structured block left.
 *
 * Kept plain on purpose. A diagram earns its styling by explaining a shape;
 * this is reference material someone scans for one row, so legibility wins.
 */

/* ── failure modes ────────────────────────────────────────────────────────── */

export const FailureModeTable: React.FC<{ modes: FailureMode[] }> = ({ modes }) => (
  <div className="my-7 overflow-x-auto rounded-2xl border border-neutral-800/70 bg-black/30">
    <table className="w-full min-w-[600px] text-left border-collapse">
      <thead>
        <tr className="border-b border-neutral-800">
          {["When", "What happens", "Recovery"].map((h) => (
            <th
              key={h}
              scope="col"
              className="text-[10px] tracking-[0.14em] uppercase text-neutral-500 font-medium px-4 py-3"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {modes.map((mode) => (
          <tr key={mode.trigger} className="border-b border-neutral-800/60 last:border-0">
            <th scope="row" className="align-top px-4 py-3 text-[13px] text-neutral-200 font-medium">
              {mode.trigger}
            </th>
            <td className="align-top px-4 py-3 text-[13px] text-neutral-400">{mode.behaviour}</td>
            <td className="align-top px-4 py-3 text-[13px] text-neutral-400">{mode.recovery}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
