"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import Image from "next/image";

const companyLogos = [
  {
    name: "Repuestos del Sol",
    img: "https://imagenes-web-cr.s3.amazonaws.com/empresas-repuestos/rds.png",
  },
  {
    name: "Piamonte",
    img: "https://www.piamonte.cl/wp-content/uploads/2024/10/logo-piamonte-300x51px-2024.png",
  },
  {
    name: "Volkswagen Chile",
    img: "https://www.vw-store.cl/media/.renditions/wysiwyg/Volkswagen/Footer/logo-volkswagen-footer.png",
  },
  {
    name: "Fitalia",
    img: "https://cdn.shopify.com/s/files/1/0519/4439/0828/files/LOGO_FITALIA_Mesa_de_trabajo_1_d59dfd42-7b73-4181-a58e-e161c3abbe4b.png?v=1692653215",
  },
  {
    name: "Miguel Jacob Helo",
    img: "https://mutatis.cl/wp-content/uploads/2022/09/mjh-logo.png",
  },
  {
    name: "Automotora Bilbao",
    img: "https://www.autored.cl/assets/landing/images/clients/15-dea6d96a9aeb330fe626fe0802ca447c.png",
  },
  {
    name: "Maria Soto",
    img: "https://www.msrepuestos.cl/cdn/shop/files/LOGOMS_3cf2f2ba-0cd4-41b5-a345-02da7b03fd61.jpg?v=1750350018&width=500",
  },
  {
    name: "Daitodisam",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFgG0cgDaPzwUXvoDi3wl3gRs2WJyc6bIZA&s",
  },
  {
    name: "Inalco",
    img: "https://www.inalcochevrolet.cl/content/dam/chevrolet/sa/cl/es/258031/primary-nav/logo-sep-2025/inalco-logo.png",
  },
  {
    name: "Bustamante",
    img: "https://bustamanteycia.cl/images/logo.png",
  },
  {
    name: "Bolomey",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQHxCfFzlxdsvg/company-logo_200_200/company-logo_200_200/0/1630578258676?e=1766016000&v=beta&t=rMD-x9-5R6_5pYtge-Avj3fHSygAuPpY0BzgJzgxTEE",
  },
  {
    name: "DT Parts",
    img: "https://http2.mlstatic.com/D_NQ_NP_754496-MLA90368624033_082025-O.webp",
  },
  {
    name: "Ekipate",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27KsqzfNxKrElfxSx0yYmDbj7KIzzaUtScg&s",
  },
  {
    name: "Carparts",
    img: "https://http2.mlstatic.com/storage/mshops-appearance-api/images/92/740581292/logo-2024091009334548562.png",
  },
  {
    name: "Autostock",
    img: "https://autostock.cl/wp-content/themes/autostock-theme-wp-main/img/logo.svg",
  },
  {
    name: "Euroespecialista",
    img: "https://www.euroespecialista.cl/images/euroespecialista.jpg",
  },
  {
    name: "Monzaparts",
    img: "https://monzaparts.cl/wp-content/uploads/2025/10/Logo-Monza.svg",
  },
];

function LogoItem({ name, img }: { name: string; img: string }) {
  return (
    <div className="group flex h-16 w-40 shrink-0 items-center justify-center px-6">
      <Image
        src={img}
        alt={name}
        width={140}
        height={48}
        className="h-8 w-auto max-w-[120px] object-contain opacity-30 brightness-0 invert grayscale transition-all duration-500 group-hover:opacity-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0"
        unoptimized
      />
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <p className="text-center text-sm font-medium uppercase tracking-widest text-muted/60">
            Empresas que ya aceleran sus ventas con Partsflow
          </p>
        </FadeUp>

        {/* Marquee Container */}
        <FadeUp delay={0.1}>
          <div className="relative mt-10 overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            {/* Scrolling row */}
            <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
              {companyLogos.map((logo) => (
                <LogoItem key={logo.name} name={logo.name} img={logo.img} />
              ))}
              {/* Duplicate for seamless loop */}
              {companyLogos.map((logo) => (
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
