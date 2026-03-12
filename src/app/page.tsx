import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { EightyTwenty } from "@/components/sections/EightyTwenty";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoCloud />
      <EightyTwenty />
    </main>
  );
}
