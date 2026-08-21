import React from "react";
import type { DataModel, Entity, FailureMode, Metric } from "@/content/work";

/**
 * The non-diagram structured blocks of a case study: headline metrics, the
 * schema tree, and the failure-mode table.
 *
 * These are deliberately *not* hand-drawn. The architecture sketches earn the
 * rough treatment because they're explaining a shape; a table of failure modes
 * is reference material, and making it wobble would cost legibility for nothing.
 */

/* ── metrics ──────────────────────────────────────────────────────────────── */

export const Metrics: React.FC<{ metrics: Metric[] }> = ({ metrics }) => (
  <dl className="flex flex-wrap gap-x-10 gap-y-5 mt-8 pt-6 border-t border-neutral-800">
    {metrics.map((m) => (
      <div key={m.label}>
        <dt className="sr-only">{m.label}</dt>
        <dd>
          <span className="block text-2xl md:text-3xl text-white font-semibold tabular-nums leading-none">
            {m.value}
          </span>
          <span className="block text-[11px] tracking-[0.12em] uppercase text-neutral-400 mt-2">
            {m.label}
          </span>
        </dd>
      </div>
    ))}
  </dl>
);

/* ── data model ───────────────────────────────────────────────────────────── */

const EntityNode: React.FC<{ entity: Entity; depth: number }> = ({ entity, depth }) => (
  <li className={depth > 0 ? "pl-5 border-l border-neutral-800" : undefined}>
    <div className="py-1">
      <span className="text-[13px] text-neutral-200 font-medium">{entity.name}</span>
      {entity.note && (
        <span className="text-[11px] text-neutral-500 ml-2.5">{entity.note}</span>
      )}
    </div>
    {entity.children && (
      <ul>
        {entity.children.map((child) => (
          <EntityNode key={child.name} entity={child} depth={depth + 1} />
        ))}
      </ul>
    )}
  </li>
);

export const DataModelTree: React.FC<{ model: DataModel }> = ({ model }) => (
  <figure className="my-7">
    <div className="rounded-2xl border border-neutral-800/70 bg-black/30 px-5 py-4">
      <ul>
        {model.entities.map((entity) => (
          <EntityNode key={entity.name} entity={entity} depth={0} />
        ))}
      </ul>
    </div>
    <figcaption className="text-xs text-neutral-400 leading-relaxed mt-3 max-w-2xl">
      {model.caption}
    </figcaption>
  </figure>
);

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
