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

function formatValue(
  value: number,
  decimals: number,
  prefix: string,
  suffix: string,
  separator: string
): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  const result = decimals > 0 ? `${formatted},${decPart}` : formatted;
  return `${prefix}${result}${suffix}`;
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
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);
  const frameRef = useRef<number | null>(null);

  // Static fallback: if observer never fires (e.g. mobile edge cases), show final value after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(formatValue(end, decimals, prefix, suffix, separator));
    }, 1500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, decimals, prefix, suffix, separator]);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    function easeOutCubic(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = easeOutCubic(progress) * end;
      setDisplayValue(formatValue(current, decimals, prefix, suffix, separator));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(formatValue(end, decimals, prefix, suffix, separator));
      }
    }

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, end, duration, decimals, prefix, suffix, separator]);

  return { ref, displayValue };
}
