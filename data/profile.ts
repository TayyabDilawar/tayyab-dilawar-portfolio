import type { Profile } from "@/types";

/**
 * Central identity + contact configuration.
 * Replace every YOUR_* value before publishing.
 */
export const profile: Profile = {
  name: "Tayyab Dilawar",
  firstName: "Tayyab",
  role: "MERN Stack Developer",
  headline:
    "I build production-ready web and mobile apps with React, Next.js, Node.js, and MongoDB — and use AI tools like Claude, Cursor, and Antigravity to ship faster without cutting corners on quality.",
  summary:
    "Full-stack developer focused on scalable MERN and Next.js applications, AI-assisted development, and shipping production web and mobile apps end to end.",
  about:
    "I work across the stack: React and Next.js on the client, Node.js and Express on the server, and MongoDB or PostgreSQL for data. I use AI coding tools to scaffold, debug, and iterate quickly — then review, test, and harden everything before it ships. Most of my work is SaaS products, admin dashboards, and API-backed web apps.",
  background:
    "Full-stack developer based in Faisalabad, Pakistan, with MERN and Next.js experience across internships, product teams, and client work. I specialise in SSR/SSG, REST APIs, AI-assisted delivery, and shipping with product, design, and QA.",
  specialization:
    "I specialize in MERN and Next.js applications: authentication, role-based access, REST APIs, third-party integrations, and dashboards that hold up in production. I also integrate LLM APIs for chat, content generation, and summarization when the product needs it.",
  enjoysBuilding:
    "I enjoy building products with clear domain logic — multi-user SaaS, internal tools, and storefronts — and using AI to move from idea to working UI and APIs faster while keeping the architecture intentional.",
  philosophy:
    "Prefer boring, proven architecture over novelty. Use AI to accelerate scaffolding and review, but keep a human in the loop for auth, validation, performance, and accessibility. Ship something you can operate after launch.",
  availability: "Available for freelance & full-time opportunities",
  email: "tayyabalidilawar@gmail.com",
  phone: "+923077904836",
  location: "Faisalabad, Pakistan",
  githubUsername: "tayyabdilawar",
  githubUrl: "https://github.com/tayyabdilawar",
  linkedinUrl: "https://www.linkedin.com/in/tayyab-dilawar-aa1460176",
  xUrl: null,
  resumes: [
    {
      id: "mern",
      label: "MERN Stack",
      description:
        "Web-focused resume — React, Next.js, Node.js, MongoDB, and AI-assisted development.",
      href: "/resume/Tayyab_Dilawar_mern.pdf",
      fileName: "Tayyab_Dilawar_MERN.pdf",
    },
    {
      id: "react-native",
      label: "React Native",
      description:
        "Mobile-focused resume — React Native apps, AI-assisted delivery, and related stack.",
      href: "/resume/Tayyab_Dilawar.pdf",
      fileName: "Tayyab_Dilawar_React_Native.pdf",
    },
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "20+" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/tayyabdilawar",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tayyab-dilawar-aa1460176",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:tayyabalidilawar@gmail.com",
      icon: "email",
    },
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "REST APIs",
    "SaaS",
    "Authentication",
    "AI-Assisted Development",
    "Claude",
    "Cursor",
    "LLM API Integration",
    "Prompt Engineering",
  ],
};
