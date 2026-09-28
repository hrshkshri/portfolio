/**
 * Case studies, rendered at /work/<slug> and reached from /about.
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

export interface FailureMode {
  trigger: string;
  behaviour: string;
  recovery: string;
}

/* ── system diagrams ──────────────────────────────────────────────────────
 * Placement lives in the content rather than being computed. A datacenter
 * boundary wrapping four nodes while a store sits outside it is
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
  /**
   * Makes the box a link — used to zoom from a platform view into the study
   * for one of its services. Clicking navigates instead of pinning the note,
   * so a linked box gets an arrow glyph to say so before it's clicked.
   */
  href?: string;
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
  /** `offline` renders the host as plain text — see StudyEnd/CaseStudyView. */
  href?: { label: string; url: string; offline?: boolean };
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
    href: {
      label: "crelyzor.hrshkshri.com",
      url: "https://crelyzor.hrshkshri.com",
      offline: true,
    },
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
          rows: 7.0,
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
              col: 9.1,
              row: 2.3,
              cw: 2.6,
              note: "Raw audio lands here first and the worker reads it back out. Keeping recordings out of the database is what lets a transcript row stay small enough to query cheaply.",
            },
            {
              id: "pg",
              label: "PostgreSQL",
              sub: "Neon, serverless",
              col: 9.1,
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
      "Retrieval over a corpus of admitted-student profiles decides what is reachable; generation decides what to do about it; three gates decide whether it survives.",
    tags: ["Vector search", "RAG", "Embeddings", "Structured output", "Prompt gates", "TypeScript"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Shape", value: "Retrieve → generate → verify" },
      { label: "Grounding", value: "Nearest admitted-profile matches" },
      { label: "Verification", value: "3 gates + cap/dedupe" },
      { label: "Store", value: "Vector index + document DB" },
      { label: "Runtime", value: "Express · TypeScript" },
    ],
    sections: [
      {
        heading: "Grounded on outcomes, not on a catalogue",
        body: [
          "A recommendation has to answer a question a learner can't ask directly: *what is actually within reach for someone like me?* Taste can't answer that. Comparison can.",
        ],
        bullets: [
          "**A reference corpus of admitted-student profiles** sits behind an embedding index, extended every admissions cycle. It is the thing the whole system measures against.",
          "**The learner's profile is embedded into the same space**, and the nearest comparable outcomes describe the level they can credibly aim at — not what they'd enjoy, what people in their position went on to do.",
          "**Scoring is calibrated against that corpus too**, so a score means *relative to people who got in* rather than an arbitrary band somebody chose.",
          "**Retrieval grounds generation.** The model decides *what* to suggest; the corpus decides *how ambitious* it's allowed to be.",
        ],
        systemDiagram: {
          rows: 7.8,
          groups: [
            {
              id: "retrieval",
              label: "Retrieval — what is achievable for this profile",
              col: 0.2,
              row: 1.2,
              cw: 11.6,
              rh: 1.9,
            },
            {
              id: "verify",
              label: "Verify — each gate re-checks what the prompt only asked for",
              col: 0.2,
              row: 4.6,
              cw: 11.6,
              rh: 1.9,
            },
          ],
          nodes: [
            {
              id: "profile",
              label: "Student profile",
              sub: "interests · history · target",
              col: 4.3,
              row: 0,
              cw: 3.4,
              note: "Interests, past experience, current standing and the outcome they're aiming at. Everything downstream is a function of this one record.",
            },
            {
              id: "embed",
              label: "Embedding",
              sub: "same space as the corpus",
              col: 0.45,
              row: 1.6,
              cw: 3.4,
              note: "Puts the profile in the same vector space as the reference corpus, so \"similar\" means similar in outcome terms rather than similar in wording.",
            },
            {
              id: "index",
              label: "Vector index",
              sub: "admitted profiles",
              col: 4.3,
              row: 1.6,
              cw: 3.4,
              hl: true,
              note: "Profiles of students who were actually admitted, grown each cycle. This is the asset — it's what separates a grounded recommendation from a plausible one.",
            },
            {
              id: "peers",
              label: "Comparable outcomes",
              sub: "nearest neighbours",
              col: 8.15,
              row: 1.6,
              cw: 3.4,
              note: "The closest matches, never shown to the learner. They exist to establish the level a suggestion should be pitched at, and to calibrate the score against real outcomes.",
              caution:
                "This is the retrieval worth keeping. The activity-catalogue lookup it replaced could only ever return something somebody had already written down.",
            },
            {
              id: "gen",
              label: "Generator",
              sub: "strict JSON schema",
              col: 4.3,
              row: 3.4,
              cw: 3.4,
              hl: true,
              note: "Proposes activities per category, with the retrieved band as grounding and a schema the gates read specific fields off. A rejected schema fails loudly rather than quietly persisting something unusable.",
            },
            {
              id: "g1",
              label: "Level gate",
              sub: "above current standing",
              col: 0.45,
              row: 5.0,
              cw: 3.4,
              note: "Checks the ideas sit above the level this learner has already reached, and inside the band the corpus said was reachable.",
            },
            {
              id: "g2",
              label: "Personal gate",
              sub: "anchored in profile",
              col: 4.3,
              row: 5.0,
              cw: 3.4,
              note: "Checks each idea is anchored in the learner's own stated interests rather than their academic subject alone.",
            },
            {
              id: "g3",
              label: "Claim gate",
              sub: "no invented stats",
              col: 8.15,
              row: 5.0,
              cw: 3.4,
              note: "Rejects fabricated statistics — the \"only 3% of…\" openers the model liked to invent.",
            },
            {
              id: "cap",
              label: "Cap + dedupe",
              sub: "every return path",
              col: 4.3,
              row: 6.8,
              cw: 3.4,
              hl: true,
              note: "Forces the answer down to a deduplicated, capped list on every return path — including the one taken when the gates have given up.",
            },
          ],
          edges: [
            { from: "profile", to: "embed" },
            { from: "embed", to: "index" },
            { from: "index", to: "peers", label: "nearest" },
            { from: "peers", to: "gen", label: "achievable band", hl: true },
            { from: "gen", to: "g1" },
            { from: "gen", to: "g2" },
            { from: "gen", to: "g3" },
            { from: "g2", to: "gen", label: "reject → regenerate", dashed: true, hl: true },
            { from: "g1", to: "cap" },
            { from: "g2", to: "cap" },
            { from: "g3", to: "cap" },
          ],
          caption:
            "Retrieval decides what's achievable, generation decides what to do about it, and the gates decide whether the answer survives. The dashed edge is a rejection with its reason attached — three attempts, then it stops.",
        },
      },
      {
        heading: "What each gate refuses",
        body: [],
        bullets: [
          "**Level.** Ideas must sit above the standing the learner has already reached, and inside the band the corpus said was reachable. The comparison is ported from the retired *catalogue* lookup — same arithmetic, now run against generated ideas instead of retrieved rows.",
          "**Personalisation.** Each idea must be anchored in the learner's own interests, not their academic subject alone. The prompt always asked; nothing verified it. Stating the requirement as a *field* and then checking the field is the move.",
          "**Claims.** Fabricated statistics rejected by regex. A second auditing model hallucinates too and catches half as much, and n-sampling costs k× tokens on every request. The fabrication has a shape we specified, so it's a closed set — a regex costs nothing and never flakes.",
          "**Narrow on purpose.** \"8–16 weeks\" and \"2 interests\" are scope, not evidence, and have to pass.",
        ],
      },
      {
        heading: "The bug that shaped the exit path",
        body: [
          "Every template asks for exactly five ideas. Nothing enforced it — the schema left the array unbounded and no gate counted.",
        ],
        bullets: [
          "**One call returned 66 ideas**, nine titles repeated four times each, all of a type the template explicitly forbids.",
          "**The gates worked.** They caught every violation and exhausted all three attempts — then the caller passed the last attempt through as-is, straight into the database, where a human saw 66 suggestions under one activity.",
          "**The fix is boring, and in the right place:** cap and dedupe on every return path, including the exhausted-retries fallback. Not in the prompt, which already asked and was ignored. Not in the schema, which can bound an array's length but cannot express *no two items share a title*.",
          "**The lesson:** a validation layer that can be bypassed by its own failure path is not a validation layer.",
        ],
      },
      {
        heading: "Cost is a design parameter",
        body: [
          "Reasoning bills as output, which makes it a cost lever rather than a quality dial — measured at **zero** thinking tokens on the lowest setting against thousands on the highest, for longer output and only marginally better ideas. It's set per-environment, so giving a category more headroom is config rather than a deploy.",
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
      "A tutor that starts from everything the platform already knows — meetings, tasks, working files — and checks the artefact rather than the claim about it.",
    tags: ["Agentic", "RAG", "Tool-calling", "LLM-as-judge", "Eval harness", "Memory"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Agent", value: "Tool-calling over the learner's work" },
      { label: "Tools", value: "GitHub · Figma · Docs" },
      { label: "Memory", value: "Two layers + a stuck signal" },
      { label: "Quality", value: "3-tier eval harness, CI gate" },
    ],
    sections: [
      {
        heading: "What it already knows",
        body: [
          "A generic assistant starts every conversation from nothing. This one starts from everything the platform has already recorded about a learner — which is what makes the difference between advice and guidance.",
        ],
        systemDiagram: {
          rows: 9.5,
          groups: [
            {
              id: "ctx",
              label: "Context — already on the platform, never re-asked",
              col: 0.2,
              row: 0,
              cw: 11.6,
              rh: 1.9,
            },
            {
              id: "tools",
              label: "Connectors — whichever the check calls for. These are examples",
              col: 0.2,
              row: 7.6,
              cw: 11.6,
              rh: 1.9,
            },
          ],
          nodes: [
            {
              id: "prof",
              label: "Student profile",
              sub: "score · enrolment",
              col: 0.45,
              row: 0.4,
              cw: 3.4,
              note: "Who the learner is, what they're enrolled on, and the score that put them there. Read from the platform rather than duplicated, so it can't drift.",
            },
            {
              id: "meet",
              label: "Meetings + tasks",
              sub: "transcripts · action items",
              col: 4.3,
              row: 0.4,
              cw: 3.4,
              note: "Transcripts and action items from sessions with their consultant. The copilot inherits what a human has already agreed with them, so it never contradicts the person they actually spoke to.",
            },
            {
              id: "docs",
              label: "Student drive",
              sub: "working documents",
              col: 8.15,
              row: 0.4,
              cw: 3.4,
              note: "The files the learner keeps on the platform — the working artefacts of the activity rather than a description of them.",
            },
            {
              id: "rag",
              label: "Context assembly",
              sub: "retrieval per turn",
              col: 4.3,
              row: 2.4,
              cw: 3.4,
              note: "Builds the working context for a single turn, in a fixed order: cross-activity patterns first, then this activity's rolling summary, then its open gaps, then exactly which sub-task they're on right now.",
            },
            {
              id: "mem",
              label: "Memory",
              sub: "two layers",
              col: 0.45,
              row: 3.7,
              cw: 3.4,
              hl: true,
              note: "Per-activity memory holds a rolling summary and the open gaps for one piece of work. Global memory holds patterns that recur across everything. Intervention counts per sub-task are the stuck signal — the same task needing help three times means it was harder than it looked.",
              caution:
                "Writes are best-effort. An extraction that fails must never take the session down with it, so the learner's work is never held hostage to bookkeeping.",
            },
            {
              id: "agent",
              label: "Copilot agent",
              sub: "sub-tasks · nudges",
              col: 4.3,
              row: 3.7,
              cw: 3.4,
              hl: true,
              note: "Breaks the activity into sub-tasks and works one at a time, choosing per turn whether to nudge, explain, or walk through step by step — based on what memory says about where this learner stalls.",
            },
            {
              id: "judge",
              label: "Response judge",
              sub: "scores the exchange",
              col: 8.15,
              row: 3.7,
              cw: 3.4,
              hl: true,
              note: "Scores each exchange instead of trusting a thumbs-up, which most people never click. Its verdicts steer the next turn and feed the golden set the CI gate grades against.",
            },
            {
              id: "plan",
              label: "Plan",
              sub: "weeks → sub-tasks",
              col: 4.3,
              row: 5.1,
              cw: 3.4,
              note: "The activity broken into weeks and then into sub-tasks, generated once and worked through one at a time. It is also what the stuck counts attach to, so a sub-task that keeps needing help is visible as a property of the plan.",
            },
            {
              id: "pick",
              label: "Evidence check",
              sub: "picks what to look at",
              col: 4.3,
              row: 6.4,
              cw: 3.4,
              hl: true,
              note: "Works out what would actually demonstrate a sub-task is done, then calls whichever connector holds it. The sub-task decides the tool — a repository for something built, a design file for something drawn, a document for something written.",
              caution:
                "Adding a connector doesn't change the agent. It's another source the check can reach for, not another branch in the logic.",
            },
            {
              id: "gh",
              label: "GitHub",
              sub: "commits · diffs",
              col: 0.45,
              row: 8.0,
              cw: 3.4,
              note: "One connector among several. \"I've pushed the API\" and three commits touching one route are different claims.",
            },
            {
              id: "fig",
              label: "Figma",
              sub: "frames · progress",
              col: 4.3,
              row: 8.0,
              cw: 3.4,
              note: "Another. A finished wireframe set and three empty frames get described the same way by whoever made them.",
            },
            {
              id: "gd",
              label: "Docs",
              sub: "drafts · revisions",
              col: 8.15,
              row: 8.0,
              cw: 3.4,
              note: "And another. Feedback lands on the draft as it stands rather than on what the learner remembers writing.",
            },
          ],
          edges: [
            { from: "prof", to: "rag" },
            { from: "meet", to: "rag" },
            { from: "docs", to: "rag" },
            { from: "rag", to: "agent" },
            { from: "mem", to: "agent", label: "recalled", hl: true },
            { from: "agent", to: "mem", label: "observations" },
            { from: "agent", to: "judge", label: "response" },
            { from: "judge", to: "agent", label: "verdict", dashed: true, hl: true },
            { from: "agent", to: "plan", label: "breaks down", hl: true },
            { from: "plan", to: "pick", label: "per sub-task", hl: true },
            { from: "pick", to: "gh" },
            { from: "pick", to: "fig" },
            { from: "pick", to: "gd" },
          ],
          caption:
            "Everything above the agent is context it already holds; everything below is how it checks the work rather than the description of it. The connectors shown are examples — the sub-task decides which one gets called. The dashed edge closes the loop, so being stuck twice on the same thing is something the system notices.",
        },
      },
      {
        heading: "Memory, and knowing where someone is stuck",
        body: [
          "Two layers, kept apart on purpose. One flat store would have been less code, and a tutor that brings up a research project while you're building a website.",
        ],
        systemDiagram: {
          rows: 7.3,
          groups: [
            {
              id: "layers",
              label: "Kept apart on purpose",
              col: 0.2,
              row: 2.5,
              cw: 11.6,
              rh: 1.9,
            },
          ],
          nodes: [
            {
              id: "sess",
              label: "Session",
              sub: "what actually happened",
              col: 4.3,
              row: 0,
              cw: 3.4,
              note: "One working session on one sub-task: what was attempted, where it stalled, and how many times the copilot had to step in.",
            },
            {
              id: "extract",
              label: "Extractor",
              sub: "runs on session end",
              col: 4.3,
              row: 1.3,
              cw: 3.4,
              note: "Summarises the session and pulls out the gaps it exposed.",
              caution:
                "Fire-and-forget. If this fails the session still closes cleanly — bookkeeping is never allowed to take the learner's work down with it.",
            },
            {
              id: "act",
              label: "Per-activity",
              sub: "summary + open gaps",
              col: 0.45,
              row: 2.9,
              cw: 3.4,
              hl: true,
              note: "A rolling summary and the open gaps for one piece of work, and nothing else. This is the layer that keeps a research project's context out of a portfolio site's.",
            },
            {
              id: "stuck",
              label: "Stuck counts",
              sub: "per sub-task",
              col: 4.3,
              row: 2.9,
              cw: 3.4,
              hl: true,
              note: "A counter per sub-task, incremented live during the session rather than inferred afterwards. Three interventions means the task was harder than the plan assumed — a fact about the plan as much as about the learner.",
            },
            {
              id: "glob",
              label: "Global",
              sub: "recurring patterns",
              col: 8.15,
              row: 2.9,
              cw: 3.4,
              note: "What shows up across everything they do. \"Struggles with written structure\" belongs here; \"hasn't set up the database yet\" does not.",
            },
            {
              id: "asm",
              label: "Context assembly",
              sub: "same order, every turn",
              col: 4.3,
              row: 5.0,
              cw: 3.4,
              hl: true,
              note: "Reads all three before every turn, always in the same order. Fixed order is what makes behaviour reproducible when something goes wrong — otherwise a bad answer has no reconstructible cause.",
            },
            {
              id: "turn",
              label: "Next turn",
              sub: "nudge · explain · guide",
              col: 4.3,
              row: 6.3,
              cw: 3.4,
              note: "The assembled context decides which of the three the copilot does. The stuck count is what tips it from explaining to walking through step by step.",
            },
          ],
          edges: [
            { from: "sess", to: "extract" },
            { from: "extract", to: "act", label: "summary", dashed: true },
            { from: "extract", to: "stuck", dashed: true },
            { from: "extract", to: "glob", label: "patterns", dashed: true },
            { from: "glob", to: "asm", label: "1", hl: true },
            { from: "act", to: "asm", label: "2", hl: true },
            { from: "stuck", to: "asm", label: "3", hl: true },
            { from: "asm", to: "turn" },
          ],
          caption:
            "Dashed writes are best-effort and never block the learner. The numbers are the read order — global patterns first, then this activity, then where they are right now — and it is the same order on every turn.",
        },
      },
      {
        heading: "The model is not allowed to mark work complete",
        body: [
          "The agent has a tool that looks like it completes a task. It doesn't — it **signals readiness**, and the shared status writer refuses any completed write that doesn't carry an explicit confirmation.",
        ],
        flow: {
          nodes: [
            { label: "Agent signals ready" },
            { label: "Read-only check" },
            { label: "Learner confirms", hl: true },
            { label: "COMPLETED written" },
          ],
          caption:
            "An unmet check returns the checklist rather than a refusal, so the learner sees what's left. Nothing writes completion without that confirm — including the agent that asked for it.",
        },
      },
      {
        heading: "The hard part: knowing whether it got worse",
        body: [
          "Generative output has no build error. Change a prompt, swap a model, add a skill — it still responds fluently and you have no idea whether it's now subtly wrong. So quality became a **CI gate**: a versioned golden dataset graded on every change, exiting non-zero if any case regresses.",
        ],
        bullets: [
          "**Cheap tiers first.** Zod validates structure for free and short-circuits the rest; embeddings are an on-topic signal only, never the verdict; the judge scores 1–5 on faithfulness, relevance, completeness and pedagogy. Pass is **0.70**.",
          "**Goldens are expected-behaviour specs, not exact answers.** Grading a generative system on string equality only teaches you that it produced different words.",
          "**The judge is calibrated against human grades**, so its scores track what a person would have said rather than what a model finds agreeable. An uncalibrated judge is a confidence generator, not a measurement.",
          "**Every generative call writes a trace** — model, prompt version, latency, tokens, thumbs — fire-and-forget, so telemetry never blocks generation. That's how the golden set grows from real traffic instead of from someone remembering to write test cases.",
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
            "A structural failure short-circuits — a malformed plan can't be 'good', so there's no point paying a judge to read it.",
        },
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
      "Ten backend services, one identity hub, and the loop that makes three of them a single system.",
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
          "Ten backends — CRM, payments, notifications, recommendations, meeting intelligence, interviewing, internships — each starting out with its own idea of who a user was. Every new product meant reimplementing authentication, and every permission change meant finding all ten copies of it.",
          "What ties three of them together isn't a call graph, it's a **loop**.",
        ],
        systemDiagram: {
          rows: 5.68,
          groups: [
            {
              id: "loop",
              label: "The learning loop",
              col: 0.2,
              row: 2.6,
              cw: 11.6,
              rh: 3.0,
            },
          ],
          nodes: [
            {
              id: "apps",
              label: "Product apps",
              sub: "six frontends",
              col: 0.45,
              row: 0,
              cw: 3.4,
              note: "Six product frontends, plus an embeddable plugin that runs on somebody else's page. Not one of them carries its own idea of who a user is.",
            },
            {
              id: "idp",
              label: "Identity & SSO hub",
              sub: "authN + cached authZ",
              col: 0.45,
              row: 1.3,
              cw: 3.4,
              hl: true,
              note: "The one service every product authenticates through. SSO, tokens with refresh sessions, OAuth, and a permission engine whose answers are cached with the tenant as part of the key — which turns cross-tenant leakage into a cache miss rather than something you hope a reviewer catches.",
              caution:
                "It is also the platform's single point of failure. Every product's every request waits on it, which is the whole reason the cache exists.",
            },
            {
              id: "svcs",
              label: "Product services",
              sub: "signed tokens only",
              col: 8.15,
              row: 1.3,
              cw: 3.4,
              note: "The domain backends behind those frontends. They never call each other anonymously — internal calls carry signed service tokens, so a compromised product cannot quietly act as the platform.",
            },
            {
              id: "score",
              label: "Scoring",
              sub: "profile → a band",
              col: 0.45,
              row: 3.0,
              cw: 3.4,
              note: "Turns a profile questionnaire into a single score on a fixed band. It is both the input the recommender ranks against and the output the loop rewrites once work is finished.",
            },
            {
              id: "rec",
              label: "Recommender",
              sub: "activity ideas",
              col: 8.15,
              row: 3.0,
              cw: 3.4,
              hl: true,
              href: "/work/recommender",
              note: "Finds the nearest comparable outcomes in a corpus of admitted profiles, uses that to decide what level is reachable, then generates activities at that level and gates them before any are stored.",
            },
            {
              id: "cop",
              label: "Learning Copilot",
              sub: "guided execution",
              col: 4.3,
              row: 4.4,
              cw: 3.4,
              hl: true,
              href: "/work/learning-copilot",
              note: "Takes the activity a learner picked and helps them do it — breaking it into sub-tasks, reading the actual work through connected tools, and remembering where they got stuck last time.",
            },
          ],
          edges: [
            { from: "apps", to: "idp" },
            { from: "idp", to: "svcs", label: "signed token" },
            { from: "idp", to: "score", label: "profile" },
            { from: "score", to: "rec", label: "score", hl: true },
            { from: "rec", to: "cop", label: "chosen activity", hl: true },
            { from: "cop", to: "score", label: "completion", dashed: true, hl: true },
          ],
          caption:
            "Described at the level of the pattern rather than the deployment. The loop is the point: a score decides what gets recommended, the copilot helps execute it, and finishing rewrites the score — so the next recommendation is harder than the last. The two boxes with arrows lead to their own write-ups.",
        },
      },
      {
        heading: "Two databases, on purpose",
        body: [
          "Identity, money and notification logs run on relational storage; product domains run on document storage. Not indecision — one extra ORM dialect, and the right tool on both sides of the line.",
        ],
        bullets: [
          "**Identity and money must not drift.** They want foreign keys, transactions, and a schema that refuses bad states outright.",
          "**Product data is schema-fluid**, reshaped weekly. Running that against migrations is friction with no payoff.",
          "**The audit trail is where it earns its keep.** When someone asks why an account has access it shouldn't, the answer has to be reconstructible — and that's a property of constrained storage, not of a document you can shape however you like at write time.",
        ]
      },
      {
        heading: "The webhook is the fast path, not the truth",
        body: [
          "A provider fires a webhook when money moves — and sometimes it doesn't arrive, arrives twice, or lands before the record it refers to exists.",
        ],
        bullets: [
          "**Duplicates are free.** Events are recorded idempotently, so a second delivery is a no-op.",
          "**Silence is caught.** A scheduled reconciler sweeps for unresolved orders and settles them against the provider's own view.",
          "**So the webhook is an optimisation, not the truth.** If every one vanished tomorrow the system would be slower and still correct — because a fact that matters has to be *checkable*, not merely announced.",
        ]
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
    href: {
      label: "fitted.hrshkshri.com",
      url: "https://fitted.hrshkshri.com",
      offline: true,
    },
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
              col: 6.4,
              row: 1.0,
              cw: 1.8,
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
