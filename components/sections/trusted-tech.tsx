import { profile } from "@/data/profile";

export function TrustedTech() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 lg:grid-cols-3">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden border-r border-border px-6 py-8 text-center last:border-r-0 max-lg:odd:border-r max-lg:[&:nth-child(n+3)]:border-t"
          >
            <p className="text-[2.15rem] leading-none font-extrabold text-gradient">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {stat.label}
            </p>
            <span className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
