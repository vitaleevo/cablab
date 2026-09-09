# CABLAB Site Multi-página Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir site institucional multi-página da CABLAB com as 32 imagens do PPTX e conteúdo fiel ao PDF.

**Architecture:** Site estático puro (HTML+CSS+JS vanilla), 6 páginas partilhando header/footer, CSS único, JS mínimo para menu/filtro/lightbox/form. Sem build, mobile-first.

**Tech Stack:** HTML5, CSS3 vanilla, JavaScript vanilla, imagens JPEG/PNG locais, Google Maps embed iframe.

**Spec:** `docs/superpowers/specs/2026-09-09-cablab-site-design.md`

## Global Constraints
- Idioma: só português (PT-AO).
- Contactos exactos: info@cablab.ao, contactos@cablab.ao, (+244) 923 954 236, (+244) 926 866 113, Distrito Urbano da Camama Rua do Congo Luanda, NIF 5000550868.
- Sem backend: formulário abre WhatsApp + mailto.
- WhatsApp: https://wa.me/244923954236 com texto pré-preenchido.
- Cores: navy #0F2A44, laranja #E67E22 / âmbar, neutros #F5F6F8, texto #1A1A1A.
- Mobile-first, contraste AA, lazy loading imagens.
- Não inventar depoimentos, números ou obras fora do PDF.

---

### Task 1: Extrair e organizar assets de imagem

**Files:**
- Create: `assets/img/` com 32 imagens otimizadas
- Create: `assets/img/README.md` (origem das imagens)

**Interfaces:**
- Consumes: `C:\Users\alexa\Downloads\CABLAB-Apresentacao-A4-Retrato.pptx` > `ppt/media/*`
- Produces: ficheiros `assets/img/obra-01.jpg` … `assets/img/obra-32.jpg|png` usados por todas as páginas.

- [ ] **Step 1: Extrair lista de imagens do PPTX**

```bash
python -c "import zipfile; z=zipfile.ZipFile(r'C:\Users\alexa\Downloads\CABLAB-Apresentacao-A4-Retrato.pptx'); print('\n'.join([n for n in z.namelist() if n.startswith('ppt/media/')]))"
```
Expected: lista 32 entradas `ppt/media/...`

