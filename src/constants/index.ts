// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,

  user2,
  user3,
  youtube,
  linkedin,
  twitter,

  karma,
  alkhidmat,
  auaws,
  projectPlaceholder,
  cyberpunkVideo,
  codeairCert,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "hero",
    title: "Profile",
    link: "",
  },
  {
    id: "about",
    title: "Education",
    link: "",
  },
  {
    id: "projects",
    title: "Projects",
    link: "",
  },
  {
    title: "Experience",
    link: "",
  },
  {
    id: "certifications",
    title: "Certifications",
    link: "",
  },
  {
    id: "resume",
    title: "Resume",
    link: "",
  },
  {
    id: "contact",
    title: "Contact",
    link: "",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Foundations",
    emoji: "🧠",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2021 – Early 2023",
    skills: [
      "C++",
      "OOP",
      "Data Structures",
      "Digital Logic",
    ],
    projects: [
      "Ticket Management System",
      "Water Level Indicator",
    ],
  },
  {
    title: "Databases",
    emoji: "💾",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mid-2023",
    skills: [
      "Oracle SQL",
      "MySQL",
      "Database Design",
      "Query Optimization",
    ],
    projects: [
      "Hotel Management Database",
    ],
  },
  {
    title: "Web & Design",
    emoji: "🎨",
    icon: shopify,
    iconBg: "#383E56",
    date: "Late-2023 – 2024",
    skills: [
      "HTML, CSS",
      "Responsive Design",
      "Figma",
      "UI/UX Thinking",
    ],
    projects: [
      "E-commerce Pizza Website",
      "CHRIO Dashboard UI",
    ],
  },
  {
    title: "AI & Advanced",
    emoji: "🚀",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 – 2025",
    skills: [
      "Python",
      "Scikit-learn",
      "OpenCV",
      "Socket Programming",
    ],
    projects: [
      "Covid-19 Data Analysis",
      "Golfing Assistance System",
      "Space Shooter Game",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial: [
      "Rescued injured and abandoned animals.",
      "Organized fundraisers for treatment & spaying.",
      "Designed awareness posters and social media graphics.",
      "Participated in shelter visits and animal care.",
      "Coordinated with volunteers for rescue efforts.",
    ],
    name: "AUAWS Animal Welfare Society",
    subtitle: "Rescuing and caring for abandoned animals",
    designation: "Volunteer",
    company: "2024 – Present",
    image: auaws,
    tags: ["Animal Rescue", "Fundraising", "Graphic Design", "Community Service"],
  },
  {
    testimonial: [
      "Participated in outreach and welfare projects.",
      "Helped organize charity drives and awareness campaigns.",
      "Assisted with event coordination.",
      "Documented outreach results for planning.",
    ],
    name: "Al-Khidmat Foundation",
    subtitle: "Community outreach and welfare support",
    designation: "Volunteer",
    company: "Sep 2024 – Present",
    image: alkhidmat,
  },
  {
    testimonial: [
      "Designed posters and social media campaigns.",
      "Helped raise funds for relief efforts.",
      "Supported event planning and coordination.",
      "Maintained visual consistency for campaigns.",
    ],
    name: "KARMA x NUST Gaza Relief",
    subtitle: "Humanitarian aid through design and teamwork",
    designation: "Humanitarian Worker",
    company: "Jun 2023 – Present",
    image: karma,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Ticket Management System",
    description:
      "A console-based system to manage ticket bookings, cancellations, and customer records. Built with C++ and OOP principles, featuring error handling and validation for smooth user interaction.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "console",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Space Shooter Game",
    description:
      "2D arcade-style shooter game using SFML graphics library. Implemented player controls, scoring system, collision detection, and enemy AI with optimized rendering for smooth gameplay.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "sfml",
        color: "green-text-gradient",
      },
      {
        name: "gamedev",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Hotel Management DB",
    description:
      "Relational database to manage hotel reservations, customer records, and billing. Designed normalized schemas and wrote complex SQL queries for reporting and analytics.",
    tags: [
      {
        name: "oracle-sql",
        color: "blue-text-gradient",
      },
      {
        name: "database",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Covid-19 Data Analysis",
    description:
      "Analyzed real-world Covid-19 datasets to identify trends using Python (Scikit-learn). Applied statistical models for prediction and visualized results using Matplotlib.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "data-viz",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Golfing Assistance System",
    description:
      "Real-time system to assist golfers by tracking ball trajectory using computer vision (OpenCV). Implemented socket programming for client-server communication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "socket",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Water Level Indicator",
    description:
      "Hardware-level circuit to monitor/indicate water levels. Implemented logic gates and flip-flops to trigger alerts, simulated using digital logic verification tools.",
    tags: [
      {
        name: "dld",
        color: "blue-text-gradient",
      },
      {
        name: "circuit",
        color: "green-text-gradient",
      },
      {
        name: "logic-gates",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Pizza Shop eCommerce",
    description:
      "Full-stack ecommerce platform for online pizza ordering. Designed responsive UI with HTML/CSS, integrated Java Servlets backend, and MySQL database for order management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Cyber Punk Dashboard",
    description:
      "Made in a Code Air competition with a team of 3 members.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dashboard",
        color: "green-text-gradient",
      },
      {
        name: "ui-ux",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    video: cyberpunkVideo,
    source_code_link: "https://github.com/ordinary4576/Cyberpunk.git",
    live_site_link: "",
    certificate_link: codeairCert,
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/_sanidhyy",
  },
] as const;
