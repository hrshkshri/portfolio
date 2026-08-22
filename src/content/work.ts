/**
 * Case studies for /work.
 *
 * Flat by design — each entry stands alone and carries an optional `org`,
 * rather than nesting studies under a project or employer. Grouping can be
 * done visually later; un-nesting a hierarchy cannot.
 *
 * Every technical claim here is drawn from the actual repositories
 * (DECISIONS.md, ARCHITECTURE.md, eval harness READMEs, source). Customer
 * names and revenue attribution are deliberately omitted from client work.
 */

export interface Flow {
  /** Left-to-right pipeline nodes. `hl` marks the one that matters. */
  nodes: { label: string; hl?: boolean }[];
  caption: string;
}

/** One box in an architecture diagram. `id` is referenced by edges. */
export interface ArchNode {
  id: string;
  label: string;
  /** Second line — stack or role, kept short enough to fit the box. */
  sub?: string;
  hl?: boolean;
}

export interface ArchTier {
  /** Rendered in the left gutter: CLIENT, API, STORE… */
  label: string;
  nodes: ArchNode[];
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  /** Dashed reads as "async" — a hop the caller doesn't wait on. */
  dashed?: boolean;
  hl?: boolean;
}

/**
 * Positions are computed by ArchitectureDiagram, not authored here — this
 * describes topology only.
 */
export interface Architecture {
  tiers: ArchTier[];
  edges: ArchEdge[];
  caption: string;
}

export interface FailureMode {
  trigger: string;
  behaviour: string;
  recovery: string;
}

/* ── system diagrams ──────────────────────────────────────────────────────
 * Placement lives in the content here, unlike the tier `Architecture` above.
 * A datacenter boundary wrapping four nodes while a store sits outside it is
 * not something a tier stack can express, and these get read far more often
 * than they get edited. Grid units are fractional, so a group can be a third
 * of a row taller than its contents and still be described the same way.
 */

export interface DiagramNode {
  id: string;
  label: string;
  /** Second line — the one-phrase "what is it". */
  sub?: string;
  col: number;
  row: number;
  /** Column / row span. Default 2 × 1. */
  cw?: number;
  rh?: number;
  shape?: "box" | "circle";
  hl?: boolean;
  /** Shown on hover, focus or tap. This is where the real explanation goes. */
  note?: string;
  /** The gotcha — rendered as an amber callout under the note. */
  caution?: string;
}

export interface DiagramGroup {
  id: string;
  label?: string;
  col: number;
  row: number;
  cw: number;
  rh: number;
  /** Solid reads as one real unit; dashed as a boundary or region. */
  solid?: boolean;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  hl?: boolean;
}

export interface SystemArchitecture {
  /** Grid columns. Defaults to 12. */
  cols?: number;
  rows: number;
  nodes: DiagramNode[];
  groups?: DiagramGroup[];
  edges: DiagramEdge[];
  caption: string;
}

