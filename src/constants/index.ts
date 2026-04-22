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
  youtube,
  linkedin,
  twitter,
  github,
  mail,

  karma,
  alkhidmat,
  auaws,
  projectPlaceholder,
  cyberpunkVideo,
  codeairCert,
  pizza1,
  pizza2,
  pizza3,
  servify_vid,
  game1,
  game2,
  game3,
  game4,
  cpuScheduler,
} from "../assets";

export const PERSONAL_INFO = {
  name: import.meta.env.VITE_USER_NAME || "Example User",
  email: import.meta.env.VITE_USER_EMAIL || "user@example.com",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com",
  cv: import.meta.env.VITE_CV_URL || "/resume.pdf",
};

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
    id: "experience",
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
    link: "#resume",
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
    name: "Servify",
    description:
      "Servify to serve people. A dedicated platform aimed at providing community serving solutions and connecting people dynamically.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projectPlaceholder,
    video: servify_vid,
    source_code_link: "https://github.com/ordinary4576/servify.git",
  },
  {
    name: "Scheduling Algorithms Simulator",
    description:
      "An OS end-semester project that simulates how tasks are scheduled in the CPU under different algorithms like FCFS, Round Robin, SJF, and Priority Scheduling. The instructor was so impressed she bought it for personal use. Features interactive visualization of process scheduling with Gantt charts and performance metrics.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "operating-systems",
        color: "green-text-gradient",
      },
      {
        name: "simulation",
        color: "pink-text-gradient",
      },
    ],
    image: cpuScheduler,
    source_code_link: "https://github.com/zeechanch/Scheduling-Algorithms-Simulator.git",
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
    image: game1,
    images: [game1, game2, game3, game4],
    source_code_link: "https://github.com/ordinary4576/game.git",
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
    image: pizza1,
    images: [pizza1, pizza2, pizza3],
    source_code_link: "https://github.com/231969-max/pizza-eccomerce-project.git",
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
    name: "Linkedin",
    icon: linkedin,
    link: PERSONAL_INFO.linkedin,
  },
  {
    name: "GitHub",
    icon: github,
    link: PERSONAL_INFO.github,
  },
  {
    name: "Email",
    icon: mail,
    link: "javascript:void(0)", // Use onClick in component to prevent scraping
    isEmail: true,
  },
] as const;
