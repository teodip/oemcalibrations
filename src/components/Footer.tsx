import { Crosshair } from "../svg/Crosshair";

export function Footer() {
  return (
    <footer className="relative border-t border-rule/70 py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <Crosshair size={14} color="var(--accent)" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-bone-2">
            OEM Calibrations · [CITY], [STATE] · &copy; 2026
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="font-mono text-[11px] uppercase tracking-widest text-bone-2 hover:text-bone transition-colors"
          >
            Back to top ↑
          </a>
          <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
            Ref · OEM · J2534 · I-CAR
          </span>
        </div>
      </div>
    </footer>
  );
}
