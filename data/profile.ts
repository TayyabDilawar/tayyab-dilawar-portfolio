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
    "I build production-ready web applications with React, Next.js, Node.js and MongoDB, from frontend architecture to backend APIs and deployment.",
  summary:
    "Full-stack developer focused on scalable MERN and Next.js applications — APIs, authentication, databases, and production deployment.",
  about:
    "I work across the stack: React and Next.js on the client, Node.js and Express on the server, and MongoDB or PostgreSQL for data. Most of my work is SaaS products, admin dashboards, and API-backed web apps that need to ship and stay maintainable.",
  background:
    "Full-stack developer based in Faisalabad, Pakistan, with MERN and Next.js experience across internships, product teams, and client work. I specialise in SSR/SSG, REST APIs, and shipping with product, design, and QA.",
  specialization:
    "I specialize in MERN and Next.js applications: authentication, role-based access, REST APIs, third-party integrations, and dashboards that have to hold up in production.",
  enjoysBuilding:
    "I enjoy building products with clear domain logic — multi-user SaaS, internal tools, and storefronts — where the frontend, API, and data model have to stay in sync.",
  philosophy:
    "Prefer boring, proven architecture over novelty. Keep the UI independent from the data source, write APIs that are explicit, and ship something you can operate after launch.",
  availability: "Available for freelance & full-time opportunities",
  email: "tayyabalidilawar@gmail.com",
  phone: "+92 307 7904836",
  location: "Faisalabad, Pakistan",
  githubUsername: "tayyabdilawar",
  githubUrl: "https://github.com/tayyabdilawar",
  linkedinUrl: "https://www.linkedin.com/in/tayyab-dilawar-aa1460176",
  xUrl: null,
  resumeUrl: "/resume/YOUR_RESUME.pdf",
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
  ],
};
