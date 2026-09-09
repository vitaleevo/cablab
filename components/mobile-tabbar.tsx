"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, Home, Images, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const TABS = [
  { href: "/m", label: "Início", Icon: Home },
  { href: "/m/servicos", label: "Serviços", Icon: Briefcase },
  { href: "/m/obras", label: "Obras", Icon: Images },
  { href: "/m/contactos", label: "Contacto", Icon: Phone },
]

export function MobileTabBar() {
  const pathname = usePathname()
  return (
    <nav
      aria-label="Navegação mobile"
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 backdrop-blur"
    >
      <div className="grid grid-cols-4">
        {TABS.map(({ href, label, Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold",
                active ? "text-navy" : "text-muted-foreground"
              )}
            >
              <Icon size={22} aria-hidden="true" className={active ? "text-brand-ink" : undefined} />
              {label}
              <span className={cn("h-1 w-8 rounded-full", active ? "bg-brand" : "bg-transparent")} />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
