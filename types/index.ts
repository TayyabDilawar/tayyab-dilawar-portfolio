export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "email";
}

export interface ProfileStat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  headline: string;
  summary: string;
  about: string;
  background: string;
  specialization: string;
  enjoysBuilding: string;
  philosophy: string;
  availability: string;
  email: string;
  phone: string;
  location: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  xUrl: string | null;
  resumeUrl: string;
  siteUrl: string;
  stats: ProfileStat[];
  socials: SocialLink[];
  knowsAbout: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps / Tools"
  | "Other";

export interface SkillGauge {
  name: string;
  percent: number;
}

export interface SkillGroup {
  category: SkillCategory;
  icon: string;
  variant: "cyan" | "violet" | "pink" | "amber";
  items: string[];
  gauges: SkillGauge[];
}

export interface ArchitectureLayer {
  label: string;
  detail: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export type ProjectCategory =
  | "Full Stack"
  | "Next.js"
  | "MERN"
  | "SaaS"
  | "Admin Dashboard"
  | "APIs"
  | "E-commerce";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  problem: string;
  solution: string;
  results: string[];
  category: ProjectCategory;
  categories: ProjectCategory[];
  technologies: string[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  process: string[];
  architecture: ArchitectureLayer[];
  image: string;
  screenshots: string[];
  githubUrl: string | null;
  liveUrl: string;
  featured: boolean;
  placeholder: boolean;
  year: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  placeholder: boolean;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: "layers" | "globe" | "database" | "api" | "saas" | "layout";
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  quote: string;
  placeholder: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
  placeholder: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: "code" | "scale" | "responsive" | "zap" | "search" | "shield" | "plug" | "check" | "message" | "life-buoy";
}

export interface GithubActivityDay {
  date: string;
  count: number;
}

export interface GithubStats {
  username: string;
  repos: number;
  contributions: number;
  activity: GithubActivityDay[];
  source: "static-fallback";
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof ContactPayload, string>>;
}
