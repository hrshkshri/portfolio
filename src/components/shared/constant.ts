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
];

export const navLinks: NavLink[] = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
  { href: "/spotify", icon: SiSpotify, label: "Spotify" },
  { href: "/calendar", icon: BsCalendar3, label: "Schedule" },
  { href: "/github", icon: AiFillGithub, label: "GitHub" },
  { href: "/twitter", icon: BsTwitter, label: "Twitter" },
];

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Xipper",
    companyUrl: "https://www.linkedin.com/company/xipper",
    period: "Sept 2024 - Nov 2024",
    projects: [
      {
        name: "Hotel Booking Platform MVP",
        achievements: [
          "**Designed and developed the MVP** of Xipper, a **hotel booking and management web & mobile platform**, implementing core backend features using **Node.js** and **Express.js**.",
          "Built and exposed **RESTful APIs** for key functionalities such as room booking, availability management, and user authentication, ensuring **reliability and scalability**.",
          "Collaborated with frontend developers using **React.js** to deliver a seamless and responsive **user experience** across web and mobile.",
        ],
      },
    ],
  },
  {
    role: "Fullstack Engineer (started as Intern)",
    company: "Experiment Labs",
    companyUrl: "https://www.linkedin.com/company/experiment-labs",
    period: "Nov 2024 - Present",
    projects: [
      {
        name: "Learning Management System (LMS)",
        achievements: [
          "**Engineered end-to-end payment and enrollment reliability** by redesigning **Razorpay API flows** with retry logic, fallback mechanisms, and automated cron-based reconciliation, ensuring **seamless course enrollment at scale**.",
          "**Migrated platform infrastructure** from **AWS Lambda to EC2**, eliminating timeout errors across all long-running operations, improving **overall system stability and scalability**.",
          "**Developed analytics email service** with scheduled cron jobs to deliver periodic usage insights to client organisations, enhancing **customer engagement**.",
        ],
      },
      {
        name: "Internship Portal (Built from scratch)",
        achievements: [
          "**Architected and developed a multi-tenant internship platform** with **Role-Based Access Control (RBAC)** supporting two organization types—**Internship Providers** (companies) and **Consumers** (schools)—ensuring **scalable onboarding and strict data isolation**.",
          "**Built and deployed full-stack application** using **Node.js, TypeScript, Express, Prisma, MongoDB, Redis, React.js, and TailwindCSS**; deployed on **Firebase/AWS EC2** achieving **100% Best Practices, 94% Accessibility** on Lighthouse.",
        ],
      },
      {
        name: "Customer Relationship Management (CRM)",
        achievements: [
          "**Built AI-powered activity recommendation feature** using **OpenAI API** to generate personalised suggestions for students based on their profiles, becoming a **major revenue stream** for the platform.",
          "**Designed and implemented a Calendar Module** for student-admin meetings (similar to **Calendly**), enabling slot requests, rescheduling, and video integration with **Zoom and Google Meet**.",
        ],
      },
    ],
  },
];

export const openSourceContributions: OpenSourceContribution[] = [
  {
    role: "Member & LaCE Quality Team Lead",
    organization: "Oppia Foundation",
    organizationUrl: "https://www.github.com/oppia",
    period: "Nov 2023 - April 2024",
    achievements: [
      "Led the **LaCE (Learner and Creator Experience) quality team**, managing task assignments for new contributors and conducting **code reviews** to ensure quality standards across all user-facing features.",
      "Contributed **10 merged PRs** using **Python** (backend) and **AngularJS** (frontend), including major features like **admin acceptance tests** and **topic editor migration**",
      "Implemented **UI enhancements** and **bug fixes** across multiple pages: added loading states for lesson pages, fixed community library item alignment, corrected partnership page layouts, and improved mobile UI responsiveness.",
      "Developed comprehensive **unit tests** and **end-to-end acceptance tests** to improve test coverage and platform reliability.",
    ],
  },
  {
    role: "Contributor",
    organization: "Tailcall",
    organizationUrl:
      "https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed a critical **search bar modal focus issue** in the documentation site, improving user navigation and accessibility.",
      "Completed a **$150 bounty** for the contribution, demonstrating ability to deliver functional, production-ready features.",
    ],
  },
  {
    role: "Contributor",
    organization: "CircuitVerse",
    organizationUrl:
      "https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed a **search bar overlap issue**, ensuring the search bar never hides page content, improving navigation and user experience.",
      "Improved **responsiveness of the profile page** by optimising layout and CSS, enabling seamless viewing across devices.",
    ],
  },
  {
    role: "Contributor",
    organization: "Zlux Server Framework (Zowe)",
    organizationUrl:
      "https://github.com/zowe/zlux-server-framework/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed an **authentication bug** by ensuring proper error handling and response reliability.",
      "Contribution labelled **size/XS**, demonstrating precise and minimal yet effective changes in the codebase.",
    ],
  },
];

