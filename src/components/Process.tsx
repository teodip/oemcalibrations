import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TargetBoard } from "../svg/TargetBoard";
import { Reveal } from "./Reveal";

type Step = {
  num: string;
  title: string;
  body: string;
  spec: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Pre-scan",
    body: "Full-vehicle DTC capture before any work begins. Module-level fault inventory archived to the job record. Establishes the pre-condition baseline that protects every party downstream.",
    spec: "Autel · Bosch · OEM tool",
  },
  {
    num: "02",
    title: "Setup",
    body: "Level surface verification, tire pressure to OEM spec, ride-height confirmation, fuel level per procedure, mirror and seat indexed where required, target-board placement to manufacturer-published distances.",
    spec: "Level · Tire · Ride · Fuel",
  },
  {
    num: "03",
    title: "Targets",
    body: "OEM-spec target boards positioned to published angular tolerances. Hunter, Autel, or manufacturer-supplied boards stored flat and inspected. Target distances measured, not estimated.",
    spec: "±0.1° · OEM target",
  },
  {
    num: "04",
    title: "Calibration",
    body: "Procedure executed via Autel MaxiSys ADAS, Bosch ADS 625X, or Hunter Ultimate ADAS, referencing the current OEM service procedure. J2534 pass-through where the manufacturer requires factory tooling.",
    spec: "Autel · Bosch · Hunter",
  },
  {
    num: "05",
    title: "Post-scan",
    body: "Verification scan, live-data confirmation across affected modules, and a road-test where the procedure includes dynamic learning. No DTCs leave with the vehicle without disclosure.",
    spec: "DTC · Live data · Road",
  },
  {
    num: "06",
    title: "Documentation",
    body: "Pre-scan report, post-scan report, target-board photographs, OEM procedure reference, technician sign-off, and a signed deliverable PDF. The job record is durable, exportable, and audit-ready.",
    spec: "PDF · Audit-ready",
  },
];

export function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Translate the row in viewport-width units so the value is independent
  // of the row element's own measured width. Each step is 100vw wide, so
  // moving from step 1 to step N requires translating by (N-1) * 100vw.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(steps.length - 1) * 100}vw`],
  );

  // Progress bar width 0 → 100%
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <section
      id="process"
      className="relative border-t border-rule/70 bg-bg"
    >
      {/* Intro band */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-12 lg:pt-28 lg:pb-16">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Process
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[26ch]">
            Six stages, in order. Every job. Every vehicle.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[60ch] font-serif text-[16.5px] leading-[1.7] text-bone-2">
            The sequence is the procedure. Skipping a stage is not a shortcut
            &mdash; it is a different job, with a different deliverable, and a
            different liability profile.
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroll-jacked stage (desktop) */}
      <div
        ref={wrapRef}
        className="hidden md:block relative"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.ol
            style={{ x, width: `${steps.length * 100}vw` }}
            className="flex h-full"
          >
            {steps.map((step, i) => (
              <li
                key={step.num}
                className="relative flex h-full w-screen shrink-0 items-center"
              >
                <div className="grid h-full w-full grid-cols-12 items-center gap-x-12 gap-y-10 px-10 lg:px-20">
                  {/* Big step number */}
                  <div className="col-span-2">
                    <span className="font-mono text-[12px] uppercase tracking-widest text-accent">
                      Step
                    </span>
                    <div className="mt-3 font-mono font-medium text-[clamp(3.5rem,8.5vw,7rem)] leading-[0.95] text-bone tabular-nums">
                      {step.num}
                    </div>
                  </div>

                  {/* Title + body */}
                  <div className="col-span-6">
                    <span className="inline-block h-px w-12 bg-accent" />
                    <h3 className="display mt-6 text-[clamp(2rem,5vw,4rem)] text-bone">
                      {step.title}
                    </h3>
                    <p className="mt-8 max-w-[52ch] font-serif text-[18px] leading-[1.7] text-bone-2">
                      {step.body}
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                        Tooling
                      </span>
                      <span className="inline-block h-px w-6 bg-rule" />
                      <span className="font-mono text-[12px] tracking-wide text-bone">
                        {step.spec}
                      </span>
                    </div>
                  </div>

                  {/* Diagram */}
                  <div className="col-span-4 hidden lg:block">
                    <div className="border border-rule/60 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                          {`Stage ${i + 1} / ${steps.length}`}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                          {step.num}
                        </span>
                      </div>
                      <TargetBoard className="h-72 w-full text-bone" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ol>

          {/* Progress hairline (bottom of stage) */}
          <div className="absolute inset-x-10 lg:inset-x-20 bottom-10 flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
              Progress
            </span>
            <div className="relative h-px flex-1 bg-rule/70">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                style={{ width: progressWidth }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
              {steps.length} stages
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: native horizontal swipe carousel with snap points */}
      <MobileProcessCarousel />
    </section>
  );
}

function MobileProcessCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      const w = el.clientWidth || 1;
      const idx = Math.round(el.scrollLeft / w);
      setActive(Math.max(0, Math.min(steps.length - 1, idx)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  function go(i: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className="md:hidden">
      <div className="mx-auto mb-5 flex max-w-[1400px] items-center justify-between px-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          Swipe through the procedure
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
      </div>

      <div
        ref={trackRef}
        data-lenis-prevent
        className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {steps.map((step, i) => (
          <article
            key={step.num}
            className="flex w-screen shrink-0 snap-start flex-col px-6 pb-6"
            aria-label={`Stage ${i + 1} of ${steps.length}: ${step.title}`}
          >
            <div className="flex items-baseline gap-4 border-t border-rule/60 pt-6">
              <span className="font-mono text-[12px] uppercase tracking-widest text-accent">
                Step
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                {`Stage ${i + 1} / ${steps.length}`}
              </span>
            </div>
            <div className="mt-3 font-mono font-medium text-[clamp(3rem,18vw,5.5rem)] leading-[0.95] text-bone tabular-nums">
              {step.num}
            </div>
            <span className="mt-6 inline-block h-px w-10 bg-accent" />
            <h3 className="display mt-4 text-[clamp(1.75rem,7.5vw,2.5rem)] text-bone">
              {step.title}
            </h3>
            <p className="mt-5 max-w-[42ch] font-serif text-[15.5px] leading-[1.65] text-bone-2">
              {step.body}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-rule/60 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                Tooling
              </span>
              <span className="inline-block h-px w-4 bg-rule" />
              <span className="font-mono text-[12px] tracking-wide text-bone">
                {step.spec}
              </span>
            </div>
            <div className="mt-6 border border-rule/60 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-bone-2">
                  {`Stage ${i + 1} / ${steps.length}`}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                  {step.num}
                </span>
              </div>
              <TargetBoard className="h-44 w-full text-bone" />
            </div>
          </article>
        ))}
      </div>

      {/* Tick progress + dots */}
      <div className="mx-auto mt-6 flex max-w-[1400px] items-center gap-3 px-6 pb-8">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          Progress
        </span>
        <div className="flex flex-1 items-center gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to stage ${i + 1}`}
              className={`h-1 flex-1 transition-colors duration-300 ${
                i <= active ? "bg-accent" : "bg-rule/70"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          {steps.length} stages
        </span>
      </div>
    </div>
  );
}
