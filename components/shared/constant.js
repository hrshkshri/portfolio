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

export const resumeLink =
  "https://drive.google.com/file/d/1m1Tv89Us2tZl6pw-vIqMhkueJ9-4cEuL/view?usp=drive_link";

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
    role: "Member",
    company: "Oppia Foundation",
    companyUrl: "https://www.oppia.org",
    period: "November 2023 - April 2024",
    responsibilities: [
      "Led the LaCE quality team (Responsible for all user-facing features) and worked on a Python/Angular project.",
      "Reviewed PRs of fellow developers and assisted new contributors in onboarding.",
      "Addressed several feature requests/bugs, contributed to e2e and acceptance tests.",
      "More than 10 Accepted PRs.",
    ],
  },
  {
    role: "Fullstack Development Intern",
    company: "Web3Scope",
    companyUrl: "https://www.web3scope.com",
    period: "April 2024 - July 2024",
    responsibilities: [
      "Developed and implemented frontend UI features based on Figma design.",
      "Contributed significantly to the MVP of Web3Scope and over 6 incubator projects, enhancing user experience and functionality.",
    ],
  },
];

export const openSourceContributions = [
  {
    name: "CircuitVerse",
    link: "https://github.com/CircuitVerse/CircuitVerse/pulls?q=is:pr+author:hrshkshri",
    handle: "@CircuitVerse",
  },
  {
    name: "The Oppia Foundations",
    link: "https://github.com/oppia/oppia/pulls?q=is:pr+author:hrshkshri",
    handle: "@oppia",
  },
  {
    name: "Tailcall",
    link: "https://github.com/tailcallhq/tailcallhq.github.io/pulls?q=is:pr+author:hrshkshri",
    handle: "@tailcallhq",
  },
];

export const projectsData = [
  {
    name: "Google Clone with ReactJs",
    duration: "Ongoing",
    liveLink: "https://clonegoogle.vercel.app",
    githubLink: "https://github.com/hrshkshri/google-clone",
    description: [
      "This is a Google search clone created using React.js, Tailwind CSS, Vite, and the Google Search API.",
      "It provides features like debounced search, autocomplete suggestions, and displays search results along with images, pagination, and multilingual support using Google Translate.",
      "The Context API is used for state management for searching images.",
    ],
    category: "Web Development",
    techStack: "React.js, Tailwind CSS, Vite, Google Search API, Context API",
  },
  {
    name: "Drive React",
    tag: "",
    liveLink: "https://drive-react.vercel.app",
    githubLink: "https://github.com/hrshkshri/drive-react",
    description: [
      "Implemented user registration using Firebase Auth for secure authentication.",
      "Utilized Firebase Cloud Firestore and Firebase Storage to manage file and folder creation, ensuring seamless user interactions with uploaded content.",
      "Designed intuitive folder navigation with breadcrumb tracking, enhancing user experience.",
      "Used React Hooks for state management and component logic, and Context API for efficient global state management.",
      "Applied Material UI and Styled Components for a clean and modern design.",
    ],
    category: "Web Development",
    techStack: "React, Firebase, Material UI, Styled Components",
  },
  {
    name: "Job Application App",
    tag: "",
    githubLink: "https://github.com/hrshkshri/job-application-app",
    description: [
      "Mobile application used to browse job listings and apply for jobs using data retrieved from a free job API.",
      "Implemented features such as user authentication, browsing job listings, applying for jobs, viewing job details, and saving favourite jobs.",
    ],
    category: "Mobile Development",
    techStack: "React Native, Expo CLI",
  },
  {
    name: "Nexus",
    tag: "Maintained",
    githubLink: "https://github.com/orgs/the-nexus-point/repositories",
    description: [
      "Developed a live web portal to facilitate real-time coding contest participation and monitoring for 300+ students at the college level.",
      "Implemented a user-friendly student portal for contest enrollment and standings viewing on CodeChef.",
      "Established a secure admin portal for profile management, efficient data scraping, and result generation.",
      "Utilized web scraping techniques to extract real-time user data from CodeChef.",
      "Implemented user authentication and authorization using Passport.js and JSON Web Tokens (JWT).",
    ],
    category: "Full-Stack Development",
    techStack: "MERN Stack, Chakra-UI, Tailwind CSS",
  },
];
