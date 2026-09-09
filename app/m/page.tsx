import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { CLIENTES, CONTACTOS, OBRAS, SERVICOS } from "@/lib/site"

export const metadata = { title: "CABLAB mobile" }

export default function MobileHome() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/img/obra-01.jpeg"
          alt="Moradias do portfólio CABLAB"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative px-5 py-12">
          <p className="eyebrow text-brand">Engenharia · Arquitectura · Angola</p>
          <h1 className="mt-3 text-4xl leading-tight">
            Da sua visão,
            <br />
            à próxima <span className="text-brand">grande obra.</span>
          </h1>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={CONTACTOS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link w-full px-2 text-xs"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a href={CONTACTOS.tel1Href} className="action-link action-dark w-full px-2 text-xs">
              <Phone size={18} aria-hidden="true" />
              Ligar agora
            </a>
          </div>
        </div>
      </section>

      <nav aria-label="Acesso rápido" className="grid grid-cols-2 gap-3 px-4 pt-6">
        {[
          ["/m/servicos", "Serviços", "7 áreas de actuação"],
          ["/m/obras", "Obras", "Portfólio e 3D"],
          ["/m/sobre", "Sobre nós", "Desde 2020"],
          ["/m/contactos", "Contacto", "Pedir orçamento"],
        ].map(([href, title, desc]) => (
          <Link key={href} href={href} className="rounded-md border bg-white p-4 shadow-sm">
            <span className="flex items-center justify-between font-semibold text-navy">
              {title}
              <ArrowRight size={16} aria-hidden="true" className="text-brand-ink" />
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">{desc}</span>
          </Link>
        ))}
      </nav>

      <section className="px-4 pt-10">
        <p className="eyebrow">O que fazemos</p>
        <h2 className="mt-2 text-2xl">Soluções que se complementam.</h2>
        <div className="mt-4 space-y-3">
          {SERVICOS.slice(0, 3).map((s) => (
            <Link key={s.id} href={`/m/servicos#${s.id}`} className="flex items-center gap-4 rounded-md border bg-white p-3 shadow-sm">
              {s.img && (
                <Image
                  src={s.img}
                  alt=""
                  width={96}
                  height={72}
                  className="h-18 w-24 shrink-0 rounded object-cover"
                />
              )}
              <span>
                <span className="block text-sm font-semibold text-navy">{s.titulo}</span>
                <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{s.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        <Link href="/m/servicos" className="text-link mt-4">
          Todos os serviços
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="px-4 pt-10">
        <p className="eyebrow">Portfólio</p>
        <h2 className="mt-2 text-2xl">O trabalho a ganhar forma.</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {OBRAS.slice(0, 4).map((o) => (
            <Link key={o.img} href="/m/obras" className="relative block aspect-[4/3] overflow-hidden rounded-md bg-navy">
              <Image src={o.img} alt={o.titulo} fill sizes="50vw" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 to-transparent p-3 pt-8 text-xs font-semibold text-white">
                {o.titulo}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface px-4 py-10 mt-10">
        <p className="eyebrow">Clientes e parceiros</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CLIENTES.map((c) => (
            <span key={c} className="border bg-white px-3 py-2 text-xs font-semibold text-navy">
              {c}
            </span>
          ))}
        </div>
        <Link href="/m/contactos" className="action-link mt-6 w-full">
          Pedir orçamento
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
