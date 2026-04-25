import { Crosshair } from "../svg/Crosshair";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-rule/70 bg-bg/70 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <Crosshair size={16} color="var(--accent)" />
          <span className="font-mono text-[12px] uppercase tracking-widest text-bone group-hover:text-accent transition-colors">
            [BUSINESS NAME]
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-widest text-bone-2 hover:text-bone transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[12px] uppercase tracking-widest border border-accent text-accent px-3 py-1.5 hover:bg-accent hover:text-bg transition-colors"
          >
            Request calibration
          </a>
        </nav>
        <a
          href="#contact"
          className="md:hidden font-mono text-[11px] uppercase tracking-widest border border-accent text-accent px-2 py-1"
        >
          Request
        </a>
      </div>
    </header>
  );
}
