import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Service = { num: string; title: string };

type Props = {
  scrollProgress: MotionValue<number>;
  services: Service[];
  className?: string;
};

export function SensorStrip({
  scrollProgress,
  services,
  className = "",
}: Props) {
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollProgress, "change", (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(v * services.length)),
    );
    setActive(idx);
  });

  const progressWidth = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  const current = services[active];

  return (
    <div className={className}>
      {/* Top status row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            aria-hidden
            className="block h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Now scrolling
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-bone-2">
          {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </span>
      </div>

      {/* Active service name */}
      <div className="mt-1.5 min-h-[22px] overflow-hidden">
        <motion.h3
          key={current?.num}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[14px] uppercase tracking-[0.06em] leading-[1.25] text-bone"
        >
          {current?.title}
        </motion.h3>
      </div>

      {/* Indicator strip — service numbers + active bar */}
      <div className="mt-3 grid grid-cols-8 gap-1 border-t border-rule/60 pt-2.5">
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <div
              key={s.num}
              className="flex flex-col items-center gap-2"
            >
              <span
                className={`font-mono text-[9px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-bone-2/55"
                }`}
              >
                {s.num}
              </span>
              <motion.span
                aria-hidden
                className={`block bg-accent transition-all duration-300 ease-out ${
                  isActive
                    ? "h-2.5 w-3"
                    : "h-1 w-1 rounded-full opacity-30"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Section progress bar */}
      <div className="relative mt-3 h-[2px] bg-rule/60">
        <motion.div
          className="absolute inset-y-0 left-0 bg-accent"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
}
