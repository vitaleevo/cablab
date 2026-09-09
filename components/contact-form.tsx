"use client"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react"
import { SERVICOS } from "@/lib/site"
import {
  EMPTY_REQUEST,
  prepareContact,
  validateContact,
  type ContactErrors,
  type ContactRequest,
} from "@/lib/contact"

export function ContactForm() {
  const [values, setValues] = useState<ContactRequest>(EMPTY_REQUEST)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [prepared, setPrepared] = useState<ReturnType<typeof prepareContact> | null>(null)
  const feedback = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function readService() {
      const id = new URLSearchParams(window.location.search).get("servico")
      if (SERVICOS.some((service) => service.id === id))
        setValues((current) => ({ ...current, servico: id! }))
    }
    readService()
    window.addEventListener("popstate", readService)
    return () => window.removeEventListener("popstate", readService)
  }, [])
  function change(field: keyof ContactRequest, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setPrepared(null)
  }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validateContact(values)
    setErrors(validation)
    if (Object.keys(validation).length) {
      const field = Object.keys(validation)[0]
      document.getElementById(field)?.focus()
      setPrepared(null)
      return
    }
    setPrepared(prepareContact(values))
    requestAnimationFrame(() => feedback.current?.focus())
  }
  function errorProps(field: keyof ContactRequest) {
    return {
      "aria-invalid": errors[field] ? (true as const) : undefined,
      "aria-describedby": errors[field] ? `${field}-error` : undefined,
    }
  }
  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="field-label">
            Nome <span className="text-destructive">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            className="field"
            autoComplete="name"
            maxLength={100}
            required
            value={values.nome}
            onChange={(event) => change("nome", event.target.value)}
            {...errorProps("nome")}
          />
          {errors.nome && (
            <p id="nome-error" className="mt-2 text-sm text-destructive">
              {errors.nome}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="telefone" className="field-label">
            Telefone <span className="text-destructive">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+244"
            className="field"
            maxLength={30}
            required
            value={values.telefone}
            onChange={(event) => change("telefone", event.target.value)}
            {...errorProps("telefone")}
          />
          {errors.telefone && (
            <p id="telefone-error" className="mt-2 text-sm text-destructive">
              {errors.telefone}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="servico" className="field-label">
          Serviço de interesse <span className="font-normal text-muted-foreground">(opcional)</span>
        </label>
        <select
          id="servico"
          name="servico"
          className="field"
          value={values.servico}
          onChange={(event) => change("servico", event.target.value)}
          {...errorProps("servico")}
        >
          <option value="">Ainda não sei / outro pedido</option>
          {SERVICOS.map((service) => (
            <option value={service.id} key={service.id}>
              {service.titulo}
            </option>
          ))}
        </select>
        {errors.servico && (
          <p id="servico-error" className="mt-2 text-sm text-destructive">
            {errors.servico}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="local" className="field-label">
          Localização do projecto{" "}
          <span className="font-normal text-muted-foreground">(opcional)</span>
        </label>
        <input
          id="local"
          name="local"
          className="field"
          placeholder="Província, município ou bairro"
          maxLength={160}
          value={values.local}
          onChange={(event) => change("local", event.target.value)}
          {...errorProps("local")}
        />
        {errors.local && (
          <p id="local-error" className="mt-2 text-sm text-destructive">
            {errors.local}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="mensagem" className="field-label">
          Conte-nos o que precisa <span className="text-destructive">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          className="field min-h-40 resize-y"
          placeholder="Tipo de obra, dimensão aproximada, fase actual e prazo desejado…"
          rows={5}
          minLength={20}
          maxLength={2000}
          required
          value={values.mensagem}
          onChange={(event) => change("mensagem", event.target.value)}
          {...errorProps("mensagem")}
          aria-describedby={errors.mensagem ? "mensagem-error mensagem-help" : "mensagem-help"}
        />
        <p id="mensagem-help" className="mt-2 text-xs text-muted-foreground">
          Mínimo de 20 caracteres · {values.mensagem.length}/2.000
        </p>
        {errors.mensagem && (
          <p id="mensagem-error" className="mt-2 text-sm text-destructive">
            {errors.mensagem}
          </p>
        )}
      </div>
      <p className="text-xs text-muted-foreground">
        * Campos obrigatórios. A mensagem é preparada neste dispositivo. Escolha depois WhatsApp ou
        email para confirmar o envio. Não inclua documentos pessoais nem informação sensível.
      </p>
      <button type="submit" className="action-link w-full">
        Preparar pedido de orçamento
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      <noscript>
        <p className="border p-4">
          Active o JavaScript para preparar a mensagem, ou utilize os contactos de telefone e email
          indicados nesta página.
        </p>
      </noscript>
      {prepared && (
        <div
          ref={feedback}
          tabIndex={-1}
          className="rounded-md border border-navy/25 bg-surface p-6"
        >
          <p role="status" className="flex items-center gap-3 font-semibold">
            <CheckCircle2 size={20} aria-hidden="true" />
            Mensagem pronta para rever
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            O pedido ainda não foi enviado. Reveja o texto e escolha o canal; confirme o envio na
            aplicação que abrir.
          </p>
          <pre className="mt-4 whitespace-pre-wrap break-words rounded border bg-white p-4 font-sans text-sm">
            {prepared.message}
          </pre>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="action-link action-dark"
              href={prepared.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Abrir WhatsApp
            </a>
            <a className="action-link action-outline" href={prepared.email}>
              <Mail size={18} aria-hidden="true" />
              Abrir email
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Se a aplicação não abrir, pode copiar o texto acima e contactar-nos directamente.
          </p>
        </div>
      )}
    </form>
  )
}
