"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { whatsappLink, whatsappMessages } from "@/content/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessages.hero)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_button")}
      aria-label="Falar no WhatsApp com a Dra. Millena Curty"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rose text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
