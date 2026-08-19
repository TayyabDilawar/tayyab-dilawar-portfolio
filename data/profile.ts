import type { Profile } from "@/types";

/**
 * Central identity + contact configuration.
 * Replace every YOUR_* value before publishing.
 */
export const profile: Profile = {
  name: "YOUR_NAME",
  firstName: "YOUR_NAME",
  role: "MERN Stack Developer",
  headline:
    "I build production-ready web applications with React, Next.js, Node.js and MongoDB, from frontend architecture to backend APIs and deployment.",
  summary:
    "Full-stack developer focused on scalable MERN and Next.js applications — APIs, authentication, databases, and production deployment.",
  about:
    "I work across the stack: React and Next.js on the client, Node.js and Express on the server, and MongoDB or PostgreSQL for data. Most of my work is SaaS products, admin dashboards, and API-backed web apps that need to ship and stay maintainable.",
  background:
    "REPLACE_ME: Add a short background — how you started, the kinds of teams or clients you have worked with, and the problems you typically take on. Do not leave this placeholder in production.",
  specialization:
    "I specialize in MERN and Next.js applications: authentication, role-based access, REST APIs, third-party integrations, and dashboards that have to hold up in production.",
  enjoysBuilding:
    "I enjoy building products with clear domain logic — multi-user SaaS, internal tools, and storefronts — where the frontend, API, and data model have to stay in sync.",
  philosophy:
    "Prefer boring, proven architecture over novelty. Keep the UI independent from the data source, write APIs that are explicit, and ship something you can operate after launch.",
  availability: "Available for freelance & full-time opportunities",
  email: "YOUR_EMAIL",
  phone: "YOUR_PHONE",
  location: "YOUR_LOCATION",
  githubUsername: "YOUR_GITHUB",
  githubUrl: "https://github.com/YOUR_GITHUB",
  linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN",
  xUrl: null,
  resumeUrl: "/resume/YOUR_RESUME.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  stats: [
    { label: "Years Experience", value: "REPLACE_ME" },
    { label: "Projects Completed", value: "REPLACE_ME" },
    { label: "Technologies", value: "20+" },
    { label: "Happy Clients", value: "REPLACE_ME" },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/YOUR_GITHUB",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/YOUR_LINKEDIN",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:YOUR_EMAIL",
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
