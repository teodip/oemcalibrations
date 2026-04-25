import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { VehicleTopdown } from "../svg/VehicleTopdown";

const headline = [
  "Recalibrated to manufacturer",
  "specification. Documented to",
  "liability standard.",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.4, 0.05]);
  const opacityMobile = useTransform(scrollYProgress, [0, 0.7], [0.18, 0.03]);
  const yShift = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-20 pb-32 sm:pt-24 sm:pb-28"
    >
      {/* Vehicle parallax — faint backdrop on mobile, side panel on desktop */}
      <motion.div
        style={{ scale, opacity: opacityMobile, y: yShift }}
        className="pointer-events-none absolute -right-[20%] top-[10%] block h-[88%] w-[110%] text-bone md:hidden"
        aria-hidden
      >
        <VehicleTopdown className="h-full w-full" callouts={Array(8).fill(0.0)} />
      </motion.div>
      <motion.div
        style={{ scale, opacity, y: yShift }}
        className="pointer-events-none absolute right-[-6%] top-[6%] hidden h-[110%] w-[55%] text-bone md:block"
        aria-hidden
      >
        <VehicleTopdown className="h-full w-full" callouts={Array(8).fill(0.0)} />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <motion.p
          className="eyebrow flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block h-px w-8 bg-accent" />
          OEM Calibration · ADAS · Precision
        </motion.p>

        <h1 className="display mt-6 text-bone text-[clamp(2.25rem,7.5vw,5.75rem)] max-w-[18ch] sm:mt-8">
          {headline.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.09,
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-[58ch] text-[16.5px] leading-relaxed text-bone-2 sm:mt-10 sm:text-[18px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.55,
          }}
        >
          Static and dynamic ADAS calibration for body shops, glass shops,
          dealerships, and the vehicles you don&rsquo;t compromise on.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a
            href="#contact"
            className="font-mono text-[12px] uppercase tracking-widest border border-accent text-accent px-4 py-2.5 hover:bg-accent hover:text-bg transition-colors"
          >
            Request calibration
          </a>
          <a
            href="#process"
            className="font-mono text-[12px] uppercase tracking-widest text-bone-2 hover:text-bone transition-colors"
          >
            See the process →
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-6 lg:left-10 flex flex-col items-start gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          Scroll
        </span>
        <motion.span
          className="block h-10 w-px bg-bone-2/60"
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>

      {/* Bottom-right serial / spec marker */}
      <div className="absolute bottom-8 right-6 lg:right-10 hidden md:flex flex-col items-end gap-1 text-right">
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          Reference
        </span>
        <span className="font-mono text-[11px] tracking-wide text-bone">
          OEM · J2534 · I-CAR
        </span>
      </div>
    </section>
  );
}
