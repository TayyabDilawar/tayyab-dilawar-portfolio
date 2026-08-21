import type { Project, ProjectCategory } from "@/types";

export const projects: Project[] = [
  {
    slug: "random-word-generator",
    title: "Random Word Generator",
    shortDescription:
      "A free suite of random generators — words, numbers, letters, names, text, and passwords — with type, length, and letter filters plus a typing challenge.",
    detailedDescription:
      "Random Word Generator is a public tool site for writers, teachers, and game players who need a word, number, or letter on demand. The word tool filters by type (nouns, verbs, adjectives, vocabulary, synonyms, fake words, Pictionary, Charades), first or last letter, and size in syllables or letters. Sister tools cover numbers, letters across 17 alphabets, names, text, and passwords. Results copy in one click, and a 60-second Word Speed Challenge sits next to the generator.",
    problem:
      "People hunting for a writing prompt, classroom word list, or party-game card usually get a generic dump with no control over type, length, or starting letter — and they bounce between separate sites for numbers, letters, and passwords.",
    solution:
      "One product with a shared generate-and-copy UI. The word tool applies type, letter, and length filters against a curated word database. Number and letter tools reuse the same pattern with ranges and alphabets. SEO landing pages explain each tool so the product is findable without an account.",
    results: [
      "Nine word-type filters plus first/last letter and syllable or letter length.",
      "Companion generators for numbers, letters (17 languages), names, text, and passwords.",
      "Instant results with copy-all, and a 60-second Word Speed Challenge.",
    ],
    category: "Next.js",
    categories: ["Next.js", "Full Stack"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      {
        title: "Word type filters",
        description:
          "Generate words, nouns, verbs, adjectives, vocabulary, synonyms, fake words, Pictionary, or Charades.",
      },
      {
        title: "Letter and length control",
        description:
          "Constrain first letter, last letter, and size by syllables or letters (equals, less than, greater than).",
      },
      {
        title: "Generator suite",
        description:
          "Same generate-and-copy flow for numbers, letters (17 alphabets), names, text, and passwords.",
      },
      {
        title: "Word Speed Challenge",
        description:
          "A 60-second typing game that uses the same random-word pool.",
      },
    ],
    challenges: [
      {
        challenge:
          "Returning filtered words instantly without a heavy backend round-trip for every click.",
        solution:
          "Keep generation in the client against curated lists, so type, letter, and length filters apply immediately and results copy without a wait.",
      },
      {
        challenge:
          "Shipping several similar tools (word, number, letter, name, text, password) without duplicating the whole UI.",
        solution:
          "Reuse one generate / result / copy pattern per tool, with tool-specific filters and SEO pages for each route.",
      },
    ],
    process: [
      "Word database and type filters",
      "Letter, length, and language options",
      "Number, letter, and companion generators",
      "Copy-all results and Word Speed Challenge",
      "Deploy on Vercel",
    ],
    architecture: [
      { label: "Client", detail: "Writers, teachers, and game players in the browser" },
      { label: "Next.js", detail: "Generator UIs, SEO pages, and the typing challenge" },
      { label: "Word data", detail: "Curated lists by type, length, and letter" },
      { label: "Vercel", detail: "Static/SSR hosting for the public tools" },
    ],
    image: "/images/projects/random-word-generator.png",
    screenshots: [
      "/images/projects/random-word-generator.png",
      "/images/projects/random-number-generator.png",
      "/images/projects/random-letter-generator.png",
    ],
    githubUrl: null,
    liveUrl: "https://random-generator-ecru.vercel.app/",
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
    categories: ["Full Stack", "Next.js", "Admin Dashboard"],
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
    image: "/images/projects/cineplex-home.png",
    screenshots: [
      "/images/projects/cineplex-home.png",
      "/images/projects/cineplex-event.png",
      "/images/projects/cineplex-seats.png",
      "/images/projects/cineplex-admin.png",
      "/images/projects/cineplex-admin-shows.png",
      "/images/projects/cineplex-admin-pricing.png",
    ],
    githubUrl: null,
    liveUrl: "https://theater-booking-system-blond.vercel.app/",
    featured: true,
    placeholder: false,
    year: "2026",
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    shortDescription:
      "Multi-branch restaurant operations and POS — tables, orders, menu, inventory, purchasing, staff, and finance, isolated per restaurant and scoped by branch.",
    detailedDescription:
      "Restaurant POS is a full operations product for a restaurant with more than one location. Each restaurant is isolated; tables, orders, stock, and staff are scoped to a branch. The floor POS is branch-specific. Tickets stay pending until marked ready or done, and table status updates from POS and reservations. Menu, inventory (including recipes and transfers), purchasing, customers, employees, and finance sit in the same workspace.",
    problem:
      "A restaurant with multiple branches usually splits POS, stock, and staff across spreadsheets or separate tools. Orders, table status, and inventory drift, and there is no single place to see sales, expenses, and low stock.",
    solution:
      "One restaurant workspace with branch scope. Switch branch in the header to run POS, manage tables, and count stock for that location. Shared modules cover menu, purchasing, employees, and finance without forking the product per branch.",
    results: [
      "Branch-scoped POS, tables, orders, and stock in one product.",
      "Kitchen tickets with ready/done flow for dine-in and delivery.",
      "Inventory per branch with recipes, transfers, and low-stock on the dashboard.",
    ],
    category: "SaaS",
    categories: ["SaaS", "Full Stack", "Next.js", "Admin Dashboard"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      {
        title: "Branch-scoped POS",
        description:
          "Point of sale runs on a single location. Switch branch in the header before taking orders.",
      },
      {
        title: "Tables and reservations",
        description:
          "Floor tables show occupied or available from POS and reservations, with seats per branch.",
      },
      {
        title: "Orders and kitchen flow",
        description:
          "Tickets stay pending until marked ready or done, for dine-in and delivery.",
      },
      {
        title: "Inventory and purchasing",
        description:
          "Stock per branch, recipes, transfers, suppliers, purchase orders, and goods receipts.",
      },
    ],
    challenges: [
      {
        challenge:
          "Running one product for a restaurant with multiple locations without mixing tables, stock, or tickets.",
        solution:
          "Isolate tenants at the restaurant, then scope POS, tables, orders, and inventory to the selected branch.",
      },
      {
        challenge:
          "Keeping floor status, kitchen tickets, and stock in sync during service.",
        solution:
          "Table status updates from POS and reservations; tickets stay pending until ready/done; the dashboard surfaces recent orders and low stock.",
      },
    ],
    process: [
      "Restaurant and branch model",
      "Tables, reservations, and POS",
      "Orders and kitchen status",
      "Menu, inventory, and purchasing",
      "Employees and finance",
      "Deploy on Vercel",
    ],
    architecture: [
      { label: "Client", detail: "Managers, cashiers, and kitchen staff" },
      { label: "Next.js", detail: "POS, operations dashboards, and auth" },
      { label: "API", detail: "Restaurant-isolated, branch-scoped operations" },
      { label: "Data", detail: "Branches, tables, orders, menu, stock, staff" },
    ],
    image: "/images/projects/restaurant-pos-dashboard.png",
    screenshots: [
      "/images/projects/restaurant-pos-dashboard.png",
      "/images/projects/restaurant-pos-restaurant-tables.png",
      "/images/projects/restaurant-pos-orders.png",
      "/images/projects/restaurant-pos-menu-items.png",
      "/images/projects/restaurant-pos-inventory-stock.png",
      "/images/projects/restaurant-pos-employees.png",
    ],
    githubUrl: null,
    liveUrl: "https://restaurant-hrms.vercel.app/",
    featured: true,
    placeholder: false,
    year: "2026",
  },
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
    image: "/images/projects/northstar-dashboard.png",
    screenshots: [
      "/images/projects/northstar-dashboard.png",
      "/images/projects/northstar-payroll.png",
      "/images/projects/northstar-attendance.png",
      "/images/projects/northstar-leave.png",
    ],
    githubUrl: null,
    liveUrl: "https://hrms-two-teal.vercel.app/",
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
