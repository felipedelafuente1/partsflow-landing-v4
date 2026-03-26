import { MessageSquare, ShoppingCart, Sun, type LucideIcon } from "lucide-react";

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
  videoUrl?: string;
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
    id: "euro-especialista",
    icon: MessageSquare,
    iconHexColor: "#4ade80",
    accentColor: "mint",
    category: "Repuestos automotriz",
    company: "Euro Especialista",
    location: "Chile",
    headline:
      "Cómo Euro Especialista pasó de un CRM generalista a tener data completa de su operación",
    metric: "Data en tiempo real",
    metricSub: "De productos, vendedores y chats",
    problem:
      "Trabajaban con un sistema demasiado básico, solo para contestar. No tenían datos de productos, vendedores ni de cómo se estaba atendiendo.",
    logo: "🏢",
    videoUrl: "https://www.youtube.com/shorts/_BnNm6BvpEw",
    quote:
      '"Antiguamente trabajamos con otro sistema pero era demasiado básico, solo para contestar. Hoy en día después de que llegó Partsflow hemos tenido bastantes cambios, sobre todo en lo que es recopilación de información."',
    quoteAuthor: "— Felipe, Jefe de Ventas, Euro Especialista",
    metrics: [
      {
        value: "100%",
        label: "Chats atendidos",
        sub: "Pueden responder todo lo que entra",
      },
      {
        value: "Tiempo real",
        label: "Data de productos",
        sub: "Vendidos, sin stock y oportunidades",
      },
      {
        value: "Priorización",
        label: "Chats priorizados",
        sub: "Foco en los chats que importan",
      },
    ],
    challengeTitle: "Sin visibilidad ni datos de su operación",
    challengeBody:
      "Euro Especialista trabajaba solo con WhatsApp y un sistema demasiado básico que solo servía para contestar. No tenían forma de saber cómo se estaba atendiendo, qué productos se pedían, ni cómo rendían sus vendedores. Muchos chats quedaban sin responder.",
    challengePoints: [
      "Solo funcionaban con WhatsApp, sin herramientas de gestión",
      "No sabían cómo se estaba atendiendo a los clientes",
      "No tenían data de los productos que se pedían",
      "No tenían visibilidad del rendimiento de sus vendedores",
      "No podían responder todos los chats que llegaban",
    ],
    resultsTitle: "Datos, priorización y más capacidad de respuesta",
    resultsBody:
      "Con Partsflow, Euro Especialista pasó de un sistema básico a tener control total de su operación. Ahora saben exactamente cuántos chats entran, qué productos se venden y cuáles no tienen en stock, y cómo atiende cada vendedor.",
    resultsPoints: [
      "Saben la cantidad exacta de chats que están entrando",
      "Tienen data de productos vendidos y sin stock",
      "Tienen data de cómo responden sus vendedores",
      "Aumentaron ventas priorizando los chats que importan",
      "Aumentaron la rapidez de respuesta",
    ],
  },
  {
    id: "maria-soto",
    icon: ShoppingCart,
    iconHexColor: "#3b82f6",
    accentColor: "electric",
    category: "Repuestos automotriz",
    company: "María Soto",
    location: "Chile",
    headline:
      "Cómo María Soto aumentó sus ventas un 34% en 3 meses con visibilidad total",
    metric: "+34% ventas en 3 meses",
    metricSub: "Con control total del canal online",
    problem:
      "No podían responder todos los chats y no tenían visibilidad de cómo funcionaban sus vendedores en el canal online.",
    logo: "🛒",
    videoUrl: "https://www.youtube.com/shorts/dl_-paC_MmE",
    quote:
      '"Para mí como encargado de ecommerce, lo que encuentro más beneficioso es que te da la capacidad de tener bajo control a los vendedores en el canal online, y también de cómo estamos con nuestros clientes."',
    quoteAuthor: "— Matías, Encargado de Ecommerce, María Soto",
    metrics: [
      {
        value: "+34%",
        label: "Ventas",
        sub: "Aumento en ventas en solo 3 meses",
      },
      {
        value: "100%",
        label: "Chats respondidos",
        sub: "Ningún chat queda sin atender",
      },
      {
        value: "Control total",
        label: "Visibilidad",
        sub: "Del canal y de cada vendedor",
      },
    ],
    challengeTitle: "Sin control del canal online ni de sus vendedores",
    challengeBody:
      "María Soto no podía responder todos los chats que recibía y no tenía forma de saber cómo estaban funcionando sus vendedores en el canal online. La falta de visibilidad impedía mejorar la operación.",
    challengePoints: [
      "No podían responder todos los chats que llegaban",
      "No tenían visibilidad de cómo funcionaban los vendedores",
      "Sin información del rendimiento del canal online",
    ],
    resultsTitle: "Visibilidad completa y ventas en alza",
    resultsBody:
      "Con Partsflow, María Soto logró responder el 100% de los chats, tener información clara de cómo va el canal y cómo atiende cada vendedor. El resultado: un aumento de 34% en ventas en solo 3 meses.",
    resultsPoints: [
      "Pueden responder todos los chats sin excepción",
      "Tienen información de cómo va el canal online",
      "Tienen visibilidad sobre el rendimiento de cada vendedor",
      "Aumentaron sus ventas un 34% en 3 meses",
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
    headline:
      "Cómo Repuestos del Sol creció más del doble sin contratar más vendedores",
    metric: "Más ventas, mismo equipo",
    metricSub: "Crecimiento sin sumar vendedores",
    problem:
      "El marketing digital trajo más clientes de los que podían atender. Necesitaban crecer sin llenar la empresa de vendedores.",
    logo: "☀️",
    videoUrl: "https://www.youtube.com/shorts/vOf6nZPvOTg",
    quote:
      '"Partimos con WhatsApp, empezamos a hacer trabajo de marca y empezaron a llegar muchos más clientes. Ahí entramos en un problema de cómo podemos responder todo, ya que no podíamos llenarnos de vendedores. Y ahí pensamos en implementar Partsflow."',
    quoteAuthor: "— José Ignacio, Gerente Comercial, Repuestos del Sol",
    metrics: [
      {
        value: "+Ventas",
        label: "Ecommerce propio",
        sub: "Aumento en ventas del canal digital",
      },
      {
        value: "0",
        label: "Vendedores extra",
        sub: "Crecieron sin contratar más",
      },
      {
        value: "Data completa",
        label: "Visibilidad",
        sub: "De chats, vendedores y operación",
      },
    ],
    challengeTitle: "Más clientes de los que podían atender",
    challengeBody:
      "Repuestos del Sol empezó a hacer marketing digital y los chats se multiplicaron. Sus vendedores no daban abasto para la cantidad de consultas entrantes, pero no podían simplemente contratar más gente. Necesitaban una forma de crecer sin aumentar el equipo.",
    challengePoints: [
      "El marketing digital trajo más chats de los que podían manejar",
      "Necesitaban crecer sin contratar más vendedores",
      "No tenían data sobre los chats que llegaban",
      "Solo funcionaban con WhatsApp",
    ],
    resultsTitle: "Crecimiento eficiente con el mismo equipo",
    resultsBody:
      "Con Partsflow, Repuestos del Sol pudo responder más chats sin sumar vendedores. Aumentaron las ventas de su ecommerce propio más del doble y ahora tienen data completa de cómo funciona su operación y cómo atiende cada vendedor.",
    resultsPoints: [
      "Responden más chats sin contratar más vendedores",
      "Aumentaron las ventas de su ecommerce propio",
      "Tienen data de cómo está funcionando la operación",
      "Tienen visibilidad de cómo atiende cada vendedor",
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
