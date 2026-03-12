"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { AlertTriangle, TrendingDown, TrendingUp, BarChart3, Calculator } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { BorderBeam } from "@/components/ui/border-beam";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

/* ── Constants ── */

const FUNNEL = [
  { label: "Solicitudes", value: 743, pct: 100, color: "bg-white/10", textColor: "text-white/60" },
  { label: "Cotizadas", value: 681, pct: 91.7, color: "bg-mint-400/20", textColor: "text-mint-400/70" },
  { label: "Posible Venta", value: 298, pct: 40.1, color: "bg-mint-400/40", textColor: "text-mint-400" },
  { label: "Venta Final", value: 84, pct: 11.3, color: "bg-mint-400", textColor: "text-black" },
];

const BRANDS = [
  { name: "Toyota", value: 187, pct: 100 },
  { name: "Hyundai", value: 146, pct: 78 },
  { name: "Nissan", value: 114, pct: 61 },
  { name: "Kia", value: 90, pct: 48 },
  { name: "Suzuki", value: 67, pct: 36 },
];

const STOCK_ISSUES = [
  { name: "Turbo Nissan NP300", value: 28, pct: 100 },
  { name: "Amort. Brilliance V3", value: 20, pct: 71 },
  { name: "Evaporador Hyundai", value: 15, pct: 54 },
  { name: "Capot Toyota Yaris", value: 11, pct: 39 },
  { name: "Piola embrague Daihatsu", value: 7, pct: 25 },
];

const SAVINGS = 345_000;
const PARTSFLOW_COST = 490_000;
const DEFAULT_SALES = 5_000_000;

/* ── Helpers ── */

function formatCLP(n: number): string {
  return "$" + Math.round(n).toLocaleString("es-CL");
}

