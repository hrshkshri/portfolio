import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiGo,
  SiAngular,
  SiPostgresql,
  SiMysql,
  SiSpotify,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsTwitter,
  BsFillPersonVcardFill,
  BsGit,
  BsCalendar3,
} from "react-icons/bs";
import { IconType } from "react-icons";

interface IconData {
  icon: IconType;
  size: string;
}

interface SkillCategory {
  category: string;
  icons: IconData[];
}

interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

interface NavLink {
  href: string;
  icon: IconType;
  label: string;
}

interface Project {
  name: string;
  achievements: string[];
}

interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  projects: Project[];
}

interface OpenSourceContribution {
  role: string;
  organization: string;
  organizationUrl: string;
  period: string;
  achievements: string[];
}

interface ProjectData {
  name: string;
  tag?: string;
  duration?: string;
  liveLink?: string;
  githubLink: string;
  description: string[];
  category: string;
  techStack: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    icons: [
      { icon: TbBrandCpp, size: "w-5 h-5" },
      { icon: SiJavascript, size: "w-5 h-5" },
      { icon: SiTypescript, size: "w-5 h-5" },
      { icon: SiGo, size: "w-8 h-8" },
      { icon: TbSql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    icons: [
      { icon: SiTailwindcss, size: "w-5 h-5" },
      { icon: FaReact, size: "w-5 h-5" },
      { icon: SiAngular, size: "w-5 h-5" },
      { icon: TbBrandNextjs, size: "w-5 h-5" },
      { icon: FaNodeJs, size: "w-5 h-5" },
      { icon: SiExpress, size: "w-5 h-5" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { icon: SiMongodb, size: "w-5 h-5" },
      { icon: SiPostgresql, size: "w-5 h-5" },
      { icon: SiMysql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Tools/Technologies",
    icons: [
      { icon: SiPostman, size: "w-5 h-5" },
      { icon: SiFirebase, size: "w-5 h-5" },
      { icon: BsGit, size: "w-5 h-5" },
      { icon: FaLinux, size: "w-5 h-5" },
    ],
  },
];

export const resumeLink = "/resume.pdf";

export const socialLinks: SocialLink[] = [
  { href: "https://twitter.com/hrshkshri", icon: BsTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/hrshkshri/",
    icon: AiFillInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/hrshkshri/",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/hrshkshri", icon: AiFillGithub, label: "GitHub" },
  {
    href: "mailto:harshkeshari100@gmail.com",
    icon: AiFillMail,
    label: "Email",
  },
  { href: "/spotify", icon: SiSpotify, label: "Spotify" },
];

export const navLinks: NavLink[] = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
  { href: "/calendar", icon: BsCalendar3, label: "Schedule" },
];

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Xipper",
    companyUrl: "https://www.linkedin.com/company/xipper",
    period: "Sept 2024 - Nov 2024",
    projects: [
      {
        name: "",
        achievements: [
          "Built the MVP backend for a hotel booking & management platform from scratch using **Node.js and Express**.",
          "Designed and shipped REST APIs for room booking, availability management, and authentication.",
        ],
      },
    ],
  },
  {
    role: "Founding Engineer",
    company: "Experiment Labs",
    companyUrl: "https://www.linkedin.com/company/experiment-labs",
    period: "Nov 2024 - Present",
    projects: [
      {
        name: "",
        achievements: [
          "Built the **recommendation engine** on **OpenAI embeddings + Pinecone vector search** — the platform's **primary revenue driver**, serving **3,500+ personalized recommendations** to students across **8 partner orgs** (incl. Leverage Edu, PhysicsWallah).",
          "Shipped an **agentic AI learning copilot** — **LangGraph + Gemini** agent with **realtime voice (WebSocket)**; grounds replies on each student's progress and knowledge gaps via **RAG over a 100+ skill library**; **tool-calling** (GitHub, web search, tasks); regression-tested in CI by an **LLM-as-judge** grader calibrated to human ratings.",
          "Architected the platform's **10 production microservices** — core (Auth, CRM, Payments, Notifications), AI services (Recommendation Engine, Copilot, Smart Meeting Assistant, AI Interviewer), and product modules; built the **central identity provider** (auth-core, 92 Prisma models, 85 routes) with **SSO**, JWT + refresh sessions, Google/Zoom OAuth, and a cached **RBAC** engine enforcing **multi-tenant** org isolation.",
          "Engineered **Smart Meeting Assistant** — transcribed **500+ counselor–student sessions** with AI summaries auto-pushed to learner profiles; async **Bull + Redis** queue with a background worker batch-processing across orgs.",
          "Developed **AI Interviewer** — **Google Cloud Speech-to-Text** for answers, **Vertex AI** for adaptive question generation and scoring, async video transcoding via **Cloud Tasks**.",
          "Implemented **Payments & Notifications** — **Razorpay** subscription billing with webhook reconciliation; multi-channel (email, SMS, WhatsApp) transactional messaging with scheduled reminders.",
          "Migrated long-running services (transcription, video, recommendation regeneration) from **AWS Lambda to EC2**, eliminating serverless timeouts; added cron monitors for payment reconciliation.",
        ],
      },
    ],
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    role: "Quality Team Lead",
    organization: "Oppia Foundation",
    organizationUrl: "https://www.github.com/oppia",
    period: "Nov 2023 - April 2024",
    achievements: [
      "Led the **LaCE quality team** at Oppia — managed contributor onboarding, task assignments, and code reviews across all user-facing features.",
      "Shipped **10 merged PRs** in Python and AngularJS — admin acceptance tests, topic editor migration, UI fixes, and e2e test coverage.",
    ],
  },
  {
    role: "Contributor",
    organization: "Tailcall",
    organizationUrl:
      "https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Completed a **$150 bounty** — fixed a critical search bar modal focus issue in the documentation site.",
    ],
  },
  {
    role: "Contributor",
    organization: "CircuitVerse",
    organizationUrl:
      "https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed a **search bar overlap issue** and improved **profile page responsiveness** across devices.",
    ],
  },
  {
    role: "Contributor",
    organization: "Zlux Server Framework (Zowe)",
    organizationUrl:
      "https://github.com/zowe/zlux-server-framework/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed an **authentication bug** — improved error handling and response reliability.",
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    name: "Claukit",
    tag: "Maintained",
    githubLink: "https://github.com/hrshkshri/claukit",
    description: [
      "Your Claude companion — a **browser extension + CLI** that surfaces token usage, cache reads, and rate limits in real time.",
      "Shows **input/output token counts** per message, **cache hit tracking**, and visual **usage bars** for the 5-hour and 7-day limits with a reset countdown.",
      "CLI renders auto-refreshing usage bars in the Claude Code status line; extension follows claude.ai's light/dark theme automatically.",
    ],
    category: "Developer Tools",
    techStack: "TypeScript, Browser Extension (Firefox/Chrome), Node.js CLI",
  },
  {
    name: "Nexus",
    tag: "Maintained",
    githubLink: "https://github.com/orgs/the-nexus-point/repositories",
    description: [
      "Built a **live contest portal used by 300+ students** for real-time coding competition participation and standings on CodeChef.",
      "Shipped both a student portal (enrollment, live standings) and a secure admin portal (profile management, data scraping, result generation).",
      "Implemented **web scraping** to pull real-time user data from CodeChef and **JWT-based auth** via Passport.js.",
    ],
    category: "Full-Stack Development",
    techStack: "MERN Stack, Chakra-UI, Tailwind CSS",
  },
  {
    name: "Bitcoin Wallet CLI",
    tag: "",
    githubLink: "https://github.com/hrshkshri/bitcoin-cli-tool",
    description: [
      "CLI tool to manage Bitcoin wallets, addresses, and transactions — wallet creation, address generation, balance checking, and transaction history.",
      "Integrated **Blockcypher API** for real-time Bitcoin data.",
    ],
    category: "CLI / Systems",
    techStack: "Node.js, Blockcypher API",
  },
];
