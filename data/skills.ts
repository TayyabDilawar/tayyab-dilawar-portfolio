import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose", "Supabase", "PostgreSQL"],
  },
  {
    category: "DevOps / Tools",
    items: ["Git", "GitHub", "Vercel", "Docker", "CI/CD"],
  },
  {
    category: "Other",
    items: ["APIs", "OAuth", "JWT", "Cloudinary", "Third-party integrations"],
  },
];

export const trustedTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Vercel",
  "Docker",
];
