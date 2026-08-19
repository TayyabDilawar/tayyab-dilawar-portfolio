export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="site-glow absolute inset-0" />
      <div className="site-grid absolute inset-0" />
      <div className="site-noise absolute inset-0" />
    </div>
  );
}
