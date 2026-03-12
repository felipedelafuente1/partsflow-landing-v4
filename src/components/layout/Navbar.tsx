"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";

const navLinks = [
  { label: "Producto", href: "#producto" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Partsflow" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Parts<span className="text-mint-400">flow</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-mint-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
          >
            Solicitar Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                openModal();
                setMobileOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-mint-300"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
