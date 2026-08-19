import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { heroRoles } from "@/data/skills";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Typewriter } from "@/components/ui/typewriter";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="glow-orb -left-48 -top-48 size-[700px] bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className="glow-orb -right-24 -bottom-36 size-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className="glow-orb top-[35%] left-[55%] size-[350px] bg-[radial-gradient(circle,rgba(217,70,239,0.16)_0%,transparent_65%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center">
        <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-[18px] py-1.5 font-mono text-[12px] font-semibold tracking-[0.12em] text-cyan uppercase">
          <span className="badge-dot size-[7px] rounded-full bg-cyan" aria-hidden />
          {profile.availability}
        </div>

        <h1>
          <span className="mb-[0.15em] block text-[clamp(3.2rem,8vw,6.4rem)] leading-none font-extrabold tracking-[-0.06em] text-gradient">
            {profile.name}
          </span>
          <span className="block text-[clamp(1.4rem,3.4vw,2.4rem)] font-light tracking-tight text-muted">
            <Typewriter words={heroRoles} />
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-[540px] text-[1.05rem] leading-8 text-muted">
          {profile.headline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link href="/#contact" className={cn(buttonVariants({ size: "lg" }))}>
              <Mail className="size-4" />
              Get In Touch
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/#projects"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <Code2 className="size-4" />
              View My Work
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
        <span>scroll</span>
        <span className="scroll-bar h-11 w-px bg-[linear-gradient(to_bottom,transparent,var(--cyan))]" />
      </div>
    </section>
  );
}
