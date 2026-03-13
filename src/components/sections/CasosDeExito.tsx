"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { casos, getCasoHref } from "@/lib/casos";

const roleMap: Record<string, string> = {
  piamonte: "GERENCIA",
  inalco: "OPERACIONES",
  "repuestos-del-sol": "VENTAS",
};

const accentBorderMap: Record<string, string> = {
  mint: "border-mint-400/20",
  electric: "border-electric-500/20",
  purple: "border-purple-500/20",
};

export function CasosDeExito() {
  return (
    <section id="beneficios" className="relative bg-background py-12 sm:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-8 sm:mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Voces de Partsflow
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Historias reales de{" "}
            <span className="text-gradient-mint">quienes ya venden más</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
            No son promesas. Son las voces de negocios que transformaron su
            operación con Partsflow.
          </p>
        </FadeUp>

        {/* 3 Video Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((c, i) => {
            const role = roleMap[c.id] ?? "CLIENTE";
            const accentBorder =
              accentBorderMap[c.accentColor] ?? "border-white/10";

            return (
              <FadeUp key={c.id} delay={i * 0.15}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:border-white/15">
                  {/* Video placeholder */}
                  <div
                    className={`relative flex aspect-video items-center justify-center bg-zinc-800/80 border-b ${accentBorder}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110">
                        <Play
                          size={22}
                          className="ml-0.5 fill-white/60 text-white/60"
                        />
                      </div>
                      <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
                        Video próximamente
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Role badge */}
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-mint-400">
                      {role}
                    </p>

                    {/* Key metric */}
                    <h3 className="mb-4 font-mono text-2xl font-bold text-white">
                      {c.headline}
                    </h3>

                    {/* Quote */}
                    {c.quote && (
                      <blockquote className="mb-2 flex-1 text-sm italic leading-relaxed text-white/60">
                        {c.quote}
                      </blockquote>
                    )}
                    {c.quoteAuthor && (
                      <p className="mb-5 text-xs text-white/30">
                        {c.quoteAuthor}
                      </p>
                    )}

                    {/* Link to full case */}
                    <Link
                      href={getCasoHref(c)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-mint-400 transition-colors hover:text-mint-300"
                    >
                      Ver caso de éxito completo
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.5} className="mt-10 sm:mt-14 text-center">
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Ver todos nuestros casos de éxito
            <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
