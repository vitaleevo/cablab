# CABLAB Site Institucional Multi-página — Design Spec
Data: 2026-09-09
Estado: Aprovado pelo utilizador (4/4 secções)

## 1. Contexto
- Pasta `cablab` estava vazia (só `.git/`, branch `master`, 0 commits).
- Fonte de verdade: `CABLAB-Apresentacao-A4-Retrato.pdf` + `.pptx` nos Downloads.
- Empresa: CABLAB SU Angola — Engenharia civil e arquitectura, constituída 2020, Luanda.
- Alvará construção civil Classe 6. NIF 5000550868.
- Contactos: info@cablab.ao, contactos@cablab.ao, (+244) 923 954 236, (+244) 926 866 113, Distrito Urbano da Camama, Rua do Congo, Luanda.
- 32 imagens em `ppt/media/` no PPTX para extrair para `assets/img/`.

## 2. Objetivo (aprovado)
Site completo com tudo, só português, foco institucional + captar obras via WhatsApp + formulário simples.

## 3. Arquitetura (Secção 1 aprovada)
Site estático puro, sem build, mobile-first, SEO PT-AO:
- `index.html` — Hero + resumo + prova + CTAs
- `sobre.html` — empresa 2020, o que fazemos, visão, Classe 6
- `servicos.html` — 7 áreas
- `obras.html` — galeria com 32 imagens
- `arquitectura.html` — projetos 3D + topografia
- `contactos.html` — form + WhatsApp + mapa + dados
- `assets/css/style.css`, `assets/js/main.js`, `assets/img/*`
- Header/footer partilhados, menu hamburger mobile, botão WhatsApp flutuante.

## 4. Conteúdo (Secção 2 aprovada)
- Hero: "Engenharia civil e arquitectura em Angola desde 2020"
- Prova: Classe 6, desde 2020, Luanda/Cabinda/Cuanza Sul/Bié
- Serviços (7):
  1. Construção civil e obras públicas
  2. Edifícios e equipamentos (residências, escritórios, escolas, hospitais, centros comerciais)
  3. Infra-estruturas e exteriores (vedações, quadras, parques, jardins, piscinas, salões)
  4. Instalações técnicas (elétrica/hidráulica, TV/CCTV, AVAC)
  5. Arquitectura e topografia
  6. Saúde (reagentes, fármacos, equipamentos hospitalares)
  7. Imobiliária
- Obras: Adm. Municipal Quilenda (Cuanza Sul), Escritório IDA-MOSAP Kuito Bié, Residências Benfica/Nova Vida Luanda, Piscina Kifica, conjuntos habitacionais, Preventório Infantil Rocha Pinto, 7 moageiras Cuanza Sul, escritório Cabinda.
- Clientes/parceiros: Sonangol, SonAir, Clínica Girassol, Medigroup, IDA-SAMAP-FIDA, Dommac One, GHF Service, Governo de Angola.
- Contactos completos + NIF no footer.

## 5. Visual recomendado (Secção 3 aprovada)
- Identidade do PDF: azul-navy institucional + laranja/âmbar destaque + neutros claro/cinza.
- Tipografia sistema (Segoe UI / Inter fallback), sem dependências externas obrigatórias.
- Hero com foto real + overlay escuro, títulos fortes, CTAs WhatsApp/Pedir orçamento.
- Cards serviços em grid, galeria grid + lightbox, secção clientes em lista/logos texto.
- Contraste AA, responsive 360px → desktop.

## 6. Funcionalidades e qualidade (Secção 4 aprovada)
- Menu mobile, filtro galeria (Todos/Edifícios/Habitação/Exteriores/3D/Obra), lightbox puro JS.
- Formulário valida nome/telefone/mensagem → abre `wa.me/244923954236` + `mailto:info@cablab.ao` (sem backend).
- Links `tel:+244...`, mapa embed Camama Luanda, OpenGraph + meta PT-AO.
- Imagens otimizadas/comprimidas, lazy loading.
- Teste: abrir 6 páginas, mobile 360px, clicar WhatsApp/tel/mailto, validar filtro/lightbox/form.

## 7. Fora de âmbito (YAGNI)
Sem backend, sem CMS, sem EN, sem loja, sem área cliente, sem depoimentos inventados.

## 8. Self-review
- Sem TBD/TODO: todos os dados vêm do PDF lido.
- Consistência: 6 páginas cobrem todo o portfólio, sem contradições.
- Âmbito: single implementation plan, estático puro.
- Ambiguidade resolvida: estilo = recomendado (navy+laranja), contacto = WhatsApp+form simples, idioma = PT.

## 9. Próximo passo
Invocar skill `writing-plans` para plano de implementação, depois extrair imagens e construir.
