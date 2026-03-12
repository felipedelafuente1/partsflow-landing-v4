"use client";

import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Producto", href: "#producto" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Control Tower", href: "#control-tower" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Partsflow" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Parts<span className="text-mint-400">flow</span>
              </span>
            </a>
            <p className="max-w-[200px] text-sm text-white/40 leading-relaxed">
              Vende repuestos mientras duermes.
            </p>
            {/* Social proof dot */}
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulse" />
              27+ empresas activas
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-white/30">
              Links rápidos
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-mint-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-white/30">
              Contacto
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hola@partsflow.ai"
                className="flex items-center gap-2.5 text-sm text-white/50 transition-colors hover:text-mint-400"
              >
                <Mail size={15} className="text-mint-400/60" />
                hola@partsflow.ai
              </a>
              <a
                href="https://wa.me/56900000000?text=Hola%2C%20quiero%20saber%20más%20sobre%20Partsflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-mint-400/20 bg-mint-400/5 px-4 py-2.5 text-sm font-medium text-mint-400 transition-all hover:bg-mint-400/10 hover:border-mint-400/40"
              >
                <MessageCircle size={15} />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/25">
            © 2026 Partsflow AI. Hecho con ❤️ en Santiago, Chile.
          </p>
        </div>
      </div>
    </footer>
  );
}
