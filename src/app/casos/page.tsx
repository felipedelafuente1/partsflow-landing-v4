"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, MessageSquare, Clock, CheckCircle2, MoveRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { useBookingModal } from "@/context/BookingModalContext";

/* ── Data ── */

const metrics = [
  { value: "2x", label: "Cotizaciones", sub: "Tasa duplicada" },
  { value: "< 1 min", label: "Tiempo de respuesta", sub: "Antes: 45 minutos" },
  { value: "100%", label: "Chats atendidos", sub: "Ningún chat sin responder" },
];

const otherCases = [
  {
    category: "Especialista en Importados",
    headline: "Identificación OEM/VIN Instantánea",
    metric: "< 3 seg por identificación",
    color: "#3b82f6",
  },
  {
    category: "Repuestos After-Hours",
    headline: "30% de Ventas Fuera del Horario",
    metric: "24/7 sin guardia humana",
    color: "#8b5cf6",
  },
];

/* ── Video Placeholder ── */

function VideoPlaceholder() {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative flex flex-col items-center gap-4 text-center px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-300 bg-white/80 shadow-sm">
          <Play size={24} className="translate-x-0.5 text-gray-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Video próximamente</p>
          <p className="mt-1 text-xs text-gray-400">Testimonio de Piamonte Repuestos</p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function CasosPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-[#f7f7f5]">
      {/* Navbar (dark, contrasts with light page) */}
      <Navbar />

      {/* Page content offset for fixed navbar */}
      <div className="pt-20">

        {/* ── Page Header ── */}
        <div className="border-b border-gray-200 bg-white px-6 py-10">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-700"
            >
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Casos de Éxito
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  De la consulta al cierre,
                  <br className="hidden sm:block" /> sin fricción
                </h1>
                <p className="mt-4 max-w-xl text-base text-gray-500 leading-relaxed">
                  Negocios reales de autopartes que transformaron su operación con Partsflow.
                  Métricas verificadas, sin adornos.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 self-start">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700">27+ empresas activas</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Featured Case: Piamonte ── */}
        <div className="mx-auto max-w-4xl px-6 py-14">

          {/* Company badge */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 shadow-md">
              <MessageSquare size={22} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Cliente destacado
              </p>
              <p className="text-lg font-bold text-gray-900">Piamonte Repuestos</p>
            </div>
            <span className="ml-auto rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-gray-500">
              Dealership Multimarca · Santiago, Chile
            </span>
          </div>

          {/* Video */}
          <VideoPlaceholder />

          {/* Pull quote */}
          <blockquote className="my-10 border-l-4 border-emerald-500 pl-6">
            <p className="text-2xl font-bold leading-snug text-gray-800 sm:text-3xl" style={{ fontFamily: "Georgia, serif" }}>
              "Partsflow cambió completamente nuestra forma de vender. Hoy atendemos el triple de consultas con el mismo equipo."
            </p>
            <footer className="mt-4 text-sm text-gray-400">
              — Carlos Piamonte, Gerente General · Piamonte Repuestos
            </footer>
          </blockquote>

          {/* Metric cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-gray-900">{m.value}</p>
                <p className="mt-1.5 text-sm font-semibold text-gray-700">{m.label}</p>
                <p className="mt-1 text-xs text-gray-400">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-200" />

          {/* El Desafío / Los Resultados */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-500">
                El Desafío
              </p>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Cientos de consultas, un equipo pequeño
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Piamonte recibía más de 3.000 chats mensuales con solo 2 vendedores disponibles.
                Cada consulta requería buscar el código OEM manualmente, validar el VIN y verificar
                el stock — un proceso que tomaba entre 10 y 20 minutos por cliente.
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  "Respuestas con demora de 45+ minutos",
                  "Errores frecuentes en identificación de piezas",
                  "Consultas nocturnas sin atender",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Los Resultados
              </p>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                La IA entregó la mesa servida
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Con Partsflow, Julia —su IA de ventas— empezó a gestionar el 100% de las consultas
                entrantes: identificaba el vehículo por foto del padrón, buscaba los códigos OEM
                automáticamente y generaba la cotización lista para que el vendedor solo apretara
                "enviar".
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {[
                  "Cotizaciones listas en menos de 1 minuto",
                  "Chats atendidos 24/7, incluso los domingos",
                  "Tasa de conversión duplicada en 60 días",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-gray-200" />

          {/* Other cases */}
          <div>
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Más casos
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherCases.map((c) => (
                <div
                  key={c.category}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                    {c.category}
                  </p>
                  <h4 className="mb-2 text-base font-bold text-gray-800">{c.headline}</h4>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: `${c.color}18`, color: c.color }}
                  >
                    {c.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="text-lg font-bold text-gray-900">¿Tu negocio puede ser el próximo?</p>
            <p className="text-sm text-gray-500">Agenda una demo de 15 min y te mostramos exactamente cómo funcionaría para tu local.</p>
            <button
              onClick={openModal}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg"
            >
              Agendar Demo gratuita
              <MoveRight size={15} className="transition-transform group-hover:translate-x-1" />
              <BorderBeam size={120} duration={3} colorFrom="#4ade80" colorTo="#3b82f6" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
