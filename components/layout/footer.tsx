import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { profile } from "@/data/profile";
import { footerNav } from "@/lib/constants";
import { Container } from "@/components/ui/container";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  x: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            {profile.role}. {profile.summary}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Navigate</p>
          <ul className="mt-3 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Contact</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block text-sm text-muted hover:text-foreground"
          >
            {profile.email}
          </a>
          <div className="mt-4 flex gap-3">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted hover:text-foreground"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js</p>
      </Container>
    </footer>
  );
}
