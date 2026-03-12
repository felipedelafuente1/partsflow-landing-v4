"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, User, Zap, Server, Shield, HelpCircle } from "lucide-react";
import { FadeUp } from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

const faqs = [
  {
    icon: User,
    q: "¿Partsflow reemplaza a mis vendedores?",
    a: "No. Partsflow es el asistente técnico que le devuelve hasta 4 horas diarias de productividad a tu equipo. La IA se encarga de lo repetitivo (pedir VINs, identificar piezas por foto y buscar en el catálogo) para que tus vendedores se concentren solo en lo que deja dinero: cerrar la venta.",
  },
  {
    icon: Zap,
    q: "¿Qué hace diferente a Partsflow de un chatbot normal?",
    a: "Que Partsflow sí sabe de fierros. Nuestra IA entiende jerga técnica automotriz, extrae VINs desde fotos de padrones y busca códigos OEM automáticamente. Está entrenada específicamente para el mercado de repuestos, no es un bot genérico.",
  },
  {
    icon: Server,
    q: "¿Se integra con mi ERP actual (Bsale, Softland, etc.)?",
    a: "Sí. Nos conectamos de forma transparente a los principales software de Chile para leer tu stock y precios en tiempo real. La implementación es 'llave en mano' y toma menos de 48 horas.",
  },
  {
    icon: Shield,
    q: "¿Qué pasa si la IA comete un error en una cotización?",
    a: "Tú mantienes el control. La IA prepara la cotización completa en el Centro de Comando, pero el vendedor siempre valida el precio final antes de enviarlo al cliente. Automatizamos el 80% del trabajo, pero el 20% del criterio sigue siendo tuyo.",
  },
  {
    icon: HelpCircle,
    q: "¿Hay cláusula de permanencia?",
    a: "No. Todos nuestros planes son mes a mes. Confiamos tanto en el ROI que generamos en tu local que no necesitamos amarrarte con letras chicas.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      className={cn(
        "rounded-2xl border transition-colors duration-300",
        isOpen
          ? "border-mint-400/25 bg-mint-400/[0.04]"
          : "border-white/5 bg-white/[0.02] hover:border-white/10"
      )}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={cn("shrink-0 rounded-lg p-2 transition-colors", isOpen ? "bg-mint-400/15 text-mint-400" : "bg-white/5 text-white/40")}>
          <Icon size={16} />
        </span>
        <span className="flex-1 text-sm font-medium text-foreground sm:text-base">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn("shrink-0 transition-colors", isOpen ? "text-mint-400" : "text-white/30")}
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 pl-16 text-sm text-white/55 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <FadeUp className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-mint-400/70">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Preguntas frecuentes{" "}
            <span className="text-gradient-mint">antes de agendar</span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
