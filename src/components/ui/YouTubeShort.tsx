"use client";

import { useState, useCallback, useEffect } from "react";
import { Play, X } from "lucide-react";

function extractVideoId(url: string): string | null {
  // Handle youtube.com/shorts/ID and youtube.com/embed/ID and youtu.be/ID
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

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!videoId) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-400 ${className}`}
        aria-label={`Ver video testimonio de ${company}`}
      >
        <div className="relative aspect-video">
          <img
            src={thumbnailUrl}
            alt={`Testimonio de ${company}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play
                size={24}
                className="ml-0.5 fill-white text-white"
              />
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
          {/* Close button */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar video"
          >
            <X size={20} />
          </button>

          {/* Video container — vertical 9:16 */}
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
