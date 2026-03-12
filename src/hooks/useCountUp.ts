"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ".",
}: UseCountUpOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function format(value: number): string {
      const fixed = value.toFixed(decimals);
      const [intPart, decPart] = fixed.split(".");
      const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      const result = decimals > 0 ? `${formatted},${decPart}` : formatted;
      return `${prefix}${result}${suffix}`;
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = easeOutCubic(progress) * end;
      setDisplayValue(format(current));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(format(end));
      }
    }

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, end, duration, decimals, prefix, suffix, separator]);

  return { ref, displayValue };
}
