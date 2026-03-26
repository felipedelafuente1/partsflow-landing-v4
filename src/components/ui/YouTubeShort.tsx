"use client";

import { useState, useCallback, useEffect } from "react";
import { Play, X } from "lucide-react";

function extractVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:shorts|embed)\/|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match?.[1] ?? null;
}

export function YouTubeShort({
  url,
  company,
  className = "",
}: {
  url: string;
  company: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const videoId = extractVideoId(url);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!videoId) return null;

  return (
    <>
      {/* Styled play card */}
      <button
        onClick={() => setOpen(true)}
        className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 ${className}`}
        aria-label={`Ver video testimonio de ${company}`}
      >
        <div className="relative flex aspect-video flex-col items-center justify-center gap-4 px-6">
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Play button */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-mint-400/30 bg-mint-400/10 transition-all duration-300 group-hover:scale-110 group-hover:border-mint-400/50 group-hover:bg-mint-400/20">
            <Play size={26} className="ml-1 fill-mint-400 text-mint-400" />
          </div>
          <div className="relative text-center">
            <p className="text-sm font-semibold text-white/70 transition-colors group-hover:text-white/90">
              Ver testimonio
            </p>
            <p className="mt-0.5 text-xs text-white/30">{company}</p>
          </div>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar video"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-[min(360px,85vw)]"
            style={{ aspectRatio: "9/16" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={`Testimonio de ${company}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
