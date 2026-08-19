import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section id="contact" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something great."
            description="Tell me about the product, the stack you already have, and the deadline. I will reply with whether I am a fit."
          />
          <ul className="mt-8 space-y-4 text-sm text-muted">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-accent" />
              {profile.email}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-accent" />
              {profile.phone}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-accent" />
              {profile.location}
            </li>
          </ul>
          <div className="mt-6">
            <CopyEmailButton />
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
