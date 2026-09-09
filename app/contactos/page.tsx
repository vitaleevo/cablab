"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CONTACTOS } from "@/lib/site"

export default function Contactos() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [mensagem, setMensagem] = useState("")

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim() || !telefone.trim() || !mensagem.trim()) {
      alert("Preencha nome, telefone e mensagem.")
      return
    }
    const texto = encodeURIComponent(`Olá CABLAB, sou ${nome.trim()} (${telefone.trim()}). ${mensagem.trim()}`)
    window.open(`https://wa.me/244923954236?text=${texto}`, "_blank")
    window.location.href = `mailto:${CONTACTOS.email1}?subject=${encodeURIComponent("Pedido site - " + nome.trim())}&body=${encodeURIComponent(mensagem.trim() + "\n\nTelefone: " + telefone.trim())}`
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-center text-[11px] font-bold tracking-[0.3em] text-muted-foreground">
        FALE <span className="text-brand-dark">CONNOSCO</span>
      </p>
      <h1 className="mt-1.5 text-center text-3xl font-light md:text-4xl">Contactos</h1>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>DADOS DE CONTACTO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              Email:{" "}
              <Link href={`mailto:${CONTACTOS.email1}`} className="font-bold hover:underline">
                {CONTACTOS.email1}
              </Link>
              <br />
              <Link href={`mailto:${CONTACTOS.email2}`} className="font-bold hover:underline">
                {CONTACTOS.email2}
              </Link>
            </p>
            <p>
              Tel:{" "}
              <Link href={CONTACTOS.tel1Href} className="font-bold hover:underline">
                {CONTACTOS.tel1}
              </Link>
              <br />
              <Link href={CONTACTOS.tel2Href} className="font-bold hover:underline">
                {CONTACTOS.tel2}
              </Link>
            </p>
            <p>Endereço: {CONTACTOS.endereco}.</p>
            <p>NIF: {CONTACTOS.nif}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PEDIR ORÇAMENTO</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={enviar} className="space-y-3">
              <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required aria-label="Nome" />
              <Input placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required aria-label="Telefone" />
              <Textarea placeholder="Mensagem — que obra precisa?" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required aria-label="Mensagem" rows={5} />
              <Button type="submit" className="w-full rounded-sm bg-brand font-extrabold tracking-widest text-ink hover:bg-brand-dark">
                ENVIAR VIA WHATSAPP
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
