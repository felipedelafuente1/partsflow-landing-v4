"use client";

import { User, BarChart2, MessageSquare, X } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";

const personas = [
  {
    icon: User,
    role: "El Dueño",
    body: "Pierde ventas sin enterarse, da mala atención sin querer y los vendedores con conocimiento técnico son cada vez más escasos y caros.",
  },
  {
    icon: BarChart2,
    role: "El Jefe de Ventas",
    body: "No tiene visibilidad de cuántas ventas se pierden, qué vendedor rinde más ni dónde está el cuello de botella.",
  },
  {
    icon: MessageSquare,
    role: "El Vendedor",
    body: "Tapado de chats repetitivos. No puede responder a todos y termina atendiendo mal al cliente bueno por atender al que solo pregunta.",
  },
];

const falseSolutions = [
  {
    title: "Contratar más vendedores",
    body: "Caros, lentos de onboarding y encontrar gente con conocimiento técnico de repuestos es cada vez más difícil.",
  },
  {
    title: "CRMs de WhatsApp",
    body: "Ordenan los chats, pero no cotizan. Tu equipo sigue haciendo el mismo trabajo manual, solo que más ordenado.",
  },
];

export function Agitacion() {
  return (
    <section className="relative bg-black py-24 sm:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient red glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-red-400/70">
            El problema
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            ¿Por qué estás perdiendo{" "}
            <span className="text-red-400">ventas todos los días</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
            El cliente es impaciente y se va con el que responde primero. Tu
            WhatsApp está colapsado y cotizar repuestos es lento.
          </p>
        </FadeUp>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeUp key={p.role} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6 h-full flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.07]">
                      <Icon size={16} className="text-red-400" />
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
                      {p.role}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* False Solutions */}
        <FadeUp delay={0.35}>
          <div className="rounded-2xl border border-white/[0.06] bg-zinc-950 p-6 sm:p-8">
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-white/30">
              Las soluciones que pruebas... no funcionan
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {falseSolutions.map((s) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 rounded-xl border border-red-500/10 bg-red-500/[0.04] p-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                    <X size={10} className="text-red-400" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-semibold text-white/80">{s.title}</p>
                    <p className="text-sm text-white/45 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
