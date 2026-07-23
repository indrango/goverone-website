# GoverOne Website

Landing page and marketing website for [GoverOne](https://goverone.com) — the ISO 27001 compliance platform built for Indonesian companies.

Built with **Astro 5** + **Tailwind CSS 4**, deployed on **Cloudflare Pages**.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 5](https://astro.build) (static output) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite` |
| Language | TypeScript |
| Hosting | Cloudflare Pages (via `wrangler`) |
| Package | npm |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (available at http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/    # Reusable UI components
├── content/       # Markdown / content collections
├── layouts/       # Page layouts
├── pages/         # Route pages (Astro file-based routing)
├── styles/        # Global styles
└── types/         # TypeScript types
```

## Deployment

The site is deployed to **Cloudflare Pages**. Build configuration is in `wrangler.jsonc`.

```bash
# Deploy via wrangler
npx wrangler pages deploy dist/
```

## Commit Convention

This repo follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, styling (no logic change)
- `refactor:` — code restructuring
- `chore:` — maintenance, tooling
