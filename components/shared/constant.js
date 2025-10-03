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
} from "react-icons/si";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineHome,
} from "react-icons/ai";
import { BsTwitter, BsFillPersonVcardFill, BsGit } from "react-icons/bs";

export const skillsData = [
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

export const socialLinks = [
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

export const navLinks = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
];

export const experiences = [
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
          "**Fixed Razorpay payment race conditions** by redesigning API flows and adding fallback mechanisms, enabling **100% reliable course enrollment** under high user concurrency.",
          "**Resolved course enrollment failures** by implementing robust post-payment workflows and retry logic, ensuring **seamless user onboarding**.",
          "**Optimized long-running API calls** by restructuring request/response handling, preventing **client-side timeouts** and improving checkout success rates.",
          "**Migrated infrastructure** from AWS Lambda (Serverless) to **EC2**, reducing timeout errors and improving **system stability and scalability**.",
          "**Automated delayed payment reconciliation** using cron jobs to track pending Razorpay updates and auto-assign courses, ensuring **no user left unenrolled**.",
          "**Strengthened authentication security** by adding middleware and validation for user registration APIs, blocking **invalid/duplicate data**.",
          "**Developed analytics email service** with scheduled cron jobs to deliver periodic usage insights to client organisations, enhancing **customer engagement**.",
        ],
      },
      {
        name: "Internship Portal (Built from scratch)",
        achievements: [
          "**Designed and developed complete architecture** of a multi-tenant internship platform with **Role-Based Access Control (RBAC)**: System Admin → Super Admin (Head Org) → Companies/Schools → Students.",
          "Implemented support for two organization types — **Internship Providers** (companies under a head org) and **Internship Consumers** (schools with students) — ensuring scalable onboarding and strict data isolation.",
          "Built secure backend services with **Node.js (TypeScript), Express, RESTful API design, Prisma ORM, MongoDB, Redis (caching)** following API security best practices (auth, validation, error handling).",
          "Developed responsive frontend using **React.js, Vite, TailwindCSS, ShadCN UI**, with state management via **Zustand** (UI state) and **React Query (TanStack)** for server-state caching.",
          "Applied strong validation and error resilience with **Zod schema validation, Axios**, and API-layer safeguards.",
          "Deployed applications with **Firebase Hosting** (frontend) and **AWS EC2** (backend) ensuring production reliability.",
          "Achieved excellent Lighthouse scores: **100% Best Practices, 94% Accessibility, 78% Performance**, demonstrating strong focus on code quality and user experience.",
        ],
      },
      {
        name: "Customer Relationship Management (CRM)",
        achievements: [
          "**Collaborated with team** to design and develop **backend APIs** and **frontend features**, ensuring seamless integration and data flow.",
          "Built a feature leveraging **OpenAI API** to generate personalized **activity recommendations** for students based on their profiles, enabling enhanced **profile-building** and becoming a major **revenue stream**.",
          "Developed **frontend UI components** and integrated APIs using **Recoil** for state management, ensuring **responsive and user-friendly interfaces**.",
          "Designed and implemented a **Calendar Module** for student-admin meetings (similar to **Calendly**), allowing students to request slots and admins/consultants to **accept or reschedule**; integrated **Zoom** and **Google Meet** links.",
          "Ensured proper **API structure, input validation, and error handling**, enhancing **system reliability** and **maintainability**.",
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    role: "Member & LaCE Quality Team Lead",
    organization: "Oppia Foundation",
    organizationUrl: "https://www.github.com/oppia",
    period: "Nov 2023 - April 2024",
    achievements: [
      "Led the **LaCE (Learner and Creator Experience) quality team**, managing task assignments for new contributors and conducting **code reviews** to ensure quality standards across all user-facing features.",
      "Contributed **10 merged PRs** using **Python** (backend) and **AngularJS** (frontend), including major features like **admin acceptance tests** and **topic editor migration**",
      "Implemented **UI enhancements** and **bug fixes** across multiple pages: added loading states for lesson pages, fixed community library item alignment, corrected partnership page layouts, and improved mobile UI responsiveness.",
      "Developed comprehensive **unit tests** and **end-to-end acceptance tests** to improve test coverage and platform reliability."
    ]
  },
  {
    role: "Contributor",
    organization: "Tailcall",
    organizationUrl: "https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed a critical **search bar modal focus issue** in the documentation site, improving user navigation and accessibility.",
      "Completed a **$150 bounty** for the contribution, demonstrating ability to deliver functional, production-ready features."
    ]
  },
  {
    role: "Contributor",
    organization: "CircuitVerse",
    organizationUrl: "https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed a **search bar overlap issue**, ensuring the search bar never hides page content, improving navigation and user experience.",
      "Improved **responsiveness of the profile page** by optimising layout and CSS, enabling seamless viewing across devices."
    ]
  },
  {
    role: "Contributor",
    organization: "Zlux Server Framework (Zowe)",
    organizationUrl: "https://github.com/zowe/zlux-server-framework/pulls?q=is:pr+author:hrshkshri",
    period: "",
    achievements: [
      "Fixed an **authentication bug** by ensuring proper error handling and response reliability.",
      "Contribution labelled **size/XS**, demonstrating precise and minimal yet effective changes in the codebase."
    ]
  }
];

export const projectsData = [
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
      "Implemented features such as **user authentication**, browsing job listings, applying for jobs, viewing job details, and **saving favourite jobs**."
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
      "Managed data with **Prisma ORM** and stored it in a **PostgreSQL database** on **Supabase**, facilitating **efficient data retrieval and management**."
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
      "Implemented **user authentication and authorization** using **Express.js** and **JSON Web Tokens (JWT)**."
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
      "Implemented **user authentication and authorization** using **Passport.js** and **JSON Web Tokens (JWT)**."
    ],
    category: "Full-Stack Development",
    techStack: "MERN Stack, Chakra-UI, Tailwind CSS",
  },
];