function parseInput(raw: string): number {
  const cleaned = raw.replace(/[^0-9]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function roiColor(roi: number): string {
  if (roi < 1.5) return "#ef4444";
  if (roi < 3) return "#f59e0b";
  return "#4ade80";
}

function roiCopy(roi: number, sales: number): string {
  if (roi < 1.5) return "Optimiza tu uso para maximizar el retorno";
  if (roi < 3) return "Partsflow se está pagando solo con eficiencia operacional";
  return `Con una venta estimada de ${formatCLP(sales)}, Partsflow se paga ${roi.toFixed(1)} veces solo con eficiencia y ventas recuperadas`;
}

/* ── ROI Gauge ── */

const GAUGE_R = 72;
const GAUGE_STROKE = 10;
const GAUGE_CX = 90;
const GAUGE_CY = 90;
const HALF_CIRC = Math.PI * GAUGE_R; // semicircle arc length

function roiToDash(roi: number, maxRoi = 15): number {
  const clamped = Math.min(Math.max(roi, 0), maxRoi);
  return (clamped / maxRoi) * HALF_CIRC;
}

function ROIGauge({ roi, hasEntered }: { roi: number; hasEntered: boolean }) {
  const color = roiColor(roi);
  const [animatedDash, setAnimatedDash] = useState(0);

  useEffect(() => {
    if (!hasEntered) return;
    const controls = animate(0, roiToDash(roi), {
      duration: 1.4,
      type: "spring",
      stiffness: 60,
      damping: 20,
      onUpdate: (v) => setAnimatedDash(v),
    });
    return () => controls.stop();
  }, [roi, hasEntered]);

  const svgSize = GAUGE_CX * 2;

  return (
    <div className="relative flex flex-col items-center">
      <svg
        width={svgSize}
        height={GAUGE_CY + GAUGE_STROKE}
        viewBox={`0 0 ${svgSize} ${GAUGE_CY + GAUGE_STROKE}`}
        style={{ overflow: "visible" }}
      >
        {/* Track */}
        <path
          d={`M ${GAUGE_CX - GAUGE_R} ${GAUGE_CY} A ${GAUGE_R} ${GAUGE_R} 0 0 1 ${GAUGE_CX + GAUGE_R} ${GAUGE_CY}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={GAUGE_STROKE}
          strokeLinecap="round"
        />
        {/* Progress */}
        <path
          d={`M ${GAUGE_CX - GAUGE_R} ${GAUGE_CY} A ${GAUGE_R} ${GAUGE_R} 0 0 1 ${GAUGE_CX + GAUGE_R} ${GAUGE_CY}`}
          fill="none"
          stroke={color}
          strokeWidth={GAUGE_STROKE}
          strokeLinecap="round"
          strokeDasharray={`${HALF_CIRC} ${HALF_CIRC}`}
          strokeDashoffset={HALF_CIRC - animatedDash}
          style={{ filter: `drop-shadow(0 0 6px ${color}80)`, transition: "stroke 0.4s ease" }}
        />
        {/* Center label */}
        <text
          x={GAUGE_CX}
          y={GAUGE_CY - 8}
          textAnchor="middle"
          fill={color}
          fontSize="28"
          fontFamily="monospace"
          fontWeight="700"
          style={{ transition: "fill 0.4s ease" }}
        >
          {roi > 0 ? `${roi.toFixed(1)}x` : "—"}
        </text>
        <text
          x={GAUGE_CX}
          y={GAUGE_CY + 10}
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontFamily="monospace"
        >
          retorno
        </text>
        {/* Scale labels */}
        <text x={GAUGE_CX - GAUGE_R - 4} y={GAUGE_CY + 18} fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace" textAnchor="end">0x</text>
        <text x={GAUGE_CX + GAUGE_R + 4} y={GAUGE_CY + 18} fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace" textAnchor="start">15x</text>
      </svg>
    </div>
  );
}

/* ── Funnel Card ── */

function FunnelCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px" });

  const counts = [
    useCountUp({ end: 743, duration: 1600 }),
    useCountUp({ end: 681, duration: 1600 }),
    useCountUp({ end: 298, duration: 1600 }),
    useCountUp({ end: 84, duration: 1600 }),
  ];

  return (
    <div
      ref={sectionRef}
      className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-4 h-full"
    >
      <div className="flex items-center gap-2 mb-1">
        <BarChart3 size={16} className="text-mint-400" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">
          Embudo de Conversión — Feb 2026
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {FUNNEL.map((stage, i) => (
          <div key={stage.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-white/50">{stage.label}</span>
              <span
                ref={counts[i].ref}
                className="font-mono text-sm font-bold text-white"
              >
                {isInView ? counts[i].displayValue : "0"}
              </span>
            </div>
            <motion.div
              className={cn("h-7 rounded-lg flex items-center px-3", stage.color)}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${stage.pct}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Alert badge between Posible Venta → Venta Final */}
            {i === 2 && (
              <motion.div
                className="mt-3 flex items-start gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <AlertTriangle size={13} className="text-orange-400 mt-0.5 shrink-0 animate-pulse" />
                <p className="text-xs text-orange-300/90 leading-snug">
                  <span className="font-semibold">Fuga detectada: 30% de cierre</span>
                  {" "}— tu equipo está perdiendo el seguimiento en esta etapa.
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Top Brands Card ── */

function TopBrandsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div ref={ref} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2">
        <TrendingUp size={15} className="text-mint-400" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">
          Top Marcas Solicitadas
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {BRANDS.map((brand, i) => (
          <div key={brand.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/70">{brand.name}</span>
              <span className="font-mono text-xs text-mint-400">{brand.value}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-mint-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${brand.pct}%` } : { width: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                style={{ boxShadow: "0 0 6px rgba(74,222,128,0.4)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Stock Shortage Card ── */

function StockShortageCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div ref={ref} className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingDown size={15} className="text-red-400" />
          <span className="text-xs font-medium uppercase tracking-widest text-white/40">
            Fugas por Falta de Stock
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          Sin Stock
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {STOCK_ISSUES.map((item, i) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/70 leading-tight">{item.name}</span>
              <span className="font-mono text-xs text-red-400 ml-2 shrink-0">{item.value} req</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-red-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.pct}%` } : { width: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                style={{ boxShadow: "0 0 6px rgba(239,68,68,0.4)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ROI Calculator Card ── */

function ROICalculatorCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px" });
  const [hasEntered, setHasEntered] = useState(false);

  const [rawInput, setRawInput] = useState(DEFAULT_SALES.toLocaleString("es-CL"));
  const [salesValue, setSalesValue] = useState(DEFAULT_SALES);

  const totalValue = salesValue + SAVINGS;
  const roi = salesValue > 0 ? totalValue / PARTSFLOW_COST : 0;

  const totalCountUp = useCountUp({ end: totalValue, duration: 1600, separator: ".", prefix: "$" });
  const hoursCountUp = useCountUp({ end: 69, duration: 1400 });
  const savingsCountUp = useCountUp({ end: SAVINGS, duration: 1400, separator: ".", prefix: "$" });

  useEffect(() => {
    if (isInView && !hasEntered) setHasEntered(true);
  }, [isInView, hasEntered]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    const numeric = parseInput(raw);
    setSalesValue(numeric);
    if (numeric === 0 && raw !== "") {
      setRawInput(raw);
    } else {
      setRawInput(numeric > 0 ? numeric.toLocaleString("es-CL") : "");
    }
  }

  const color = roiColor(roi);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl border border-white/5 bg-white/[0.03] p-6 flex flex-col gap-5 h-full overflow-hidden"
    >
      <BorderBeam size={180} duration={4} colorFrom="#4ade80" colorTo="#3b82f6" />

      <div className="flex items-center gap-2">
        <Calculator size={15} className="text-mint-400" />
        <span className="text-xs font-medium uppercase tracking-widest text-white/40">
          Calculadora de ROI
        </span>
      </div>

      {/* Gauge */}
      <div className="flex flex-col items-center gap-2">
        <ROIGauge roi={roi} hasEntered={hasEntered} />

        {/* Copy dinámico */}
        <p className="text-center text-xs text-white/50 leading-snug max-w-[220px]">
          {roiCopy(roi, salesValue)}
        </p>
      </div>

      {/* Input */}
      <div>
        <label className="block text-xs text-white/40 mb-1.5">Ventas del canal este mes ($)</label>
        <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 gap-2 focus-within:border-mint-400/40 transition-colors">
          <span className="font-mono text-sm text-white/40">$</span>
          <input
            type="text"
            inputMode="numeric"
            value={rawInput}
            onChange={handleInput}
            placeholder="5.000.000"
            className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-white/20"
          />
        </div>
      </div>

      {/* Total value */}
      <div className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center">
        <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Valor Total Generado</p>
        <span
          ref={totalCountUp.ref}
          className="font-mono text-2xl font-bold"
          style={{ color }}
        >
          {hasEntered ? totalCountUp.displayValue : "$0"}
        </span>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-white/[0.03] px-2 py-2.5">
          <p
            ref={hoursCountUp.ref}
            className="font-mono text-base font-bold text-mint-400"
          >
            {hasEntered ? hoursCountUp.displayValue : "0"}
          </p>
          <p className="text-[10px] text-white/40 mt-0.5 leading-tight">hrs ahorradas</p>
        </div>
        <div className="rounded-lg bg-white/[0.03] px-2 py-2.5">
          <p
            ref={savingsCountUp.ref}
            className="font-mono text-base font-bold text-mint-400"
          >
            {hasEntered ? savingsCountUp.displayValue : "$0"}
          </p>
          <p className="text-[10px] text-white/40 mt-0.5 leading-tight">ahorro op.</p>
        </div>
        <div className="rounded-lg bg-white/[0.03] px-2 py-2.5">
          <p className="font-mono text-base font-bold text-white/50">{formatCLP(PARTSFLOW_COST)}</p>
          <p className="text-[10px] text-white/40 mt-0.5 leading-tight">inversión PF</p>
        </div>
      </div>

      <p className="text-center text-[10px] text-white/25 font-mono">
        ROI = (Ventas + Ahorro Op.) ÷ Costo Partsflow
      </p>
    </div>
  );
}

/* ── Main Section ── */

export function ControlTower() {
  return (
    <section id="control-tower" className="bg-black pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeUp className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            Control Tower
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Lo que no se mide,{" "}
            <span className="text-gradient-mint">se pierde</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
            Accede a la data que tu WhatsApp no te entrega: quiebres de stock, ROI real y
            eficiencia de tu equipo de ventas.
          </p>
        </FadeUp>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Funnel — col-span-2, row-span-2 */}
          <FadeUp delay={0.1} className="lg:col-span-2 lg:row-span-2">
            <FunnelCard />
          </FadeUp>

          {/* ROI Calculator — col-span-2, row-span-2 */}
          <FadeUp delay={0.2} className="lg:col-span-2 lg:row-span-2">
            <ROICalculatorCard />
          </FadeUp>

          {/* Top Brands — col-span-1 (below funnel left) */}
          {/* Stock Shortage — col-span-1 (below funnel right) */}
          {/* These go in a nested 2-col grid below on large screens */}
        </div>

        {/* Second row: inventory cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FadeUp delay={0.3}>
            <TopBrandsCard />
          </FadeUp>
          <FadeUp delay={0.4}>
            <StockShortageCard />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
