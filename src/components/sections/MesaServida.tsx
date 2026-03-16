"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import {
  Bot,
  CheckCheck,
  CheckCircle2,
  Send,
  Sparkles,
  FileText,
  ChevronRight,
  Car,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Data — Toyota Hilux 2.4D 2019 (consistent across all steps) ─── */

const STEP1_MESSAGES = [
  {
    id: 1,
    sender: "client" as const,
    text: "Hola, necesito pastillas de freno para mi Hilux.",
    time: "10:23",
  },
  {
    id: 2,
    sender: "bot" as const,
    text: "¡Hola! Con gusto. Para asegurarnos de que sea el repuesto exacto, ¿me podrías enviar la patente o el número de chasis (VIN)?",
    time: "10:23",
  },
  {
    id: 3,
    sender: "client" as const,
    text: "VJ1982",
    time: "10:24",
  },
  {
    id: 4,
    sender: "bot" as const,
    text: "Identificado: Toyota Hilux 2.4 Diesel (2019).\nVIN: JTFSS22P4K0012845\nBuscando pastillas de freno en stock...",
    time: "10:24",
    highlight: true,
  },
];

const DASHBOARD_PRODUCTS = [
  { name: "PASTILLAS FRENO DELANTERAS", sku: "04465-0K290", price: "$38.990" },
  { name: "PASTILLAS FRENO TRASERAS", sku: "04466-0K210", price: "$29.990" },
];

const STEP3_MESSAGES = [
  {
    id: 1,
    sender: "bot" as const,
    text: "PASTILLAS DE FRENO - Toyota Hilux 2.4D 2019:\n\nDelanteras: $38.990 - TRW\nTraseras: $29.990 - TRW\n\nPrecios con IVA incluido.",
    time: "10:31",
  },
  { id: 2, sender: "system" as const, text: "David movió la orden a 'Cotización enviada'" },
];

/* ─── Compact Chat Bubble ─── */

