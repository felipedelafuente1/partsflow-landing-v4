"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { EightyTwenty } from "@/components/sections/EightyTwenty";
import { ControlTower } from "@/components/sections/ControlTower";
import { CasosDeExito } from "@/components/sections/CasosDeExito";
import { BookingModalProvider } from "@/context/BookingModalContext";

export default function Home() {
  return (
    <BookingModalProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <LogoCloud />
        <EightyTwenty />
        <ControlTower />
        <CasosDeExito />
      </main>
    </BookingModalProvider>
  );
}
