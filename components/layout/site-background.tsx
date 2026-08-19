import { ParticleCanvas } from "@/components/layout/particle-canvas";

export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="site-glow absolute inset-0" />
      <ParticleCanvas />
    </div>
  );
}
