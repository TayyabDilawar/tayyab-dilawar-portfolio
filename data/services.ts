import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    description:
      "Complete production-ready web applications — UI, API, data, auth, and deploy.",
    features: [
      "End-to-end feature delivery",
      "Typed APIs and data models",
      "Auth, roles, and sessions",
      "Production deployment",
    ],
    icon: "layers",
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    description:
      "Fast, SEO-friendly applications with the App Router, server components, and metadata that search engines can actually use.",
    features: [
      "App Router architecture",
      "Server Components by default",
      "Metadata, sitemap, structured data",
      "Vercel-ready deploys",
    ],
    icon: "globe",
  },
  {
    slug: "mern-development",
    title: "MERN Development",
    description:
      "React, Node.js, Express, and MongoDB applications structured for growth instead of a weekend prototype.",
    features: [
      "React UI + Express API",
      "Mongoose models and indexes",
      "JWT / session auth",
      "CRUD that matches the domain",
    ],
    icon: "database",
  },
  {
    slug: "api-development",
    title: "API Development",
    description:
      "REST APIs, authentication, and integrations for web and mobile clients.",
    features: [
      "Resource-oriented REST",
      "Validation and error contracts",
      "OAuth and third-party APIs",
      "Webhooks and background jobs (when needed)",
    ],
    icon: "api",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "Multi-user products: workspaces, permissions, billing-ready accounts, and operator dashboards.",
    features: [
      "Tenancy and invitations",
      "Role-based access",
      "Usage and settings UI",
      "Observability-friendly logging",
    ],
    icon: "saas",
  },
  {
    slug: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Responsive dashboards with tables, filters, and permissions that match how the team actually works.",
    features: [
      "Role-aware navigation",
      "Search, filters, pagination",
      "Safe mutations",
      "Mobile-usable layouts",
    ],
    icon: "layout",
  },
];
