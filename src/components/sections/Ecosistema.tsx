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
    icon: MessageSquare,
    iconClass: "text-[#25D366]",
    iconBg: "bg-[#25D366]/10 border-[#25D366]/20",
    hoverBorder: "hover:border-[#25D366]/30",
    body: "Canal principal de comunicación. Respuestas instantáneas 24/7 vía API Oficial.",
    tags: ["API Oficial", "Cloud API", "Business"],
    side: "left" as const,
    row: 1,
  },
  {
    id: "erp",
    label: "ERP",
    sublabel: "El Cerebro",
    icon: Database,
    iconClass: "text-mint-400",
    iconBg: "bg-mint-400/10 border-mint-400/20",
    hoverBorder: "hover:border-mint-400/30",
    body: "Conexión bidireccional con Bsale, Softland y Defontana. Sincronizamos stock, precios y catálogos en tiempo real.",
    tags: ["Bsale", "Softland", "Defontana"],
    side: "right" as const,
    row: 1,
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    sublabel: "Venta Online",
    icon: ShoppingCart,
    iconClass: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
    hoverBorder: "hover:border-blue-400/30",
    body: "Integración con Shopify, Jumpseller y WooCommerce para sincronizar pedidos automáticamente.",
    tags: ["Shopify", "Jumpseller", "WooCommerce"],
    side: "left" as const,
    row: 2,
  },
  {
    id: "couriers",
    label: "Couriers",
    sublabel: "Logística",
    icon: Truck,
    iconClass: "text-purple-400",
    iconBg: "bg-purple-400/10 border-purple-400/20",
    hoverBorder: "hover:border-purple-400/30",
    body: "Cotización de envíos y tracking automático con Starken, ChileExpress y BlueExpress.",
    tags: ["Starken", "ChileExpress", "BlueExpress"],
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

/* ── Main Section ── */

export function Ecosistema() {
  return (
    <section className="relative bg-black py-24 sm:py-32">
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
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Integraciones
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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

        {/* ── Mobile / Tablet ── */}
        <div className="lg:hidden">
          <div className="mb-10 flex justify-center">
            <HubNode />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {integrations.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.1}>
                <IntCard data={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
