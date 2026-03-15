"use client";

import { Database, MessageSquare, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

const integrations = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    sublabel: "Canal",
    mobileLabel: "API Oficial · 24/7",
    icon: MessageSquare,
    iconClass: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10 border-[#25D366]/20",
    hoverBorder: "hover:border-[#25D366]/30",
    glowColor: "rgba(37,211,102,0.35)",
    body: "Canal principal de comunicación. Respuestas instantáneas 24/7 vía API Oficial.",
    tags: ["API Oficial", "Cloud API", "Business"],
    comingSoon: false,
    side: "left" as const,
    row: 1,
  },
  {
    id: "erp",
    label: "ERP",
    sublabel: "El Cerebro",
    mobileLabel: "Sugerencias basadas en Stock Real",
    icon: Database,
    iconClass: "text-mint-400",
    iconBg: "bg-mint-400/10 border-mint-400/20",
    hoverBorder: "hover:border-mint-400/30",
    glowColor: "rgba(74,222,128,0.35)",
    body: "Partsflow lee tu inventario en Bsale o Softland para sugerir precios actualizados. Conexión bidireccional en tiempo real.",
    tags: ["Bsale", "Softland", "Defontana"],
    comingSoon: false,
    side: "right" as const,
    row: 1,
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    sublabel: "Venta Online",
    mobileLabel: "Pedidos Sincronizados",
    icon: ShoppingCart,
    iconClass: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
    hoverBorder: "hover:border-blue-400/30",
    glowColor: "rgba(96,165,250,0.35)",
    body: "Integración con Shopify, Jumpseller y WooCommerce para sincronizar pedidos automáticamente.",
    tags: ["Shopify", "Jumpseller", "WooCommerce"],
    comingSoon: false,
    side: "left" as const,
    row: 2,
  },
  {
    id: "couriers",
    label: "Couriers",
    sublabel: "Logística",
    mobileLabel: "Cotización y Tracking",
    icon: Truck,
    iconClass: "text-purple-400",
    iconBg: "bg-purple-400/10 border-purple-400/20",
    hoverBorder: "hover:border-purple-400/30",
    glowColor: "rgba(167,139,250,0.35)",
    body: "Próximamente Partsflow automatizará el cálculo de envíos y tracking con Starken y ChileExpress.",
    tags: ["Starken", "ChileExpress", "BlueExpress"],
    comingSoon: true,
    side: "right" as const,
    row: 2,
  },
];

/* ── Integration Card ── */

function IntCard({
  data,
  className,
}: {
  data: (typeof integrations)[0];
  className?: string;
}) {
  const Icon = data.icon;
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.07] bg-zinc-900/80 p-5 transition-all duration-300 hover:bg-zinc-900",
        data.hoverBorder,
        className
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
            data.iconBg
          )}
        >
          <Icon size={15} className={data.iconClass} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{data.label}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/35">
            {data.sublabel}
          </p>
        </div>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-white/50">{data.body}</p>
      <div className="flex flex-wrap gap-1.5">
        {data.comingSoon && (
          <span className="rounded-md border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">
            Próximamente
          </span>
        )}
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hub Node ── */

function HubNode({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-mint-400/20 bg-zinc-900"
        style={{
          boxShadow:
            "0 0 50px rgba(74,222,128,0.12), 0 0 100px rgba(74,222,128,0.06)",
        }}
      >
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-mint-400/25"
          animate={{ scale: [1, 1.18], opacity: [0.35, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl border border-mint-400/15"
          animate={{ scale: [1, 1.35], opacity: [0.2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.6,
          }}
        />
        <Image
          src="/logo.png"
          alt="Partsflow"
          width={48}
          height={48}
          className="h-12 w-12"
        />
      </div>
    </div>
  );
}

/* ── Animated connector line ── */

function ConnectorH({
  reverse = false,
  delay = 0,
  className,
}: {
  reverse?: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-px self-center overflow-hidden",
        className
      )}
    >
      {/* Static dashed line */}
      <div
        className="absolute inset-0"
        style={{ borderTop: "1px dashed rgba(255,255,255,0.10)" }}
      />
      {/* Traveling pulse */}
      <motion.div
        className="absolute top-0 h-full w-10"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(74,222,128,0.75), transparent)",
        }}
        animate={{
          left: reverse ? ["110%", "-55%"] : ["-55%", "110%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
          delay,
          repeatDelay: 0.6,
        }}
      />
    </div>
  );
}

/* ── Mobile Integration Card (Compact + Glassmorphism) ── */

