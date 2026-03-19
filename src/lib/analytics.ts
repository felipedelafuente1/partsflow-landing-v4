type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };

  if (w.dataLayer) {
    w.dataLayer.push({ event: eventName, ...params });
  }

  if (w.gtag) {
    w.gtag("event", eventName, params);
  }
}

export function trackDemoBooking() {
  trackEvent("demo_booking_click", { cta_location: "booking_modal" });
}

export function trackWhatsAppClick() {
  trackEvent("whatsapp_click", { cta_location: "widget" });
}

export function trackCTAClick(location: string) {
  trackEvent("cta_click", { cta_location: location });
}
