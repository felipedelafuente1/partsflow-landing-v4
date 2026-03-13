"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { casos, getCasoHref, isFullCase } from "@/lib/casos";

const accentMap = {
  mint: {
    badge: "bg-mint-400/10 border-mint-400/20 text-mint-400",
    glow: "rgba(74,222,128,0.15)",
    glowStrong: "rgba(74,222,128,0.3)",
    iconBg: "bg-mint-400/10",
    iconColor: "text-mint-400",
    headlineColor: "text-mint-400",
    border: "border-mint-400/20",
  },
  electric: {
    badge: "bg-electric-500/10 border-electric-500/20 text-electric-500",
    glow: "rgba(59,130,246,0.15)",
    glowStrong: "rgba(59,130,246,0.3)",
    iconBg: "bg-electric-500/10",
    iconColor: "text-electric-500",
    headlineColor: "text-electric-400",
    border: "border-electric-500/20",
  },
  purple: {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    glow: "rgba(139,92,246,0.15)",
    glowStrong: "rgba(139,92,246,0.3)",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    headlineColor: "text-purple-400",
    border: "border-purple-500/20",
  },
};

export function CasosDeExito() {
  return (
    <section id="beneficios" className="relative bg-background py-12 sm:py-32">
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-8 sm:mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Casos de Éxito
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Resultados que{" "}
            <span className="text-gradient-mint">hablan solos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
            No son promesas. Son métricas reales de negocios de autopartes que ya usan Partsflow.
          </p>
        </FadeUp>

        {/* Bento Grid — 3 cols */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((c, i) => {
            const accent = accentMap[c.accentColor];
            const Icon = c.icon;
            const href = getCasoHref(c);
            const full = isFullCase(c);

            return (
              <FadeUp key={c.id} delay={i * 0.12}>
                <Link href={href} className="block h-full">
                  <motion.div
                    className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden cursor-pointer"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    {/* Hover glow background */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Top: icon + category */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className={`rounded-xl p-2.5 ${accent.iconBg}`}>
                        <Icon size={18} className={accent.iconColor} />
                      </div>
                      <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
                        {c.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className={`mb-3 text-xl font-bold leading-tight ${accent.headlineColor}`}>
                      {c.headline}
                    </h3>

                    {/* Problem description */}
                    <p className="flex-1 text-sm text-white/55 leading-relaxed">
                      {c.problem}
                    </p>

                    {/* Metric Badge */}
                    <div className="mt-6">
                      <div
                        className={`inline-flex w-full flex-col items-center rounded-xl border px-4 py-3 ${accent.badge}`}
                        style={{ boxShadow: `0 0 20px ${accent.glowStrong}` }}
                      >
                        <span className="font-mono text-lg font-bold tracking-tight">
                          {c.metric}
                        </span>
                        <span className="mt-0.5 text-xs opacity-70">{c.metricSub}</span>
                      </div>
                    </div>

                    {/* CTA link */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-white/30 transition-colors group-hover:text-white/60">
                      {full ? "Ver caso completo" : "Ver todos los casos"}
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom social proof strip */}
        <FadeUp delay={0.4} className="mt-8 sm:mt-14 text-center">
          <p className="text-sm text-white/30">
            Más de{" "}
            <span className="font-mono font-semibold text-white/60">50 negocios</span>{" "}
            de autopartes en Chile ya automatizan con Partsflow
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
