import type { Metadata } from "next";
import { BookingModalProvider } from "@/context/BookingModalContext";

export const metadata: Metadata = {
  title: "Casos de Éxito | Partsflow",
  description:
    "Resultados reales de negocios de autopartes que automatizaron sus ventas con Partsflow.",
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return <BookingModalProvider>{children}</BookingModalProvider>;
}
