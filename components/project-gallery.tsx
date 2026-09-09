"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, Search, X } from "lucide-react"
import { CATEGORIAS, type Obra, type Categoria } from "@/lib/site"
import { filterPortfolio, validCategory } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export function ProjectGallery({
  items,
  searchable = false,
}: {
  items: Obra[]
  searchable?: boolean
}) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<Categoria | "todos">("todos")
  const [selected, setSelected] = useState<Obra | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)
  const visible = filterPortfolio(items, query, category)
  const isOpen = selected !== null

  useEffect(() => {
    if (!searchable) return
    function sync() {
      const params = new URLSearchParams(window.location.search)
      setQuery((params.get("q") ?? "").slice(0, 100))
      setCategory(validCategory(params.get("categoria")))
    }
    sync()
    window.addEventListener("popstate", sync)
    return () => window.removeEventListener("popstate", sync)
  }, [searchable])

  useEffect(() => {
    if (!isOpen) return
    const modal = dialog.current
    const previousOverflow = document.body.style.overflow
    modal?.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      modal?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function updateFilters(nextQuery: string, nextCategory: Categoria | "todos") {
    setQuery(nextQuery)
    setCategory(nextCategory)
    if (searchable) {
      const url = new URL(window.location.href)
      if (nextQuery) url.searchParams.set("q", nextQuery)
      else url.searchParams.delete("q")
      if (nextCategory !== "todos") url.searchParams.set("categoria", nextCategory)
      else url.searchParams.delete("categoria")
      window.history.replaceState(null, "", url)
    }
  }
  function close() {
    dialog.current?.close()
    setSelected(null)
    lastTrigger.current?.focus()
  }
  function step(direction: number) {
    if (!selected) return
    const index = visible.findIndex((item) => item.img === selected.img)
    setSelected(visible[(index + direction + visible.length) % visible.length])
  }
  return (
    <>
      {searchable && (
        <div className="mb-8 space-y-6">
          <div className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
            <div>
              <label htmlFor="portfolio-search" className="field-label">
                Pesquisar no portfólio
              </label>
              <div className="relative">
                <Search
                  size={20}
                  aria-hidden="true"
                  className="absolute top-4 left-4 text-muted-foreground"
                />
                <input
                  id="portfolio-search"
                  type="search"
                  className="field pl-12"
                  placeholder="Experimente: piscina, moradia, fachada…"
                  value={query}
                  maxLength={100}
                  onChange={(event) => updateFilters(event.target.value, category)}
                />
              </div>
            </div>
            <p role="status" className="py-3 text-sm text-muted-foreground">
              {visible.length}{" "}
              {visible.length === 1 ? "registo encontrado" : "registos encontrados"}
            </p>
          </div>
          <div
            role="group"
            aria-label="Filtrar obras por categoria"
            className="flex flex-wrap gap-2"
          >
            {[["todos", "Todos"], ...Object.entries(CATEGORIAS)].map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-pressed={category === id}
                onClick={() => updateFilters(query, id as Categoria | "todos")}
                className={cn(
                  "min-h-12 rounded border px-4 py-3 text-sm font-semibold transition-colors",
                  category === id ? "border-navy bg-navy text-white" : "bg-white hover:border-navy",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      {visible.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article key={item.img} className="photo-card">
              <button
                type="button"
                aria-label={`Ampliar: ${item.titulo}`}
                className="group block w-full text-left"
                onClick={(event) => {
                  lastTrigger.current = event.currentTarget
                  setSelected(item)
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                    <Maximize2 size={16} aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <p className="eyebrow">{CATEGORIAS[item.cat]}</p>
                  <h3 className="mt-3 text-lg">{item.titulo}</h3>
                </div>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed bg-surface px-6 py-16 text-center">
          <Search aria-hidden="true" className="mx-auto text-muted-foreground" size={32} />
          <h3 className="mt-6">Não encontrámos registos para esta pesquisa.</h3>
          <p className="mt-3 text-muted-foreground">
            Experimente outro termo ou volte a mostrar todas as categorias.
          </p>
          <button
            type="button"
            onClick={() => updateFilters("", "todos")}
            className="action-link mt-6"
          >
            Limpar pesquisa e filtros
          </button>
        </div>
      )}
      {selected && (
        <dialog
          ref={dialog}
          aria-labelledby="gallery-title"
          aria-describedby="gallery-caption"
          className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-5xl overflow-hidden rounded-md border-0 bg-navy p-0 text-white shadow-2xl backdrop:bg-black/85"
          onCancel={(event) => {
            event.preventDefault()
            close()
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault()
              step(1)
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault()
              step(-1)
            }
          }}
        >
          <div className="flex items-center justify-between gap-4 p-4">
            <p id="gallery-title" className="text-lg font-semibold">
              {selected.titulo}
            </p>
            <button
              autoFocus
              type="button"
              onClick={close}
              aria-label="Fechar imagem"
              className="flex size-12 shrink-0 items-center justify-center rounded border border-white/40"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="relative h-[min(58dvh,640px)] bg-black/30">
            <Image
              src={selected.img}
              alt={selected.titulo}
              fill
              sizes="(max-width: 1023px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-4 p-4">
            <button
              type="button"
              aria-label="Imagem anterior"
              className="flex size-12 shrink-0 items-center justify-center border border-white/40"
              onClick={() => step(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <p id="gallery-caption" className="text-center text-xs text-white/80">
              {CATEGORIAS[selected.cat]} ·{" "}
              {visible.findIndex((item) => item.img === selected.img) + 1} de {visible.length}
            </p>
            <button
              type="button"
              aria-label="Imagem seguinte"
              className="flex size-12 shrink-0 items-center justify-center border border-white/40"
              onClick={() => step(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </dialog>
      )}
    </>
  )
}
