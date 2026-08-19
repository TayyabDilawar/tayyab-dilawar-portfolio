# MERN / Next.js Developer Portfolio

Personal portfolio for a MERN Stack developer, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Content lives in typed data files so you can replace name, projects, and experience without rewriting UI.

## Features

- Dark-first theme with light and system modes
- Homepage sections: hero, about, skills, architecture, projects, experience, services, process, GitHub fallback, testimonials, contact
- Project case studies at `/projects/[slug]`
- Blog architecture at `/blog` and `/blog/[slug]` (local typed data, CMS-ready)
- SEO: Metadata API, canonical URLs, Open Graph, JSON-LD, sitemap, robots
- Accessible forms, keyboard navigation, reduced-motion support
- Contact form via Server Action with a swappable email provider

## Tech stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Lucide icons, Motion, next-themes
- shadcn-style UI primitives (`Button`, tokens, `cn()`)

## Installation

```bash
npm install
```

Copy environment variables:

```bash
copy .env.example .env.local
```

On macOS/Linux: `cp .env.example .env.local`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (required in production) |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub handle shown in the GitHub section |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |
| `NEXT_PUBLIC_EMAIL` | Public contact email |

Do not put private API keys in `NEXT_PUBLIC_*` variables. Email provider secrets belong in server-only env vars when you connect Resend, Nodemailer, SendGrid, or Formspree in `lib/email.ts`.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
2. Deploy to Vercel (or any Node host that supports Next.js).
3. Add a PDF at `public/resume/YOUR_RESUME.pdf` or change `resumeUrl` in `data/profile.ts`.
4. Wire `lib/email.ts` to an email provider before relying on the contact form in production.

## Project structure

```
app/                 App Router pages, sitemap, robots, OG image
components/
  layout/            Navbar, footer, theme, cursor, progress
  sections/          Homepage sections
  ui/                Shared primitives
  projects/          Filters and architecture diagram
  seo/               JSON-LD
data/                Typed content (replace these first)
lib/                 SEO, utils, contact action, email provider
types/               Shared TypeScript types
public/images/       Replaceable SVG covers
```

## Customization

Edit these files instead of hunting through components:

- `data/profile.ts` — name, bio, email, GitHub, LinkedIn, resume, stats
- `data/projects.ts` — case studies
- `data/skills.ts` — technologies
- `data/experience.ts` — work history
- `data/services.ts` — services
- `data/testimonials.ts` — quotes (placeholders until you have permission)
- `data/blog.ts` — posts
- `app/globals.css` — design tokens

Placeholder copy is labeled `PLACEHOLDER`, `YOUR_*`, or `placeholder: true`.

## License

Private unless you add a license.
