"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Check, CheckCheck, Package } from "lucide-react";

interface ChatMessage {
  id: number;
  sender: "client" | "bot";
  text?: string;
  product?: {
    name: string;
    brand: string;
    price: string;
    stock: number;
    sku: string;
  };
  time: string;
}

const messages: ChatMessage[] = [
  {
    id: 1,
    sender: "client",
    text: "Hola, necesito el kit de distribución para Hilux 2019 diesel",
    time: "10:23",
  },
  {
    id: 2,
    sender: "bot",
    text: "¡Hola! 👋 Encontré 3 opciones para Kit de Distribución Toyota Hilux 2019 2.4D:",
    time: "10:23",
  },
  {
    id: 3,
    sender: "bot",
    product: {
      name: "Kit Distribución Hilux 2.4D",
      brand: "SKF",
      price: "$189.990",
      stock: 12,
      sku: "VKMA-91710",
    },
    time: "10:23",
  },
  {
    id: 4,
    sender: "client",
    text: "Me interesa el SKF, ¿tienen envío a Concepción?",
    time: "10:24",
  },
  {
    id: 5,
    sender: "bot",
    text: "✅ Sí, envío a Concepción en 24-48hrs. ¿Te genero la cotización formal?",
    time: "10:24",
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-2 w-2 rounded-full bg-mint-400/60"
          style={{
            animation: `typing-dot 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: NonNullable<ChatMessage["product"]>;
}) {
  return (
    <div className="rounded-lg border border-mint-400/20 bg-mint-400/5 p-3">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mint-400/10">
          <Package size={18} className="text-mint-400" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            {product.name}
          </p>
          <p className="text-xs text-muted">{product.brand} · {product.sku}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold text-mint-400">
              {product.price}
            </span>
            <span className="rounded-full bg-mint-400/10 px-2 py-0.5 text-xs font-medium text-mint-400">
              Stock: {product.stock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppSimulator() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // First message appears at 1.5s max (Aha! moment requirement)
    const delays = [800, 2200, 3200, 4800, 6200];
    const typingDelays = [0, 1400, 2400, 4000, 5400];

    const timers: ReturnType<typeof setTimeout>[] = [];

    messages.forEach((msg, i) => {
      // Show typing indicator before bot messages
      if (msg.sender === "bot") {
        timers.push(
          setTimeout(() => setShowTyping(true), typingDelays[i])
        );
      }

      timers.push(
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
        }, delays[i])
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B141A] shadow-2xl shadow-black/50">
        {/* WhatsApp Header */}
        <div className="flex items-center gap-3 border-b border-white/5 bg-[#1F2C34] px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-electric-500">
            <Bot size={20} className="text-black" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              Partsflow IA
            </p>
            <p className="text-xs text-mint-400">En línea</p>
          </div>
          <div className="flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-muted" />
            <div className="h-1 w-1 rounded-full bg-muted" />
            <div className="h-1 w-1 rounded-full bg-muted" />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex h-[380px] flex-col gap-2 overflow-y-auto p-4">
          <AnimatePresence mode="popLayout">
            {messages
              .filter((m) => visibleMessages.includes(m.id))
              .map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex ${
                    msg.sender === "client" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      msg.sender === "client"
                        ? "rounded-br-sm bg-[#005C4B] text-foreground"
                        : "rounded-bl-sm bg-[#1F2C34] text-foreground"
                    }`}
                  >
                    {msg.text && (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    )}
                    {msg.product && <ProductCard product={msg.product} />}
                    <div
                      className={`mt-1 flex items-center gap-1 ${
                        msg.sender === "client"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <span className="text-[10px] text-muted">
                        {msg.time}
                      </span>
                      {msg.sender === "client" && (
                        <CheckCheck size={14} className="text-electric-400" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

            {showTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="rounded-2xl rounded-bl-sm bg-[#1F2C34]">
                  <TypingIndicator />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 border-t border-white/5 bg-[#1F2C34] px-4 py-3">
          <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2.5">
            <span className="text-sm text-muted/50">Escribe un mensaje</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-400">
            <Check size={18} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
