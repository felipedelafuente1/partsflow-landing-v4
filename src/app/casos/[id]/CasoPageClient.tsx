"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MoveRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { YouTubeShort } from "@/components/ui/YouTubeShort";
import { useBookingModal } from "@/context/BookingModalContext";
import { getCaso, isFullCase, casos, getCasoHref } from "@/lib/casos";

export default function CasoPageClient({ casoId }: { casoId: string }) {
  const { openModal } = useBookingModal();

  const caso = getCaso(casoId);
  if (!caso || !isFullCase(caso)) notFound();

  const Icon = caso.icon;
  const otherCases = casos.filter((c) => c.id !== caso.id);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-20">
        {/* ── Page Header ── */}
        <div className="border-b border-white/[0.08] bg-black px-6 py-10">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/casos"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-mint-400"
            >
              <ArrowLeft size={13} />
              Todos los casos
            </Link>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-400/70">
                  Caso de Éxito
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {caso.headline}
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-400 leading-relaxed">
                  {caso.problem}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-mint-400/20 bg-mint-400/5 px-4 py-3 self-start">
                <span className="h-2 w-2 animate-pulse rounded-full bg-mint-400" />
                <span className="text-sm font-semibold text-mint-400">Caso verificado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-14">
          {/* Company badge */}
          <div className="mb-8 flex items-center gap-3 flex-wrap">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint-400/20 bg-mint-400/10">
              <Icon size={22} className="text-mint-400" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Cliente destacado
              </p>
              <p className="text-lg font-bold text-white">{caso.company}</p>
            </div>
            <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50">
              {caso.category} · {caso.location}
            </span>
          </div>

          {/* Video */}
          {caso.videoUrl ? (
            <YouTubeShort url={caso.videoUrl} company={caso.company} />
          ) : (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <p className="text-sm font-semibold text-white/50">Video próximamente</p>
            </div>
          )}

          {/* Pull quote */}
          {caso.quote && (
            <blockquote className="my-10 border-l-4 border-mint-400 pl-6">
              <p
                className="text-3xl font-bold leading-snug text-white sm:text-4xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {caso.quote}
              </p>
              {caso.quoteAuthor && (
                <footer className="mt-4 text-sm text-white/40">{caso.quoteAuthor}</footer>
              )}
            </blockquote>
          )}

          {/* Metric cards */}
          {caso.metrics && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {caso.metrics.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <p className="font-mono text-4xl font-black tracking-tight text-mint-400">
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white/80">{m.label}</p>
                  <p className="mt-1 text-xs text-white/40">{m.sub}</p>
                </div>
              ))}
            </div>
          )}

          <div className="my-12 border-t border-white/10" />

          {/* El Desafío / Los Resultados */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {caso.challengeTitle && (
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400">
                  El Desafío
                </p>
                <h3 className="mb-3 text-xl font-bold text-white">{caso.challengeTitle}</h3>
                {caso.challengeBody && (
                  <p className="text-sm text-slate-400 leading-relaxed">{caso.challengeBody}</p>
                )}
                {caso.challengePoints && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {caso.challengePoints.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {caso.resultsTitle && (
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-mint-400">
                  Los Resultados
                </p>
                <h3 className="mb-3 text-xl font-bold text-white">{caso.resultsTitle}</h3>
                {caso.resultsBody && (
                  <p className="text-sm text-slate-400 leading-relaxed">{caso.resultsBody}</p>
                )}
                {caso.resultsPoints && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {caso.resultsPoints.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-mint-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="my-12 border-t border-white/10" />

          {/* Other cases */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Más casos
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherCases.map((c) => {
                const OtherIcon = c.icon;
                return (
                  <Link key={c.id} href={getCasoHref(c)} className="group block">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:scale-[1.02] hover:border-mint-400/40 hover:bg-white/[0.06]">
                      <div className="mb-3 flex items-center gap-2">
                        <OtherIcon size={14} style={{ color: c.iconHexColor }} className="opacity-70" />
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                          {c.category}
                        </p>
                      </div>
                      <h4 className="mb-3 text-base font-bold text-white">{c.headline}</h4>
                      <span
                        className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ background: `${c.iconHexColor}18`, color: c.iconHexColor }}
                      >
                        {c.metric}
                      </span>
                      <p className="mt-3 text-xs text-white/25 transition-colors group-hover:text-mint-400/60">
                        {isFullCase(c) ? "Ver caso completo →" : "Próximamente →"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
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
