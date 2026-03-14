"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Bot,
  CheckCircle2,
  Shield,
  TrendingUp,
  Users,
  Handshake,
  Target,
  Zap,
  MessageSquare,
  Package,
  Clock,
} from "lucide-react";

const aiFeatures = [
  { icon: MessageSquare, text: "Calificación y preparación de datos 24/7" },
  { icon: Zap, text: "Identificación de VIN, Patente y Códigos OEM" },
  { icon: Clock, text: "Respuestas instantáneas a clientes" },
  { icon: Package, text: "Gestión de inventario en tiempo real" },
];

const humanFeatures = [
  { icon: Handshake, text: "Valida la sugerencia de Julia y cierra" },
  { icon: Users, text: "Negociaciones de alto valor" },
  { icon: Target, text: "Decisiones estratégicas de pricing" },
];

const deals = [
  { name: "Motor Hilux", value: "$2.4M", status: "closed" as const },
  { name: "Turbo Ranger", value: "$890K", status: "negotiating" as const },
  { name: "Kit Embrague", value: "$1.2M", status: "closed" as const },
];

export function EightyTwenty() {
  return (
    <section id="producto" className="relative bg-background py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Partsflow{" "}
              <span className="text-mint-400">NO</span>{" "}
              automatiza el 100%
              <br className="hidden sm:block" /> de la venta
            </h2>
            <p className="mt-4 text-lg text-muted">
              Automatizamos lo repetitivo. Tu equipo cierra lo importante.
            </p>
          </div>
        </FadeUp>

        {/* Bento Grid */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-5">
          {/* 80% AI Card */}
          <FadeUp delay={0.1} className="md:col-span-3">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-mint-400/30 bg-gradient-to-br from-mint-400/[0.06] via-transparent to-transparent p-8 sm:p-10 glow-mint-strong"
            >
              {/* Border Beam */}
              <BorderBeam
                colorFrom="#4ade80"
                colorTo="#3b82f6"
                duration={5}
                size={250}
              />

              {/* Hover glow intensifier */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* Animated background grid pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                {/* Tag */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-400/10 border border-mint-400/20">
                    <Bot size={20} className="text-mint-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-mint-400/80">
                    Inteligencia Artificial
                  </span>
                </div>

                {/* Percentage */}
                <div className="text-7xl font-bold text-mint-400 sm:text-8xl md:text-9xl leading-none">
                  80%
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  Julia te sirve la mesa
                </h3>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {aiFeatures.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3 text-muted"
                    >
                      <feature.icon
                        size={16}
                        className="shrink-0 text-mint-400/60"
                      />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Animated pulse dots */}
                <div className="absolute bottom-8 right-8 flex gap-2 opacity-40">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-mint-400"
                      style={{
                        animation: `glow-pulse 3s ease-in-out ${i * 0.5}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* 20% Human Card */}
          <FadeUp delay={0.2} className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-400/[0.04] via-transparent to-transparent p-8 sm:p-10 glow-purple"
            >
              {/* Border Beam */}
              <BorderBeam
                colorFrom="#a78bfa"
                colorTo="#8b5cf6"
                duration={6}
                size={200}
              />

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06)_0%,transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Tag */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 border border-purple-400/20">
                    <Shield size={20} className="text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-purple-400/80">
                    Centro de Comando
                  </span>
                </div>

                {/* Percentage */}
                <div className="text-7xl font-bold text-purple-400 sm:text-8xl leading-none">
                  20%
                </div>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  Tu equipo valida y cierra
                </h3>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {humanFeatures.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3 text-muted"
                    >
                      <feature.icon
                        size={16}
                        className="shrink-0 text-purple-400/60"
                      />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Mini Dashboard: Deal Tracker */}
                <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">
                      Deals activos
                    </span>
                    <TrendingUp size={14} className="text-purple-400" />
                  </div>
                  <div className="space-y-2.5">
                    {deals.map((deal) => (
                      <div
                        key={deal.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              deal.status === "closed"
                                ? "bg-mint-400"
                                : "bg-amber-400"
                            }`}
                          />
                          <span className="text-xs text-foreground/80">
                            {deal.name}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-muted">
                          {deal.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
