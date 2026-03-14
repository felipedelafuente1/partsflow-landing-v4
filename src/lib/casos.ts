import { MessageSquare, Truck, Sun, type LucideIcon } from "lucide-react";

export type CasoMetric = { value: string; label: string; sub: string };

export type Caso = {
  id: string;
  icon: LucideIcon;
  iconHexColor: string;
  accentColor: "mint" | "electric" | "purple";
  category: string;
  company: string;
  location: string;
  headline: string;
  metric: string;
  metricSub: string;
  problem: string;
  logo: string;
  // Full page fields — undefined means teaser only
  quote?: string;
  quoteAuthor?: string;
  metrics?: CasoMetric[];
  challengeTitle?: string;
  challengeBody?: string;
  challengePoints?: string[];
  resultsTitle?: string;
  resultsBody?: string;
  resultsPoints?: string[];
};

export const casos: Caso[] = [
  {
    id: "piamonte",
    icon: MessageSquare,
    iconHexColor: "#4ade80",
    accentColor: "mint",
    category: "Repuestos automotriz",
    company: "Piamonte Repuestos",
    location: "Santiago, Chile",
    headline: "Cómo Julia ayudó a Piamonte a duplicar sus cotizaciones",
    metric: "Tasa de cotización duplicada",
    metricSub: "En los primeros 60 días",
    problem:
      "Sus vendedores pasaban más tiempo buscando códigos OEM que cerrando ventas. El cuello de botella era el trabajo manual previo a cotizar.",
    logo: "🏢",
    quote:
      '"Julia cambió completamente nuestra forma de vender. Ahora nuestros vendedores se enfocan en cerrar, no en buscar códigos."',
    quoteAuthor: "— Piamonte Repuestos",
    metrics: [
      { value: "2x", label: "Cotizaciones", sub: "Tasa de cotización duplicada" },
      { value: "< 1 min", label: "Tiempo respuesta", sub: "Respuesta automática" },
      { value: "100%", label: "Chats atendidos", sub: "Ningún chat sin responder" },
    ],
    challengeTitle: "Demasiado trabajo manual antes de poder cotizar",
    challengeBody:
      "Piamonte Repuestos recibía cientos de consultas diarias por WhatsApp. Sus vendedores pasaban más tiempo buscando códigos OEM y pidiendo datos técnicos que cerrando ventas. El cuello de botella era claro: demasiado trabajo manual antes de poder cotizar.",
    resultsTitle: "Vendedores enfocados en cerrar, no en buscar",
    resultsBody:
      "Con Julia, la IA se encarga de filtrar clientes, pedir datos técnicos y buscar códigos OEM automáticamente. Los vendedores ahora reciben la \"mesa servida\" y solo se dedican a poner precio y cerrar. Duplicaron su tasa de cotización en el primer mes.",
    resultsPoints: [
      "Tasa de cotización duplicada en 60 días",
      "Respuesta automática en menos de 1 minuto",
      "100% de chats atendidos, sin excepciones",
    ],
  },
  {
    id: "inalco",
    icon: Truck,
    iconHexColor: "#3b82f6",
    accentColor: "electric",
    category: "Distribución de repuestos",
    company: "Inalco",
    location: "Chile",
    headline: "Julia redujo el tiempo de respuesta de Inalco en un 60%",
    metric: "+35% ventas cerradas por mes",
    metricSub: "98% satisfacción de clientes",
    problem:
      "Tiempos de respuesta lentos hacían que clientes se fueran con la competencia antes de recibir una cotización.",
    logo: "🚛",
    quote:
      '"La velocidad de respuesta que logramos con Julia nos diferencia de la competencia. Los clientes notan la diferencia."',
    quoteAuthor: "— Inalco",
    metrics: [
      { value: "-60%", label: "Tiempo", sub: "Reducción en tiempo de respuesta" },
      { value: "+35%", label: "Ventas cerradas", sub: "Más cierres por mes" },
      { value: "98%", label: "Satisfacción", sub: "Clientes satisfechos" },
    ],
    challengeTitle: "Un equipo sobrecargado perdiendo clientes por lentitud",
    challengeBody:
      "Inalco tenía un equipo de ventas sobrecargado. Los tiempos de respuesta eran lentos y muchos clientes se iban con la competencia antes de recibir una cotización. Necesitaban una forma de acelerar el proceso sin perder calidad en la atención.",
    resultsTitle: "Más velocidad, más cierres, clientes más felices",
    resultsBody:
      "Julia redujo el tiempo de respuesta en un 60%. Filtra y prepara cada consulta antes de que el vendedor intervenga, permitiéndoles cerrar más ventas en menos tiempo. Los clientes valoran la rapidez y Inalco se posicionó como líder en servicio.",
    resultsPoints: [
      "60% menos tiempo de respuesta por consulta",
      "35% más ventas cerradas cada mes",
      "98% de satisfacción de clientes",
    ],
  },
  {
    id: "repuestos-del-sol",
    icon: Sun,
    iconHexColor: "#8b5cf6",
    accentColor: "purple",
    category: "Venta de repuestos",
    company: "Repuestos del Sol",
    location: "Chile",
    headline: "Julia ayudó a Repuestos del Sol a vender un 40% más",
    metric: "Atención 24/7 sin guardia humana",
    metricSub: "0 consultas sin atender",
    problem:
      "Perdían ventas los fines de semana y en horarios nocturnos — los clientes impacientes se iban con quien respondiera primero.",
    logo: "☀️",
    quote:
      '"Antes perdíamos ventas los fines de semana. Ahora Julia filtra todo y el lunes empezamos con la mesa servida."',
    quoteAuthor: "— Repuestos del Sol",
    metrics: [
      { value: "+40%", label: "Ventas", sub: "Aumento en ventas totales" },
      { value: "24/7", label: "Cobertura", sub: "Atención sin interrupciones" },
      { value: "0", label: "Chats perdidos", sub: "Ninguna consulta sin atender" },
    ],
    challengeTitle: "Ventas que se escapaban fuera del horario laboral",
    challengeBody:
      "Repuestos del Sol perdía un porcentaje significativo de ventas fuera del horario laboral. Los fines de semana y noches, los chats se acumulaban sin respuesta. Los clientes impacientes se iban con quien respondiera primero.",
    resultsTitle: "El lunes arrancan con la mesa servida",
    resultsBody:
      "Con Julia atendiendo 24/7, cada consulta recibe respuesta inmediata sin importar el horario. Filtra y prepara las cotizaciones para que el equipo de ventas arranque el lunes con todo listo. Las ventas aumentaron un 40% en los primeros dos meses.",
    resultsPoints: [
      "40% más ventas en los primeros dos meses",
      "Atención 24/7 sin guardia humana",
      "Cero consultas sin respuesta los fines de semana",
    ],
  },
];

export function getCaso(id: string): Caso | undefined {
  return casos.find((c) => c.id === id);
}

/** Returns true if the case has full page content (not just a teaser) */
export function isFullCase(caso: Caso): boolean {
  return !!caso.metrics && !!caso.challengeTitle;
}

/** Returns the href for a case — full page if available, /casos otherwise */
export function getCasoHref(caso: Caso): string {
  return isFullCase(caso) ? `/casos/${caso.id}` : "/casos";
}
