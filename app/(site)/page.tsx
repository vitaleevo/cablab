import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react"
import {
  CheckList,
  Clients,
  ContactCta,
  ProcessSteps,
  SectionHeading,
} from "@/components/content-sections"
import { SERVICOS } from "@/lib/site"
import { CABLAB_JSON_LD } from "@/lib/seo"

export const metadata = { alternates: { canonical: "/" } }

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CABLAB_JSON_LD) }}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grid lg:min-h-[620px] lg:grid-cols-[1fr_1fr]">
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-12 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2))]">
            <p className="eyebrow text-brand">Engenharia civil · Arquitectura · Angola</p>
            <h1 className="mt-6 max-w-xl text-[clamp(2.75rem,5.2vw,4.75rem)]">
              Da sua visão,
              <br />à próxima
              <br />
              <span className="text-brand">grande obra.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
              Construímos e transformamos espaços. Da arquitectura à execução, a CABLAB acompanha o
              seu projecto com compromisso e atenção a cada etapa.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href="/contactos" className="action-link">
                Vamos falar do seu projecto
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/obras"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-8"
              >
                Explorar obras
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-12 flex items-center gap-3 text-xs text-white/70">
              <span className="h-px w-8 bg-brand" />
              Empresa angolana · Desde 2020
            </p>
          </div>
          <div className="relative min-h-80 lg:min-h-full">
            <Image
              src="/img/obra-01.jpeg"
              alt="Conjunto de moradias do portfólio CABLAB ao final da tarde"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute right-6 bottom-8 left-6 flex items-end justify-between gap-4 text-white sm:right-12 sm:left-12">
              <div>
                <p className="eyebrow text-brand">O que nos move</p>
                <p className="mt-2 text-2xl font-semibold leading-tight">
                  Espaços para viver.
                  <br />
                  Estruturas para o futuro.
                </p>
              </div>
              <Link
                href="/obras"
                aria-label="Ver portfólio de obras"
                className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/60 hover:bg-white/15"
              >
                <MoveUpRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="border-b bg-surface">
        <dl className="site-container grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {[
            ["2020", "Ano de constituição"],
            ["Classe 6", "Alvará de construção"],
            ["7 áreas", "Soluções integradas"],
            ["Angola", "Actuação nacional"],
          ].map(([value, label]) => (
            <div key={value} className="border-l-2 border-brand pl-4">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-xl font-semibold text-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <section className="site-container section-space grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/img/obra-11.jpeg"
            alt="Trabalhos de construção de estruturas residenciais"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute right-0 bottom-0 bg-brand px-6 py-4 text-sm font-semibold">
            Do projecto à construção.
          </span>
        </div>
        <div>
          <SectionHeading
            eyebrow="Conheça a CABLAB"
            title="O rigor da engenharia. A visão da arquitectura."
            description="Somos uma empresa angolana constituída em 2020, com sede em Luanda. Reunimos construção civil, arquitectura e fiscalização para responder às necessidades de cada intervenção."
          />
          <CheckList
            items={[
              "Construção de edifícios e infra-estruturas",
              "Projectos de arquitectura e topografia",
              "Compromisso com a qualidade dos contratos",
            ]}
          />
          <Link href="/sobre" className="text-link mt-8">
            Mais sobre a nossa empresa
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="bg-surface">
        <div className="site-container section-space">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="O que fazemos" title="Soluções que se complementam." />
            <Link href="/servicos" className="text-link mb-8">
              Todos os serviços
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICOS.slice(0, 3).map((s, i) => (
              <article key={s.id} className="photo-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {s.img && (
                    <Image
                      src={s.img}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="eyebrow">0{i + 1} / Engenharia</span>
                  <h3 className="mt-3">{s.titulo}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                  <Link href={`/servicos#${s.id}`} className="text-link mt-6">
                    Conhecer o serviço
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Portfólio"
          title="Veja o trabalho ganhar forma."
          description="Explore registos de construção, espaços residenciais, exteriores e estudos de arquitectura."
        />
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          {[
            { img: "/img/obra-06.jpeg", title: "Habitação e espaços de vida", cat: "habitacao" },
            { img: "/img/obra-19.jpeg", title: "Arquitectura e visualização 3D", cat: "projecto" },
          ].map((p) => (
            <Link
              key={p.cat}
              href={`/obras?categoria=${p.cat}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-md bg-navy"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 767px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between gap-4">
                <h3 className="text-white">{p.title}</h3>
                <ArrowUpRight className="shrink-0 text-brand" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ProcessSteps />
      <Clients />
      <ContactCta />
    </>
  )
}
