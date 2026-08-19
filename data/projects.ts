import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    slug: "northstar-hr",
    title: "Northstar HR",
    shortDescription:
      "Multi-tenant HRMS where organizations, roles, leave policies, payroll, and approvals are configured in the database — one product for many companies.",
    detailedDescription:
      "Northstar HR is a people-operations platform built so each company can configure HR without a fork of the code. Organizations, roles, leave policies, payroll components, and approval workflows live in the database. The product is sold as one codebase to many clients, with tenant isolation and an employee self-service layer for check-in, leave, and payslips.",
    problem:
      "HR products often get forked per client — different leave types, salary components, and approval chains leak into custom code. That does not scale if you want one product for many companies.",
    solution:
      "Model the HR domain as data: departments, leave types, salary components, modules, and workflows are tenant-configurable. Isolate tenants with Row Level Security plus application permission checks, and ship ESS so employees can check in, apply for leave, and view payslips without a separate app.",
    results: [
      "One multi-tenant product instead of per-client forks.",
      "Tenant isolation via Row Level Security and application-level permission checks.",
      "Employee self-service for check-in, leave, and payslips.",
    ],
    category: "SaaS",
    categories: ["SaaS", "Full Stack", "Next.js", "Admin Dashboard"],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Row Level Security",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      {
        title: "Multi-tenant workspaces",
        description: "Create an organization workspace and sign in to a company-scoped HR system.",
      },
      {
        title: "Configurable HR policies",
        description: "Roles, leave types, payroll components, and approval workflows stored as data.",
      },
      {
        title: "Employee self-service",
        description: "Employees check in, apply for leave, and view payslips on mobile.",
      },
      {
        title: "Tenant isolation",
        description: "Row Level Security plus application permission checks between companies.",
      },
    ],
    challenges: [
      {
        challenge: "Selling one HR product to many companies without forking the codebase.",
        solution:
          "Keep organizations, roles, leave policies, payroll components, and workflows in the database so each tenant configures the product instead of changing code.",
      },
      {
        challenge: "Keeping company data isolated while still sharing one application.",
        solution:
          "Combine Row Level Security with application permission checks so tenant boundaries are enforced in the database and in the app.",
      },
    ],
    process: [
      "Domain model for organizations and HR policies",
      "Tenant isolation and roles",
      "Leave, payroll, and approval workflows",
      "Employee self-service",
      "Deploy on Vercel",
    ],
    architecture: [
      { label: "Client", detail: "HR admins and employees (web + mobile ESS)" },
      { label: "Next.js", detail: "Workspaces, dashboards, and auth screens" },
      { label: "API", detail: "Tenant-scoped HR operations" },
      { label: "PostgreSQL", detail: "Orgs, roles, leave, payroll, workflows" },
      { label: "RLS", detail: "Row-level tenant isolation" },
    ],
    image: "/images/projects/northstar-hr.svg",
    screenshots: ["/images/projects/northstar-hr.svg"],
    githubUrl: null,
    liveUrl: "https://hrms-two-teal.vercel.app/",
    featured: true,
    placeholder: false,
    year: "2026",
  },
  {
    slug: "cineplex-tickets",
    title: "Cineplex Tickets",
    shortDescription:
      "Reserved-seat ticketing for movies, concerts, and live events in Faisalabad — with real-time availability and 10-minute holds.",
    detailedDescription:
      "Cineplex Tickets is a theater and event booking product. Visitors browse what’s showing, pick reserved seats, and confirm tickets before they disappear. Availability updates in real time, and a 10-minute hold keeps a selection while checkout finishes. The catalog covers movies, concerts, and live events.",
    problem:
      "Walk-up and informal booking makes it easy to double-sell seats. People need to see what is actually free, hold a selection long enough to pay, and walk away with a confirmed ticket.",
    solution:
      "A public events catalog with reserved seating, real-time availability, and a 10-minute hold so a seat is not sold twice while someone is checking out. Sign-in and registration sit on top of the booking flow.",
    results: [
      "Reserved seating for movies, concerts, and live events.",
      "Real-time availability so sold seats are not offered again.",
      "10-minute holds during checkout to protect a selection.",
    ],
    category: "Full Stack",
    categories: ["Full Stack", "Next.js"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      {
        title: "Event catalog",
        description: "Now showing for movies, concerts, and live events.",
      },
      {
        title: "Reserved seating",
        description: "Pick seats instead of general admission.",
      },
      {
        title: "Real-time availability",
        description: "Seat state stays current as other people book.",
      },
      {
        title: "Checkout holds",
        description: "A 10-minute hold keeps selected seats until the ticket is confirmed.",
      },
    ],
    challenges: [
      {
        challenge: "Avoiding double-booked seats while people are still checking out.",
        solution:
          "Hold selected seats for 10 minutes, then confirm the ticket or release the hold so the seats go back on sale.",
      },
      {
        challenge: "Showing current availability for mixed event types.",
        solution:
          "One booking flow for movies, concerts, and live events, with a public catalog and reserved seating on each event.",
      },
    ],
    process: [
      "Event and seating model",
      "Availability and holds",
      "Booking and confirmation",
      "Auth for ticket holders",
      "Deploy on Vercel",
    ],
    architecture: [
      { label: "Client", detail: "Event browsers and ticket buyers" },
      { label: "Next.js", detail: "Catalog, seating, checkout, auth" },
      { label: "API", detail: "Availability, holds, and ticket confirmation" },
      { label: "Data", detail: "Events, seats, holds, and tickets" },
    ],
    image: "/images/projects/cineplex-tickets.svg",
    screenshots: ["/images/projects/cineplex-tickets.svg"],
    githubUrl: null,
    liveUrl: "https://theater-booking-system-blond.vercel.app/",
    featured: true,
    placeholder: false,
    year: "2026",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Full Stack",
  "Next.js",
  "SaaS",
  "Admin Dashboard",
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
