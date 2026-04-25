export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "96px 96px",
        maskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
