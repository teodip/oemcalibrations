import { Reveal } from "./Reveal";
import { Trajectory } from "../svg/Trajectory";

const facts: Array<[string, string]> = [
  ["Tolerance", "±0.1° angular"],
  ["Reference", "OEM service procedure"],
  ["Deliverable", "Pre-scan + post-scan report (PDF)"],
  ["Liability", "Documented compliance"],
];

export function WhyItMatters() {
  return (
    <section className="relative border-t border-rule/70 py-20 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" />
              Why calibration
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[22ch]">
              Sensors don&rsquo;t know they&rsquo;ve been moved.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[62ch] text-[17px] leading-[1.7] text-bone-2 font-serif">
              After a windshield replacement, collision repair, suspension
              service, or alignment, the systems that keep a driver inside
              their lane and stopped before a pedestrian no longer know where
              they are pointing. Forward-facing cameras, radars, and lidar
              units measure the world in fractions of a degree. A bracket bent
              two millimeters in a fender bender, or a windshield reseated
              half a degree off, is enough to shift a target sixty feet
              downrange.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-bone-2 font-serif">
              OEM calibration restores those sensors to the angles, distances,
              and reference points the manufacturer published &mdash; and
              produces the documentation that proves it.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 border border-rule/60 p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                  Diagram · 0.5° offset over distance
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Fig. 01
                </span>
              </div>
              <Trajectory className="h-auto w-full text-bone" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="border-t border-rule/70">
              {facts.map(([k, v], i) => (
                <div
                  key={k}
                  className="grid grid-cols-12 gap-4 border-b border-rule/70 py-5"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="col-span-4 font-mono text-[11px] uppercase tracking-widest text-bone-2">
                    {k}
                  </span>
                  <span className="col-span-8 font-mono text-[13px] text-bone">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-start gap-3">
              <span className="mt-2 inline-block h-px w-8 bg-accent shrink-0" />
              <p className="font-mono text-[12px] uppercase tracking-widest text-bone-2 leading-[1.7]">
                Without documented calibration, liability after a subsequent
                ADAS-related collision falls on the last shop to touch the
                vehicle.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
