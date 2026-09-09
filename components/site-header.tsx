"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MapPin, Menu, Phone, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACTOS, NAV } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-4 py-2.5">
          <Link href="/" className="mr-auto flex items-center gap-2.5">
            <span className="flex h-9 w-11 items-center justify-center rounded-sm bg-brand text-xl font-black tracking-tighter text-ink">
              CA
            </span>
            <span className="leading-none">
              <span className="block text-xl font-extrabold text-ink">CABLAB</span>
              <span className="block text-[10px] tracking-[0.3em] text-ink">CONSTRUCTION</span>
            </span>
          </Link>
          <div className="hidden items-center gap-2 text-[13px] text-neutral-800 sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border">
              <Phone className="h-4 w-4" />
            </span>
            <span>
              <b className="block">{CONTACTOS.tel1}</b>
              <span className="text-xs text-muted-foreground">{CONTACTOS.email1}</span>
            </span>
          </div>
          <div className="hidden items-center gap-2 text-[13px] text-neutral-800 md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border">
              <MapPin className="h-4 w-4" />
            </span>
            <span>
              <b className="block">Camama, Rua do Congo</b>
              <span className="text-xs text-muted-foreground">Luanda — Angola</span>
            </span>
          </div>
          <form
            className="hidden items-center border lg:flex"
            role="search"
            action="/obras"
            method="get"
          >
            <input
              name="q"
              placeholder="Pesquisar aqui"
              aria-label="Pesquisar"
              className="bg-transparent px-2.5 py-2 text-sm outline-none"
            />
            <button type="submit" aria-label="Pesquisar" className="px-2.5">
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center px-4">
          <div className={cn("flex gap-1 max-md:w-full max-md:flex-col", !open && "max-md:hidden")}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3.5 py-3.5 text-xs font-bold tracking-widest transition-colors hover:bg-brand hover:text-ink",
                  pathname === item.href && "bg-brand text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="ml-auto bg-brand p-2.5 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="ml-auto hidden items-center gap-4 px-2 text-xs text-neutral-400 max-md:hidden">
            <Link href="#" aria-label="Facebook" className="hover:text-brand">f</Link>
            <Link href="#" aria-label="Google" className="hover:text-brand">G+</Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-brand">in</Link>
            <Link href={CONTACTOS.whatsapp} aria-label="WhatsApp" className="hover:text-brand">✆</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
