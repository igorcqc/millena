// Thin tracking helper. Pushes to window.dataLayer (Google Tag Manager
// convention) so Meta Pixel/CAPI, GA4, and Google Ads conversion tracking
// can all be wired inside GTM without touching component code.
//
// NOTE: no GTM container / Meta Pixel ID is configured yet — see
// 22-analytics-tracking.md. Wiring the real container ID and verifying
// events in Meta Events Manager / GTM Preview is a manual step (see README).

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { click_location: location });
}
