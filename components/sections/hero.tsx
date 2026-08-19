import Link from "next/link";
import { ArrowDownRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { trustedTechnologies } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { Magnetic } from "@/components/ui/magnetic";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { Terminal } from "@/components/ui/terminal";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  x: Mail,
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {profile.availability}
          </Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm tracking-[0.18em] text-accent uppercase">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/#projects" className={buttonVariants({ size: "lg" })}>
                View My Work
                <ArrowDownRight className="size-4" />
              </Link>
            </Magnetic>
            <Link
              href="/#contact"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Contact Me
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="size-4" />
                  {social.label}
                </a>
              );
            })}
            <CopyEmailButton />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {trustedTechnologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Terminal className="lg:translate-y-4" />
      </Container>
    </section>
  );
}
