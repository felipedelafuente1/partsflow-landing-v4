"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import {
  Bot,
  CheckCheck,
  CheckCircle2,
  Send,
  Sparkles,
  FileText,
  ArrowRight,
  Car,
} from "lucide-react";

/* ─── Data ─── */

const STEP1_MESSAGES = [
  { id: 1, sender: "client" as const, text: "Hola, buenas tardes", time: "19:44" },
  {
    id: 2,
    sender: "bot" as const,
    text: "Hola, buenas tardes. Cuéntame qué repuesto o accesorio estás buscando para tu vehículo hoy para poder ayudarte.",
    time: "19:45",
  },
  {
    id: 3,
    sender: "client" as const,
    text: "Favor quisiera cotizar el foco frontal del lado del conductor y un disco de embrague para una Chevrolet Apache S10 del 2011",
    time: "19:46",
  },
  { id: 4, sender: "client" as const, isDocument: true, time: "19:46" },
  {
    id: 5,
    sender: "bot" as const,
    text: "Lo tomaré con los siguientes datos:\nVIN: 9BG138AX0BC423418\nMarca: Chevrolet\nModelo: S10 Apache\nAño: 2011\nVersión: III 2.4\nProducto(s): Foco frontal lado conductor, Disco de embrague\n\nEn cuanto estemos de vuelta le enviaremos su cotización a partir del: Jueves a las 09:00",
    time: "19:47",
  },
  { id: 6, sender: "client" as const, text: "Muchas gracias!", time: "19:48" },
];

const DASHBOARD_PRODUCTS = [
  { name: "DISCO DE EMBRAGUE", sku: "LKAUTBRKIT009", price: "$120.000" },
  { name: "FOCO FRONTAL LADO CONDUCTOR", sku: "9956939", price: "$85.000" },
];

const STEP3_MESSAGES = [
  {
    id: 1,
    sender: "bot" as const,
    text: "KIT DE EMBRAGUE:\n- $77.000 3 PIEZAS - MARCA VALEO COREANO\n\nPrecios con IVA incluido.",
    time: "15:32",
  },
  { id: 2, sender: "system" as const, text: "David movió la orden 82819 a 'Cotización enviada'" },
  {
    id: 3,
    sender: "bot" as const,
    text: "Tengo marca exedy japonés con un valor de 105.000",
    time: "15:32",
  },
];

/* ─── Step Badge ─── */

function StepBadge({ step, label }: { step: number; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-mint-400/30 bg-mint-400/10 text-xs font-bold text-mint-400">
        {step}
      </span>
      <span className="text-xs font-medium uppercase tracking-widest text-mint-400/70">
        {label}
      </span>
    </div>
  );
}

/* ─── Document Card (Certificado R.V.M.) ─── */

function DocumentCard() {
  return (
    <div className="rounded-lg border border-amber-400/20 bg-amber-900/10 p-3">
      <div className="mb-2 flex items-center gap-2">
        <FileText size={16} className="text-amber-400/70" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/70">
          Certificado de Inscripción R.V.M.
        </span>
      </div>
      <div className="space-y-1 text-[11px] text-white/50">
        <p><span className="text-white/30">Marca:</span> CHEVROLET</p>
        <p><span className="text-white/30">Modelo:</span> S10 APACHE III 2.4</p>
        <p><span className="text-white/30">Año:</span> 2011</p>
        <p><span className="text-white/30">Nro. Chasis:</span> 9BG138AX0BC423418</p>
      </div>
    </div>
  );
}

