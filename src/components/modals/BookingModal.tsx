"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MoveRight, X, ArrowLeft } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  company: string;
  whatsapp: string;
  chatVolume: string;
  erp: string;
  marketing: string;
}

const initialFormData: FormData = {
  fullName: "",
  company: "",
  whatsapp: "",
  chatVolume: "",
  erp: "",
  marketing: "",
};

const chatVolumeOptions = ["< 1.000", "1.000 - 2.500", "2.500 - 5.000", "5.000+"];
const erpOptions = ["Softland", "Bsale", "Laudus", "Defontana", "SAP/Oracle", "Excel/Otro"];

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3OHqJJVqOADU9Ce-u9gl2l11wPdFhJqQJottHEjoZ6FzBZzjgWCMkel6oQH0fJfFGKdZahYxy1?gv=true";

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-mint-400/50 focus:outline-none focus:ring-1 focus:ring-mint-400/30 transition-colors";

const labelClasses = "block text-sm font-medium text-muted/80 mb-1.5";

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll & handle Escape
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setFormData(initialFormData);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmitStep1(e: FormEvent) {
    e.preventDefault();

    // Future API integration point
    console.log("📋 Booking data:", formData);

    setStep(2);
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className={`relative z-10 mx-0 my-0 w-full overflow-hidden rounded-2xl border shadow-2xl sm:mx-auto sm:my-[10vh] ${step === 1 ? "max-w-lg border-white/10 bg-[#09090b]" : "max-w-4xl border-gray-200 bg-[#f3f4f6]"}`}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — adapts to step background */}
            <button
              onClick={onClose}
              className={`absolute right-3 top-3 z-20 rounded-full p-1.5 backdrop-blur-sm transition-colors ${step === 1 ? "bg-black/60 text-white/70 hover:bg-black/80 hover:text-white" : "bg-white/80 text-gray-500 hover:bg-white hover:text-gray-800"}`}
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Step content with AnimatePresence */}
            <div className={step === 1 ? "p-6 sm:p-8" : "p-0"}>
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <StepOneForm
                      formData={formData}
                      updateField={updateField}
                      onSubmit={handleSubmitStep1}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <StepTwoCalendar onBack={() => setStep(1)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ── Step 1: Qualification Form ── */

function StepOneForm({
  formData,
  updateField,
  onSubmit,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Agenda tu demo personalizada
        </h2>
        <p className="mt-1.5 text-sm text-muted/70">
          Cuéntanos sobre tu negocio para preparar una demo a tu medida.
        </p>
      </div>

      {/* Grid: 2 cols on sm */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nombre Completo */}
        <div>
          <label className={labelClasses}>Nombre Completo</label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            placeholder="Juan Pérez"
            className={inputClasses}
          />
        </div>

        {/* Empresa */}
        <div>
          <label className={labelClasses}>Nombre de la Empresa</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Repuestos Acme"
            className={inputClasses}
          />
        </div>
      </div>

      {/* WhatsApp */}
      <div>
        <label className={labelClasses}>WhatsApp</label>
        <div className="flex">
          <span className="inline-flex items-center rounded-l-lg border border-r-0 border-white/10 bg-white/[0.06] px-3 text-sm text-muted/70">
            +56
          </span>
          <input
            type="tel"
            required
            value={formData.whatsapp}
            onChange={(e) => updateField("whatsapp", e.target.value)}
            placeholder="9 1234 5678"
            className={`${inputClasses} rounded-l-none`}
          />
        </div>
      </div>

      {/* Grid: selects */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Chat Volume */}
        <div>
          <label className={labelClasses}>Volumen de chats mensuales</label>
          <select
            required
            value={formData.chatVolume}
            onChange={(e) => updateField("chatVolume", e.target.value)}
            className={`${inputClasses} ${!formData.chatVolume ? "text-muted/50" : ""}`}
          >
            <option value="" disabled>
              Seleccionar...
            </option>
            {chatVolumeOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#09090b] text-foreground">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* ERP */}
        <div>
          <label className={labelClasses}>¿Qué ERP o software usan hoy?</label>
          <select
            required
            value={formData.erp}
            onChange={(e) => updateField("erp", e.target.value)}
            className={`${inputClasses} ${!formData.erp ? "text-muted/50" : ""}`}
          >
            <option value="" disabled>
              Seleccionar...
            </option>
            {erpOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#09090b] text-foreground">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Marketing */}
      <div>
        <label className={labelClasses}>¿Qué están haciendo en marketing digital?</label>
        <textarea
          rows={2}
          value={formData.marketing}
          onChange={(e) => updateField("marketing", e.target.value)}
          placeholder="Google Ads, Meta Ads, SEO, nada aún..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button with BorderBeam */}
      <button
        type="submit"
        className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-mint-400 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
      >
        Continuar
        <MoveRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
        <BorderBeam size={120} duration={3} colorFrom="#4ade80" colorTo="#3b82f6" />
      </button>
    </form>
  );
}

/* ── Step 2: Google Calendar ── */

function StepTwoCalendar({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative">
      {/* Back button — dark on light background */}
      <button
        onClick={onBack}
        className="absolute left-3 top-3 z-20 rounded-full bg-white/80 p-1.5 text-gray-500 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-800"
        aria-label="Volver"
      >
        <ArrowLeft size={18} />
      </button>

      {/* Clipper: overflow-hidden crops top (header) and bottom (legal) */}
      <div className="relative w-full overflow-hidden rounded-b-xl border border-[#e5e7eb] h-[600px] md:h-[650px]">
        <iframe
          src={CALENDAR_URL}
          className="w-full border-0"
          style={{ height: "850px", marginTop: "-130px", marginBottom: "-100px" }}
          title="Agendar Demo Partsflow"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
