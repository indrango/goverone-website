# GoverOne Website — Agent Operating Guide

## Purpose

This repository contains GoverOne's public marketing website. Optimize for a clear product narrative, trustworthy claims, fast static delivery, maintainable content, and consistent presentation across devices.

GoverOne is an **ISO 27001 implementation workspace** connecting project setup, risks, controls/SoA, documents, approvals, and evidence. Do not position it as a certification body, a replacement for auditors or consultants, an AI compliance decision-maker, a full GRC platform, or a guarantee of audit readiness.

## Read Before Editing

Use this precedence when sources disagree:

1. Current user instruction and approved task/spec
2. This `AGENTS.md` for repository workflow and guardrails
3. `design-reference-v2.md` for visual tokens and design posture
4. Relevant documents under `docs/specs-v2/` for scoped requirements and acceptance criteria
5. `src/content/landing-page.ts` for copy currently rendered on the homepage
6. `TECHNICAL_REFERENCE_AGENT_DEVELOPMENT.md` and the long-form landing-page content document for product context
7. Actual package and runtime configuration for installed versions and deployment behavior

Some long-form references may describe an earlier target state. Verify claims against `package.json`, `astro.config.mjs`, `wrangler.jsonc`, and current implementation before acting.

## Current Technical Baseline

- Astro 7, TypeScript, Tailwind CSS 4
- Static output; Cloudflare Pages deployment
- npm package manager
- Node.js 22 via `nvm use 22`; do not rely on the system Node version
- Minimal client-side JavaScript
- Form handling currently uses Formspree
- Production Pages project: `goverone-website`
- Public Pages URL: `https://goverone-website.pages.dev`

## Repository Map

- `src/pages/` — route composition; keep pages thin
- `src/components/sections/` — business-level homepage sections
- `src/components/ui/` — reusable visual primitives
- `src/components/layout/` — navigation, footer, and containers
- `src/content/landing-page.ts` — structured homepage content
- `src/types/` — explicit content/data contracts
- `src/layouts/BaseLayout.astro` — metadata, global scripts, and page shell
- `src/styles/global.css` — design tokens, shared compositions, responsive rules, and motion
- `public/` — static brand and metadata assets
- `docs/specs-v2/` — feature-specific requirements, design, and tasks
- `design-reference-v2.md` — visual source of truth

## Development Rules

### Product and content

- Preserve approved positioning and section narrative unless explicitly asked to change them.
- Do not invent metrics, customer logos, testimonials, integrations, product capabilities, or compliance claims.
- Keep content in `src/content/` when it represents page copy or repeatable data; do not scatter it through section markup.
- Prefer concise, concrete compliance language over generic SaaS copy.
- Treat security, approval, evidence, auditability, and professional-judgment boundaries as trust-sensitive.

### Architecture

- Prefer static rendering and Astro components.
- Add hydration, dependencies, API routes, or runtime infrastructure only for a demonstrated user need.
- Keep section composition separate from content data and reusable UI primitives.
- Avoid abstractions used only once unless they create a clear boundary or remove meaningful duplication.
- Keep interactive behavior accessible and small: navigation, disclosure, form feedback, and purposeful motion only.

### Visual system

- Follow `design-reference-v2.md` and existing semantic CSS variables.
- Maintain a calm, neutral, audit-safe, product-forward visual posture.
- Use primary blue for brand emphasis and interactions. Use semantic colors only for actual states such as approved, pending, or rejected/unlinked.
- Prefer borders, spacing, typography, and subtle elevation over decorative effects.
- Avoid random colors, playful emoji, stock SaaS illustrations, unsupported screenshots, atmospheric gradients, and heavy shadows.
- Product visuals must explain real GoverOne concepts, not generic dashboard noise.
- Preserve coherent spacing, radius, typography, card treatment, and motion across sibling sections.

### Responsive and motion behavior

- Design mobile-first; recompose dense desktop UI instead of simply shrinking it.
- Test at minimum 375px, 768px, 1024px, and 1440px.
- Check both page-level and component-local horizontal overflow.
- Ensure copy remains readable and product visuals do not clip or become misleading.
- Reveal sequences must be intentional and deterministic; avoid duplicate delays caused by global clamping.
- Respect `prefers-reduced-motion` and keep content visible when motion is disabled.

## Required Workflow

1. Inspect the relevant source documents and current implementation.
2. For design or production code changes, present a concrete plan: files, changes, rationale, and validation.
3. Wait for explicit approval before editing when the task is exploratory or phrased as a proposal.
4. Never commit directly to `main`.
5. Create a focused branch using `feat/`, `fix/`, `docs/`, `refactor/`, or `chore/`.
6. Make the smallest coherent change.
7. Run required validation and inspect rendered output when UI changes.
8. Commit using Conventional Commits.
9. Push and open a PR only when requested or when the task explicitly includes delivery through PR.
10. Merge only with explicit approval. Prefer squash merge with a descriptive subject.
11. After an approved merge, update local `main` and remove/prune the feature branch.

Do not modify GitHub Actions, deployment automation, production credentials, or external services unless the task explicitly requires it.

## Validation

### Every code change

```bash
source ~/.nvm/nvm.sh
nvm use 22
npm install       # first setup only; use npm ci in clean/CI environments
npm run build
```

A task is not complete if the production build fails.

### UI changes

Start a local server:

```bash
npm run dev
# or, after build:
npm run preview
```

Use `agent-browser` for localhost/private visual QA. Use project-local Playwright for assertion-heavy or multi-viewport checks.

Verify:

- target section and adjacent sections render coherently
- desktop, tablet, and mobile composition
- no page-level horizontal overflow
- no card/visual-local clipping or overflow
- copy, CTA, navigation, and form states remain usable
- reveal order and reduced-motion behavior
- browser console has no relevant errors

Capture screenshots when visual review or approval is part of the task.

### Documentation-only changes

- Verify every referenced path and command exists.
- Run `git diff --check`.
- Do not run unrelated builds unless the documentation changes executable commands or configuration.

## Manual Deployment

Deployment is **manual only**. Do not add an automatic deployment workflow unless explicitly requested.

Prerequisites:

- clean, reviewed `main`
- Node.js 22
- successful production build
- `CLOUDFLARE_API_TOKEN` available in the environment
- never write the token value to source files, docs, logs, chat summaries, or memory

Deploy production:

```bash
cd /workspace/goverone-website
source ~/.nvm/nvm.sh
nvm use 22
npm ci
npm run build
npx wrangler pages deploy ./dist --project-name goverone-website --branch main
```

Verify deployment:

```bash
curl -sI https://goverone-website.pages.dev/ | sed -n '1,5p'
```

A successful Wrangler command is not enough. Confirm the production URL returns HTTP 200 and, for visual changes, inspect the deployed page. Report the immutable deployment URL returned by Wrangler and the production URL separately.

## Security and Repository Hygiene

- Never commit secrets, tokens, `.env` files, browser profiles, generated credentials, or private customer data.
- Never record secret values in persistent agent memory.
- Do not expose unsupported customer proof or internal product data in marketing visuals.
- Keep generated screenshots and temporary QA scripts outside tracked source unless explicitly requested as deliverables.
- Before committing, inspect `git status`, `git diff`, and `git diff --check`.
- Do not include unrelated local changes in the commit.

## Completion Report

Report only verified outcomes:

- branch and commit created
- exact files changed
- build/test commands and real results
- screenshots or URLs used for visual verification
- deployment URL and HTTP check, if deployed
- known limitations or remaining decisions

Never claim a build, deploy, visual check, PR, or merge succeeded without real tool output.
