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
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 ${className}`}
        aria-label={`Ver video testimonio de ${company}`}
      >
        <div className="relative aspect-video">
          {/* Try hq720 first (works for Shorts), fallback to sddefault */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
            alt={`Testimonio de ${company}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
              }
            }}
          />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play size={24} className="ml-0.5 fill-white text-white" />
            </div>
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
