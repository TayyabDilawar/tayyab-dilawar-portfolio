import type { Project, ProjectCategory } from "@/types";

/**
 * Placeholder case studies. Marked `placeholder: true` so they are easy to replace.
 * Swap titles, copy, images, and URLs in this file — UI reads from here only.
 */
export const projects: Project[] = [
  {
    slug: "mern-saas-platform",
    title: "MERN SaaS Platform",
    shortDescription:
      "Placeholder: multi-tenant SaaS with auth, billing-ready accounts, and a React dashboard.",
    detailedDescription:
      "PLACEHOLDER PROJECT — Replace this with a real product. Example structure for a MERN SaaS: Next.js or React client, Express API, MongoDB tenancy model, JWT sessions, and role-based access for owners and members.",
    problem:
      "PLACEHOLDER: Teams needed a shared workspace with isolated data, invitations, and a dashboard that did not require a separate admin app.",
    solution:
      "PLACEHOLDER: Built a single codebase with tenant-aware APIs, protected routes, and a dashboard that maps 1:1 to the domain model instead of a generic CRUD screen.",
    results: [
      "PLACEHOLDER: Replace with a real outcome (latency, conversion, or delivery metric).",
      "PLACEHOLDER: Replace with a second outcome.",
      "PLACEHOLDER: Replace with how the system is operated today.",
    ],
    category: "SaaS",
    categories: ["SaaS", "MERN", "Full Stack"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      {
        title: "Multi-user workspaces",
        description: "Placeholder: orgs, members, and role-based permissions.",
      },
      {
        title: "Auth & sessions",
        description: "Placeholder: email/password plus JWT access and refresh flow.",
      },
      {
        title: "Dashboard",
        description: "Placeholder: usage overview, settings, and member management.",
      },
    ],
    challenges: [
      {
        challenge: "PLACEHOLDER: Tenant isolation without over-complicating queries.",
        solution:
          "PLACEHOLDER: Scoped every mongoose query by workspace id and enforced it in middleware.",
      },
      {
        challenge: "PLACEHOLDER: Keeping the API contract stable as the UI grew.",
        solution:
          "PLACEHOLDER: Versioned resource routes and typed response helpers on the server.",
      },
    ],
    process: [
      "Discovery and domain modeling",
      "API and data model",
      "Auth and tenancy",
      "Dashboard UI",
      "Testing and deploy",
    ],
    architecture: [
      { label: "Client", detail: "React dashboard" },
      { label: "Next.js / React", detail: "App UI and routing" },
      { label: "API", detail: "REST over HTTPS" },
      { label: "Node.js / Express", detail: "Auth, tenancy, business logic" },
      { label: "MongoDB", detail: "Workspace-scoped documents" },
    ],
    image: "/images/projects/mern-saas.svg",
    screenshots: ["/images/projects/mern-saas.svg"],
    githubUrl: "https://github.com/tayyabdilawar/REPLACE_ME",
    liveUrl: "https://example.com/REPLACE_ME",
    featured: true,
    placeholder: true,
    year: "2025",
  },
  {
    slug: "nextjs-admin-dashboard",
    title: "Next.js Admin Dashboard",
    shortDescription:
      "Placeholder: SEO-friendly admin UI with server-rendered tables, filters, and RBAC.",
    detailedDescription:
      "PLACEHOLDER PROJECT — Replace this with a real dashboard. Example: Next.js App Router, server components for lists, protected mutations via Server Actions or a Node API, and role checks before every write.",
    problem:
      "PLACEHOLDER: Operators were managing records in a spreadsheet with no audit trail or permission model.",
    solution:
      "PLACEHOLDER: A Next.js admin with typed tables, search, and role-based views so support and admins do not share the same surface.",
    results: [
      "PLACEHOLDER: Replace with operational time saved or error rate change.",
      "PLACEHOLDER: Replace with how auth and roles are enforced.",
    ],
    category: "Admin Dashboard",
    categories: ["Admin Dashboard", "Next.js", "Full Stack"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      {
        title: "Role-based views",
        description: "Placeholder: admin, editor, and read-only layouts.",
      },
      {
        title: "Server-rendered lists",
        description: "Placeholder: filters and pagination without a heavy SPA.",
      },
      {
        title: "Audit-friendly mutations",
        description: "Placeholder: writes go through a single API boundary.",
      },
    ],
    challenges: [
      {
        challenge: "PLACEHOLDER: Large tables without shipping a client-only grid.",
        solution:
          "PLACEHOLDER: Paginate on the server, stream the page, hydrate only filters and dialogs.",
      },
    ],
    process: [
      "Information architecture",
      "Auth and roles",
      "List and detail routes",
      "Mutations and validation",
      "Deploy",
    ],
    architecture: [
      { label: "Client", detail: "Admin operators" },
      { label: "Next.js", detail: "App Router, RSC, metadata" },
      { label: "API", detail: "Route handlers / Server Actions" },
      { label: "Node.js", detail: "Authorization and validation" },
      { label: "PostgreSQL", detail: "Relational records" },
    ],
    image: "/images/projects/admin-dashboard.svg",
    screenshots: ["/images/projects/admin-dashboard.svg"],
    githubUrl: "https://github.com/tayyabdilawar/REPLACE_ME",
    liveUrl: "https://example.com/REPLACE_ME",
    featured: true,
    placeholder: true,
    year: "2025",
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    shortDescription:
      "Placeholder: catalog, cart, checkout, and an admin for products and orders.",
    detailedDescription:
      "PLACEHOLDER PROJECT — Replace this with a real store. Example: Next.js storefront, Express or Route Handler APIs, MongoDB catalogs, Stripe-ready checkout hooks, and Cloudinary for product media.",
    problem:
      "PLACEHOLDER: The catalog lived in a CMS that could not express inventory, variants, or order state.",
    solution:
      "PLACEHOLDER: A dedicated catalog and order model with a fast storefront and a small admin for products, stock, and fulfillments.",
    results: [
      "PLACEHOLDER: Replace with conversion or performance numbers.",
      "PLACEHOLDER: Replace with checkout reliability notes.",
    ],
    category: "E-commerce",
    categories: ["E-commerce", "Full Stack", "MERN"],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    features: [
      {
        title: "Product catalog",
        description: "Placeholder: variants, images, and stock.",
      },
      {
        title: "Cart and checkout",
        description: "Placeholder: session cart with a payment-provider hook.",
      },
      {
        title: "Order admin",
        description: "Placeholder: status pipeline from paid to fulfilled.",
      },
    ],
    challenges: [
      {
        challenge: "PLACEHOLDER: Keeping inventory consistent under concurrent checkouts.",
        solution:
          "PLACEHOLDER: Reserve stock in the order transaction and fail closed if the count cannot be decremented.",
      },
    ],
    process: [
      "Catalog modeling",
      "Storefront UI",
      "Cart and checkout API",
      "Admin for products and orders",
      "Launch checklist",
    ],
    architecture: [
      { label: "Client", detail: "Shoppers + admin" },
      { label: "Next.js", detail: "Storefront and SEO pages" },
      { label: "API", detail: "Catalog, cart, orders" },
      { label: "Node.js / Express", detail: "Checkout and inventory" },
      { label: "MongoDB", detail: "Products, carts, orders" },
    ],
    image: "/images/projects/ecommerce.svg",
    screenshots: ["/images/projects/ecommerce.svg"],
    githubUrl: "https://github.com/tayyabdilawar/REPLACE_ME",
    liveUrl: "https://example.com/REPLACE_ME",
    featured: true,
    placeholder: true,
    year: "2024",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Full Stack",
  "Next.js",
  "MERN",
  "SaaS",
  "Admin Dashboard",
  "APIs",
  "E-commerce",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, limit);

  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aScore = a.categories.filter((category) =>
        current.categories.includes(category),
      ).length;
      const bScore = b.categories.filter((category) =>
        current.categories.includes(category),
      ).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
