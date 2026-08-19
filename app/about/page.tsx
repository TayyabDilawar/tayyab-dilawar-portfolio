import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: profile.about,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `About — ${profile.name}`,
          description: profile.about,
          path: "/about",
        })}
      />
      <section className="pt-16 pb-4">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            About
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            {profile.role} building production web applications.
          </h1>
        </Container>
      </section>
      <About />
      <Skills />
      <TechStack />
      <WhyWorkWithMe />
    </>
  );
}
