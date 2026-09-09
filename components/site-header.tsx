"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import { ArrowUpRight, MapPin, Menu, Phone, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACTOS, NAV } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="hidden bg-navy text-white md:block">
        <div className="site-container flex items-center justify-between gap-6 py-2 text-xs">
          <span className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            {CONTACTOS.enderecoCurto}
          </span>
          <a href={CONTACTOS.tel1Href} className="flex items-center gap-2 hover:text-brand">
            <Phone size={14} aria-hidden="true" />
            {CONTACTOS.tel1}
          </a>
        </div>
      </div>
      <div className="site-container flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="CABLAB — página inicial"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-cablab.png"
            alt="Logótipo CABLAB"
            width={1080}
            height={1080}
            priority
            className="h-12 w-auto sm:h-14"
          />
          <span aria-hidden="true">
            <span className="block text-2xl font-bold tracking-tight text-navy">CABLAB</span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
              ENGENHARIA & ARQUITECTURA
            </span>
          </span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn("nav-link", pathname === item.href && "nav-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contactos#orcamento"
          className="action-link hidden px-4 py-3 text-xs xl:inline-flex"
        >
          Pedir orçamento
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
        <button
          ref={trigger}
          type="button"
          className="flex size-12 items-center justify-center border lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t bg-white lg:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false)
              trigger.current?.focus()
            }
          }}
        >
          <div className="site-container py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "block border-b px-3 py-4 text-sm font-semibold",
                  pathname === item.href && "bg-surface text-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <form action="/obras" role="search" className="mt-4 flex border">
              <input
                name="q"
                aria-label="Pesquisar no portfólio"
                placeholder="Pesquisar no portfólio"
                maxLength={100}
                className="min-w-0 flex-1 p-3"
              />
              <button type="submit" aria-label="Pesquisar obras" className="px-4">
                <Search size={18} />
              </button>
            </form>
          </div>
        </nav>
      )}
    </header>
  )
}
