import type { Metadata } from "next";
import CasosListingClient from "./CasosListingClient";

export const metadata: Metadata = {
  title: "Casos de Éxito | Partsflow",
  description:
    "Resultados reales de negocios de autopartes que automatizaron sus ventas con Partsflow. Métricas verificadas, sin adornos.",
  openGraph: {
    title: "Casos de Éxito | Partsflow",
    description:
      "Resultados reales de negocios de autopartes que automatizaron sus ventas con Partsflow.",
    type: "website",
    url: "/casos",
  },
  alternates: {
    canonical: "/casos",
  },
};

export default function CasosPage() {
  return <CasosListingClient />;
}
