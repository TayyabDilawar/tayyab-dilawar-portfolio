import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  role: profile.role,
  description: profile.summary,
  url: profile.siteUrl,
  email: profile.email,
  githubUsername:
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? profile.githubUsername,
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? profile.linkedinUrl,
  publicEmail: process.env.NEXT_PUBLIC_EMAIL ?? profile.email,
  ogImage: "/opengraph-image",
} as const;

export const navItems = [
  { href: "/#about", label: "About", page: "/about" },
  { href: "/#skills", label: "Skills", page: "/about" },
  { href: "/#experience", label: "Experience", page: "/experience" },
  { href: "/#projects", label: "Projects", page: "/projects" },
  { href: "/#services", label: "Services", page: "/services" },
  { href: "/#contact", label: "Contact", page: "/contact" },
] as const;

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
