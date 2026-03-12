"use client";

import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-[grid_20s_linear_infinite]",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            "[background-image:linear-gradient(to_right,rgba(74,222,128,0.03)_1px,transparent_0),linear-gradient(to_bottom,rgba(74,222,128,0.03)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Gradient overlay to fade grid edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
    </div>
  );
}
