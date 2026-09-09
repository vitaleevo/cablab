import { ProjectGallery } from "@/components/project-gallery"
import { OBRAS, REFERENCIAS } from "@/lib/site"

export const metadata = { title: "Obras e portfólio", alternates: { canonical: "/obras" } }

export default function MobileObras() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Obras e portfólio</p>
      <h1 className="mt-2 text-3xl">O nosso trabalho, em perspectiva.</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        As fotografias ilustram o tipo de trabalho da CABLAB; as intervenções identificadas no
        portfólio estão listadas abaixo.
      </p>
      <div className="mt-6">
        <ProjectGallery items={OBRAS} searchable />
      </div>
      <h2 className="mt-10 text-2xl">Trabalhos referenciados</h2>
      <ul className="mt-4 space-y-3">
        {REFERENCIAS.map((item) => (
          <li key={item.titulo} className="border-l-2 border-brand py-1 pl-4">
            <p className="text-sm font-semibold">{item.titulo}</p>
            <p className="text-xs text-muted-foreground">{item.local}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