/* ─── WhatsApp Chat Bubble ─── */

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
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
          sender === "client"
            ? "rounded-br-sm bg-[#005C4B] text-foreground"
            : "rounded-bl-sm bg-[#1F2C34] text-foreground"
        }`}
      >
        {isDocument && <DocumentCard />}
        {text && <p className="whitespace-pre-line text-sm leading-relaxed">{text}</p>}
        <div
          className={`mt-1 flex items-center gap-1 ${
            sender === "client" ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-[10px] text-muted">{time}</span>
          {sender === "client" && <CheckCheck size={14} className="text-electric-400" />}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 1: WhatsApp Chat ─── */

function Step1Chat() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B141A] shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#1F2C34] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={18} className="text-black" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Partsflow IA</p>
          <p className="text-[11px] text-mint-400">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex max-h-[520px] flex-col gap-2 overflow-y-auto p-3">
        {STEP1_MESSAGES.map((msg) => (
          <ChatBubble
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            time={msg.time}
            isDocument={msg.isDocument}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Step 2: Dashboard / Control Tower ─── */

function ProductRow({ name, sku, price }: { name: string; sku: string; price: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <div className="flex items-center gap-3">
        <CheckCircle2 size={16} className="shrink-0 text-mint-400" />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="font-mono text-[11px] text-white/40">{sku}</p>
        </div>
      </div>
      <span className="font-mono text-sm font-bold text-mint-400">{price}</span>
    </div>
  );
}

function SuggestionBanner() {
  return (
    <div className="rounded-xl border border-purple-400/20 bg-purple-400/[0.06] p-4">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles size={14} className="text-purple-400" />
        <span className="text-[10px] font-medium uppercase tracking-widest text-purple-400/70">
          IA sugiere precio basado en stock real
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-purple-300">
          Kit Distribución Para Hyundai Sonata Yf 2.0 G4na 2012 2014
        </p>
        <span className="ml-3 shrink-0 font-mono text-sm font-bold text-purple-300">
          $246.990
        </span>
      </div>
    </div>
  );
}

function Step2Dashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03]">
      {/* Top Bar */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0a0a0a] px-4 py-3">
        <Car size={16} className="shrink-0 text-white/40" />
        <p className="truncate font-mono text-xs text-white/70">
          CHEVROLET S10 APACHE III 2.4 2011 &nbsp;|&nbsp; VIN: 9BG138AX0BC423418
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b border-white/5 px-4">
        <span className="border-b-2 border-mint-400 py-2.5 text-xs font-medium text-mint-400">
          Cotizaciones
        </span>
        <span className="py-2.5 text-xs text-white/30">Imagenes</span>
        <span className="py-2.5 text-xs text-white/30">Facturas/Boleta</span>
        <span className="py-2.5 text-xs text-white/30">Notas</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        {/* Quote All */}
        <div className="flex justify-start">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-mint-400 px-4 py-1.5 text-xs font-semibold text-black">
            Quote All
          </button>
        </div>

        {/* Products */}
        {DASHBOARD_PRODUCTS.map((p) => (
          <ProductRow key={p.sku} {...p} />
        ))}

        {/* AI Suggestion */}
        <SuggestionBanner />

        {/* Send Button */}
        <button className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-mint-400 py-3 text-sm font-semibold text-black transition-all hover:bg-mint-300">
          <Send size={15} />
          Enviar Cotizaciones
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3: Final Quotation ─── */

function Step3Quotation() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B141A] shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 bg-[#1F2C34] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
          <Bot size={18} className="text-black" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Partsflow IA</p>
          <p className="text-[11px] text-mint-400">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 p-3">
        {STEP3_MESSAGES.map((msg) =>
          msg.sender === "system" ? (
            <div key={msg.id} className="flex justify-center py-1">
              <span className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-[10px] text-white/40">
                {msg.text}
              </span>
            </div>
          ) : (
            <ChatBubble
              key={msg.id}
              sender="bot"
              text={msg.text}
              time={msg.time ?? ""}
            />
          )
        )}
      </div>
    </div>
  );
}

/* ─── Desktop Arrow Connector ─── */

function ArrowConnector() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
        <ArrowRight size={18} className="text-mint-400/50" />
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export function MesaServida() {
  return (
    <section className="relative bg-black py-12 sm:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Del WhatsApp a la Mesa Servida
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tu WhatsApp recibe el desorden,
            <br />
            Partsflow te entrega{" "}
            <span className="text-gradient-mint">la estrategia</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50">
            Identificamos el 100% de los datos técnicos para que tu vendedor solo
            se preocupe de cerrar la venta.
          </p>
        </FadeUp>

        {/* Steps: Row 1 — Chat + Dashboard */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Step 1: WhatsApp */}
          <FadeUp delay={0.15} className="lg:col-span-5">
            <StepBadge step={1} label="El cliente escribe" />
            <Step1Chat />
          </FadeUp>

          {/* Arrow */}
          <FadeUp delay={0.2} className="lg:col-span-1 lg:mt-40">
            <ArrowConnector />
          </FadeUp>

          {/* Step 2: Dashboard */}
          <FadeUp delay={0.25} className="lg:col-span-6">
            <StepBadge step={2} label="La IA procesa" />
            <Step2Dashboard />
          </FadeUp>
        </div>

        {/* Arrow down (desktop) */}
        <FadeUp delay={0.3}>
          <div className="hidden justify-center py-6 lg:flex">
            <div className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <ArrowRight size={18} className="text-mint-400/50" />
            </div>
          </div>
        </FadeUp>

        {/* Step 3: Final Quotation */}
        <FadeUp delay={0.35} className="mx-auto max-w-md lg:max-w-sm">
          <StepBadge step={3} label="El vendedor cierra" />
          <Step3Quotation />
        </FadeUp>
      </div>
    </section>
  );
}