function ChatBubble({
  sender,
  text,
  time,
  highlight,
}: {
  sender: "client" | "bot";
  text?: string;
  time: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex ${sender === "client" ? "justify-end" : "justify-start"}`}>
      <div
        className={cn(
          "max-w-[90%] rounded-xl px-2.5 py-2",
          sender === "client"
            ? "rounded-br-sm bg-[#005C4B]"
            : "rounded-bl-sm bg-[#1F2C34]",
          highlight && "border border-mint-400/20 bg-[#1a2e28]"
        )}
      >
        {text && (
          <p className="whitespace-pre-line text-[13px] leading-snug text-white/90">{text}</p>
        )}
        <div className={`mt-0.5 flex items-center gap-1 ${sender === "client" ? "justify-end" : "justify-start"}`}>
          <span className="text-[9px] text-white/30">{time}</span>
          {sender === "client" && <CheckCheck size={12} className="text-electric-400" />}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: WhatsApp Chat ─── */

function Step1Chat() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B141A]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#1F2C34] px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={14} className="text-black" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Partsflow IA</p>
          <p className="text-[9px] text-mint-400">En línea</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5">
        {STEP1_MESSAGES.map((msg) => (
          <ChatBubble
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            time={msg.time}
            highlight={msg.highlight}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Step 2: Dashboard ─── */

function Step2Dashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]">
      {/* Vehicle Header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0a0a0a] px-3 py-2">
        <Car size={14} className="shrink-0 text-mint-400/60" />
        <p className="truncate font-mono text-[10px] text-white/60">
          TOYOTA HILUX 2.4D 2019
        </p>
      </div>

      {/* VIN extracted badge */}
      <div className="mx-3 mt-3 flex items-center gap-2 rounded-lg border border-mint-400/20 bg-mint-400/[0.06] px-3 py-2">
        <Zap size={12} className="shrink-0 text-mint-400" />
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-medium uppercase tracking-wider text-mint-400/60">VIN extraído automáticamente</p>
          <p className="font-mono text-[11px] font-semibold text-mint-400">JTFSS22P4K0012845</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3">
        {/* Products */}
        {DASHBOARD_PRODUCTS.map((p) => (
          <div key={p.sku} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-mint-400" />
              <div>
                <p className="text-xs font-semibold text-white/90">{p.name}</p>
                <p className="font-mono text-[9px] text-white/30">{p.sku}</p>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-mint-400">{p.price}</span>
          </div>
        ))}

        {/* AI Suggestion */}
        <div className="rounded-lg border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles size={11} className="text-purple-400" />
            <span className="text-[9px] font-medium uppercase tracking-wider text-purple-400/60">
              Sugerencia IA — stock real
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-purple-300/80 leading-tight">Kit Distribución Toyota Hilux 2.4D</p>
            <span className="ml-2 shrink-0 font-mono text-xs font-bold text-purple-300">$189.990</span>
          </div>
        </div>

        {/* Send */}
        <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-mint-400 py-2 text-xs font-semibold text-black">
          <Send size={13} />
          Enviar Cotizaciones
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3: Quotation ─── */

function Step3Quotation() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B141A]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#1F2C34] px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={14} className="text-black" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Partsflow IA</p>
          <p className="text-[9px] text-mint-400">En línea</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5">
        {STEP3_MESSAGES.map((msg) =>
          msg.sender === "system" ? (
            <div key={msg.id} className="flex justify-center py-0.5">
              <span className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[9px] text-white/40">
                {msg.text}
              </span>
            </div>
          ) : (
            <ChatBubble key={msg.id} sender="bot" text={msg.text} time={msg.time ?? ""} />
          )
        )}
      </div>
    </div>
  );
}

/* ─── Steps Config ─── */

const STEPS = [
  { step: 1, label: "El cliente escribe", Component: Step1Chat },
  { step: 2, label: "La IA procesa", Component: Step2Dashboard },
  { step: 3, label: "El vendedor cierra", Component: Step3Quotation },
];

/* ─── Step Number (bold, large) ─── */

function StepNumber({ n, label }: { n: number; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00C47C] text-sm font-bold text-black shadow-[0_0_12px_rgba(0,196,124,0.3)]">
        {n}
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
        {label}
      </span>
    </div>
  );
}

/* ─── Desktop Flow Arrow ─── */

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="flex flex-col items-center gap-1">
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-mint-400/20 to-transparent" />
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-mint-400/20 bg-mint-400/[0.08] shadow-[0_0_10px_rgba(0,196,124,0.15)]">
          <ChevronRight size={18} className="text-mint-400/60" />
        </div>
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-mint-400/20 to-transparent" />
      </div>
    </div>
  );
}

/* ─── Mobile Tabs ─── */

function MobileTabs({ active, onChange }: { active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full border border-white/5 bg-white/[0.03] p-1 lg:hidden">
      {STEPS.map((s, i) => (
        <button
          key={s.step}
          onClick={() => onChange(i)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium transition-all",
            active === i
              ? "bg-mint-400/10 text-mint-400 border border-mint-400/20"
              : "text-white/40 border border-transparent hover:text-white/60"
          )}
        >
          <span className={cn(
            "flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold",
            active === i ? "bg-[#00C47C] text-black" : "bg-white/10 text-white/40"
          )}>
            {s.step}
          </span>
          <span className="hidden sm:inline">{s.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */

export function MesaServida() {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = STEPS[activeTab].Component;

  return (
    <section className="relative bg-black py-12 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-8 text-center sm:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Del WhatsApp a la Mesa Servida
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tu WhatsApp recibe el desorden,{" "}
            <span className="text-gradient-mint">Partsflow te entrega la estrategia</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/50">
            Identificamos el 100% de los datos técnicos para que tu vendedor
            solo se preocupe de cerrar la venta.
          </p>
        </FadeUp>

        {/* Mobile: Tabs */}
        <FadeUp delay={0.1} className="mb-5 lg:hidden">
          <MobileTabs active={activeTab} onChange={setActiveTab} />
        </FadeUp>

        {/* Mobile: Active step content */}
        <div className="lg:hidden">
          <FadeUp delay={0.15}>
            <div className="mx-auto max-w-sm">
              <StepNumber n={STEPS[activeTab].step} label={STEPS[activeTab].label} />
              <ActiveComponent />
            </div>
          </FadeUp>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-4">
          <FadeUp delay={0.1}>
            <StepNumber n={1} label="El cliente escribe" />
            <Step1Chat />
          </FadeUp>

          <FadeUp delay={0.15} className="mt-28">
            <FlowArrow />
          </FadeUp>

          <FadeUp delay={0.2}>
            <StepNumber n={2} label="La IA procesa" />
            <Step2Dashboard />
          </FadeUp>

          <FadeUp delay={0.25} className="mt-28">
            <FlowArrow />
          </FadeUp>

          <FadeUp delay={0.3}>
            <StepNumber n={3} label="El vendedor cierra" />
            <Step3Quotation />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
