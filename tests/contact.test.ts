import assert from "node:assert/strict"
import test from "node:test"
import { EMPTY_REQUEST, prepareContact, validateContact } from "../lib/contact"

const valid = {
  nome: "Cliente de teste",
  telefone: "+244 923 000 000",
  servico: "construcao",
  local: "Luanda",
  mensagem: "Pretendo estudar a construção de uma residência.",
}

test("accepts a complete request and international telephone formats", () => {
  for (const telefone of ["923000000", "+244 923 000 000", "+351 (912) 345-678"]) {
    assert.deepEqual(validateContact({ ...valid, telefone }), {})
  }
})
test("rejects empty, whitespace-only and too-short required fields", () => {
  assert.deepEqual(Object.keys(validateContact(EMPTY_REQUEST)), ["nome", "telefone", "mensagem"])
  assert.ok(validateContact({ ...valid, nome: "  ", mensagem: "   " }).nome)
  assert.ok(validateContact({ ...valid, mensagem: "Olá" }).mensagem)
})
test("rejects invalid telephone numbers and excessive input", () => {
  for (const telefone of ["abcdefghijk", "123", "++244923000000", "923000000x", "1234567890123456"])
    assert.ok(validateContact({ ...valid, telefone }).telefone)
  assert.ok(validateContact({ ...valid, nome: "n".repeat(101) }).nome)
  assert.ok(validateContact({ ...valid, local: "l".repeat(161) }).local)
  assert.ok(validateContact({ ...valid, mensagem: "m".repeat(2001) }).mensagem)
  assert.ok(validateContact({ ...valid, servico: "__proto__" }).servico)
})
test("keeps message contents in encoded parameters and preserves every contact field", () => {
  const values = {
    ...valid,
    nome: "Ana & João",
    mensagem: "Pedido <script>alert(1)</script> &bcc=other@example.com + localização? #teste",
  }
  const prepared = prepareContact(values)
  const whatsapp = new URL(prepared.whatsapp)
  assert.equal(whatsapp.origin, "https://wa.me")
  assert.equal(whatsapp.pathname, "/244923954236")
  assert.deepEqual([...whatsapp.searchParams.keys()], ["text"])
  assert.equal(whatsapp.searchParams.get("text"), prepared.message)
  const email = new URL(prepared.email)
  assert.equal(email.protocol, "mailto:")
  assert.equal(email.pathname, "info@cablab.ao")
  assert.deepEqual([...email.searchParams.keys()], ["subject", "body"])
  assert.equal(email.searchParams.get("body"), prepared.message)
  for (const text of [
    values.nome,
    values.telefone,
    values.local,
    values.mensagem,
    "Construção civil",
  ])
    assert.ok(prepared.message.includes(text))
})
