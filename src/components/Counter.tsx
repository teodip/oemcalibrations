import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: (value: number) => string;
  className?: string;
};

const easeOutExpo = (t: number) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

export function Counter({
  to,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
  format,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    let rafId = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutExpo(t);
      setValue(eased * to);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, to, duration]);

  const display = format
    ? format(value)
    : value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
