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
    role: "Software Development Engineer Intern",
    company: "Amazon",
    companyUrl: "https://www.amazon.com",
    period: "May 2021 - August 2021",
    responsibilities: [
      "Developed a new feature for the Amazon Prime Video app that allows users to create and manage watch parties with friends and family.",
      "The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com",
    period: "January 2021 - April 2021",
    responsibilities: [
      "Developed a new feature for the Microsoft Teams app that allows users to create and manage tasks and to-do lists.",
      "The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.",
    ],
  },
];

export const openSourceContributions = [
  {
    name: "The Oppia Foundations",
    link: "https://www.livepreview.com",
    handle: "@oppia",
  },
  {
    name: "Tailcall",
    link: "https://www.livepreview.com",
    handle: "@tailcallhq",
  },
  {
    name: "CircuitVerse",
    link: "https://www.livepreview.com",
    handle: "@CircuitVerse",
  },
];

export const projectsData = [
  {
    name: "Project One",
    duration: "May 2021 - August 2021",
    liveLink: "https://www.livepreview.com",
    githubLink: "https://www.github.com",
    description: [
      "Developed a new feature for the Amazon Prime Video app that allows users to create and manage watch parties with friends and family.",
      "The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.",
    ],
    techStack: "React, Redux, Node.js, Express, MongoDB, Tailwind CSS",
  },
  {
    name: "Project Two",
    duration: "January 2021 - April 2021",
    liveLink: "https://www.livepreview.com",
    githubLink: "https://www.github.com",
    description: [
      "Developed a new feature for the Microsoft Teams app that allows users to create and manage tasks and to-do lists.",
      "The feature was built using React, Redux, and Node.js, and was launched to millions of users in the US and UK.",
    ],
    techStack: "React, Redux, Node.js, Express, MongoDB, Tailwind CSS",
  },
];
