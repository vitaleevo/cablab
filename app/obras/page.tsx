"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CLIENTES, OBRAS, type Categoria } from "@/lib/site"

const FILTROS: { id: "todos" | Categoria; label: string }[] = [
  { id: "todos", label: "TODOS" },
  { id: "edificios", label: "EDIFÍCIOS" },
  { id: "habitacao", label: "HABITAÇÃO" },
  { id: "exteriores", label: "EXTERIORES" },
  { id: "projecto", label: "PROJECTO 3D" },
]

export default function Obras() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]["id"]>("todos")
  const [ampliada, setAmpliada] = useState<string | null>(null)
  const visiveis = OBRAS.filter((o) => filtro === "todos" || o.cat === filtro)

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
        O NOSSO <span className="text-brand-dark">TRABALHO</span>
      </p>
      <h1 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Obras e portfólio</h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-700">
        Administração Municipal da Quilenda · Escritório IDA-MOSAP no Kuito · Residências no
        Benfica e Nova Vida · Piscina no Kifica · Conjuntos habitacionais · Preventório Infantil
        na Rocha Pinto · 7 moageiras no Cuanza Sul · Escritório em Cabinda.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={cn(
              "cursor-pointer border px-4 py-2 text-xs font-extrabold tracking-widest transition-colors",
              filtro === f.id
                ? "border-brand bg-brand text-ink"
                : "border-neutral-300 bg-white hover:border-brand"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {visiveis.map((o) => (
          <Card key={o.img} className="cursor-zoom-in pt-0" onClick={() => setAmpliada(o.img)}>
            <div className="relative h-52 w-full overflow-hidden rounded-t-xl">
              <Image src={o.img} alt={o.titulo} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <CardHeader>
              <Badge className="w-fit bg-brand font-extrabold tracking-widest text-ink hover:bg-brand">
                {FILTROS.find((f) => f.id === o.cat)?.label}
              </Badge>
              <CardTitle>{o.titulo.toUpperCase()}</CardTitle>
              <CardDescription>{o.local}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {ampliada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setAmpliada(null)}
        >
          <button aria-label="Fechar" className="absolute top-4 right-4 text-white">
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image src={ampliada} alt="Obra ampliada" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}

      <h2 className="mt-14 text-center text-2xl font-light">Clientes e parceiros</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {CLIENTES.map((c) => (
          <span key={c} className="border bg-white px-4 py-2.5 text-sm font-bold">
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
