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
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Data ─── */

const STEP1_MESSAGES = [
  {
    id: 1,
    sender: "client" as const,
    text: "Necesito cotizar foco frontal y disco de embrague para Chevrolet Apache S10 2011",
    time: "19:46",
  },
  { id: 2, sender: "client" as const, isDocument: true, time: "19:46" },
  {
    id: 3,
    sender: "bot" as const,
    text: "Lo tomaré con los siguientes datos:\nVIN: 9BG138AX0BC423418\nMarca: Chevrolet\nModelo: S10 Apache\nAño: 2011\nVersión: III 2.4\nProducto(s): Foco frontal lado conductor, Disco de embrague",
    time: "19:47",
  },
];

const DASHBOARD_PRODUCTS = [
  { name: "DISCO DE EMBRAGUE", sku: "LKAUTBRKIT009", price: "$120.000" },
  { name: "FOCO FRONTAL LADO CONDUCTOR", sku: "9956939", price: "$85.000" },
];

const STEP3_MESSAGES = [
  {
    id: 1,
    sender: "bot" as const,
    text: "DISCO DE EMBRAGUE:\n- $120.000 - MARCA LUK\n\nFOCO FRONTAL:\n- $85.000\n\nPrecios con IVA incluido.",
    time: "15:32",
  },
  { id: 2, sender: "system" as const, text: "David movió la orden a 'Cotización enviada'" },
];

/* ─── Compact Chat Bubble ─── */

function ChatBubble({
  sender,
  text,
  time,
  isDocument,
}: {
  sender: "client" | "bot";
  text?: string;
  time: string;
  isDocument?: boolean;
}) {
  return (
    <div className={`flex ${sender === "client" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] rounded-xl px-2.5 py-1.5 ${
          sender === "client"
            ? "rounded-br-sm bg-[#005C4B] text-foreground"
            : "rounded-bl-sm bg-[#1F2C34] text-foreground"
        }`}
      >
        {isDocument && (
          <div className="rounded-md border border-amber-400/20 bg-amber-900/10 p-2 mb-1">
            <div className="flex items-center gap-1.5 mb-1">
              <FileText size={12} className="text-amber-400/70" />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-400/70">
                Certificado R.V.M.
              </span>
            </div>
            <div className="space-y-0.5 text-[10px] text-white/50">
              <p>CHEVROLET · S10 APACHE III 2.4 · 2011</p>
              <p className="font-mono text-[9px] text-white/30">9BG138AX0BC423418</p>
            </div>
          </div>
        )}
        {text && <p className="whitespace-pre-line text-xs leading-snug">{text}</p>}
        <div className={`mt-0.5 flex items-center gap-1 ${sender === "client" ? "justify-end" : "justify-start"}`}>
          <span className="text-[9px] text-muted">{time}</span>
          {sender === "client" && <CheckCheck size={12} className="text-electric-400" />}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: Compact WhatsApp Chat ─── */

function Step1Chat() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B141A]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#1F2C34] px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={14} className="text-black" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Partsflow IA</p>
          <p className="text-[9px] text-mint-400">En línea</p>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5">
        {STEP1_MESSAGES.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} time={msg.time} isDocument={msg.isDocument} />
        ))}
      </div>
    </div>
  );
}

/* ─── Step 2: Compact Dashboard ─── */

function Step2Dashboard() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5 bg-white/[0.03]">
      {/* Vehicle Header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0a0a0a] px-3 py-2">
        <Car size={14} className="shrink-0 text-mint-400/60" />
        <p className="truncate font-mono text-[10px] text-white/60">
          CHEVROLET S10 APACHE III 2.4 2011
        </p>
      </div>

      <div className="flex flex-col gap-2 p-3">
        {/* Products */}
        {DASHBOARD_PRODUCTS.map((p) => (
          <div key={p.sku} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0 text-mint-400" />
              <div>
                <p className="text-xs font-semibold text-foreground">{p.name}</p>
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
            <p className="text-[11px] text-purple-300/80 leading-tight">Kit Distribución Hyundai Sonata Yf 2.0</p>
            <span className="ml-2 shrink-0 font-mono text-xs font-bold text-purple-300">$246.990</span>
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

/* ─── Step 3: Compact Quotation ─── */

function Step3Quotation() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B141A]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#1F2C34] px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={14} className="text-black" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Partsflow IA</p>
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

/* ─── Step Content Array (for mobile tabs) ─── */

const STEPS = [
  { step: 1, label: "El cliente escribe", Component: Step1Chat },
  { step: 2, label: "La IA procesa", Component: Step2Dashboard },
  { step: 3, label: "El vendedor cierra", Component: Step3Quotation },
];

/* ─── Mobile Tab Selector ─── */

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
            active === i ? "bg-mint-400 text-black" : "bg-white/10 text-white/40"
          )}>
            {s.step}
          </span>
          <span className="hidden sm:inline">{s.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ─── Desktop Arrow ─── */

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
        <ChevronRight size={14} className="text-mint-400/40" />
      </div>
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
              <ActiveComponent />
            </div>
          </FadeUp>
        </div>

        {/* Desktop: 3 columns in a row */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-4">
          <FadeUp delay={0.1}>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
              <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-mint-400/10 text-[9px] font-bold text-mint-400">1</span>
              El cliente escribe
            </p>
            <Step1Chat />
          </FadeUp>

          <FadeUp delay={0.15} className="mt-32">
            <FlowArrow />
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
              <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-mint-400/10 text-[9px] font-bold text-mint-400">2</span>
              La IA procesa
            </p>
            <Step2Dashboard />
          </FadeUp>

          <FadeUp delay={0.25} className="mt-32">
            <FlowArrow />
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
              <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-mint-400/10 text-[9px] font-bold text-mint-400">3</span>
              El vendedor cierra
            </p>
            <Step3Quotation />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
