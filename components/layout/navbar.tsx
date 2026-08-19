"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { navItems } from "@/lib/constants";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const sectionIds = ["about", "skills", "experience", "projects", "services", "contact"];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[60] border-b border-transparent transition-all duration-300",
          scrolled && "border-border bg-background/85 backdrop-blur-2xl",
        )}
      >
        <nav className="relative z-[61] mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:px-7">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-gradient">
            {profile.name}
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("/#", "");
              const isHire = item.label === "Contact";
              const isActive =
                pathname === "/"
                  ? active === id
                  : pathname === item.page || pathname.startsWith(`${item.page}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground",
                      isActive && !isHire && "bg-cyan/10 text-foreground",
                      isHire && "bg-brand ml-1 font-bold text-black hover:text-black",
                    )}
                  >
                    {isHire ? "Hire Me" : item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full bg-foreground transition-transform",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full bg-foreground transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 rounded-full bg-foreground transition-transform",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 bg-black/96 backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-2xl font-bold tracking-tight",
                item.label === "Contact" && "bg-brand rounded-xl px-8 py-3 text-black",
              )}
            >
              {item.label === "Contact" ? "Hire Me" : item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
