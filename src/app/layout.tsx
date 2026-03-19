import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SITE_URL, COMPANY_NAME, COMPANY_DESCRIPTION } from "@/lib/constants";
import { faqs } from "@/lib/faq-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Partsflow | Automatización Inteligente de Ventas para Autopartes",
  description: COMPANY_DESCRIPTION,
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Partsflow | Automatización Inteligente de Ventas para Autopartes",
    description: COMPANY_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Partsflow - Automatización de Ventas para Autopartes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partsflow | Automatización Inteligente de Ventas para Autopartes",
    description: COMPANY_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: COMPANY_DESCRIPTION,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: COMPANY_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "IA experta en autopartes que automatiza el 80% del proceso de venta.",
  offers: {
    "@type": "Offer",
    price: "350000",
    priceCurrency: "CLP",
    description: "Desde $350.000 CLP mensuales",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={softwareJsonLd} />
        <JsonLd data={faqJsonLd} />
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
