import type { Experience } from "@/types";

/**
 * Placeholder experience only. Do not treat this as a real work history.
 * Replace each entry before publishing.
 */
export const experience: Experience[] = [
  {
    id: "role-1",
    company: "COMPANY_NAME (placeholder)",
    position: "Full-Stack Developer (placeholder)",
    startDate: "YYYY",
    endDate: "Present",
    location: "YOUR_LOCATION",
    description:
      "PLACEHOLDER: Describe the product or team. Example: owned the web app and API for a multi-user product, from schema design to production deploys.",
    responsibilities: [
      "PLACEHOLDER: Built and maintained React / Next.js interfaces.",
      "PLACEHOLDER: Designed REST APIs, auth, and MongoDB models.",
      "PLACEHOLDER: Shipped dashboards, integrations, and production fixes.",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    placeholder: true,
  },
  {
    id: "role-2",
    company: "COMPANY_NAME (placeholder)",
    position: "MERN Developer (placeholder)",
    startDate: "YYYY",
    endDate: "YYYY",
    location: "YOUR_LOCATION / Remote",
    description:
      "PLACEHOLDER: Second role. Replace with a real company, dates, and what you actually shipped. Do not invent clients or titles.",
    responsibilities: [
      "PLACEHOLDER: Implemented authentication and authorization flows.",
      "PLACEHOLDER: Integrated third-party APIs and webhooks.",
      "PLACEHOLDER: Collaborated on deployment and CI.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    placeholder: true,
  },
];
