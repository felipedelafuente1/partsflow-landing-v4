import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaso, isFullCase, casos } from "@/lib/casos";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import CasoPageClient from "./CasoPageClient";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return casos.filter(isFullCase).map((caso) => ({ id: caso.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const caso = getCaso(id);
  if (!caso || !isFullCase(caso)) return {};

  return {
    title: `${caso.headline} | Partsflow`,
    description: caso.problem,
    openGraph: {
      title: caso.headline,
      description: caso.problem,
      type: "article",
      url: `/casos/${caso.id}`,
    },
    alternates: {
      canonical: `/casos/${caso.id}`,
    },
  };
}

export default async function CasoPage({ params }: Props) {
  const { id } = await params;
  const caso = getCaso(id);
  if (!caso || !isFullCase(caso)) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Casos de Éxito",
        item: `${SITE_URL}/casos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caso.company,
        item: `${SITE_URL}/casos/${caso.id}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <CasoPageClient casoId={caso.id} />
    </>
  );
}
