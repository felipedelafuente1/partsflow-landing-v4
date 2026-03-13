"use client";

import { MoveRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { BorderBeam } from "@/components/ui/border-beam";
import { useBookingModal } from "@/context/BookingModalContext";

export function FinalCTA() {
  const { openModal } = useBookingModal();

  return (
    <section id="contacto" className="relative bg-black py-12 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,222,128,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            El siguiente paso
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            ¿Listo para atender{" "}
            <span className="text-gradient-mint">10 veces más clientes?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/50 leading-relaxed">
            Deja de perder ventas por responder tarde. Únete a las{" "}
            <span className="font-semibold text-white/80">27+ empresas</span> que ya están escalando con Partsflow.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-10">
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-mint-400 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_50px_rgba(74,222,128,0.35)]"
          >
            Agendar Demo de 15 min
            <MoveRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
            <BorderBeam size={180} duration={3.5} colorFrom="#4ade80" colorTo="#3b82f6" />
          </button>
          <p className="mt-4 text-xs text-white/25">Sin compromisos · Sin cláusula de permanencia · Listo en 48 hrs</p>
        </FadeUp>
      </div>
    </section>
  );
}
