import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";

export function Footer() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-lg font-extrabold text-gradient">{initials}</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href={`tel:${profile.phone}`} className="hover:text-cyan">
            {profile.phone}
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyan">
            GitHub
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-cyan">
            LinkedIn
          </a>
          <Link href="/contact" className="hover:text-cyan">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
