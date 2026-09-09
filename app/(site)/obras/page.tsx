import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { Clients, ContactCta, PageIntro, SectionHeading } from "@/components/content-sections"
import { ProjectGallery } from "@/components/project-gallery"
import { OBRAS, REFERENCIAS } from "@/lib/site"
export const metadata: Metadata = {
  title: "Obras e portfólio",
  description:
    "Explore o portfólio CABLAB: habitação, edifícios, piscinas, obras em construção e projectos de arquitectura 3D.",
  alternates: { canonical: "/obras" },
}
export default function Obras() {
  return (
    <>
      <PageIntro
        eyebrow="Obras e portfólio"
        title="O nosso trabalho, em perspectiva."
        description="Da obra em curso ao espaço concluído. Conheça os registos do portfólio institucional e as propostas de arquitectura em 3D."
        image="/img/obra-06.jpeg"
      />
      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Galeria"
          title="Cada imagem, uma etapa do trabalho."
          description="Pesquise por tipo de espaço, selecione uma categoria e abra as imagens para ver os detalhes. As fotografias ilustram o tipo de trabalho da CABLAB; as intervenções identificadas no portfólio estão listadas na secção seguinte."
        />
        <ProjectGallery items={OBRAS} searchable />
      </section>
      <section className="bg-surface">
        <div className="site-container section-space">
          <SectionHeading
            eyebrow="Presença em Angola"
            title="Trabalhos referenciados no portfólio."
            description="Algumas intervenções identificadas na apresentação institucional da CABLAB, em diferentes províncias."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REFERENCIAS.map((item) => (
              <article key={item.titulo} className="border-l-2 border-brand py-3 pl-6">
                <h3 className="text-lg">{item.titulo}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} aria-hidden="true" />
                  {item.local}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Clients />
      <ContactCta title="O seu projecto pode ser o próximo." />
    </>
  )
}