export interface Section {
  heading: string;
  /** Paragraphs. `**bold**` is rendered via renderTextWithBold. */
  body: string[];
  /**
   * Scannable points, rendered after `body`. Use when a section is a list of
   * separate claims rather than an argument that builds — four dense
   * paragraphs of equal weight read as a wall, and nobody finishes them.
   * Lead each one with a bolded claim so the page can be skimmed on the bolds.
   */
  bullets?: string[];
  flow?: Flow;
  architecture?: Architecture;
  systemDiagram?: SystemArchitecture;
  failureModes?: FailureMode[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Employer, when the work wasn't solo. Renders as a badge. */
  org?: string;
  period: string;
  role: string;
  /** One line for the index page. */
  summary: string;
  tags: string[];
  href?: { label: string; url: string };
  facts: { label: string; value: string }[];
  /**
   * Employer work. Renders a note explaining that the architecture is described
   * at pattern level, and is the flag that keeps schema entities, internal
   * service names and failure-mode tables off these pages.
   */
  restricted?: boolean;
  sections: Section[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "crelyzor",
    title: "Crelyzor",
    period: "2025 — now",
    role: "Solo — design, build, ship",
    summary:
      "Four SaaS tools collapsed into one workspace for solo professionals — cards, scheduling, meeting intelligence and tasks that actually share state. Live with billing.",
    tags: ["PostgreSQL", "Prisma", "Deepgram", "Recall.ai", "Bull · Redis", "React", "Next.js"],
    href: { label: "crelyzor.hrshkshri.com", url: "https://crelyzor.hrshkshri.com" },
    facts: [
      { label: "Role", value: "Solo — design, build, ship" },
      { label: "Stack", value: "Node 20 · Express 5 · Prisma 6" },
      { label: "Database", value: "PostgreSQL (Neon, serverless)" },
      { label: "AI", value: "Deepgram Nova-2, GPT-4o-mini" },
      { label: "Async", value: "Bull on Upstash Redis" },
      { label: "Status", value: "Live, billing enabled" },
    ],
    sections: [
      {
        heading: "System architecture",
        body: [
          "Two frontends, one backend, one database — and **three independent repos**, not a workspace. Their deploy targets have nothing in common, and a shared lockfile would only couple them.",
        ],
        systemDiagram: {
          rows: 7.2,
          groups: [
            { id: "g-client", label: "Clients", col: 2.7, row: 0, cw: 6.1, rh: 1.6, solid: true },
            {
              id: "g-async",
              label: "Async — off the request path",
              col: 0.4,
              row: 4.1,
              cw: 6.3,
              rh: 2.9,
            },
          ],
          nodes: [
            {
              id: "dash",
              label: "Dashboard",
              sub: "React 19 · Vite",
              col: 3.0,
              row: 0.5,
              cw: 2.6,
              rh: 0.9,
              note: "The authenticated app — meetings, cards, tasks and the meeting-AI interface. Client-rendered, because nothing here is worth indexing and every view sits behind a login.",
            },
            {
              id: "pub",
              label: "Public pages",
              sub: "Next.js · SSR",
              col: 5.9,
              row: 0.5,
              cw: 2.6,
              rh: 0.9,
              note: "Card pages and booking links, on their own domain with no auth at all. Server-rendered because these are the only pages that have to look right in a search result or a link preview.",
              caution:
                "Its own repo and its own deploy — the one thing keeping dashboard bundle weight off a page a stranger loads.",
            },
            {
              id: "api",
              label: "calendar-backend",
              sub: "Express 5 · Prisma 6",
              col: 4.2,
              row: 2.3,
              cw: 3.2,
              note: "One service owning every route: auth, meetings, cards, the meeting-AI endpoints and the public read paths. Prisma talks to Postgres; nothing else does.",
            },
            {
              id: "gcs",
              label: "Cloud Storage",
              sub: "recordings",
              col: 8.6,
              row: 2.3,
              cw: 2.6,
              note: "Raw audio lands here first and the worker reads it back out. Keeping recordings out of the database is what lets a transcript row stay small enough to query cheaply.",
            },
            {
              id: "pg",
              label: "PostgreSQL",
              sub: "Neon, serverless",
              col: 8.6,
              row: 4.6,
              cw: 2.6,
              note: "All 47 tables. The worker writes results back onto the same meeting row the API already served, which is the entire reason this is relational rather than document storage.",
            },
            {
              id: "q",
              label: "Bull queue",
              sub: "Upstash Redis",
              col: 0.7,
              row: 4.6,
              cw: 2.6,
              hl: true,
              note: "The seam. Upload enqueues a job and returns immediately, so a 30–120 second transcription never sits inside an HTTP request. Bull carries retry counts and job state, so a failure is observable rather than silent.",
              caution:
                "Bull needs a real TCP connection to Redis, not a REST client — which is also why the worker can't be serverless.",
            },
            {
              id: "w",
              label: "Worker process",
              sub: "long-lived",
              col: 3.8,
              row: 4.6,
              cw: 2.6,
              note: "A separate always-on process. Pulls the job, fetches the audio, calls transcription then the model, and writes results back. Three attempts with exponential backoff before the meeting is marked FAILED.",
            },
            {
              id: "dg",
              label: "Deepgram",
              sub: "Nova-2 · diarized",
              col: 0.7,
              row: 5.9,
              cw: 2.6,
              note: "Speech to text with speaker diarization on. Whisper was the obvious default and can't tell you who said what — the one property you cannot add afterwards in post-processing.",
            },
            {
              id: "llm",
              label: "GPT-4o-mini",
              sub: "summary · actions",
              col: 3.8,
              row: 5.9,
              cw: 2.6,
              note: "Turns the transcript into a summary, key points and action items. Structured extraction rather than reasoning, which is why the small model is the correct one — about 10× cheaper at the same usable quality.",
            },
          ],
          edges: [
            { from: "dash", to: "api" },
            { from: "pub", to: "api" },
            { from: "api", to: "gcs", label: "upload" },
            { from: "api", to: "pg", label: "reads / writes" },
            { from: "api", to: "q", label: "enqueue", hl: true },
            { from: "q", to: "w", label: "job", dashed: true, hl: true },
            { from: "w", to: "dg" },
            { from: "w", to: "llm" },
            { from: "w", to: "pg", label: "results" },
          ],
          caption:
            "The queue is the seam — everything inside the dashed boundary runs after the HTTP response has already been sent.",
        },
      },
      {
        heading: "The hard part: meeting AI that doesn't feel slow",
        body: [
          "Transcription takes **30 to 120 seconds**. You cannot hold an HTTP connection open for that, and a spinner in front of it means nobody uses the feature twice — so none of it runs on the request path.",
          "The price of going async is that **slow and stuck start to look identical**. So the state is written down rather than inferred:",
        ],
        flow: {
          nodes: [
            { label: "NONE" },
            { label: "UPLOADED" },
            { label: "PROCESSING", hl: true },
            { label: "COMPLETED" },
          ],
          caption:
            "FAILED branches off PROCESSING as a real terminal state, instead of a row sitting there forever. The frontend reads the field, so a stuck job looks stuck rather than looking slow.",
        },
      },
      {
        heading: "Failure modes",
        body: [
          "Two queues with deliberately different retry budgets. Transcription retries **3 times with 5-second exponential backoff** — if Deepgram is down, it's down, and burning attempts costs money without changing the outcome. The Recall.ai webhook retries **8 times at 30 seconds**, because a bot's recording genuinely isn't ready yet and the right response is to wait longer, not to give up sooner.",
        ],
        failureModes: [
          {
            trigger: "Deepgram 5xx or timeout",
            behaviour: "Job retries, meeting holds at PROCESSING",
            recovery: "3 attempts, exponential from 5s → FAILED",
          },
          {
            trigger: "Recording not ready at webhook",
            behaviour: "Job re-queued, no partial write",
            recovery: "8 attempts, exponential from 30s",
          },
          {
            trigger: "Worker process dies mid-job",
            behaviour: "Bull redelivers on next worker boot",
            recovery: "Job is idempotent — re-transcribes cleanly",
          },
          {
            trigger: "LLM returns unusable output",
            behaviour: "Transcript still persists; summary null",
            recovery: "Regenerate endpoint re-runs only that step",
          },
        ],
      },
      {
        heading: "Trade-offs",
        body: [],
        bullets: [
          "**Postgres over MongoDB.** Meetings have participants, recordings have transcripts, transcripts have segments. A document store would have meant denormalising every one of those and then keeping it in sync by hand.",
          "**Deepgram Nova-2 over Whisper.** Whisper is the obvious default and has no speaker diarization. A transcript that can't tell you *who said what* is close to useless for summarisation, and it's the one property you cannot add afterwards in post-processing.",
          "**GPT-4o-mini over GPT-4o.** Transcripts fit comfortably in the smaller context and the task is structured extraction rather than reasoning — roughly **10× cheaper** at the same usable quality, with a one-string upgrade path if that stops being true.",
          "**Recall.ai over building the bot.** A bot means OAuth apps, bot infrastructure and recording pipelines — none of which is the product. Recall streams to Deepgram under my own credentials, so the pipeline runs unchanged.",
          "**Google OAuth as the only login.** Solo professionals all have Google accounts, and Calendar sync needs the OAuth grant anyway. No password storage, no reset flow, no credential-stuffing surface — the cheapest security posture is the one with nothing to steal.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Deployed, with subscription billing wired end to end. Ask AI streams over SSE — a first token in a few hundred milliseconds reads as faster than a complete answer four seconds later, even though it finishes at the same time.",
        ],
      },
    ],
  },

  {
    slug: "recommender",
    title: "Recommender",
    org: "Experiment Labs",
    period: "2025 — now",
    role: "Founding Engineer",
    restricted: true,
    summary:
      "A recommendation service that generates rather than retrieves — and then refuses to trust its own output until three independent gates have checked it.",
    tags: ["Express", "Gemini", "Structured output", "Prompt gates", "MongoDB", "TypeScript"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Shape", value: "Generate-then-verify pipeline" },
      { label: "Model", value: "Gemini 2.5 Flash, structured output" },
      { label: "Verification", value: "3 gates + cap/dedupe" },
      { label: "Store", value: "Document DB" },
      { label: "Runtime", value: "Express · TypeScript" },
    ],
    sections: [
      {
        heading: "Generate, then verify",
        body: [
          "The service used to be retrieval — embed a catalogue, vector-search it, rank the results. That has a ceiling: a fixed catalogue can only return what's already in it, and the useful recommendations are the ones nobody wrote down, specific to one learner's combination of interests. So it moved from **retrieving** ideas to **generating** them, which trades one hard problem for a worse one. Retrieval can only return real rows. A generator will happily invent an activity that doesn't exist, sits wildly beyond the learner's level, or opens with a statistic it made up.",
          "The architecture is a loop, not a pipeline. The model produces a category's ideas against a strict JSON schema; three independent gates then check the result; a rejection sends structured feedback back into a regeneration. **Three attempts**, then it stops.",
          "The important property is that **no gate trusts the prompt**. Every one of them re-checks in code something the prompt already asked for — because the prompt asking is not evidence that the model complied.",
        ],
        architecture: {
          tiers: [
            {
              label: "Caller",
              nodes: [{ id: "plat", label: "Platform service", sub: "bulk request" }],
            },
            {
              label: "Service",
              nodes: [{ id: "api", label: "Recommendation API", sub: "Express · TypeScript" }],
            },
            {
              label: "Generate",
              nodes: [
                { id: "prompt", label: "Prompt builder", sub: "per category" },
                { id: "llm", label: "LLM", sub: "strict JSON schema", hl: true },
              ],
            },
            {
              label: "Verify",
              nodes: [
                { id: "g1", label: "Level gate", sub: "above current standing" },
                { id: "g2", label: "Personal gate", sub: "anchored in profile" },
                { id: "g3", label: "Claim gate", sub: "no invented stats" },
              ],
            },
            {
              label: "Return",
              nodes: [{ id: "cap", label: "Cap + dedupe", sub: "every return path", hl: true }],
            },
          ],
          edges: [
            { from: "plat", to: "api" },
            { from: "api", to: "prompt" },
            { from: "prompt", to: "llm" },
            { from: "llm", to: "g1" },
            { from: "llm", to: "g2" },
            { from: "llm", to: "g3" },
            { from: "g2", to: "llm", label: "reject → regenerate", dashed: true, hl: true },
            { from: "g1", to: "cap" },
            { from: "g2", to: "cap" },
            { from: "g3", to: "cap" },
          ],
          caption:
            "The dashed edge is the whole design: a rejection is not an error, it's another attempt with the reason attached. Cap-and-dedupe sits after the gates because it has to run even when they've given up.",
        },
      },
      {
        heading: "What each gate refuses",
        body: [
          "**The level gate** checks that ideas sit above the standing the learner has already reached. This is the one piece of the retired retrieval pipeline that survived: that code filtered candidates by minimum level *before* ranking them. Retrieval is gone, so the same comparison now runs against generated ideas instead — same arithmetic, moved to the other side of the model.",
          "**The personalization gate** checks each idea is anchored in the learner's stated interests rather than in their academic subject alone. The prompt had always asked for this; nothing verified it, so personalization was whatever the model felt like on a given run. Stating the requirement as a *field* and then checking the field is the move.",
          "**The claim gate** rejects fabricated statistics — the \"only 3% of…\", \"1 in 4 workers…\" openers the model liked to invent. It's a regex, deliberately. A second auditing LLM call hallucinates too and catches roughly half as much; n-sampling costs k× tokens on every request. The fabrication has a shape we specified, so it's a closed set, and a regex costs nothing and never flakes.",
          "It's narrow on purpose. \"8–16 weeks\" and \"2 interests\" are scope, not evidence, and have to pass.",
        ],
      },
      {
        heading: "The bug that shaped the exit path",
        body: [
          "Every template asks for exactly five ideas. Nothing enforced it — the schema left the array unbounded and no gate counted.",
          "A single call returned **66 ideas**, nine of the titles repeated four times each, all of them a type the template explicitly forbids. The gates caught the violations correctly, exhausted all three attempts, and then the caller passed the last attempt through **as-is** — straight into the database, where a human saw 66 suggestions under one activity.",
          "The fix is the boring one, in the right place: force the answer down to a deduplicated, capped list on **every return path**, including the exhausted-retries fallback — which is the one that actually leaked. Not in the prompt, which already asked and was ignored. Not in the schema, which can bound an array's length but cannot express \"no two items share a title.\"",
          "The lesson I actually took: **a validation layer that can be bypassed by its own failure path is not a validation layer.** The gates worked perfectly. The give-up branch didn't go through them.",
        ],
      },
      {
        heading: "Cost is a design parameter",
        body: [
          "The model bills reasoning as output tokens, which makes it a cost lever rather than a quality dial. Measured: **zero thinking tokens** at the lowest setting versus thousands at the highest, for longer output and only marginally better ideas. Running it at zero is what keeps the current model cheaper than the one it replaced.",
          "It's set per-environment rather than in code, so raising it is a config change when a category turns out to need the headroom — not a deploy.",
        ],
      },
    ],
  },

  {
    slug: "learning-copilot",
    title: "Learning Copilot",
    org: "Experiment Labs",
    period: "2025 — now",
    role: "Founding Engineer",
    restricted: true,
    summary:
      "An agentic tutor with realtime voice, grounded in each learner's actual progress — and an eval harness in CI so answer quality can't regress without someone noticing.",
    tags: ["LangGraph", "Gemini", "WebSocket", "LLM-as-judge", "Eval harness", "TypeScript"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Agent", value: "LangGraph over Gemini" },
      { label: "Voice", value: "Realtime, WebSocket relay" },
      { label: "Memory", value: "Two layers — local + global" },
      { label: "Quality", value: "3-tier eval harness, CI gate" },
    ],
    sections: [
      {
        heading: "Shape of the system",
        body: [
          "A tutor that *watches someone work* has to remember them — across sessions, across weeks, across different pieces of work, without letting one project's context bleed into another's. That constraint shapes everything below it.",
          "Three things run behind one API: an **in-session assistant** that watches a learner work and responds to text, screenshots and voice; an **agentic chat** built on LangGraph that can search a local skill corpus and the web before answering; and a **memory layer** both of them write into.",
          "Voice is the outlier. It isn't a request — it's a relay holding two sockets open at once, which is why it can't live on the same host as everything else.",
        ],
        architecture: {
          tiers: [
            {
              label: "Client",
              nodes: [
                { id: "ui", label: "Learner UI", sub: "text · screenshot" },
                { id: "vc", label: "Voice client", sub: "audio in / out" },
              ],
            },
            {
              label: "API",
              nodes: [{ id: "api", label: "Copilot service", sub: "identity-gated" }],
            },
            {
              label: "Agent",
              nodes: [
                { id: "sess", label: "Session assistant", sub: "tone-tagged replies" },
                { id: "graph", label: "Agentic chat", sub: "LangGraph + tools", hl: true },
                { id: "skills", label: "Skill corpus", sub: "63 guides, in-repo" },
              ],
            },
            {
              label: "Model",
              nodes: [
                { id: "llm", label: "LLM", sub: "text + vision" },
                { id: "live", label: "LLM Live", sub: "streaming audio", hl: true },
              ],
            },
            {
              label: "Memory",
              nodes: [
                { id: "local", label: "Activity memory", sub: "this work only" },
                { id: "glob", label: "Global memory", sub: "cross-activity patterns" },
                { id: "trace", label: "Trace log", sub: "fire-and-forget" },
              ],
            },
          ],
          edges: [
            { from: "ui", to: "api" },
            { from: "vc", to: "api", label: "WebSocket", hl: true },
            { from: "api", to: "sess" },
            { from: "api", to: "graph" },
            { from: "graph", to: "skills", label: "search" },
            { from: "sess", to: "llm" },
            { from: "graph", to: "llm" },
            { from: "api", to: "live", label: "relay", hl: true },
            { from: "sess", to: "local" },
            { from: "graph", to: "glob" },
            { from: "api", to: "trace", dashed: true },
          ],
          caption:
            "Two agent tracks share one API and one memory layer — which is exactly the duplication called out at the bottom of this page. Voice bypasses the agent tracks entirely and relays straight through, because a live audio socket can't wait on a graph.",
        },
      },
      {
        heading: "Two layers of memory",
        body: [
          "Memory is split deliberately. **Per-activity memory** holds a rolling summary and the knowledge gaps observed for that one piece of work. **Global memory** holds patterns that recur across everything the learner does — \"struggles with written structure\" belongs here, \"hasn't set up the database yet\" does not.",
          "One flat memory store would have been less code and would have produced a tutor that brings up a research project while you're building a website. The split is the feature.",
          "When a session opens, context is assembled in order — global patterns, then this activity's rolling summary, then its open gaps, then where exactly the learner is right now. Extraction after a session is **best-effort**: if it fails, the session still ends cleanly. A memory write is never allowed to break the thing the learner was doing.",
        ],
      },
      {
        heading: "The model is not allowed to mark work complete",
        body: [
          "The agent has a tool that looks like it completes a task. It doesn't. It **signals readiness** and routes the learner to a completion check — and the shared status writer refuses a completed write that doesn't carry an explicit confirmation.",
          "This was a deliberate walk-back. Letting the model close out work is the obvious affordance and it's wrong in both directions: silently marking incomplete work as done is bad, and refusing with no explanation is worse. So the check is **read-only** and returns the unmet requirements as a checklist — the learner sees what's left, and one tap does the actual write.",
          "**Never silent, never dead-stop.** No path writes completion without a human confirming, and no failed check leaves someone stuck without knowing why. The model advises; it does not have authority.",
        ],
      },
      {
        heading: "The hard part: knowing whether it got worse",
        body: [
          "Generative output has no build error. Change a prompt, swap a model, add a skill — the thing still responds fluently, and you have no idea if it's now subtly wrong. Manual spot-checking doesn't survive past the first few weeks; it's exactly the kind of testing that quietly stops happening.",
          "So quality became a **CI gate**. A versioned golden dataset gets graded on every change, and the run exits non-zero if any case regresses.",
        ],
        flow: {
          nodes: [
            { label: "Golden set" },
            { label: "Deterministic (Zod)", hl: true },
            { label: "Semantic (embeddings)" },
            { label: "LLM judge" },
            { label: "Pass ≥ 0.70" },
          ],
          caption:
            "Cheap tiers first. A structural failure short-circuits — a malformed plan can't be 'good', so there's no point paying a judge to read it.",
        },
      },
      {
        heading: "How the grading works",
        body: [
          "Three tiers, ordered cheap to expensive. **Deterministic** validates structure with Zod — required and forbidden keywords, expected counts — for free, and short-circuits the rest on failure. **Semantic** compares embeddings against a reference answer, used strictly as an on-topic signal and never as the correctness verdict. **Judge** scores 1–5 on faithfulness, relevance, completeness and pedagogy, with faithfulness weighted highest. The overall score is the deterministic gate multiplied by the normalised judge score; **0.70** passes.",
          "Two details make it trustworthy. Goldens are **expected-behaviour specs, not exact answers** — grading a generative system on string equality only teaches you that it produced different words. And the judge is **calibrated against human grades**, so its scores track what a person would have said rather than what a model finds agreeable. An uncalibrated LLM judge is a confidence generator, not a measurement.",
          "Every generative call also writes a trace — model, prompt version, latency, tokens, thumbs. Those writes are **fire-and-forget**: telemetry capture never blocks or breaks generation. The traces are what let the golden set grow from real traffic instead of from someone remembering to write test cases.",
        ],
      },
      {
        heading: "Voice, and where it can't run",
        body: [
          "Voice is a **WebSocket relay**: the client opens a socket to the backend, the backend opens a second socket to the model's live endpoint, and audio flows both ways with the session's screenshots interleaved. The last stretch of text conversation is handed over on connect, so speaking to it continues where typing left off rather than starting cold.",
          "The operational consequence is unavoidable and worth stating plainly: **serverless cannot hold a long-lived socket.** The rest of the API is perfectly happy on a serverless host; voice needs a persistent one. That's not a preference, it's a constraint, and pretending otherwise produces a feature that works locally and is dead in production.",
        ],
      },
    ],
  },

  {
    slug: "experiment-labs-platform",
    title: "The Platform",
    org: "Experiment Labs",
    period: "2024 — now",
    role: "Founding Engineer",
    restricted: true,
    summary:
      "Ten backend services and a shared identity hub — how a multi-product platform agrees on who a user is, and what happens when a payment webhook doesn't arrive.",
    tags: ["Multi-service", "SSO", "RBAC", "PostgreSQL", "MongoDB", "Redis", "Webhooks"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Shape", value: "Service-oriented, shared identity" },
      { label: "Identity", value: "SSO, JWT + refresh, OAuth" },
      { label: "Persistence", value: "Relational + document, split by shape" },
      { label: "Cache", value: "Managed Redis" },
      { label: "Async", value: "Queue workers + scheduled reconcilers" },
    ],
    sections: [
      {
        heading: "Shape of the platform",
        body: [
          "Ten backends — CRM, payments, notifications, recommendations, meeting intelligence, interviewing, internships — each starting out with its own idea of who a user was and what they were allowed to do. Every new product meant reimplementing authentication, and every permission change meant finding all ten copies of it.",
          "One identity hub that every product authenticates through, and a deliberate split in persistence underneath it. Services don't call each other anonymously — internal calls carry signed service tokens, so a product can't quietly act as the platform.",
          "The **authorization cache** is what keeps the hub from becoming the bottleneck. Resolving permissions from the database on every request would put every product's every call behind one database. Resolved permissions are cached and invalidated on role change, and **tenant identity is part of the cache key** — which turns cross-tenant leakage into a cache miss rather than something you hope a reviewer catches.",
        ],
        architecture: {
          tiers: [
            {
              label: "Clients",
              nodes: [
                { id: "apps", label: "Product web apps", sub: "six frontends" },
                { id: "embed", label: "Embeddable plugin", sub: "third-party hosts" },
              ],
            },
            {
              label: "Identity",
              nodes: [{ id: "idp", label: "Identity & SSO hub", sub: "authN + cached authZ", hl: true }],
            },
            {
              label: "Services",
              nodes: [
                { id: "rel", label: "Ledger services", sub: "payments · notifications" },
                { id: "doc", label: "Product services", sub: "domain-shaped data" },
              ],
            },
            {
              label: "Async",
              nodes: [
                { id: "queue", label: "Queue workers", sub: "media pipelines" },
                { id: "cron", label: "Reconcilers", sub: "scheduled sweeps", hl: true },
              ],
            },
            {
              label: "Store",
              nodes: [
                { id: "sql", label: "Relational", sub: "identity · money" },
                { id: "nosql", label: "Document", sub: "product domains" },
                { id: "cache", label: "Cache", sub: "resolved permissions" },
              ],
            },
          ],
          edges: [
            { from: "apps", to: "idp" },
            { from: "embed", to: "idp" },
            { from: "idp", to: "rel", label: "signed token", hl: true },
            { from: "idp", to: "doc", label: "signed token", hl: true },
            { from: "idp", to: "cache" },
            { from: "rel", to: "sql" },
            { from: "doc", to: "nosql" },
            { from: "doc", to: "queue", dashed: true },
            { from: "cron", to: "rel", label: "sweep", dashed: true, hl: true },
          ],
          caption:
            "Described at the level of the pattern rather than the deployment. Every product enters through identity; nothing talks to anything else without a signed token; the reconcilers exist because webhooks are a fast path, not a guarantee.",
        },
      },
      {
        heading: "Two databases, on purpose",
        body: [
          "Identity, money and notification logs run on **relational** storage. Product domains run on **document** storage. That isn't indecision, and it isn't two teams disagreeing.",
          "Identity and payments are constrained, audited, and must not drift — they want foreign keys, transactions, and a schema that refuses bad states. Product data is schema-fluid and iterated on weekly, and running that against migrations is friction with no payoff. The split costs one extra ORM dialect and buys the right tool on both sides of the line.",
          "The place it earns its keep is the audit trail. When someone asks why an account has access it shouldn't, the answer has to be reconstructible — and \"reconstructible\" is a property of constrained storage, not of a document you can shape however you like at write time.",
        ],
      },
      {
        heading: "The webhook is the fast path, not the truth",
        body: [
          "Payment is the flow where distributed-systems reality shows up. The provider fires a webhook when a payment captures — and sometimes it doesn't arrive, arrives twice, or arrives before the record it refers to has been written.",
          "So the webhook is treated as an **optimisation**, not as the source of truth. Events are recorded idempotently so a duplicate delivery is a no-op, and a **scheduled reconciler** independently sweeps for unresolved orders and settles them against the provider's own view. If every webhook vanished tomorrow, the system would be slower and still correct.",
          "That's the whole design principle: **anything that must be true cannot depend on someone else's HTTP request reaching you.**",
        ],
      },
    ],
  },

  {
    slug: "fitted",
    title: "Fitted",
    period: "2026",
    role: "Solo backend + infra, with Ashwath Kannan on the app",
    summary:
      "Photograph a garment, get a clean cut-out, build outfits and plan them on a calendar. An Android beta where the interesting problems turned out to be privacy and taxonomy.",
    tags: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Expo", "Cloud Run", "rembg · U²-Net"],
    href: { label: "fitted.hrshkshri.com", url: "https://fitted.hrshkshri.com" },
    facts: [
      { label: "Role", value: "Backend, data model, infra" },
      { label: "App", value: "Expo · React Native (Ashwath Kannan)" },
      { label: "Backend", value: "FastAPI · SQLAlchemy 2 · Alembic" },
      { label: "Hosting", value: "Cloud Run · Cloud SQL · GCS" },
      { label: "Cut-out", value: "rembg / U²-Net, baked into the image" },
      { label: "Status", value: "Android beta" },
    ],
    sections: [
      {
        heading: "Architecture",
        body: [
          "A thin client and a backend that owns every decision — including which image processor runs, so the app never holds a third-party credential and a failed cut-out is handled in one place rather than once per client.",
        ],
        systemDiagram: {
          rows: 3.23,
          groups: [
            {
              id: "g-proc",
              label: "Processors — server-side, one per upload",
              col: 5.8,
              row: 0,
              cw: 3.0,
              rh: 2.8,
            },
          ],
          nodes: [
            {
              id: "app",
              label: "Expo app",
              sub: "React Native · Android",
              col: 0.2,
              row: 0.9,
              cw: 2.4,
              note: "Uploads a photo and picks a processing mode. That is the whole extent of its involvement — no third-party credentials, no direct bucket access, nothing worth extracting if someone unpacks the APK.",
            },
            {
              id: "api",
              label: "FastAPI",
              sub: "Cloud Run",
              col: 2.9,
              row: 0.9,
              cw: 2.4,
              note: "Layered routers → services → models, never skipping. Routers parse and return an envelope, services own the transactions, models are the ORM. Unglamorous, and the reason a second person could work in the app while I worked here.",
            },
            {
              id: "cut",
              label: "Cut-out",
              sub: "rembg · U²-Net",
              col: 6.05,
              row: 0.4,
              cw: 2.5,
              hl: true,
              note: "Background removal, with the model baked into the container image so a cold start doesn't have to download it first.",
              caution:
                "When it fails the original is kept and the processed key stays null. The user carries on and can still confirm type and colour — a failed cut-out is not a failed upload.",
            },
            {
              id: "gem",
              label: "Ghost mannequin",
              sub: "generative",
              col: 6.05,
              row: 1.5,
              cw: 2.5,
              note: "The other mode: asks for the single most prominent garment rendered as an e-commerce flat lay. Which of the two runs is the user's choice, made before the upload.",
            },
            {
              id: "obj",
              label: "Object storage",
              sub: "private, presigned",
              col: 9.3,
              row: 0.9,
              cw: 2.5,
              hl: true,
              note: "Originals and processed images under per-user key prefixes. The bucket is never public — every read is a short-lived, user-scoped presigned URL, and deleting an account removes the entire prefix rather than just the rows.",
            },
            {
              id: "pg",
              label: "Cloud SQL",
              sub: "Postgres · Alembic",
              col: 2.9,
              row: 2.3,
              cw: 2.4,
              note: "Every domain table carries soft-delete columns, and uniqueness is scoped to live rows — so a soft-deleted outfit can still occupy a date that an active one now holds. The tag join tables are the deliberate exception: composite key, hard delete on detach, because a detached tag is not history worth keeping.",
            },
            {
              id: "goog",
              label: "Google Identity",
              sub: "ID token verify",
              col: 0.2,
              row: 2.3,
              cw: 2.4,
              note: "Sign-in verifies the Google ID token's audience against an explicit allowlist of client IDs, then issues our own JWT. No passwords are stored anywhere.",
              caution:
                "It fails closed. With no client IDs configured, verification errors rather than skipping the check — a misconfigured deploy locks everyone out instead of letting everyone in.",
            },
          ],
          edges: [
            { from: "app", to: "api", label: "photo + mode", hl: true },
            { from: "api", to: "goog", label: "verify aud" },
            { from: "api", to: "pg" },
            { from: "api", to: "cut", label: "chosen mode", hl: true },
            { from: "api", to: "gem" },
            { from: "cut", to: "obj" },
            { from: "gem", to: "obj" },
          ],
          caption:
            "The app never reaches a processor or the bucket directly. Everything goes through the API, which is what keeps third-party credentials off the device and makes the processor swappable without shipping a new build.",
        },
      },
      {
        heading: "One tag table, three entity types",
        body: [
          "The obvious model gives clothes a category — tops, formal, winter. I didn't build that: every fixed taxonomy is wrong for somebody, and the interesting queries cut across entity types anyway.",
        ],
        bullets: [
          "**A tag is standalone, not a property of clothes.** It attaches to a wardrobe, a garment *and* an outfit through three join tables, so picking one slices the whole app horizontally. No fixed vocabulary — people invent their own.",
          "**An outfit's tags are computed, never stored.** They're the union of its own tags with those of both garments. Tag a blazer `party` and jeans `casual` and the outfit surfaces under both.",
          "**Because storing that union would drift.** It would need recomputing on every tag edit to either garment — a denormalisation with a guaranteed bug in it. Wear counts and last-worn are derived the same way, straight from the calendar.",
        ],
      },
      {
        heading: "Privacy as a data-model decision",
        body: [
          "A wardrobe app accumulates photographs of the inside of someone's home. That work had to be structural rather than a policy page.",
        ],
        bullets: [
          "**No geolocation, on any entity.** A wardrobe carries a typed label — \"Home\", \"Suitcase\" — which covers every real *where are these clothes* need. It's a string the user types, never a coordinate. You cannot leak a location you never collected.",
          "**The bucket is never public.** Keys are namespaced per user and every read is a short-lived, user-scoped presigned URL. Deleting an account removes the whole storage prefix, not just the rows.",
          "**Share links are hashed at rest.** The database holds a SHA-256 of a 256-bit token; the raw value exists only in the URL the user copies. A dump hands nobody a working link, and the shared view is a minimal projection.",
          "**Sign-in fails closed.** The Google ID token's audience is checked against an explicit allowlist. With none configured, verification *errors* rather than skipping the check — a misconfigured deploy locks everyone out, not everyone in.",
        ],
      },
    ],
  },

  {
    slug: "claukit",
    title: "Claukit",
    period: "2026",
    role: "Solo — open source",
    summary:
      "A browser extension and CLI that surface Claude token usage, cache reads and rate limits in real time — by observing an app I don't control.",
    tags: ["TypeScript", "Browser Extension", "Node CLI", "esbuild", "Manifest V3"],
    href: { label: "npmjs.com/package/claukit", url: "https://www.npmjs.com/package/claukit" },
    facts: [
      { label: "Role", value: "Solo — open source" },
      { label: "Ships as", value: "Firefox add-on + npm CLI" },
      { label: "Stack", value: "TypeScript, esbuild, MV3" },
      { label: "Tokenizer", value: "o200k_base, counted locally" },
      { label: "Status", value: "Published, v0.5" },
    ],
    sections: [
      {
        heading: "The hard part: you can't see the network from a content script",
        body: [
          "Extensions run content scripts in an **isolated world** — you get the DOM, but not the page's own `window.fetch`. The requests worth watching happen in a window the extension is not allowed to touch.",
          "So the work happens on both sides of that wall, and the two halves talk to each other over `postMessage`.",
        ],
        systemDiagram: {
          rows: 4.33,
          groups: [
            {
              id: "g-page",
              label: "Page context — the site's own window",
              col: 2.9,
              row: 0,
              cw: 3.4,
              rh: 3.0,
            },
            {
              id: "g-ext",
              label: "Extension — isolated world",
              col: 8.3,
              row: 0,
              cw: 3.4,
              rh: 3.0,
            },
          ],
          nodes: [
            {
              id: "api",
              label: "claude.ai API",
              sub: "bootstrap · usage",
              col: 0.2,
              row: 0.9,
              cw: 2.4,
              rh: 1.2,
              note: "What both halves ultimately read — a bootstrap call to resolve the organisation, then the usage endpoint carrying the window counters. The same API whether a browser is asking or the CLI is.",
            },
            {
              id: "site",
              label: "claude.ai",
              sub: "the app's own JS",
              col: 3.15,
              row: 0.5,
              cw: 2.9,
              note: "An app I don't control and have no contract with. Its own requests carry the numbers, so they have to be observed without its cooperation.",
              caution:
                "No versioning and no guarantees. A redesign upstream can change response shapes with no warning, and there is nobody to appeal to.",
            },
            {
              id: "hook",
              label: "fetch wrapper",
              sub: "captured before frameworks",
              col: 3.15,
              row: 1.8,
              cw: 2.9,
              hl: true,
              note: "Injected into the page's own world, where the real calls happen, and it wraps window.fetch there. Capturing it before any framework can wrap it first is the whole trick — get the ordering wrong and you instrument React's wrapper instead of the network.",
              caution:
                "It also patches history.pushState and replaceState, because single-page navigation never fires a page load to hook onto.",
            },
            {
              id: "pm",
              label: "postMessage",
              sub: "the bridge",
              col: 6.5,
              row: 1.0,
              cw: 1.6,
              hl: true,
              note: "A content script cannot reach the page's window.fetch, and page code cannot reach extension APIs. Neither half can do the job alone, so they talk across the boundary with a small request/response protocol.",
            },
            {
              id: "cs",
              label: "Content script",
              sub: "DOM, but no page JS",
              col: 8.55,
              row: 0.5,
              cw: 2.9,
              note: "Where extensions are designed to run: full DOM access, extension APIs, and no access to the page's own JavaScript. Which is precisely the wrong side of the wall for watching the network.",
            },
            {
              id: "tok",
              label: "Tokenizer",
              sub: "o200k_base, vendored",
              col: 8.55,
              row: 1.8,
              cw: 2.9,
              note: "Counts tokens on the machine. Sending conversation text to a service to find out how large it is would leak the exact thing being measured — an absurd trade for a usage meter.",
            },
            {
              id: "ui",
              label: "Usage panel",
              sub: "in-page overlay",
              col: 8.55,
              row: 3.4,
              cw: 2.9,
              note: "Tokens for the current message, whether the context was read from cache, and how much of the 5-hour and 7-day windows is gone — with a countdown to the reset.",
            },
            {
              id: "cookies",
              label: "Cookie store",
              sub: "three formats, on disk",
              col: 3.15,
              row: 3.4,
              cw: 2.9,
              note: "Chrome encrypts with AES under a PBKDF2-derived key and holds a lock on the live file, so it has to be copied before it can be read. Firefox keeps SQLite. Safari has its own binary layout.",
              caution:
                "When none of the three can be read — common on macOS, or when the session is memory-only — setup falls back to a guided manual paste rather than failing.",
            },
            {
              id: "cli",
              label: "Status line",
              sub: "npm CLI",
              col: 0.2,
              row: 3.4,
              cw: 2.4,
              hl: true,
              note: "Calls those same endpoints itself with the borrowed session, then renders the numbers into the Claude Code status line. It never touches the extension — a second, independent route to the same data.",
            },
          ],
          edges: [
            { from: "api", to: "site", label: "loads", },
            { from: "site", to: "hook", label: "fetch()", hl: true },
            { from: "hook", to: "pm", label: "postMessage", hl: true },
            { from: "pm", to: "cs" },
            { from: "cs", to: "tok", label: "count locally" },
            { from: "tok", to: "ui" },
            { from: "cookies", to: "cli", label: "session", dashed: true },
            { from: "cli", to: "api", label: "same API, no browser", hl: true },
          ],
          caption:
            "Two independent routes to the same numbers. The extension watches the browser's own traffic from across a wall it cannot cross directly; the CLI borrows the session and calls the API itself. Nothing but counts crosses the bridge — no conversation content leaves the page.",
        },
      },
      {
        heading: "Trade-offs",
        body: [],
        bullets: [
          "**Parsing defensively rather than trusting the shape.** Every field is read as something that might not be there, so when a response changes underneath me the panel drops the number it can no longer read and keeps showing the rest. The alternative — assuming the shape and throwing — turns somebody else's deploy into a broken extension.",
          "**Counting locally rather than on a server.** The `o200k_base` tokenizer is vendored into the bundle, so no conversation content ever leaves the machine. It costs bundle size and nothing else — and the alternative would have leaked exactly what the tool exists to measure.",
          "**Zero runtime dependencies.** Nothing to audit in a supply chain, on something that sits on top of your chat and reads every response.",
          "**A fallback instead of a hard failure.** Cookie auto-detection could not be made reliable across three browsers and two operating systems, so it degrades to a guided paste. An auto-detect that works on four setups out of five and hard-fails on the fifth is worse than one that always finishes — the person on the fifth has no idea whether they're holding it wrong.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
