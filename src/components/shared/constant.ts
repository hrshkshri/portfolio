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
          "Built the entire platform from scratch — **11 microservices** covering LMS, CRM, AI Interviewer, Smart Meeting Assistant, Recommendation Engine, Payments, Notifications, Auth, Internship Portal, Ops Dashboard, and Evaluator.",
          "Designed the **auth & RBAC system** powering all services — 39+ permissions, 5 user roles, multi-tenant org isolation.",
          "Built **Smart Meeting Assistant** — browser-based recording, Deepgram transcription, OpenAI-generated summaries and action items, with one-click push to student roadmaps.",
          "Built **AI Interviewer** — Google Cloud Speech-to-Text, Vertex AI for question generation, video transcoding via Cloud Tasks.",
          "Built **recommendation engine** using OpenAI embeddings + Pinecone vector search for AI-driven student career suggestions, which became a **major revenue stream**.",
          "Engineered **multi-channel notification service** — email, SMS, WhatsApp — with Redis-backed state, scheduled cron reminders, and rate limiting.",
          "Integrated **Razorpay** payment processing with webhook reconciliation, retry logic, and credit/subscription management.",
          "Migrated infrastructure from **AWS Lambda to EC2**, eliminating timeout errors across all long-running operations.",
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
