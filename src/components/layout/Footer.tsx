"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

/* ── Partner badge component ── */

function Badge({ children, href }: { children: React.ReactNode; href?: string }) {
  const cls =
    "group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:border-white/20 cursor-default";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
}

/* ── Typographic logo badges ── */

function MetaBadge() {
  return (
    <Badge>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
        <path
          d="M2 6C2 3.79 3.34 2 5 2C6.1 2 7 2.9 9 5.5C11 2.9 11.9 2 13 2C14.66 2 16 3.79 16 6C16 8.21 14.66 10 13 10C11.9 10 11 9.1 9 6.5C7 9.1 6.1 10 5 10C3.34 10 2 8.21 2 6Z"
          stroke="#1877F2"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span className="leading-none">
        <span className="block text-[11px] font-bold text-white tracking-tight">Meta</span>
        <span className="block text-[9px] text-white/60 tracking-wide">Tech Provider</span>
      </span>
    </Badge>
  );
}

function GoogleBadge() {
  return (
    <Badge>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M13 7.15c0-.46-.04-.9-.11-1.32H7v2.5h3.37A2.88 2.88 0 0 1 9 10.13v1.5h1.97C12.26 10.44 13 8.95 13 7.15z" fill="#4285F4"/>
        <path d="M7 13c1.7 0 3.12-.56 4.16-1.52l-1.97-1.5C8.63 10.6 7.88 10.84 7 10.84c-1.64 0-3.03-1.1-3.53-2.58H1.44v1.55A6 6 0 0 0 7 13z" fill="#34A853"/>
        <path d="M3.47 8.26A3.6 3.6 0 0 1 3.28 7c0-.44.08-.87.19-1.26V4.19H1.44A6 6 0 0 0 1 7c0 .97.23 1.88.44 2.81l2.03-1.55z" fill="#FBBC05"/>
        <path d="M7 3.16c.93 0 1.76.32 2.41.95l1.81-1.81A6 6 0 0 0 7 1a6 6 0 0 0-5.56 3.19l2.03 1.55C3.97 4.26 5.36 3.16 7 3.16z" fill="#EA4335"/>
      </svg>
      <span className="leading-none">
        <span className="block text-[11px] font-bold text-white tracking-tight">Google</span>
        <span className="block text-[9px] text-white/60 tracking-wide">for Startups</span>
      </span>
    </Badge>
  );
}

function PlatanusBadge() {
  return (
    <Badge>
      <Image
        src="/platanus-logo.png"
        alt="Platanus Ventures"
        width={20}
        height={20}
        className="h-5 w-5 rounded-sm object-contain"
      />
      <span className="leading-none">
        <span className="block text-[11px] font-semibold italic text-white tracking-tight">platanus</span>
        <span className="block text-[9px] text-white/60 tracking-wide">ventures</span>
      </span>
    </Badge>
  );
}

function DrivenBadge() {
  return (
    <Badge>
      <Image
        src="/driven-vc-logo.jpeg"
        alt="Driven VC"
        width={20}
        height={20}
        className="h-5 w-5 rounded-sm object-contain"
      />
      <span className="leading-none">
        <span className="block text-[11px] font-bold text-white tracking-tight">
          driven<span className="font-normal text-white/50">.vc</span>
        </span>
        <span className="block text-[9px] text-white/60 tracking-wide">early stage</span>
      </span>
    </Badge>
  );
}

function MarcaChileBadge() {
  return (
    <Badge>
      <span className="text-base leading-none">🇨🇱</span>
      <span className="leading-none">
        <span className="block text-[11px] font-semibold text-white tracking-tight">Marca Chile</span>
        <span className="block text-[9px] text-white/60 tracking-wide">Hecho en Chile</span>
      </span>
    </Badge>
  );
}

/* ── Main Footer ── */

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10">

      {/* Top Row: HQ address */}
      <div className="border-b border-white/[0.08] py-3.5 text-center">
        <span className="text-xs tracking-widest text-zinc-400 uppercase">
          🇨🇱&nbsp;&nbsp;HQ · Eliodoro Yañez 2990, Providencia, Santiago de Chile
        </span>
      </div>

      {/* Trust Grid */}
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        {/* Mobile: 2 cols (Partners | Backed By), then full-width brand. Desktop: 3 cols */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10">

          {/* Partners */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Partners
            </p>
            <div className="flex flex-col gap-2 items-start">
              <MetaBadge />
              <GoogleBadge />
            </div>
          </div>

          {/* Backed By */}
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Backed By
            </p>
            <div className="flex flex-col gap-2 items-start">
              <PlatanusBadge />
              <DrivenBadge />
            </div>
          </div>

          {/* Hecho en + Brand — full width on mobile, 1 col on desktop */}
          <div className="col-span-2 sm:col-span-1 border-t border-white/[0.06] pt-6 sm:border-0 sm:pt-0">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Hecho en
            </p>
            <MarcaChileBadge />

            {/* Brand mark — centered on mobile, left on desktop */}
            <div className="mt-6 flex flex-col items-center sm:items-start gap-0.5">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Partsflow" width={22} height={22} className="h-[22px] w-[22px]" />
                <span className="text-sm font-bold tracking-tight text-white">
                  Parts<span className="text-mint-400">flow</span>
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Tu local nunca cierra.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-6 py-4 pr-20 sm:pr-6">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[11px] text-zinc-500">
              © 2026 Partsflow AI
            </span>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-[11px] text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="https://wa.me/56968489100?text=Hola%2C%20quiero%20saber%20más%20sobre%20Partsflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-mint-400/70 transition-colors hover:text-mint-400"
              >
                <MessageCircle size={12} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
