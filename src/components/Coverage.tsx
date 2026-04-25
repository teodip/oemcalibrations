import { Reveal } from "./Reveal";

type Card = {
  num: string;
  title: string;
  body: string;
  bullets: string[];
  best: string;
};

const cards: Card[] = [
  {
    num: "01",
    title: "In-shop",
    body: "Controlled lighting, level floor, target boards in fixed positions, full diagnostic suite. The right environment for static procedures and complex multi-system jobs.",
    bullets: [
      "Static ADAS calibration",
      "Multi-system jobs",
      "Lidar where required",
      "Surround-view stitch",
    ],
    best: "Best for collision repair, glass shops with shop space, dealership drop-off.",
  },
  {
    num: "02",
    title: "Mobile",
    body: "We come to your facility. Dynamic procedures and select static work where the environment supports it. Travel coverage area: [COVERAGE AREA].",
    bullets: [
      "Dynamic ADAS calibration",
      "Static where space permits",
      "Steering angle reset on-site",
      "Pre / post-scan on location",
    ],
    best: "Best for high-volume body shops, glass shops without indoor space, fleet accounts.",
  },
];

export function Coverage() {
  return (
    <section
      id="coverage"
      className="relative border-t border-rule/70 py-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Coverage
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[24ch]">
            In-shop or on-site. The procedure decides.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <article className="border border-rule/70 p-6 sm:p-8 lg:p-10 hover:border-accent transition-colors duration-500 ease-out-expo">
                <div className="flex items-baseline gap-4 border-b border-rule/70 pb-6">
                  <span className="font-mono text-[12px] tracking-widest text-accent">
                    {c.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-bone-2">
                    Service mode
                  </span>
                </div>
                <h3 className="display mt-8 text-[clamp(1.75rem,3vw,2.5rem)] text-bone">
                  {c.title}
                </h3>
                <p className="mt-6 font-serif text-[16px] leading-[1.7] text-bone-2">
                  {c.body}
                </p>
                <ul className="mt-8 space-y-3">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 border-t border-rule/60 pt-3 first:border-t-0 first:pt-0"
                    >
                      <span className="inline-block h-px w-4 bg-accent" />
                      <span className="font-mono text-[12.5px] uppercase tracking-widest text-bone">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-rule/70 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
                    Best for
                  </span>
                  <p className="mt-2 font-serif text-[14px] leading-[1.6] text-bone-2">
                    {c.best}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
