"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MesaServida } from "@/components/sections/MesaServida";
import { Agitacion } from "@/components/sections/Agitacion";
import { EightyTwenty } from "@/components/sections/EightyTwenty";
import { ControlTower } from "@/components/sections/ControlTower";
import { Ecosistema } from "@/components/sections/Ecosistema";
import { CasosDeExito } from "@/components/sections/CasosDeExito";
import { Precios } from "@/components/sections/Precios";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";

export default function Home() {
  return (
    <BookingModalProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <MesaServida />
        <Agitacion />
        <EightyTwenty />
        <ControlTower />
        <Ecosistema />
        <CasosDeExito />
        <Precios />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </BookingModalProvider>
  );
}
