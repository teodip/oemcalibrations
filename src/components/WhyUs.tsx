import type { ComponentType } from "react";
import { Reveal } from "./Reveal";
import {
  PillarEquipment,
  PillarProcedure,
  PillarDocumentation,
} from "../svg/PillarIcons";

type Pillar = {
  num: string;
  eyebrow: string;
  title: string;
  body: string;
  spec: string;
  Icon: ComponentType<{ className?: string }>;
};

const pillars: Pillar[] = [
  {
    num: "01",
    eyebrow: "Equipment",
    title: "OEM target boards.",
    body: "Manufacturer-spec, not generic. Replaced on schedule. Stored flat, calibrated to published dimensions, inspected before every job. The targets are the procedure &mdash; everything downstream depends on them being right.",
    spec: "Hunter · Autel · OEM-supplied",
    Icon: PillarEquipment,
  },
  {
    num: "02",
    eyebrow: "Procedure",
    title: "Manufacturer service procedures.",
    body: "Every calibration referenced to the current OEM service procedure for the specific year, make, model, and trim. No shortcuts. No &ldquo;close enough.&rdquo; No re-using a Camry procedure for a Lexus.",
    spec: "Mitchell · ALLDATA · OEM portal",
    Icon: PillarProcedure,
  },
  {
    num: "03",
    eyebrow: "Documentation",
    title: "Pre-scan, post-scan, signed.",
    body: "Every job leaves with a pre-scan report, a post-scan report, target-board photographs, the OEM procedure reference, technician sign-off, and a signed deliverable PDF. Audit-ready, exportable, durable.",
    spec: "PDF · CCC · Mitchell estimating",
    Icon: PillarDocumentation,
  },
];

export function WhyUs() {
  return (
    <section className="relative border-t border-rule/70 py-20 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Why us
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[26ch]">
            Equipment, procedure, documentation. In that order.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.07}>
              <article className="border-t border-rule/70 pt-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] tracking-widest text-accent">
                      {p.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                      {p.eyebrow}
                    </span>
                  </div>
                  <p.Icon className="h-14 w-14 shrink-0 text-bone" />
                </div>
                <h3 className="display mt-6 text-[clamp(1.5rem,2.4vw,2rem)] text-bone">
                  {p.title}
                </h3>
                <p
                  className="mt-6 font-serif text-[16px] leading-[1.7] text-bone-2"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
                <div className="mt-8 flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-accent" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-bone-2">
                    {p.spec}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
