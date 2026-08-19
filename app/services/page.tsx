import type { Metadata } from "next";
import { Services } from "@/components/sections/services";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Full-stack, Next.js, MERN, API, SaaS, and admin dashboard development.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Services — ${profile.name}`,
          description: "Full-stack, Next.js, MERN, API, SaaS, and dashboards.",
          path: "/services",
        })}
      />
      <section className="pt-16 pb-4">
        <Container>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight">
            Engagement types.
          </h1>
        </Container>
      </section>
      <Services />
    </>
  );
}
