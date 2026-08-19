import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description: `Work history for ${profile.name}. Replace placeholders in data/experience.ts.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Experience — ${profile.name}`,
          description: `Work history for ${profile.name}.`,
          path: "/experience",
        })}
      />
      <section className="pt-16 pb-4">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Experience
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Timeline.
          </h1>
        </Container>
      </section>
      <Experience />
    </>
  );
}
