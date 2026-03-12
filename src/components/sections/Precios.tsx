"use client";

import { Check, Zap, MoveRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { BorderBeam } from "@/components/ui/border-beam";
import { useBookingModal } from "@/context/BookingModalContext";

const plans = [
  {
    id: "bronze",
    name: "Bronze",
    dotColor: "bg-yellow-500",
    volume: "Hasta 1.000 chats/mes",
    features: [
      "Los 3 agentes IA (Filtro, Técnico, Cierre)",
      "Integración con 1 catálogo o ERP",
      "Dashboard de métricas básico",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    id: "silver",
    name: "Silver",
    dotColor: "bg-mint-400",
    volume: "Hasta 2.500 chats/mes",
    features: [
      "Los 3 agentes IA (Filtro, Técnico, Cierre)",
      "Integración con hasta 3 catálogos o ERPs",
      "Dashboard avanzado con métricas de pérdida",
      "Soporte prioritario",
      "Onboarding dedicado",
    ],
    highlighted: true,
  },
  {
    id: "gold",
    name: "Gold",
    dotColor: "bg-yellow-400",
    volume: "Hasta 5.000 chats/mes",
    features: [
      "Los 3 agentes IA (Filtro, Técnico, Cierre)",
      "Integraciones ilimitadas",
      "Dashboard enterprise + reportes",
      "Soporte 24/7",
      "Customer Success dedicado",
      "Comisión por venta en checkout",
    ],
    highlighted: false,
  },
];

export function Precios() {
  const { openModal } = useBookingModal();

  return (
    <section id="precios" className="relative bg-black py-24 sm:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Ambient glow behind Silver */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(74,222,128,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Precios
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Planes que crecen{" "}
            <span className="text-gradient-mint">con tu volumen</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50 leading-relaxed">
            Sin cobros por asiento. Paga solo por el volumen de chats procesados.
          </p>
          {/* Price anchor badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint-400/20 bg-mint-400/[0.07] px-4 py-2">
            <Zap size={13} className="text-mint-400" />
            <span className="text-sm font-semibold text-mint-400">
              Desde $350.000 CLP mensuales
            </span>
          </div>
        </FadeUp>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <FadeUp key={plan.id} delay={i * 0.1}>
              <div
                className={
                  plan.highlighted
                    ? "relative rounded-2xl border border-mint-400/30 bg-zinc-900 p-8 shadow-[0_0_50px_rgba(74,222,128,0.09)] sm:-mt-4 sm:pb-10 sm:pt-10"
                    : "relative rounded-2xl border border-white/[0.08] bg-zinc-900 p-8"
                }
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-mint-400 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-black">
                      Más popular
                    </span>
                  </div>
                )}

                {/* Plan name + dot */}
                <div className="mb-5 flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${plan.dotColor}`} />
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                {/* Volume */}
                <p className="mb-6 text-sm font-semibold text-mint-400/80">
                  {plan.volume}
                </p>

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-mint-400" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.highlighted ? (
                  <button
                    onClick={openModal}
                    className="group relative w-full overflow-hidden rounded-xl bg-mint-400 py-3 text-sm font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_25px_rgba(74,222,128,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Agendar Demo
                    <MoveRight size={14} className="transition-transform group-hover:translate-x-1" />
                    <BorderBeam size={100} duration={3} colorFrom="#4ade80" colorTo="#3b82f6" />
                  </button>
                ) : (
                  <button
                    onClick={openModal}
                    className="group w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-semibold text-white/80 transition-all hover:border-mint-400/30 hover:bg-white/[0.07] hover:text-white flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Agendar Demo
                    <MoveRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Footnote */}
        <FadeUp delay={0.4} className="mt-10 text-center">
          <p className="text-xs text-white/25">
            ¿Más de 5.000 chats/mes?{" "}
            <button
              onClick={openModal}
              className="text-mint-400/60 underline underline-offset-2 hover:text-mint-400 transition-colors cursor-pointer"
            >
              Conversemos un plan a medida
            </button>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
