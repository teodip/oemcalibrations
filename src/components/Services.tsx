import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { VehicleTopdown } from "../svg/VehicleTopdown";
import { SensorStrip } from "./SensorStrip";
import { Reveal } from "./Reveal";

type Service = {
  num: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    num: "01",
    title: "Static ADAS calibration",
    body: "Fixed-target procedures using OEM-spec target boards positioned to manufacturer-published distances and angles. Performed in-shop on a level, lit, target-rated surface.",
  },
  {
    num: "02",
    title: "Dynamic ADAS calibration",
    body: "Drive-cycle procedures executed under defined road, speed, lane-marking, and weather conditions. Required for many forward-camera and radar systems where static targets aren&rsquo;t supported.",
  },
  {
    num: "03",
    title: "Forward-facing camera",
    body: "Windshield-mounted FFC alignment after glass replacement, bracket service, or collision work. Critical for lane-keep assist, automatic emergency braking, and traffic-sign recognition.",
  },
  {
    num: "04",
    title: "Front and corner radar",
    body: "Long-range front radar realignment for adaptive cruise and AEB; corner radar realignment for blind-spot monitoring and rear cross-traffic alert.",
  },
  {
    num: "05",
    title: "Lidar",
    body: "Where equipped — select Toyota / Lexus, Honda Legend, premium EVs and luxury platforms. Calibrated per OEM procedure with manufacturer-specified targets and conditions.",
  },
  {
    num: "06",
    title: "Surround-view camera",
    body: "360°/bird&rsquo;s-eye system stitch calibration after fender, mirror, quarter-panel, or tailgate work. Each camera calibrated individually, then stitched and verified.",
  },
  {
    num: "07",
    title: "Steering angle sensor (SAS)",
    body: "Reset and relearn after alignment, rack replacement, suspension geometry change, or steering column service. Verified against scan-tool live data.",
  },
  {
    num: "08",
    title: "Blind spot, lane keep, adaptive cruise",
    body: "System-level verification across BSM, LKAS, ACC, and AEB. Live-data confirmation, fault-code clearance, and post-scan documentation per OEM procedure.",
  },
];

export function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  // 8 services — distribute callout opacities across scroll progress
  const calloutOpacities = services.map((_, i) => {
    const start = i / services.length;
    const peak = (i + 0.5) / services.length;
    const end = (i + 1) / services.length;
    return useTransform(
      scrollYProgress,
      [Math.max(0, start - 0.04), peak, Math.min(1, end + 0.04)],
      [0.08, 1, 0.08],
    );
  });

  return (
    <section
      id="services"
      className="relative border-t border-rule/70 py-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Services
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[22ch]">
            Eight calibration disciplines.
            <span className="text-bone-2"> One standard.</span>
          </h2>
        </Reveal>
      </div>

      <div
        ref={wrapRef}
        className="mx-auto mt-12 max-w-[1400px] px-6 lg:mt-20 lg:px-10"
      >
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Diagram block — sticky on mobile (block flow), grid item on desktop */}
          <div className="sticky top-16 z-20 -mx-6 border-b border-rule/70 bg-bg/90 px-6 pb-3 pt-3 backdrop-blur-md lg:static lg:top-auto lg:z-auto lg:col-span-5 lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0 lg:backdrop-blur-none">
            {/* Mobile: compact horizontal sensor strip */}
            <div className="lg:hidden">
              <SensorStrip callouts={calloutOpacities} />
            </div>

            {/* Desktop: full top-down vehicle diagram */}
            <div className="hidden lg:block lg:sticky lg:top-[14vh]">
              <div className="border border-rule/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                    Sensor map · top-down
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Live
                  </span>
                </div>
                <VehicleTopdown
                  className="h-[80vh] w-full text-bone"
                  callouts={calloutOpacities}
                />
                <div className="mt-3 grid grid-cols-3 gap-3 border-t border-rule/60 pt-3">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-bone-2">
                      Tol.
                    </div>
                    <div className="font-mono text-[12px] text-bone">±0.1°</div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-bone-2">
                      Ref.
                    </div>
                    <div className="font-mono text-[12px] text-bone">OEM</div>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-bone-2">
                      Doc.
                    </div>
                    <div className="font-mono text-[12px] text-bone">PDF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services list — each ~70vh on lg, tighter on mobile */}
          <ol className="mt-2 lg:col-span-7 lg:mt-0">
            {services.map((s) => (
              <li
                key={s.num}
                className="flex min-h-[58vh] flex-col justify-center border-b border-rule/60 py-10 lg:min-h-[70vh] lg:py-12"
              >
                <Reveal>
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-[13px] tracking-widest text-accent lg:text-[14px]">
                      {s.num}
                    </span>
                    <span className="inline-block h-px w-12 bg-rule" />
                  </div>
                  <h3 className="display mt-5 text-[clamp(1.5rem,5.5vw,2.5rem)] text-bone lg:mt-6">
                    {s.title}
                  </h3>
                  <p
                    className="mt-5 max-w-[58ch] font-serif text-[15.5px] leading-[1.65] text-bone-2 lg:mt-6 lg:text-[16.5px] lg:leading-[1.7]"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
