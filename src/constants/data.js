import {
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export const PERSONAL_INFO = {
  name: "Ngan Truong",
  displayName: "Ngan Truong",
  // displayName: { line1: "Ngan", line2: "Truong" },
  role: "SOFTWARE ENGINEER",
   bio: `Software engineer with hands-on experience developing web & mobile applications using`,
  bioHighlight: " ReactJS, HTML5, CSS3, and Swift",
  bioEnd: ".\nPassionate about crafting beautiful interfaces and delivering high-quality software solutions.",
  email: "wisngaan17@gmail.com",
  phone: "0789 948 756",
  github: "https://github.com/jamaisseule",
  githubLabel: "github.com/jamaisseule",
  location: "Cam Le, Danang",
  stats: [
    // { value: "1+", label: "Years of Experience" },
    // { value: "3", label: "Positions Held" },
    // { value: "2", label: "Featured Projects" },
  ],
};

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "SOPHIA SOFTWARE SOLUTIONS",
    period: "05/2025 – Present",
    location: "Danang",
    color: "#00FFB2",
    items: [
      "Developed and tested web features using C#, Angular, JavaScript, HTML & CSS.",
      "Built iOS features and fixed bugs using Swift.",
      "Integrated RESTful APIs, performed manual testing, and reported defects.",
    ],
  },
  {
    title: "Developer Intern",
    company: "DEVPLUS",
    period: "10/2024 – 12/2024",
    location: "Danang",
    color: "#FFD600",
    items: [
      "Developed UI components and supported a chatbot project using ReactJS.",
      "Worked within an Agile/Scrum team — sprint planning, daily stand-ups, and performance improvements.",
    ],
  },
  {
    title: "Website Technical Support",
    company: "PHUC NGUYEN ARCHITECTURE & DESIGN",
    period: "03/2024 – 08/2024",
    location: "Danang",
    color: "#FF6B6B",
    items: [
      "Maintained and improved the company website using ReactJS, JavaScript, HTML & CSS.",
      "Enhanced responsiveness and overall user experience across devices.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Sc. in Computing",
  school: "UNIVERSITY OF GREENWICH, DA NANG CAMPUS",
  period: "09/2020 – 03/2025",
  location: "Danang, Vietnam",
  color: "#5C6BC0",
};

export const PROJECTS = [
  {
    name: "LUMOSBook",
    tag: "Final Year Project",
    period: "12/2023 – 05/2024",
    tech: ["ASP.NET MVC", "C#", "HTML5", "CSS3", "JavaScript", "SQL Server"],
    desc: "A book-selling web application with role-based access control, workflow support, database interaction, and comprehensive testing.",
    link: "https://github.com/jamaisseule/final-project",
    accent: "#00FFB2",
  },
  {
    name: "VIPERS Shop",
    tag: "E-commerce Website",
    period: "11/2024 – 12/2024",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript"],
    desc: "An e-commerce website built with reusable components, a consistent design system, and a smooth end-to-end shopping experience.",
    link: "https://github.com/bxthien/ojt-final-project",
    accent: "#FFD600",
  },
  {
    name: "V-Chatbot",
    tag: "Team Project",
    period: "10/2024 – 11/2024",
    tech: [
      "ReactJS",
      "JavaScript",
      "Node.js",
      "REST APIs"
    ],
    desc: "A chatbot web application developed in a team environment using a modern component-based architecture similar to the VIPERS ecosystem, focused on responsive UI, API integration, and reusable frontend structure.",
    link: "https://github.com/bxthien/OJT-GW-FirstProject",
    accent: "#8B5CF6",
  },
];

export const SKILLS = {
  "Programming Languages": ["Java", "JavaScript", "C#", "Swift"],
  "Frameworks & Tech": ["ReactJS", "Angular", "HTML5", "CSS3", "Tailwind CSS", "ASP.NET MVC"],
  "Tools & Platforms": ["GitHub", "Jira", "Figma", "AWS (Basic)"],
  "Technical Knowledge": ["OOP", "REST APIs", "Responsive Web Design", "Agile/Scrum"],
  Databases: ["MySQL", "SQL Server"],
};

export const CONTACT_ITEMS = [
  {
    href: "mailto:wisngaan17@gmail.com",
    icon: FaEnvelope,
  },
  {
    href: "https://www.instagram.com/wisngaan_/",
    icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/wisngaan/",
    icon: FaFacebook,
  },
  {
    href: "https://github.com/jamaisseule",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/ngan-truong-14b61a328/",
    icon: FaLinkedin,
  },
];

