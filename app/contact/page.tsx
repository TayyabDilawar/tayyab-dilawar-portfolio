import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contact ${profile.name} about freelance or full-time MERN / Next.js work.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `Contact — ${profile.name}`,
          description: `Get in touch with ${profile.name}.`,
          path: "/contact",
        })}
      />
      <Contact />
    </>
  );
}
