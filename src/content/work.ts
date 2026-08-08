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

export interface Section {
  heading: string;
  /** Paragraphs. `**bold**` is rendered via renderTextWithBold. */
  body: string[];
  flow?: Flow;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Employer, when the work wasn't solo. */
  org?: string;
  period: string;
  role: string;
  /** One line for the index page. */
  summary: string;
  tags: string[];
  href?: { label: string; url: string };
  facts: { label: string; value: string }[];
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
      { label: "Scale", value: "47 Prisma models across 4 repos" },
      { label: "Stack", value: "Node · Express · Postgres · Prisma" },
      { label: "AI", value: "Deepgram Nova-2, GPT-4o-mini" },
      { label: "Async", value: "Bull queue on Upstash Redis" },
      { label: "Status", value: "Live, billing enabled" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "A solo consultant runs their week across five tools that don't know about each other. The contact lives in HiHello, the booking in Cal.com, the meeting recording in Otter, and the follow-up task in Todoist — if it gets created at all.",
          "None of that work is individually hard. The **stitching** is where it falls apart: every handoff between tools is a manual copy-paste that eventually stops happening.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "One workspace where a card contact becomes a meeting participant, a meeting generates tasks, and the AI can answer questions about any of it. Four product pillars over a single relational model — **47 Prisma tables** — so the connections are joins rather than integrations.",
          "The split is deliberate: an authenticated React dashboard, and a separate Next.js app for public card and booking pages. Different domain, zero auth, real SEO requirements, and none of the dashboard's bundle weight.",
        ],
      },
      {
        heading: "The hard part: meeting AI that doesn't feel slow",
        body: [
          "Transcribing and summarising a recording takes **30 to 120 seconds**. You cannot hold an HTTP connection open for that, and putting a spinner in front of it means nobody uses the feature twice.",
          "So the pipeline runs entirely off the request path. The upload returns immediately; a **Bull queue** on Upstash Redis hands the job to a worker process, and results land on the meeting record when they're ready. Bull earned its place over a hand-rolled queue for retries and job status — transcription fails often enough that both matter.",
        ],
        flow: {
          nodes: [
            { label: "Recording" },
            { label: "Upload returns" },
            { label: "Bull queue", hl: true },
            { label: "Deepgram" },
            { label: "GPT-4o-mini" },
            { label: "Meeting record" },
          ],
          caption:
            "Everything right of the queue is off the request path. The user never waits on it.",
        },
      },
      {
        heading: "Choices worth defending",
        body: [
          "**Deepgram Nova-2 over Whisper.** Whisper is the obvious default and I rejected it, because it has no speaker diarization. A meeting transcript that can't tell you *who said what* is close to useless for summarisation — and it's the one thing you can't add later in post-processing.",
          "**GPT-4o-mini over GPT-4o.** Meeting transcripts fit comfortably in the smaller context, and the task is structured extraction rather than reasoning. Roughly **10× cheaper** at acceptable quality, with a one-string upgrade path if that stops being true.",
          "**Postgres over MongoDB.** Meetings have participants, participants have roles, recordings have transcripts, transcripts have segments. Document storage would have meant denormalising all of it and then maintaining the denormalisation.",
          "**Recall.ai over building the bot.** A Zoom and Meet bot means maintaining OAuth apps, bot infrastructure and recording pipelines — none of which is the product. Recall streams audio to Deepgram under my own credentials, so the Phase 1 pipeline runs unchanged.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Live with billing and paying users. The same worker pool handles batch processing across accounts, and Ask AI streams over SSE — a first token in a few hundred milliseconds reads as faster than a complete answer four seconds later, even though it finishes at the same time.",
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
    summary:
      "An agentic tutor with realtime voice, grounded on each learner's actual progress — plus an LLM-as-judge harness in CI so answer quality can't silently regress.",
    tags: ["LangGraph", "Gemini", "WebSocket", "RAG", "LLM-as-judge", "TypeScript"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Agent", value: "LangGraph + Gemini" },
      { label: "Voice", value: "Realtime over WebSocket" },
      { label: "Grounding", value: "RAG over a 100+ skill library" },
      { label: "Quality", value: "3-tier eval harness, CI gate" },
      { label: "Size", value: "~15k lines TypeScript" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "A generic chatbot bolted onto a learning platform gives everyone the same answer. It doesn't know what a learner has already completed, where they got stuck last week, or which skills the curriculum expects next — so its advice is plausible and useless.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A **LangGraph** agent over Gemini that grounds every reply in the learner's own progress and knowledge gaps via RAG across a **100+ skill library**, with tool-calling out to GitHub, web search and the task system. Voice runs realtime over a WebSocket so it can be spoken to rather than typed at.",
        ],
      },
      {
        heading: "The hard part: knowing whether it got worse",
        body: [
          "Generative output has no build error. Change a prompt, swap a model, add a skill — the thing still responds fluently, and you have no idea if it's now subtly wrong. Manual spot-checking doesn't scale past the first few weeks, and it's exactly the kind of testing that quietly stops happening.",
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
          "Three tiers, ordered cheap to expensive. **Deterministic** validates plan structure with Zod — week counts, required and forbidden keywords — for free, and short-circuits the rest on failure. **Semantic** compares embeddings against a reference answer, used strictly as an on-topic signal and never as the correctness verdict. **Judge** is Gemini scoring 1–5 on faithfulness, relevance, completeness and pedagogy, with faithfulness weighted highest.",
          "The detail that makes it trustworthy: goldens are **expected-behaviour specs, not exact answers**. Grading a generative system on string equality just teaches you that it produced different words. And the judge is **calibrated against human grades**, so its scores track what a person would have said rather than what an LLM finds agreeable.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Running in CI. The harness also supports harvesting real traffic into the golden set — completed plans and positive feedback become new positive cases, poor ones get a corrected reference — so coverage grows from production instead of from someone remembering to write test cases.",
        ],
      },
    ],
  },

  {
    slug: "identity-platform",
    title: "Identity Platform",
    org: "Experiment Labs",
    period: "2024 — now",
    role: "Founding Engineer",
    summary:
      "The SSO and identity hub every product on the platform authenticates through — multi-tenant RBAC, service-to-service trust, and ten backends that had to agree on who a user is.",
    tags: ["Express", "Prisma", "PostgreSQL", "SSO", "RBAC", "Redis"],
    facts: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Scale", value: "98 Prisma models, 52 route modules" },
      { label: "Stack", value: "Express · Prisma · PostgreSQL" },
      { label: "Auth", value: "SSO, JWT + refresh, Google/Zoom OAuth" },
      { label: "Cache", value: "Upstash Redis" },
      { label: "Consumers", value: "10 production services" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Ten backends — CRM, payments, notifications, recommendations, meeting intelligence, interviewing, internships — each with its own idea of who a user was and what they were allowed to do. Every new product meant reimplementing auth, and every permission change meant finding all ten copies of it.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "**auth-core**: a central identity service every product authenticates through. **98 Prisma models** and **52 route modules** covering SSO, JWT with refresh sessions, Google and Zoom OAuth, and a cached RBAC engine that enforces multi-tenant organisation isolation.",
          "Services don't talk to each other anonymously — internal calls carry signed service tokens, so a compromised product can't impersonate the platform.",
        ],
      },
      {
        heading: "The hard part: permissions on every request",
        body: [
          "RBAC that reads from Postgres on every authorisation check turns the identity service into the platform's bottleneck — every product's every request now waits on one database.",
          "Resolved permissions are cached in Redis and invalidated on role change, so the common path never touches Postgres. Multi-tenant isolation is enforced at that layer too: the tenant is part of the cache key, which makes cross-org leakage a cache miss rather than a code review question.",
        ],
      },
      {
        heading: "A split worth explaining",
        body: [
          "The platform runs **PostgreSQL for identity, notifications and payments**, and **MongoDB for the product services** — CRM, meeting intelligence, recommendations, interviewing.",
          "That isn't indecision. Identity, money and audit trails are relational, constrained, and must not drift — they want foreign keys and transactions. Product data is document-shaped and schema-fluid, and iterating on it weekly against migrations is friction with no payoff. Splitting on that boundary costs one extra ORM and buys the right tool on both sides.",
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
    tags: ["TypeScript", "Browser Extension", "Node CLI", "esbuild"],
    href: { label: "npmjs.com/package/claukit", url: "https://www.npmjs.com/package/claukit" },
    facts: [
      { label: "Role", value: "Solo — open source" },
      { label: "Ships as", value: "Firefox add-on + npm CLI" },
      { label: "Stack", value: "TypeScript, esbuild" },
      { label: "Tokenizer", value: "o200k_base, counted locally" },
      { label: "Size", value: "~2.4k lines" },
      { label: "Status", value: "Published, v0.5" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Claude tells you when you've hit a limit, not how close you are. There's no token counter, no cache visibility, and no countdown — so heavy users are flying blind until they're cut off mid-task.",
        ],
      },
      {
        heading: "The hard part: you can't see the network from a content script",
        body: [
          "Browser extensions run content scripts in an **isolated world**. You get the DOM, but not the page's own `window.fetch` — so you cannot observe the requests you actually care about from where extensions are designed to run.",
          "The fix is a two-part bridge. A host script is injected into the **page context**, where it wraps `fetch` for real, and it talks to the content script over `postMessage` with a small request/response protocol.",
          "One detail matters more than it looks: the host captures `window.fetch` **before any framework can wrap it**, and patches `history.pushState` and `replaceState` to detect SPA navigation. Get the ordering wrong and you're instrumenting React's wrapper instead of the network, and it silently under-reports.",
        ],
        flow: {
          nodes: [
            { label: "Page context" },
            { label: "fetch wrapper", hl: true },
            { label: "postMessage" },
            { label: "Content script" },
            { label: "Usage UI" },
          ],
          caption:
            "The bridge exists purely because the two halves of an extension can't see the same window.",
        },
      },
      {
        heading: "Counting tokens without a server",
        body: [
          "Token counts are computed **locally**, with the `o200k_base` tokenizer vendored into the bundle. Sending conversation content to a counting service to find out how big it is would be an absurd privacy trade for a usage meter. It costs bundle size and nothing else.",
        ],
      },
      {
        heading: "The CLI half",
        body: [
          "The same data renders in the Claude Code status line via an npm CLI. To avoid making you paste cookies, `claukit setup` reads the session directly from the browser — which means three different storage formats: Chrome's AES-encrypted store (unlocked with a PBKDF2-derived key, and copied first because Chrome holds a lock on the live file), Firefox's SQLite, and Safari's binary format.",
          "When that fails — common on macOS, or when the cookie is memory-only — it degrades to a guided manual paste instead of an error.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
