import { Reveal } from "./Reveal";

const brands = [
  "Toyota",
  "Lexus",
  "Honda",
  "Acura",
  "Nissan",
  "Infiniti",
  "Subaru",
  "Mazda",
  "Hyundai",
  "Kia",
  "Genesis",
  "Ford",
  "Lincoln",
  "Chevrolet",
  "Cadillac",
  "GMC",
  "Buick",
  "Ram",
  "Jeep",
  "Chrysler",
  "Dodge",
  "Volkswagen",
  "Audi",
  "BMW",
  "Mini",
  "Mercedes-Benz",
  "Volvo",
  "Polestar",
  "Porsche",
  "Land Rover",
  "Jaguar",
  "Tesla",
  "Rivian",
  "Lucid",
];

export function Vehicles() {
  return (
    <section className="relative border-t border-rule/70 py-20 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" />
            Manufacturer coverage
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-8 text-[clamp(1.75rem,3.6vw,3rem)] text-bone max-w-[24ch]">
            Domestic, European, Japanese, Korean,
            <span className="text-bone-2"> EV.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[60ch] font-serif text-[16.5px] leading-[1.7] text-bone-2">
            We calibrate to the procedure published by the manufacturer of the
            vehicle in front of us &mdash; not a generic best-guess. If your
            platform isn&rsquo;t listed, ask. The list grows monthly as
            procedures are released.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((b) => (
              <li
                key={b}
                className="group relative border-t border-rule/60 py-5"
              >
                <span className="font-mono text-[12.5px] uppercase tracking-widest text-bone-2 transition-colors group-hover:text-bone">
                  {b}
                </span>
                <span className="absolute left-0 top-[-1px] h-px w-0 bg-accent transition-all duration-500 ease-out-expo group-hover:w-full" />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center gap-3 border-t border-rule/70 pt-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
              Note
            </span>
            <span className="inline-block h-px w-6 bg-rule" />
            <span className="font-mono text-[12px] text-bone-2">
              Brand names referenced for procedure coverage. No affiliation
              implied.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
