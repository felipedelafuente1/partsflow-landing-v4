"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";

const companies: { name: string; img?: string }[] = [
  { name: "Repuestos del Sol", img: "/logos/repuestos-del-sol.png" },
  { name: "Piamonte", img: "/logos/piamonte.png" },
  { name: "Volkswagen Chile", img: "/logos/volkswagen.png" },
  { name: "Fitalia", img: "/logos/fitalia.png" },
  { name: "Miguel Jacob Helo", img: "/logos/miguel-jacob-helo.png" },
  { name: "Automotora Bilbao", img: "/logos/automotora-bilbao.png" },
  { name: "Maria Soto", img: "/logos/maria-soto.png" },
  { name: "Daitodisam", img: "/logos/daitodisam.png" },
  { name: "Inalco", img: "/logos/inalco.png" },
  { name: "Bustamante", img: "/logos/bustamante.png" },
  { name: "Bolomey", img: "/logos/bolomey.png" },
  { name: "DT Parts", img: "/logos/dt-parts.png" },
  { name: "Ekipate", img: "/logos/ekipate.png" },
  { name: "Carparts", img: "/logos/carparts.png" },
  { name: "Autostock", img: "/logos/autostock.png" },
  { name: "Euroespecialista", img: "/logos/euroespecialista.png" },
  { name: "Monzaparts", img: "/logos/monzaparts.png" },
];

function LogoItem({ name, img }: { name: string; img?: string }) {
  return (
    <div className="group flex h-12 shrink-0 items-center justify-center px-4 sm:px-6">
      {img ? (
        <Image
          src={img}
          alt={name}
          width={120}
          height={40}
          className="h-6 w-auto max-w-[100px] object-contain opacity-30 brightness-0 invert grayscale transition-all duration-500 group-hover:opacity-70"
        />
      ) : (
        <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-white/30 transition-all duration-500 group-hover:text-white/70 sm:text-sm">
          {name}
        </span>
      )}
    </div>
  );
}

export function LogoCloud({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative bg-background ${compact ? "py-0" : "py-5 sm:py-10"}`}>
      <div className={`mx-auto max-w-7xl ${compact ? "" : "px-6"}`}>
        <FadeUp>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted/40">
            Empresas que ya aceleran sus ventas con Partsflow
          </p>
        </FadeUp>

        {/* Marquee Container */}
        <FadeUp delay={0.1}>
          <div className="relative mt-4 sm:mt-6 overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            {/* Scrolling row */}
            <div className="flex animate-[marquee_18s_linear_infinite] hover:[animation-play-state:paused]">
              {companies.map((logo) => (
                <LogoItem key={logo.name} name={logo.name} img={logo.img} />
              ))}
              {/* Duplicate for seamless loop */}
              {companies.map((logo) => (
                <LogoItem
                  key={`dup-${logo.name}`}
                  name={logo.name}
                  img={logo.img}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
