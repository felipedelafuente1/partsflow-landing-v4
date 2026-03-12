import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Partsflow | Automatización Inteligente de Ventas para Autopartes",
  description:
    "Automatiza el 80% de tu proceso de venta de autopartes con IA. Tu equipo cierra el 20% que importa.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
