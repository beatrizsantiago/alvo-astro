# 🌌 Igreja Cristã Alvo — Website

Landing page institucional da Igreja Cristã Alvo, construída com **Astro** e **Tailwind CSS**.

---

## 🚀 Tech Stack

- **Astro** – Static site builder para sites rápidos e otimizados
- **Tailwind CSS** – Framework CSS utility-first
- **@astrojs/sitemap** – Geração automática de sitemap
- **Cloudflare Workers/Pages** – Hospedagem e deploy (via `wrangler`)

---

## 📁 Estrutura de pastas

```
src/
  assets/            # Imagens e ícones (svg)
  components/
    ui/              # Componentes de apoio reutilizáveis (Card, Header, SectionTitle...)
    sections/        # Seções da landing page (Home, About, Schedule, Location...)
  layouts/           # Layout.astro (head/meta) e SectionWrapper.astro
  pages/             # index.astro — única página do site
  styles/            # global.css
public/              # Arquivos estáticos (favicon, robots.txt)
```

---

## 📦 Getting Started

Pré-requisito: Node.js e Yarn instalados.

### 1. Instalar dependências

```bash
yarn
```

### 2. Rodar o servidor de desenvolvimento

```bash
yarn dev
```

O projeto ficará disponível em:

```
http://localhost:3000
```

### 3. Build de produção

```bash
yarn build
```

Os arquivos gerados ficam em `dist/`.

### 4. Preview do build de produção

```bash
yarn preview
```

---

## ☁️ Deploy

O deploy é feito via **Cloudflare** (configuração em `wrangler.jsonc`, que aponta para os arquivos gerados em `dist/`). Após o `yarn build`, publique com a [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/):

```bash
npx wrangler deploy
```

> `wrangler` não está listado como dependência do projeto — o `npx` baixa a CLI sob demanda. Se preferir, instale-a como dev dependency (`yarn add -D wrangler`).
