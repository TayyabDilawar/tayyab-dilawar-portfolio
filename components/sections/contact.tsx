import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { Magnetic } from "@/components/ui/magnetic";

const contacts = [
  {
    label: "Email",
    value: "Send a message",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect",
    href: profile.linkedinUrl,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "View code",
    href: profile.githubUrl,
    icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="reveal scroll-mt-24 py-24 sm:py-[110px]">
      <Container className="max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="contact"
          title="Let's Build Together"
          description="Open to freelance, contract, and full-time work. Tell me about the product and I'll reply with whether I'm a fit."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <Magnetic key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex min-w-[170px] items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 text-left transition-all hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_40px_rgba(14,165,233,0.15)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-[10px] bg-card-solid">
                    <Icon className="size-4 text-cyan" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                      {item.label}
                    </span>
                    <span className="block text-sm font-bold">{item.value}</span>
                  </span>
                </a>
              </Magnetic>
            );
          })}
        </div>
        <div className="mt-12 rounded-[20px] border border-border bg-card p-6 text-left sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
