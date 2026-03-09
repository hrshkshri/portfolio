#import "@preview/simple-technical-resume:0.1.1": *

// ── Personal Info ──────────────────────────────────────────────────────────────
#let name = "Harsh Keshari"
#let phone = "+91 9598642369"
#let email = "harshkeshari100@gmail.com"
#let github = "hrshkshri"
#let linkedin = "hrshkshri"
#let personal-site = "harsh-keshari.vercel.app"

#show: resume.with(
  top-margin: 0.35in,
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

// ── Experience ─────────────────────────────────────────────────────────────────
#custom-title("Experience")[

  #work-heading(
    "Fullstack Engineer",
    link("https://www.linkedin.com/company/experiment-labs")[Experiment Labs],
    "Remote",
    datetime(year: 2024, month: 11, day: 1),
    "Present",
  )[
    *Learning Management System (LMS)*
    - *Engineered payment and enrollment reliability* by redesigning Razorpay flows with retry logic, fallback mechanisms, and cron-based automated reconciliation, ensuring seamless enrollment at scale.
    - *Migrated platform infrastructure from AWS Lambda to EC2*, eliminating timeout errors across all long-running operations, improving overall system stability and scalability.
    - *Developed analytics email service* with scheduled cron jobs to deliver periodic usage insights to client organisations, enhancing customer engagement.

    *Internship Portal (Built from scratch)*
    - *Architected a multi-tenant internship platform* with RBAC supporting two org types — Internship Providers (companies) and Consumers (schools) — ensuring strict data isolation.
    - *Developed and deployed full-stack application* using Node.js, TypeScript, Prisma, MongoDB, Redis, React.js, and TailwindCSS on Firebase/AWS EC2, achieving Lighthouse scores of 100% Best Practices and 94% Accessibility.

    *Customer Relationship Management (CRM)*
    - *Built AI-powered activity recommendation feature* using OpenAI API to generate personalised suggestions for students based on their profiles, becoming a major revenue stream for the platform.
    - *Designed and implemented a Calendar Module* for student-admin meetings (similar to Calendly), enabling slot requests, rescheduling, and video integration with Zoom and Google Meet.
  ]

  #work-heading(
    "Backend Developer",
    link("https://www.linkedin.com/company/xipper")[Xipper],
    "Remote",
    datetime(year: 2024, month: 9, day: 1),
    datetime(year: 2024, month: 11, day: 1),
  )[
    - *Built MVP backend* for a hotel booking platform with government ID verification (PAN, Aadhaar) using Node.js and Express.js, implementing RESTful APIs for booking, availability, authentication, and KYC validation.
  ]
]

// ── Open Source ────────────────────────────────────────────────────────────────
#custom-title("Open-Source Contribution")[
  #work-heading(
    "Member & LaCE Quality Team Lead",
    link("https://www.github.com/oppia")[Oppia Foundation],
    "Open Source",
    datetime(year: 2023, month: 11, day: 1),
    datetime(year: 2024, month: 4, day: 1),
  )[
    - *Led the LaCE quality team*, managing task assignments for new contributors and conducting code reviews to ensure quality standards across user-facing features.
    - *Contributed 10 merged PRs* using Python and AngularJS, implementing UI enhancements and comprehensive unit/end-to-end testing.
  ]
]

// ── Projects ───────────────────────────────────────────────────────────────────
#custom-title("Projects")[
  #project-heading(
    [Nexus — #link("https://github.com/orgs/the-nexus-point/repositories")[GitHub] \/ #link("https://nexuspoint.vercel.app")[Website]],
    stack: "MongoDB, Express.js, React.js, Node.js",
    project-url: "https://nexuspoint.vercel.app",
  )[
    - *Built a live coding contest platform* for 300+ students with real-time CodeChef integration, web scraping for standings, and automated result generation.
    - *Implemented secure authentication* using Passport.js and JWT, with separate student and admin portals for contest enrollment and management.
  ]
]

// ── Skills ─────────────────────────────────────────────────────────────────────
#custom-title("Skills")[
  #skills()[
    - *Languages & Frameworks:* JavaScript/TypeScript, Python, Node.js, Express.js, React.js, Next.js, C/C++
    - *Databases & Tools:* MongoDB, PostgreSQL, Redis, Prisma, Git, Docker, AWS (EC2, Lambda), Firebase, Postman
    - *Concepts:* REST APIs, RBAC, Multi-tenancy, Cron Jobs, System Design, JWT/Auth, CI/CD
  ]
]
