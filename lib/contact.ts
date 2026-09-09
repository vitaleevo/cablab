import { CONTACTOS, SERVICOS } from "./site"
export type ContactRequest = {
  nome: string
  telefone: string
  servico: string
  local: string
  mensagem: string
}
export type ContactErrors = Partial<Record<keyof ContactRequest, string>>
export const EMPTY_REQUEST: ContactRequest = {
  nome: "",
  telefone: "",
  servico: "",
  local: "",
  mensagem: "",
}
export function validateContact(values: ContactRequest): ContactErrors {
  const errors: ContactErrors = {}
  if (values.nome.trim().length < 2 || values.nome.trim().length > 100)
    errors.nome = "Indique um nome entre 2 e 100 caracteres."
  const phone = values.telefone.trim()
  const digits = phone.replace(/\D/g, "")
  if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 9 || digits.length > 15)
    errors.telefone = "Indique um telefone válido, com 9 a 15 dígitos."
  if (values.servico && !SERVICOS.some((service) => service.id === values.servico))
    errors.servico = "Selecione um dos serviços disponíveis."
  if (values.local.trim().length > 160) errors.local = "Use até 160 caracteres para a localização."
  if (values.mensagem.trim().length < 20 || values.mensagem.trim().length > 2000)
    errors.mensagem = "Descreva o seu pedido com 20 a 2.000 caracteres."
  return errors
}
export function prepareContact(values: ContactRequest) {
  const service =
    SERVICOS.find((item) => item.id === values.servico)?.titulo ?? "A definir com a equipa"
  const message = [
    "Olá CABLAB, gostaria de falar sobre um projecto.",
    `Nome: ${values.nome.trim()}`,
    `Telefone: ${values.telefone.trim()}`,
    `Serviço: ${service}`,
    `Localização: ${values.local.trim() || "A indicar"}`,
    "",
    values.mensagem.trim(),
  ].join("\n")
  return {
    message,
    whatsapp: `https://wa.me/${CONTACTOS.whatsappNumero}?text=${encodeURIComponent(message)}`,
    email: `mailto:${CONTACTOS.email1}?subject=${encodeURIComponent("Pedido de informação — CABLAB")}&body=${encodeURIComponent(message)}`,
  }
}
