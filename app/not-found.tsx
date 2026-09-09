import Link from "next/link"
import { ArrowLeft } from "lucide-react"
export default function NotFound() {
  return (
    <section className="site-container section-space text-center">
      <p className="eyebrow">Erro 404</p>
      <h1 className="mt-4">Esta página não foi encontrada.</h1>
      <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
        O endereço pode ter mudado. Explore os nossos serviços ou volte à página inicial para
        continuar.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="action-link">
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar ao início
        </Link>
        <Link href="/servicos" className="action-link action-outline">
          Conhecer os serviços
        </Link>
      </div>
    </section>
  )
}
