import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isTouch ? 0.9 : 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      gestureOrientation: "vertical",
      smoothWheel: true,
      // Run smoothing on touch devices too — the user wants fluid scroll on mobile.
      // syncTouch hands native touch events to Lenis instead of the browser.
      syncTouch: isTouch,
      syncTouchLerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
