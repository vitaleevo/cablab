import { ProjectGallery } from "@/components/project-gallery"
import { CheckList } from "@/components/content-sections"
import { OBRAS } from "@/lib/site"

export const metadata = { title: "Arquitectura e topografia" }

export default function MobileArquitectura() {
  return (
    <section className="px-4 py-8">
      <p className="eyebrow">Arquitectura</p>
      <h1 className="mt-2 text-3xl">Imagine antes de construir.</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Projectos, topografia e visualização 3D. As imagens abaixo são propostas 3D, não
        fotografias de obras concluídas.
      </p>
      <div className="mt-6 rounded-md border bg-surface p-5">
        <CheckList
          items={[
            "Tipologias residenciais e fachadas",
            "Volumetria e implantação de conjuntos",
            "Topografia e âmbito definido em proposta",
          ]}
        />
      </div>
      <div className="mt-6">
        <ProjectGallery items={OBRAS.filter((item) => item.cat === "projecto")} />
      </div>
    </section>
  )
}
