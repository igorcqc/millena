"use client";

import { ButtonLink } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppCtaLink({
  href,
  location,
  children,
  ...props
}: React.ComponentProps<typeof ButtonLink> & { location: string }) {
  return (
    <ButtonLink href={href} onClick={() => trackWhatsAppClick(location)} {...props}>
      {children}
    </ButtonLink>
  );
}
