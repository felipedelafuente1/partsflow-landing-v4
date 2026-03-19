"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";

const companies: { name: string; img?: string }[] = [
  { name: "Repuestos del Sol", img: "" },
  { name: "Piamonte", img: "https://www.piamonte.cl/wp-content/uploads/2024/10/logo-piamonte-300x51px-2024.png" },
  { name: "Volkswagen Chile", img: "https://www.vw-store.cl/media/.renditions/wysiwyg/Volkswagen/Footer/logo-volkswagen-footer.png" },
  { name: "Fitalia", img: "https://cdn.shopify.com/s/files/1/0519/4439/0828/files/LOGO_FITALIA_Mesa_de_trabajo_1_d59dfd42-7b73-4181-a58e-e161c3abbe4b.png?v=1692653215" },
  { name: "Miguel Jacob Helo", img: "" },
  { name: "Automotora Bilbao", img: "" },
  { name: "Maria Soto", img: "" },
  { name: "Daitodisam", img: "" },
  { name: "Inalco", img: "https://www.inalcochevrolet.cl/content/dam/chevrolet/sa/cl/es/258031/primary-nav/logo-sep-2025/inalco-logo.png" },
  { name: "Bustamante", img: "https://bustamanteycia.cl/images/logo.png" },
  { name: "Bolomey", img: "" },
  { name: "DT Parts", img: "" },
  { name: "Ekipate", img: "" },
  { name: "Carparts", img: "" },
  { name: "Gildemeister", img: "" },
  { name: "Euroespecialista", img: "" },
  { name: "Monzaparts", img: "https://monzaparts.cl/wp-content/uploads/2025/10/Logo-Monza.svg" },
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

        {/* Marquee + Scroll Container */}
        <FadeUp delay={0.1}>
          <div className="relative mt-4 sm:mt-6 overflow-x-auto scrollbar-hide">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            {/* Auto-scrolling row — pauses on hover for manual scroll */}
            <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
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
