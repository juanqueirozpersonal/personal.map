import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/pemap";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card/90 text-silver shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur transition-all duration-300 hover:border-silver hover:brightness-125 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
