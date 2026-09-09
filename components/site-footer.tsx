import Link from "next/link"
import { CONTACTOS } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-neutral-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-base font-bold text-white">CABLAB</h3>
          <p>
            Engenharia civil e arquitectura.
            <br />
            {CONTACTOS.endereco}.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-base font-bold text-white">Contactos</h3>
          <p>
            <Link href={`mailto:${CONTACTOS.email1}`} className="text-white hover:underline">
              {CONTACTOS.email1}
            </Link>
            <br />
            <Link href={`mailto:${CONTACTOS.email2}`} className="text-white hover:underline">
              {CONTACTOS.email2}
            </Link>
            <br />
            <Link href={CONTACTOS.tel1Href} className="text-white hover:underline">
              {CONTACTOS.tel1}
            </Link>
            <br />
            <Link href={CONTACTOS.tel2Href} className="text-white hover:underline">
              {CONTACTOS.tel2}
            </Link>
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-base font-bold text-white">Empresa</h3>
          <p>
            Desde 2020 · Alvará Classe 6<br />
            NIF {CONTACTOS.nif}
            <br />
            <Link href="/sobre" className="text-white hover:underline">Sobre</Link>
            {" · "}
            <Link href="/obras" className="text-white hover:underline">Obras</Link>
            {" · "}
            <Link href="/contactos" className="text-white hover:underline">Contactos</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
