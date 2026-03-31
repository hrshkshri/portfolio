#import "@preview/simple-technical-resume:0.1.1": *

#let work-heading-no-date(title, company, location, body) = {
  grid(columns: (1fr, 1fr), [*#title*], align(right, []))
  [#company #h(1fr) #emph(location)]
  v(-0.2em)
  if body != [] {
    v(-0.4em)
    set par(leading: 0.6em)
    set list(indent: 0.5em)
    body
  }
}

// ── Personal Info ──────────────────────────────────────────────────────────────
#let name = "Harsh Keshari"
#let phone = "+91 9598642369"
#let email = "harshkeshari100@gmail.com"
#let github = "hrshkshri"
#let linkedin = "hrshkshri"
#let personal-site = "hrshkshri.vercel.app"

#show: resume.with(
  top-margin: 0.2in,
  font: "New Computer Modern",
  personal-info-font-size: 9.2pt,
  author-position: center,
  personal-info-position: center,
  author-name: name,
  phone: phone,
  email: email,
  website: personal-site,
  linkedin-user-id: linkedin,
  github-username: github,
)

// Globally style all links to be a professional blue color
#show link: set text(fill: rgb("#0055CC"))

// ── Education ──────────────────────────────────────────────────────────────────
#custom-title("Education")[
  #education-heading(
    "Abdul Kalam Technical University",
    "India",
    "Bachelor of Technology",
    "Computer Science & Engineering (AI)",
    datetime(year: 2021, month: 8, day: 1),
    datetime(year: 2025, month: 6, day: 1),
  )[]
]

// ── Skills ─────────────────────────────────────────────────────────────────────
#custom-title("Skills")[
  #skills()[
    - *Languages & Frameworks:* JavaScript/TypeScript, Python, Node.js, Express.js, React.js, Next.js
    - *Databases & Tools:* MongoDB, PostgreSQL, Redis, Prisma, Git, Docker, AWS (EC2, Lambda), Firebase, Deepgram, Pinecone, Vertex AI, Google Cloud Tasks
    - *Concepts:* REST APIs, RBAC, Multi-tenancy, Microservices Architecture, Vector Search, JWT/Auth, CI/CD
  ]
]

// ── Experience ─────────────────────────────────────────────────────────────────
#custom-title("Experience")[

  #work-heading(
    "Founding Engineer",
    link("https://www.linkedin.com/company/experiment-labs")[Experiment Labs],
    "Remote",
    datetime(year: 2024, month: 11, day: 1),
    "Present",
  )[
    - *Built the entire platform from scratch* — 11 microservices: LMS, CRM, AI Interviewer, Smart Meeting Assistant, Recommendation Engine, Payments, Notifications, Auth, Internship Portal, Ops Dashboard, Evaluator.
    - *Designed auth & RBAC system* powering all services — 39+ permissions, 5 user roles, multi-tenant org isolation.
    - *Built Smart Meeting Assistant* — browser-based recording, Deepgram transcription, OpenAI-generated summaries and action items, one-click push to student roadmaps; used Bull + Redis queues to decouple processing from request cycles, enabling concurrent sessions.
    - *Built AI Interviewer* — Google Cloud Speech-to-Text, Vertex AI for question generation, video transcoding via Cloud Tasks.
    - *Built recommendation engine* using OpenAI embeddings + Pinecone vector search — adopted by Leverage Edu and PW, became the primary revenue driver.
    - *Migrated infrastructure from AWS Lambda to EC2*, eliminating timeout errors across all long-running operations.
  ]

]

// ── Open Source ────────────────────────────────────────────────────────────────
#custom-title("Open Source")[
  #skills()[
    - *#link("https://github.com/oppia/oppia/pulls?q=is:pr+author:hrshkshri")[Oppia Foundation]* (Quality Team Lead, Nov 2023 – Apr 2024) — led LaCE quality team, shipped 10 PRs across admin acceptance tests and UI fixes.
    - *#link("https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri")[CircuitVerse]* — fixed searchbar overlap bug and improved profile page responsiveness.
    - *#link("https://github.com/zowe/zlux-server-framework/pulls?q=is:pr+author:hrshkshri")[Zowe]* — contributed to Linux Foundation's open mainframe platform (`zlux-server-framework`).
    - *#link("https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri")[Tailcall]* — fixed critical search modal focus bug, earned \$150 bounty.
  ]
]

// ── Currently Building ─────────────────────────────────────────────────────────
#custom-title("Currently Building")[
  #project-heading(
    [Crelyzor — #link("https://crelyzor.app")[crelyzor.app]],
    stack: "React, Express.js, PostgreSQL, Redis, OpenAI, Deepgram",
    project-url: "https://crelyzor.app",
  )[
    - *Building solo* — a productivity OS where identity, meetings, scheduling, and tasks are one connected system; AI links card contacts to meeting participants, auto-extracts tasks from transcripts, and answers questions over the full meeting history.
    - *Built end-to-end meeting intelligence pipeline* — Deepgram Nova-2 transcription with speaker diarization, GPT-4o-mini extraction of summaries/action items, and streaming SSE chat (Ask AI) with full transcript context.
    - *Built timezone-aware booking engine* — slot calculation across availability schedules, Google Calendar busy-time, and existing bookings; serializable transactions prevent double-booking race conditions.
    - *Integrated Google Calendar bidirectionally* — OAuth, read sync for busy-time injection, write sync for event creation/cancellation, auto-generated Meet links; Recall.ai bots auto-join online meetings and feed into the same transcription pipeline.
    - *Architected dual-frontend system* — React + Vite for the authenticated dashboard; Next.js for SSR public pages (card profiles, booking pages, shared meetings) with OG previews and vCard downloads.
  ]
]
