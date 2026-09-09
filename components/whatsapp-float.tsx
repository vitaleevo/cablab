import { MessageCircle } from "lucide-react"
import { CONTACTOS } from "@/lib/site"
export function WhatsAppFloat() {
  return (
    <a
      href={CONTACTOS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a CABLAB no WhatsApp (abre nova janela)"
      className="whatsapp-float fixed right-4 bottom-20 z-30 flex size-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-colors hover:bg-ink sm:right-6 sm:bottom-6 sm:size-14"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
