import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";

export function Services() {
  return (
    <section id="services" className="reveal scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I take from idea to production."
          description="MERN and Next.js work: products, APIs, dashboards, and the auth in between."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
