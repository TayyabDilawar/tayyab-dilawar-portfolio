import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: `Selected work by ${profile.name} — Random Word Generator, Restaurant POS, Northstar HR, Cineplex Tickets, and other full-stack products.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Projects — ${profile.name}`,
          description: `Selected work by ${profile.name}.`,
          path: "/projects",
        })}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Projects
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Case studies.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Live products with write-ups for architecture, features, and the problems they solve.
          </p>
          <div className="mt-10">
            <ProjectFilter />
          </div>
        </Container>
      </section>
    </>
  );
}
