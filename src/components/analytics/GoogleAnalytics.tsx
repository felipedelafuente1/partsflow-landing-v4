import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function GoogleAnalytics() {
  // Si GTM está configurado, GA4 se maneja desde GTM
  if (!gaId || gtmId) return null;

  const adsConfig = adsId ? `gtag('config','${adsId}');` : "";

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');${adsConfig}`,
        }}
      />
    </>
  );
}