function MobileIntCard({ data }: { data: (typeof integrations)[0] }) {
  const Icon = data.icon;
  return (
    <motion.div
      whileTap={{
        boxShadow: `0 0 24px ${data.glowColor}, 0 0 48px rgba(74,222,128,0.12)`,
        borderColor: "rgba(74,222,128,0.3)",
      }}
      transition={{ duration: 0.15 }}
      className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-4 cursor-pointer select-none"
    >
      {/* Icon + label row */}
      <div className="mb-2.5 flex items-center gap-2.5">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
            data.iconBg
          )}
        >
          <Icon size={16} className={data.iconClass} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{data.label}</p>
          <p className="truncate font-mono text-[10px] text-white/40">
            {data.mobileLabel}
          </p>
        </div>
      </div>

      {/* Tags as pills */}
      <div className="flex flex-wrap gap-1.5">
        {data.comingSoon && (
          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">
            Próximamente
          </span>
        )}
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/[0.08] bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-white/45"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Mobile Hub (smaller) ── */

function MobileHub() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-mint-400/20 bg-zinc-900">
      <motion.div
        className="absolute inset-0 rounded-2xl border border-mint-400/25"
        animate={{ scale: [1, 1.2], opacity: [0.35, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl border border-mint-400/15"
        animate={{ scale: [1, 1.4], opacity: [0.2, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.6,
        }}
      />
      <Image
        src="/logo.png"
        alt="Partsflow"
        width={36}
        height={36}
        className="h-9 w-9"
      />
    </div>
  );
}

/* ── Mobile Connector Lines (SVG) ── */

function MobileConnectors() {
  return (
    <svg
      className="mx-auto block"
      width="240"
      height="36"
      viewBox="0 0 240 36"
      fill="none"
    >
      <defs>
        <linearGradient
          id="connDown"
          x1="120"
          y1="0"
          x2="120"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4ade80" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4ade80" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      {/* Center trunk */}
      <line
        x1="120"
        y1="0"
        x2="120"
        y2="14"
        stroke="url(#connDown)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* Branch left */}
      <line
        x1="120"
        y1="14"
        x2="60"
        y2="36"
        stroke="url(#connDown)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* Branch right */}
      <line
        x1="120"
        y1="14"
        x2="180"
        y2="36"
        stroke="url(#connDown)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

/* ── Vertical connector between card rows ── */

function MobileRowConnector() {
  return (
    <svg
      className="mx-auto block"
      width="240"
      height="12"
      viewBox="0 0 240 12"
      fill="none"
    >
      {/* Left column */}
      <line
        x1="60"
        y1="0"
        x2="60"
        y2="12"
        stroke="#4ade80"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      {/* Right column */}
      <line
        x1="180"
        y1="0"
        x2="180"
        y2="12"
        stroke="#4ade80"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

/* ── Main Section ── */

export function Ecosistema() {
  return (
    <section className="relative bg-black py-12 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient hub glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 30% 50% at 50% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-8 sm:mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Integraciones
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Se conecta con todo{" "}
            <span className="text-gradient-mint">tu ecosistema</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/50 leading-relaxed">
            Partsflow se integra con las herramientas que ya usas, sin cambiar
            tu forma de trabajar.
          </p>
        </FadeUp>

        {/* ── Desktop Hub Diagram ── */}
        <FadeUp delay={0.15}>
          <div className="hidden lg:grid lg:grid-cols-[1fr_80px_180px_80px_1fr] lg:grid-rows-2 lg:items-center lg:gap-y-6">
            {/* Row 1 — WhatsApp */}
            <IntCard
              data={integrations[0]}
              className="lg:col-start-1 lg:row-start-1"
            />
            <ConnectorH
              className="lg:col-start-2 lg:row-start-1"
              delay={0}
            />
            {/* Hub spans both rows */}
            <HubNode className="lg:col-start-3 lg:row-start-1 lg:row-end-3" />
            <ConnectorH
              reverse
              className="lg:col-start-4 lg:row-start-1"
              delay={0.5}
            />
            <IntCard
              data={integrations[1]}
              className="lg:col-start-5 lg:row-start-1"
            />

            {/* Row 2 — Ecommerce / Couriers */}
            <IntCard
              data={integrations[2]}
              className="lg:col-start-1 lg:row-start-2"
            />
            <ConnectorH
              className="lg:col-start-2 lg:row-start-2"
              delay={1.2}
            />
            <ConnectorH
              reverse
              className="lg:col-start-4 lg:row-start-2"
              delay={1.7}
            />
            <IntCard
              data={integrations[3]}
              className="lg:col-start-5 lg:row-start-2"
            />
          </div>
        </FadeUp>

        {/* ── Mobile / Tablet — Compact Hub-Centered Layout ── */}
        <div className="lg:hidden">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center">
              {/* Central Hub */}
              <MobileHub />

              {/* Connector lines branching to grid */}
              <MobileConnectors />

              {/* Row 1 — WhatsApp & ERP */}
              <div className="grid w-full grid-cols-2 gap-3">
                <MobileIntCard data={integrations[0]} />
                <MobileIntCard data={integrations[1]} />
              </div>

              {/* Vertical connectors between rows */}
              <MobileRowConnector />

              {/* Row 2 — Ecommerce & Couriers */}
              <div className="grid w-full grid-cols-2 gap-3">
                <MobileIntCard data={integrations[2]} />
                <MobileIntCard data={integrations[3]} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
