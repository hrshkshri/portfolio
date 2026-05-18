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
#let location = "Delhi, India"

#show: resume.with(
  top-margin: 0.2in,
  bottom-margin: 0.2in,
  left-margin: 0.25in,
  right-margin: 0.25in,
  font: "New Computer Modern",
  font-size: 10pt,
  personal-info-font-size: 9pt,
  author-position: center,
  personal-info-position: center,
  author-name: name,
  phone: phone,
  email: email,
  location: location,
  website: personal-site,
  linkedin-user-id: linkedin,
  github-username: github,
)

// Globally style all links to be a professional blue color
#show link: set text(fill: rgb("#0055CC"))

// ── Education ──────────────────────────────────────────────────────────────────
#custom-title("Education")[
  #education-heading(
    "KIET Group of Institutions",
    "Ghaziabad, India",
    "Bachelor of Technology",
    "Computer Science & Engineering (AI)",
    datetime(year: 2021, month: 8, day: 1),
    datetime(year: 2025, month: 6, day: 1),
  )[]
]

// ── Skills ─────────────────────────────────────────────────────────────────────
#custom-title("Skills")[
  #skills()[
    - *Languages & Frameworks:* TypeScript, JavaScript, Python, Node.js, Express, React, Next.js, Prisma
    - *AI/ML:* OpenAI (GPT-4o, embeddings), Deepgram (Nova-2, speaker diarization), Pinecone vector search, Vertex AI, Google Cloud Speech-to-Text
    - *Cloud, Infra & Integrations:* AWS (EC2, Lambda), Vercel, Docker, GCP, Firebase, Bull + Redis queues, node-cron, Google Calendar/Meet, Recall.ai, Razorpay, Brevo
    - *Databases & Architecture:* PostgreSQL, MongoDB, Redis, Pinecone; Microservices, Multi-tenancy, Vector Search
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
    - *Architected recommendation engine* on OpenAI embeddings + Pinecone vector search — primary revenue driver, adopted by Leverage Edu and PhysicsWallah; powers personalized activity recommendations for student career roadmaps.
    - *Shipped 10 production microservices* across ExperimentLabs' edtech platform — core (Auth, CRM, Payments, Notifications), AI services (Recommendation Engine, Smart Meeting Assistant, AI Interviewer), and product modules (Internship Portal, Evaluator, Sales Operations Dashboard).
    - *Designed central SSO/identity service* (auth-core: 92 Prisma models, 85 routes) powering all microservices — refactored permission model from 93 → 38 across 6 categories; multi-tenant org isolation via tenant-keyed queries.
    - *Engineered Smart Meeting Assistant* — counselor–student session recording with AI summaries auto-pushed to student career roadmaps; Bull + Redis queues + Railway worker handle batch transcription across orgs.
    - *Built AI Interviewer* end-to-end — Google Cloud Speech-to-Text for student answers, Vertex AI for adaptive question generation and scoring, async video transcoding via Cloud Tasks.
    - *Delivered Payments and Notifications services* — Razorpay subscription billing with webhook reconciliation and Brevo transactional email with node-cron scheduled reminders.
    - *Migrated long-running services (transcription, video processing, recommendation regeneration) from AWS Lambda to EC2*, eliminating serverless timeouts; added cron monitors for payment reconciliation (every 10 min) and meeting-link retries (every 30 min).
    - *Shipped frontends end-to-end alongside backends* — 13+ React/Next.js surfaces including counselor CRM, AI Interviewer portal, ops dashboard, embeddable plugin, and marketing site (Next.js SSR).
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

// ── Projects ───────────────────────────────────────────────────────────────────
#custom-title("Projects")[
  #project-heading(
    [Crelyzor — #link("https://crelyzor.app")[crelyzor.app]],
    stack: "React, Express.js, PostgreSQL, Redis, OpenAI, Deepgram",
    project-url: "https://crelyzor.app",
  )[
    - A productivity OS where identity, meetings, scheduling, and tasks are one connected system; AI links card contacts to meeting participants, auto-extracts tasks from transcripts, and answers questions over the full meeting history.
    - *Built end-to-end meeting intelligence pipeline* — Deepgram Nova-2 transcription with speaker diarization, GPT-4o-mini extraction of summaries/action items, and streaming SSE chat (Ask AI) with full transcript context.
    - *Built timezone-aware booking engine* — slot calculation across availability schedules, Google Calendar busy-time, and existing bookings; serializable transactions prevent double-booking race conditions.
    - *Integrated Google Calendar bidirectionally* — OAuth, read sync for busy-time injection, write sync for event creation/cancellation, auto-generated Meet links; Recall.ai bots auto-join online meetings and feed into the same transcription pipeline.
    - *Architected dual-frontend system* — React + Vite for the authenticated dashboard; Next.js for SSR public pages (card profiles, booking pages, shared meetings) with OG previews and vCard downloads.
  ]
]
