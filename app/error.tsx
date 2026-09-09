"use client"
import Link from "next/link"
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="site-container section-space text-center">
      <p className="eyebrow">Algo não correu bem</p>
      <h1 className="mt-4">Não foi possível mostrar esta página.</h1>
      <p className="mt-6 text-muted-foreground">Tente novamente ou volte ao início.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className="action-link">
          Tentar novamente
        </button>
        <Link href="/" className="action-link action-outline">
          Voltar ao início
        </Link>
      </div>
    </section>
  )
}
