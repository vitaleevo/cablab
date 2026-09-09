import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { CONTACTOS } from "@/lib/site"

export function WhatsAppFloat() {
  return (
    <Link
      href={CONTACTOS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
