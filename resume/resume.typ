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
  top-margin: 0.18in,
  bottom-margin: 0.18in,
  left-margin: 0.22in,
  right-margin: 0.22in,
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
    - *AI/ML:* OpenAI (GPT-4o, embeddings), Deepgram (Nova-3, speaker diarization), Pinecone vector search, Vertex AI, Google Cloud Speech-to-Text
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
    - *Architected recommendation engine* on OpenAI embeddings + Pinecone vector search — primary revenue driver, adopted by Leverage Edu and PhysicsWallah; driving personalized activity recommendations for student career roadmaps.
    - *Launched 10 production microservices* across ExperimentLabs' edtech platform — core (Auth, CRM, Payments, Notifications), AI services (Recommendation Engine, Smart Meeting Assistant, AI Interviewer), and product modules (Internship Portal, Evaluator, Sales Operations Dashboard).
    - *Designed central SSO/identity service* (auth-core: 92 Prisma models, 85 routes) powering all microservices — refactored permission model from 93 → 38 across 6 categories; multi-tenant org isolation via tenant-keyed queries.
    - *Engineered Smart Meeting Assistant* — counselor–student session recording with AI summaries auto-pushed to student career roadmaps; Bull + Redis queues + Railway worker processing batch transcription across orgs.
    - *Developed AI Interviewer* end-to-end — Google Cloud Speech-to-Text for student answers, Vertex AI for adaptive question generation and scoring, async video transcoding via Cloud Tasks.
    - *Implemented Payments and Notifications services* — Razorpay subscription billing with webhook reconciliation and Brevo transactional email with node-cron scheduled reminders.
    - *Migrated long-running services (transcription, video processing, recommendation regeneration) from AWS Lambda to EC2*, eliminating serverless timeouts; added cron monitors for payment reconciliation and meeting-link retries.
    - *Delivered 13+ React/Next.js frontends end-to-end* — counselor CRM, AI Interviewer portal, ops dashboard, embeddable plugin, and marketing site, deployed alongside each backend service.
  ]

]

// ── Open Source ────────────────────────────────────────────────────────────────
#custom-title("Open Source")[
  #skills()[
    - *#link("https://github.com/oppia/oppia/pulls?q=is:pr+author:hrshkshri")[Oppia Foundation]* (Quality Team Lead, Nov 2023 – Apr 2024) — led LaCE, Oppia's frontend quality team; merged 10 PRs across admin acceptance tests and UI fixes.
    - *#link("https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri")[Tailcall]* — resolved search modal focus bug; earned \$150 bounty from the maintainer team.
    - Also contributed to *#link("https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri")[CircuitVerse]* (digital circuit simulation) and *#link("https://github.com/zowe/zlux-server-framework/pulls?q=is:pr+author:hrshkshri")[Zowe]* (Linux Foundation's open mainframe platform).
  ]
]

// ── Projects ───────────────────────────────────────────────────────────────────
#custom-title("Projects")[
  #project-heading(
    [Crelyzor — #link("https://crelyzor.app")[crelyzor.app]],
    stack: "PERN stack · TypeScript · Prisma · Bull/Redis · Next.js · Deepgram Nova-3 · Google Gemini 2.0 Flash · Recall.ai · Resend · Docker · GitHub Actions",
    project-url: "https://crelyzor.app",
  )[
    - *All-in-one productivity SaaS for solo professionals* — replaces HiHello (cards) + Cal.com (scheduling) + Otter.ai (meeting AI) + Todoist (tasks). Live in production with billing, multi-environment Docker deploys, and a public booking widget embeddable on any site.
    - *Engineered end-to-end meeting intelligence pipeline* — Deepgram Nova-3 Multilingual transcription with speaker diarization, Google Gemini 2.0 Flash for summaries + AI-extracted tasks; per-meeting Ask AI with SSE streaming + persisted conversation history; Recall.ai bots auto-join Meet/Zoom on bookings and feed the same pipeline.
    - *Implemented timezone-aware scheduling engine* — slot calculation across availability schedules, GCal busy-time, existing bookings, and buffers; serializable transactions prevent double-booking races; bidirectional GCal push webhooks for real-time sync.
    - *Structured 4-repo production system* — API backend, authenticated dashboard, SSR public site (cards, booking, shared meetings), and separate admin portal; Docker multi-stage builds, 3-environment Compose, nginx+Certbot SSL, GitHub Actions selective deploys.
    - *Launched billing infrastructure* — Free/Pro (\$19)/Business tiers, per-resource usage metering (transcription minutes, Recall hours, AI credits, storage), 402 enforcement with in-context upgrade flow, monthly reset cron.
    - *Hardened production security* — encryption at rest via Google Cloud KMS (per-user DEKs, AES-256-GCM for transcripts/tasks/contacts), GCS bucket CMEK, crypto-shredding on account delete (GDPR); fixed XSS, SSRF on OG route; admin JWT in httpOnly cookies, CSP, rate-limited admin auth.
  ]
]
