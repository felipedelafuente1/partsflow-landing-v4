"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { RetroGrid } from "@/components/ui/retro-grid";
import { WhatsAppSimulator } from "@/components/sections/WhatsAppSimulator";
import { ArrowRight, Play } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

export function Hero() {
  const { openModal } = useBookingModal();

  return (
    <section className="relative min-h-0 sm:min-h-screen overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow from top */}
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse,rgba(74,222,128,0.08)_0%,transparent_70%)]" />
        {/* Secondary glow */}
        <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Retro Grid */}
      <RetroGrid />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-400/20 bg-mint-400/5 px-4 py-1.5 mb-8">
              <div className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
              <span className="text-xs font-medium text-mint-400 tracking-wide">
                Nuevo: IA para autopartes
              </span>
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1}>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Tu local nunca cierra.
              <br />
              <span className="text-gradient-mint">
                Julia califica y prepara
                <br />
                tus ventas 24/7.
              </span>
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Julia atiende, califica y deja la mesa servida para que tu
              equipo solo cierre.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <button
                onClick={openModal}
                className="group inline-flex items-center gap-2 rounded-full bg-mint-400 px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                Comenzar Ahora
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <Play size={14} />
                Ver Demo
              </button>
            </div>
          </FadeUp>

          {/* WhatsApp Simulator */}
          <FadeUp delay={0.5}>
            <div className="mt-10 sm:mt-16 w-full max-w-lg animate-float">
              <WhatsAppSimulator />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