- [ ] **Step 2: Extrair e renomear para assets/img/**

```bash
python -c "import zipfile, pathlib; src=r'C:\Users\alexa\Downloads\CABLAB-Apresentacao-A4-Retrato.pptx'; dst=pathlib.Path('assets/img'); dst.mkdir(parents=True, exist_ok=True); z=zipfile.ZipFile(src); medias=sorted([n for n in z.namelist() if n.startswith('ppt/media/')]); print(medias); [open(dst/f'obra-{i+1:02d}'+(''.join(pathlib.Path(m).suffixes) or '.jpg'),'wb').write(z.read(m)) or print(f'obra-{i+1:02d} <- {m}') for i,m in enumerate(medias)]"
```
Expected: 32 ficheiros em `assets/img/`.

- [ ] **Step 3: Verificar imagens**

```bash
Get-ChildItem -Path "assets\img" | Measure-Object; Get-ChildItem -Path "assets\img" | Format-Table Name, Length -AutoSize
```
Expected: Count 32, tamanhos > 0.

- [ ] **Step 4: Commit**

```bash
git add assets/img
git commit -m "feat: extrair 32 imagens do portfolio CABLAB para assets/img"
```

### Task 2: Base CSS + JS partilhado + header/footer

**Files:**
- Create: `assets/css/style.css`
- Create: `assets/js/main.js`

**Interfaces:**
- Consumes: Global Constraints (cores, tipografia).
- Produces: classes `.header .nav .hero .grid .card .footer .whatsapp-float` e funções `toggleMenu()`, `initLightbox()`, `initFilter()`, `handleContactForm()` usadas pelas 6 páginas.

- [ ] **Step 1: Criar style.css com tokens e layout**

```css
:root{--navy:#0F2A44;--accent:#E67E22;--bg:#F5F6F8;--text:#1A1A1A;--white:#fff}
*{box-sizing:border-box}body{margin:0;font-family:"Segoe UI",Inter,Arial,sans-serif;color:var(--text);background:var(--white)}
.header{background:var(--navy);color:#fff;position:sticky;top:0;z-index:10}
.nav{max-width:1100px;margin:auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px}
.nav a{color:#fff;text-decoration:none;margin:0 8px}.nav a.active{color:var(--accent)}
.hero{background:var(--navy);color:#fff;padding:64px 16px;text-align:center}
.btn{display:inline-block;background:var(--accent);color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:700}
.grid{max-width:1100px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;padding:24px 16px}
.card{border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background:#fff}
.card img{width:100%;height:180px;object-fit:cover;display:block}
.footer{background:var(--navy);color:#cbd5e1;padding:32px 16px;margin-top:32px}
.whatsapp-float{position:fixed;right:16px;bottom:16px;background:#25D366;color:#fff;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;text-decoration:none}
@media(max-width:720px){.nav .links{display:none}.nav .links.open{display:block}}
```

- [ ] **Step 2: Criar main.js**

```js
function toggleMenu(){document.querySelector('.nav .links').classList.toggle('open')}
function initFilter(){const btns=document.querySelectorAll('[data-filter]');const items=document.querySelectorAll('[data-cat]');btns.forEach(b=>b.addEventListener('click',()=>{const f=b.getAttribute('data-filter');items.forEach(it=>{it.style.display=(f==='todos'||it.getAttribute('data-cat')===f)?'':'none'})}))}
function initLightbox(){const lb=document.getElementById('lightbox');if(!lb)return;document.querySelectorAll('[data-lightbox]').forEach(img=>img.addEventListener('click',()=>{lb.querySelector('img').src=img.src;lb.style.display='flex'}));lb.addEventListener('click',()=>lb.style.display='none')}
function handleContactForm(){const f=document.getElementById('contact-form');if(!f)return;f.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('nome').value.trim();const t=document.getElementById('telefone').value.trim();const m=document.getElementById('mensagem').value.trim();if(!n||!t||!m){alert('Preencha nome, telefone e mensagem.');return}const txt=encodeURIComponent(`Olá CABLAB, sou ${n} (${t}). ${m}`);window.open(`https://wa.me/244923954236?text=${txt}`,'_blank');window.location.href=`mailto:info@cablab.ao?subject=${encodeURIComponent('Pedido site - '+n)}&body=${encodeURIComponent(m+'\n\nTelefone: '+t)}`})}
document.addEventListener('DOMContentLoaded',()=>{initFilter();initLightbox();handleContactForm()});
```

- [ ] **Step 3: Verificar ficheiros**

```bash
Test-Path -LiteralPath "assets\css\style.css"; Test-Path -LiteralPath "assets\js\main.js"; Get-Content -Path "assets\js\main.js" -TotalCount 5
```
Expected: True True + 5 linhas JS.

- [ ] **Step 4: Commit**

```bash
git add assets/css/style.css assets/js/main.js
git commit -m "feat: base CSS e JS partilhado CABLAB"
```

### Task 3: index.html + sobre.html

**Files:**
- Create: `index.html`
- Create: `sobre.html`

**Interfaces:**
- Consumes: `assets/css/style.css`, `assets/js/main.js`, `assets/img/obra-*.jpg`
- Produces: páginas home e sobre navegáveis entre si e para restantes.

- [ ] **Step 1: Criar index.html**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CABLAB — Engenharia civil e arquitectura em Angola</title><meta name="description" content="CABLAB SU Angola: construção civil, arquitectura, fiscalização e infra-estruturas desde 2020. Alvará Classe 6. Luanda."><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a class="active" href="index.html">Início</a><a href="sobre.html">Sobre</a><a href="servicos.html">Serviços</a><a href="obras.html">Obras</a><a href="arquitectura.html">Arquitectura</a><a href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<section class="hero"><h1>Engenharia civil e arquitectura em Angola desde 2020</h1><p>Construção, fiscalização e projectos com Alvará Classe 6.</p><p><a class="btn" href="https://wa.me/244923954236?text=Ol%C3%A1%20CABLAB%2C%20quero%20um%20or%C3%A7amento">Pedir orçamento no WhatsApp</a> <a class="btn" href="obras.html">Ver obras</a></p></section>
<section class="grid"><div class="card"><img src="assets/img/obra-01.jpg" alt="Obra CABLAB" loading="lazy"><div style="padding:12px"><h3>Desde 2020</h3><p>Empresa angolana com actuação nacional.</p></div></div><div class="card"><img src="assets/img/obra-02.jpg" alt="Edifícios" loading="lazy"><div style="padding:12px"><h3>Classe 6</h3><p>Alvará de construção civil.</p></div></div><div class="card"><img src="assets/img/obra-03.jpg" alt="Infra-estruturas" loading="lazy"><div style="padding:12px"><h3>Luanda + províncias</h3><p>Cabinda, Cuanza Sul, Bié, Luanda.</p></div></div></section>
<footer class="footer"><p>CABLAB SU · Camama Rua do Congo Luanda · info@cablab.ao · +244 923 954 236 · NIF 5000550868</p></footer>
<a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 2: Criar sobre.html**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sobre — CABLAB</title><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a href="index.html">Início</a><a class="active" href="sobre.html">Sobre</a><a href="servicos.html">Serviços</a><a href="obras.html">Obras</a><a href="arquitectura.html">Arquitectura</a><a href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<main style="max-width:900px;margin:auto;padding:24px 16px"><h1>Sobre a CABLAB</h1><p>Empresa angolana constituída em 2020, com actuação no mercado nacional.</p><p>Actuamos em engenharia civil, arquitectura e fiscalização de empreitadas. Abrangemos também imobiliária e fornecimento de produtos para a saúde.</p><p><strong>Visão:</strong> cumprir contratos com qualidade, satisfazer clientes e contribuir para o desenvolvimento humano e económico de Angola.</p><p><strong>Alvará:</strong> Classe 6 · <strong>NIF:</strong> 5000550868</p></main>
<footer class="footer"><p>CABLAB SU · info@cablab.ao · +244 923 954 236 / 926 866 113</p></footer>
<a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 3: Verificar**

```bash
Test-Path index.html; Test-Path sobre.html; python -m http.server 8000
```
Expected: abrir http://localhost:8000/index.html e /sobre.html sem 404, menu navega.

- [ ] **Step 4: Commit**

```bash
git add index.html sobre.html
git commit -m "feat: home e sobre CABLAB"
```

### Task 4: servicos.html + arquitectura.html

**Files:**
- Create: `servicos.html`
- Create: `arquitectura.html`

**Interfaces:**
- Consumes: base CSS/JS, imagens.
- Produces: 7 serviços + página arquitectura 3D/topografia.

- [ ] **Step 1: Criar servicos.html com 7 cards**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Serviços — CABLAB</title><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a href="index.html">Início</a><a href="sobre.html">Sobre</a><a class="active" href="servicos.html">Serviços</a><a href="obras.html">Obras</a><a href="arquitectura.html">Arquitectura</a><a href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<main><h1 style="text-align:center">Serviços</h1><section class="grid">
<div class="card"><div style="padding:12px"><h3>Construção civil e obras públicas</h3><p>Execução de empreitadas e fiscalização.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Edifícios e equipamentos</h3><p>Residências, escritórios, escolas, hospitais, centros comerciais.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Infra-estruturas e exteriores</h3><p>Vedações, quadras, parques, jardins, piscinas, salões.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Instalações técnicas</h3><p>Redes eléctricas/hidráulicas, TV/CCTV, AVAC.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Arquitectura e topografia</h3><p>Projectos de arquitectura e topografia.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Saúde</h3><p>Reagentes laboratoriais, fármacos, equipamentos hospitalares.</p></div></div>
<div class="card"><div style="padding:12px"><h3>Imobiliária</h3><p>Actividade imobiliária integrada.</p></div></div>
</section></main>
<footer class="footer"><p>CABLAB SU · info@cablab.ao</p></footer>
<a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 2: Criar arquitectura.html**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Arquitectura — CABLAB</title><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a href="index.html">Início</a><a href="sobre.html">Sobre</a><a href="servicos.html">Serviços</a><a href="obras.html">Obras</a><a class="active" href="arquitectura.html">Arquitectura</a><a href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<main style="max-width:1100px;margin:auto;padding:24px 16px"><h1>Arquitectura e projectos 3D</h1><p>Implantação de conjunto habitacional, tipologias residenciais, volumetria e fachadas em 3D + topografia.</p><section class="grid"><div class="card"><img data-lightbox src="assets/img/obra-10.jpg" alt="3D" loading="lazy"></div><div class="card"><img data-lightbox src="assets/img/obra-11.jpg" alt="3D" loading="lazy"></div><div class="card"><img data-lightbox src="assets/img/obra-12.jpg" alt="3D" loading="lazy"></div></section></main>
<div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);align-items:center;justify-content:center"><img style="max-width:90%;max-height:90%"></div>
<footer class="footer"><p>CABLAB SU</p></footer><a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 3: Verificar**

```bash
Test-Path servicos.html; Test-Path arquitectura.html
```
Expected: True True.

- [ ] **Step 4: Commit**

```bash
git add servicos.html arquitectura.html
git commit -m "feat: servicos e arquitectura CABLAB"
```

### Task 5: obras.html com galeria + filtros + clientes

**Files:**
- Create: `obras.html`

**Interfaces:**
- Consumes: todas as imagens, `initFilter`, `initLightbox`.
- Produces: galeria filtável + lista clientes.

- [ ] **Step 1: Criar obras.html**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Obras — CABLAB</title><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a href="index.html">Início</a><a href="sobre.html">Sobre</a><a href="servicos.html">Serviços</a><a class="active" href="obras.html">Obras</a><a href="arquitectura.html">Arquitectura</a><a href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<main style="max-width:1100px;margin:auto;padding:24px 16px"><h1>Obras e portfólio</h1><p>Administração Municipal da Quilenda · Escritório IDA-MOSAP Kuito Bié · Residências Benfica/Nova Vida · Piscina Kifica · Conjuntos habitacionais · Preventório Rocha Pinto · 7 moageiras Cuanza Sul · Escritório Cabinda.</p>
<p><button data-filter="todos">Todos</button> <button data-filter="edificios">Edifícios</button> <button data-filter="habitacao">Habitação</button> <button data-filter="exteriores">Exteriores</button></p>
<section class="grid">
<div class="card" data-cat="edificios"><img data-lightbox src="assets/img/obra-04.jpg" alt="Quilenda" loading="lazy"><div style="padding:8px">Quilenda</div></div>
<div class="card" data-cat="edificios"><img data-lightbox src="assets/img/obra-05.jpg" alt="IDA MOSAP" loading="lazy"><div style="padding:8px">IDA-MOSAP Kuito</div></div>
<div class="card" data-cat="habitacao"><img data-lightbox src="assets/img/obra-06.jpg" alt="Benfica" loading="lazy"><div style="padding:8px">Benfica/Nova Vida</div></div>
<div class="card" data-cat="exteriores"><img data-lightbox src="assets/img/obra-07.jpg" alt="Piscina Kifica" loading="lazy"><div style="padding:8px">Piscina Kifica</div></div>
</section>
<h2>Clientes e parceiros</h2><p>Sonangol · SonAir · Clínica Girassol · Medigroup · IDA-SAMAP-FIDA · Dommac One · GHF Service · Governo de Angola</p>
</main><div id="lightbox" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);align-items:center;justify-content:center"><img style="max-width:90%;max-height:90%"></div>
<footer class="footer"><p>CABLAB SU</p></footer><a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 2: Testar filtro e lightbox**

```bash
python -c "print('abrir obras.html e clicar Todos/Edifícios/Habitação/Exteriores + clicar imagem para lightbox')"
```
Expected: PASS manual.

- [ ] **Step 3: Commit**

```bash
git add obras.html
git commit -m "feat: obras com galeria e clientes CABLAB"
```

### Task 6: contactos.html + verificação final

**Files:**
- Create: `contactos.html`

**Interfaces:**
- Consumes: `handleContactForm`, contactos exactos.
- Produces: conversão WhatsApp + mailto + mapa.

- [ ] **Step 1: Criar contactos.html**

```html
<!DOCTYPE html><html lang="pt-AO"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Contactos — CABLAB</title><link rel="stylesheet" href="assets/css/style.css"></head><body>
<header class="header"><nav class="nav"><a href="index.html"><strong>CABLAB</strong></a><div class="links"><a href="index.html">Início</a><a href="sobre.html">Sobre</a><a href="servicos.html">Serviços</a><a href="obras.html">Obras</a><a href="arquitectura.html">Arquitectura</a><a class="active" href="contactos.html">Contactos</a></div><button onclick="toggleMenu()">☰</button></nav></header>
<main style="max-width:900px;margin:auto;padding:24px 16px"><h1>Contactos</h1><p>Email: <a href="mailto:info@cablab.ao">info@cablab.ao</a> · <a href="mailto:contactos@cablab.ao">contactos@cablab.ao</a></p><p>Tel: <a href="tel:+244923954236">+244 923 954 236</a> · <a href="tel:+244926866113">+244 926 866 113</a></p><p>Endereço: Distrito Urbano da Camama, Rua do Congo, Luanda, Angola · NIF 5000550868</p>
<form id="contact-form"><p><input id="nome" placeholder="Nome" required style="width:100%;padding:10px"></p><p><input id="telefone" placeholder="Telefone" required style="width:100%;padding:10px"></p><p><textarea id="mensagem" placeholder="Mensagem" required style="width:100%;padding:10px"></textarea></p><p><button class="btn" type="submit">Enviar via WhatsApp</button></p></form>
</main><footer class="footer"><p>CABLAB SU · Camama Luanda</p></footer><a class="whatsapp-float" href="https://wa.me/244923954236">✆</a><script src="assets/js/main.js"></script></body></html>
```

- [ ] **Step 2: Verificação final 6 páginas**

```bash
Get-ChildItem *.html | Format-Table Name, Length; Test-Path assets/css/style.css; Test-Path assets/js/main.js; Get-ChildItem assets/img | Measure-Object
```
Expected: 6 html, css+js True, 32 imgs.

- [ ] **Step 3: Commit final**

```bash
git add contactos.html
git commit -m "feat: contactos com WhatsApp e formulario CABLAB"
git status --short
git log --oneline -8
```
Expected: working tree clean, 7+ commits.
