import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the product, users, constraints, and what actually has to ship.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Define the architecture, data model, and technical approach before writing features.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build the frontend, backend, and integrations against the agreed contracts.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Check functionality, edge cases, and performance on the flows that matter.",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Ship to production with env, logging, and a rollback path.",
  },
  {
    number: "06",
    title: "Maintenance",
    description: "Monitor, fix, and extend the application after launch.",
  },
];
