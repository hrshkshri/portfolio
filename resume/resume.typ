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
#let personal-site = "harsh-keshari.vercel.app"

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
    - *Languages & Frameworks:* JavaScript/TypeScript, Python, Node.js, Express.js, React.js, Next.js, C/C++
    - *Databases & Tools:* MongoDB, PostgreSQL, Redis, Prisma, Git, Docker, AWS (EC2, Lambda), Firebase
    - *Concepts:* REST APIs, RBAC, Multi-tenancy, Cron Jobs, System Design, JWT/Auth, CI/CD
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
    - *Built Smart Meeting Assistant* — browser-based recording, Deepgram transcription, OpenAI-generated summaries and action items, one-click push to student roadmaps.
    - *Built AI Interviewer* — Google Cloud Speech-to-Text, Vertex AI for question generation, video transcoding via Cloud Tasks.
    - *Built recommendation engine* using OpenAI embeddings + Pinecone vector search — became a major revenue stream.
    - *Migrated infrastructure from AWS Lambda to EC2*, eliminating timeout errors across all long-running operations.
  ]

]

// ── Open Source ────────────────────────────────────────────────────────────────
#custom-title("Open-Source Contribution")[
  #work-heading(
    "Quality Team Lead",
    link("https://www.github.com/oppia")[Oppia Foundation],
    "Open Source",
    datetime(year: 2023, month: 11, day: 1),
    datetime(year: 2024, month: 4, day: 1),
  )[
    - *Led the LaCE quality team* — managed contributor onboarding, task assignments, and code reviews across all user-facing features.
    - *Shipped 10 merged PRs* in Python and AngularJS — admin acceptance tests, topic editor migration, UI fixes, and e2e test coverage.
  ]

  #work-heading-no-date(
    "Contributor",
    link("https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri")[Tailcall],
    "Open Source",
  )[
    - *Completed a \$150 bounty* — fixed a critical search bar modal focus issue in the documentation site.
  ]
]

// ── Projects ───────────────────────────────────────────────────────────────────
#custom-title("Projects")[
  #project-heading(
    [Crelyzor — #link("https://crelyzor.app")[crelyzor.app]],
    stack: "Next.js, Node.js, PostgreSQL, OpenAI, Deepgram",
    project-url: "https://crelyzor.app",
  )[
    - Building solo — an AI-native workspace that connects contacts, meetings, and tasks; consolidates tools like HiHello, Cal.com, Otter.ai, and Todoist into one product.
    - *Core features shipped:* AI meeting transcription (Deepgram), OpenAI-powered action item extraction, contact management, and automated task sync.
    - *Architected from day one* for scale — multi-tenant auth, RBAC, and microservices across the full stack.
  ]

  #project-heading(
    [Nexus — #link("https://github.com/orgs/the-nexus-point/repositories")[GitHub] \/ #link("https://nexuspoint.vercel.app")[Website]],
    stack: "MongoDB, Express.js, React.js, Node.js",
    project-url: "https://nexuspoint.vercel.app",
  )[
    - *Built a live contest portal used by 300+ students* — real-time CodeChef standings, web scraping, student and admin portals, JWT auth.
  ]
]