export const projectsData: ProjectData[] = [
  {
    name: "Google Clone with ReactJs",
    duration: "Ongoing",
    liveLink: "https://clonegoogle.vercel.app",
    githubLink: "https://github.com/hrshkshri/google-clone",
    description: [
      "This is a **Google search clone** created using **React.js, Tailwind CSS, Vite**, and the **Google Search API**.",
      "It provides features like **debounced search, autocomplete suggestions**, and displays search results along with images, **pagination**, and **multilingual support** using **Google Translate**.",
      "The **Context API** is used for **state management** for searching images.",
    ],
    category: "Web Development",
    techStack: "React.js, Tailwind CSS, Vite, Google Search API, Context API",
  },
  {
    name: "Job Application App",
    tag: "",
    githubLink: "https://github.com/hrshkshri/job-application-app",
    description: [
      "**Mobile application** used to browse job listings and apply for jobs using data retrieved from a **free job API**.",
      "Implemented features such as **user authentication**, browsing job listings, applying for jobs, viewing job details, and **saving favourite jobs**.",
    ],
    category: "Mobile Development",
    techStack: "React Native, Expo CLI",
  },
  {
    name: "Drive React",
    tag: "",
    liveLink: "https://drive-react.vercel.app",
    githubLink: "https://github.com/hrshkshri/drive-react",
    description: [
      "Implemented **user registration** using **Firebase Auth** for **secure authentication**.",
      "Utilized **Firebase Cloud Firestore** and **Firebase Storage** to manage file and folder creation, ensuring **seamless user interactions** with uploaded content.",
      "Designed **intuitive folder navigation** with **breadcrumb tracking**, enhancing user experience.",
      "Used **React Hooks** for **state management** and component logic, and **Context API** for efficient **global state management**.",
      "Applied **Material UI** and **Styled Components** for a clean and modern design.",
    ],
    category: "Web Development",
    techStack: "React, Firebase, Material UI, Styled Components",
  },
  {
    name: "Pokédex App",
    tag: "",
    liveLink: "https://harsh-pokedex.vercel.app",
    githubLink: "https://github.com/hrshkshri/pokedex",
    description: [
      "**Full-stack application** to explore Pokémon data, allowing users to **browse, search, and filter** Pokémon information.",
      "Implemented a **responsive design** using **Material-UI**, providing an **optimal user experience** across devices.",
      "Employed **tRPC** for **type-safe API interactions**, ensuring seamless communication between the frontend and backend.",
      "Managed data with **Prisma ORM** and stored it in a **PostgreSQL database** on **Supabase**, facilitating **efficient data retrieval and management**.",
    ],
    category: "Front-End Development",
    techStack: "next.js, tRPC, Material-UI, Prisma, supabase, PostgreSQL",
  },
  {
    name: "Bitcoin Wallet - cli tool",
    tag: "",
    githubLink: "https://github.com/hrshkshri/bitcoin-cli-tool",
    description: [
      "A **command-line interface (CLI) tool** to manage **Bitcoin wallets, addresses, and transactions**.",
      "Implemented functionalities like **wallet creation, address generation, balance checking**, and **transaction history**.",
      "Utilized the **blockcypther API** to fetch **real-time Bitcoin data**.",
    ],
    category: "CLI Development",
    techStack: "Node.js, Blockcypher API",
  },
  {
    name: "Event calendar",
    tag: "",
    liveLink: "https://calendar-frontend-kappa-rosy.vercel.app",
    githubLink: "https://github.com/hrshkshri/calendar-frontend",
    description: [
      "Developed a **calendar application** with features like **event creation, deletion, and editing**.",
      "Utilized **React Big Calendar** for a **user-friendly interface** and a **seamless user experience**.",
      "Implemented **user authentication and authorization** using **Express.js** and **JSON Web Tokens (JWT)**.",
    ],
    category: "Full-Stack Development",
    techStack: "MERN Stack, React Big Calendar",
  },
  {
    name: "Nexus",
    tag: "Maintained",
    githubLink: "https://github.com/orgs/the-nexus-point/repositories",
    description: [
      "Developed a **live web portal** to facilitate **real-time coding contest participation** and monitoring for **300+ students** at the college level.",
      "Implemented a **user-friendly student portal** for **contest enrollment** and **standings viewing** on **CodeChef**.",
      "Established a **secure admin portal** for **profile management**, **efficient data scraping**, and **result generation**.",
      "Utilized **web scraping techniques** to extract **real-time user data** from **CodeChef**.",
      "Implemented **user authentication and authorization** using **Passport.js** and **JSON Web Tokens (JWT)**.",
    ],
    category: "Full-Stack Development",
    techStack: "MERN Stack, Chakra-UI, Tailwind CSS",
  },
];
