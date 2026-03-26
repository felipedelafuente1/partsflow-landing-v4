"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, MoveRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { YouTubeShort } from "@/components/ui/YouTubeShort";
import { useBookingModal } from "@/context/BookingModalContext";
import { casos, getCasoHref, isFullCase } from "@/lib/casos";

export default function CasosListingClient() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-20">
        {/* ── Page Header ── */}
        <div className="border-b border-white/[0.08] bg-black px-6 py-10">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-mint-400"
            >
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-400/70">
                  Casos de Éxito
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  De la consulta al cierre,
                  <br className="hidden sm:block" /> sin fricción
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-400 leading-relaxed">
                  Negocios reales de autopartes que transformaron su operación con Partsflow.
                  Métricas verificadas, sin adornos.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-mint-400/20 bg-mint-400/5 px-4 py-3 self-start">
                <span className="h-2 w-2 animate-pulse rounded-full bg-mint-400" />
                <span className="text-sm font-semibold text-mint-400">27+ empresas activas</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── All Cases ── */}
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-col gap-16">
            {casos.map((caso) => {
              const Icon = caso.icon;
              return (
                <div key={caso.id}>
                  {/* Company badge */}
                  <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white/5"
                      style={{
                        borderColor: `${caso.iconHexColor}33`,
                        backgroundColor: `${caso.iconHexColor}10`,
                      }}
                    >
                      <Icon size={18} style={{ color: caso.iconHexColor }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{caso.company}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                        {caso.category} · {caso.location}
                      </p>
                    </div>
                    {isFullCase(caso) && (
                      <Link
                        href={getCasoHref(caso)}
                        className="ml-auto text-xs font-semibold text-mint-400/70 hover:text-mint-400 transition-colors"
                      >
                        Ver caso completo →
                      </Link>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Video */}
                    <div>
                      {caso.videoUrl ? (
                        <YouTubeShort url={caso.videoUrl} company={caso.company} />
                      ) : (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] flex items-center justify-center">
                          <p className="text-sm font-semibold text-white/50">Video próximamente</p>
                        </div>
                      )}
                    </div>

                    {/* Quote + Metrics */}
                    <div className="flex flex-col justify-center">
                      {caso.quote && (
                        <blockquote
                          className="mb-6 border-l-4 pl-5 text-lg font-bold leading-snug text-white sm:text-xl"
                          style={{
                            borderColor: caso.iconHexColor,
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          {caso.quote}
                          {caso.quoteAuthor && (
                            <footer className="mt-3 text-xs font-normal text-white/40">
                              {caso.quoteAuthor}
                            </footer>
                          )}
                        </blockquote>
                      )}

                      {/* Key results */}
                      {caso.resultsPoints && (
                        <ul className="flex flex-col gap-2">
                          {caso.resultsPoints.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-mint-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Metric pills */}
                      {caso.metrics && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {caso.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center"
                            >
                              <p
                                className="font-mono text-xl font-black tracking-tight"
                                style={{ color: caso.iconHexColor }}
                              >
                                {m.value}
                              </p>
                              <p className="text-[11px] text-white/50">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Separator between cases */}
                  <div className="mt-16 border-t border-white/[0.06]" />
                </div>
              );
            })}
          </div>

          {/* CTA block */}
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-mint-400/20 bg-mint-400/[0.05] p-8 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(74,222,128,0.1) 0%, transparent 70%)",
              }}
            />
            <p className="relative text-xl font-bold text-white">¿Tu negocio puede ser el próximo?</p>
            <p className="relative mt-2 text-sm text-slate-400">
              Agenda una demo de 15 min y te mostramos exactamente cómo funcionaría para tu local.
            </p>
            <button
              onClick={openModal}
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-mint-400 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
            >
              Agendar Demo de 15 min
              <MoveRight size={15} className="transition-transform group-hover:translate-x-1" />
              <BorderBeam size={120} duration={3} colorFrom="#4ade80" colorTo="#3b82f6" />
            </button>
            <p className="relative mt-3 text-xs text-white/25">
              Sin compromisos · Sin cláusula de permanencia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
