import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Github } from "@/components/sections/github";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedTech } from "@/components/sections/trusted-tech";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { JsonLd } from "@/components/seo/json-ld";
import { profile } from "@/data/profile";
import { webPageJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          title: `${profile.name} — ${profile.role}`,
          description: profile.summary,
          path: "/",
        })}
      />
      <Hero />
      <TrustedTech />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <Github />
      <Testimonials />
      <Contact />
    </>
  );
}
