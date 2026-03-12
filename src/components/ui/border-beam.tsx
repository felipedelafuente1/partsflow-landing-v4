"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 4,
  delay = 0,
  colorFrom = "#4ade80",
  colorTo = "#3b82f6",
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
    >
      <div
        style={
          {
            "--border-beam-size": `${size}px`,
            "--border-beam-duration": `${duration}s`,
            "--border-beam-delay": `${delay}s`,
            "--border-beam-from": colorFrom,
            "--border-beam-to": colorTo,
          } as React.CSSProperties
        }
        className={cn(
          "absolute inset-0 rounded-[inherit]",
          "[border:1px_solid_transparent]",
          "[background:padding-box_content-box,border-box_border-box]",
          "[background-image:none,conic-gradient(from_calc(var(--border-beam-delay)*90deg),transparent_25%,var(--border-beam-from),var(--border-beam-to),transparent_50%)]",
          "animate-[spin_var(--border-beam-duration)_linear_infinite]",
          "[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
          "[mask-composite:exclude]",
          "[-webkit-mask-composite:xor]"
        )}
      />
    </div>
  );
}
