import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "AI Tools",
    icon: "✨",
    variant: "violet",
    items: [
      "Claude",
      "Cursor",
      "Google Antigravity",
      "Prompt Engineering",
      "AI-Assisted Development",
      "LLM API Integration",
      "AI Code Review",
      "AI Test Generation",
    ],
    gauges: [
      { name: "AI-Assisted Dev", percent: 92 },
      { name: "Prompt Engineering", percent: 88 },
      { name: "LLM APIs", percent: 84 },
    ],
  },
  {
    category: "Frontend",
    icon: "💻",
    variant: "cyan",
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
    gauges: [
      { name: "React", percent: 95 },
      { name: "Next.js", percent: 92 },
      { name: "TypeScript", percent: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    variant: "amber",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
    gauges: [
      { name: "Node.js", percent: 90 },
      { name: "Express", percent: 88 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    variant: "violet",
    items: ["MongoDB", "Mongoose", "Supabase", "PostgreSQL"],
    gauges: [
      { name: "MongoDB", percent: 88 },
      { name: "PostgreSQL", percent: 80 },
    ],
  },
  {
    category: "DevOps / Tools",
    icon: "🛠️",
    variant: "cyan",
    items: ["Git", "GitHub", "Vercel", "Docker", "CI/CD"],
    gauges: [
      { name: "Git", percent: 90 },
      { name: "CI/CD", percent: 82 },
    ],
  },
  {
    category: "Other",
    icon: "🔗",
    variant: "pink",
    items: ["APIs", "OAuth", "JWT", "Cloudinary", "Third-party integrations"],
    gauges: [{ name: "API integrations", percent: 86 }],
  },
];

export const trustedTechnologies = [
  "Claude",
  "Cursor",
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

export const heroRoles = [
  "MERN Stack Developer",
  "AI-Assisted Developer",
  "Full-Stack Engineer",
  "Next.js Developer",
  "SaaS Builder",
];
