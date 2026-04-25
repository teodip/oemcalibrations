import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Vehicles calibrated" },
  { value: 0.1, prefix: "±", suffix: "°", decimals: 1, label: "Angular tolerance" },
  { value: 60, suffix: "+", label: "OEM procedures referenced" },
  { value: 100, suffix: "%", label: "Pre / post scan documented" },
];

export function Specs() {
  return (
    <section className="relative border-t border-rule/70 py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            By the numbers
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-t border-rule/70 pt-6">
                <div className="font-mono text-[clamp(2.25rem,4.5vw,3.75rem)] text-bone leading-none">
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </div>
                <div className="mt-5 font-mono text-[11px] uppercase tracking-widest text-bone-2">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
