# GoverOne Landing Page — Technical Reference for Agent Development

> **Purpose:** Dokumen ini menjadi referensi teknis untuk agent yang akan membangun landing page GoverOne.
>
> **Primary objective:** Menghasilkan landing page marketing yang cepat, maintainable, content-driven, dan siap di-deploy ke Cloudflare Workers.

---

## 1. Recommended Technical Direction

### Final stack recommendation

- **Platform/runtime:** Cloudflare Workers
- **Static asset serving:** Workers Static Assets
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment tooling:** Wrangler + `create-cloudflare`
- **Language:** TypeScript
- **Rendering strategy:** Static-first (SSG), tambah SSR hanya jika benar-benar diperlukan

### Why this stack

Landing page GoverOne adalah halaman marketing yang content-heavy, visual, dan conversion-oriented. Kebutuhan utamanya adalah:

- load cepat
- SEO-friendly
- mudah dipecah menjadi section modular
- mudah diiterasi oleh agent/developer
- tidak membawa kompleksitas frontend app yang belum dibutuhkan
- tetap punya upgrade path jika nanti perlu form handling, personalization, atau small backend logic

Astro cocok karena default-nya minim JavaScript di client. Cloudflare Workers cocok karena deployment target memang ingin berada di ekosistem Workers dan bisa menggabungkan static assets + runtime logic dalam satu unit deployment.

---

## 2. Product Context the Agent Must Respect

### Product category

**ISO 27001 Implementation Workspace**

### Primary buyer

- Konsultan ISO 27001 individual
- Small consulting firm

### Primary users

- Konsultan
- ISO PIC perusahaan
- Project member
- Document approver
- Management

### Core promise

Satu workspace yang menghubungkan project setup, risk, control/SoA, document, approval, dan evidence agar implementasi dapat dijalankan dan ditelusuri bersama.

### Positioning constraint

Landing page **tidak boleh** memposisikan GoverOne sebagai:

- certification body
- auditor pengganti manusia
- AI auditor yang menentukan compliance
- full GRC platform
- audit-readiness automation engine

Landing page harus menekankan bahwa GoverOne membantu **menjalankan dan mendokumentasikan implementasi**, bukan menggantikan professional judgment.

---

## 3. Technical Principles for the Agent

### Build for clarity, not novelty

Agent harus mengutamakan:

- struktur file yang jelas
- section-based componentization
- styling yang konsisten
- aksesibilitas dasar yang baik
- semantic HTML
- performance by default

### Default to static

Jangan pakai SSR, API routes, dynamic rendering, atau client-heavy interactivity kecuali ada kebutuhan nyata.

### Keep JavaScript minimal

Interactive behavior sebaiknya terbatas pada:

- mobile navigation toggle
- FAQ accordion
- simple smooth-scroll or CTA affordances
- optional lightweight form handling UX

### Design for future evolution

Struktur project harus memudahkan penambahan:

- demo request form
- analytics tracking
- A/B test
- campaign-specific pages
- localization
- CMS/data-driven content later

---

## 4. Delivery Goals

Agent yang membangun landing page sebaiknya mengoptimalkan untuk outcome berikut:

1. **Fast first load**
2. **Good visual hierarchy**
3. **Clear CTA flow**
4. **Easy content iteration**
5. **Low maintenance deployment**
6. **Direct mapping from content doc to page sections**

---

## 5. Recommended Project Structure

```text
goverone-website/
├── public/
│   ├── favicon.svg
│   ├── og/
│   │   └── goverone-og.png
│   └── images/
│       ├── screenshots/
│       ├── logos/
│       └── illustrations/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── Container.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   └── FeatureList.astro
│   │   └── sections/
│   │       ├── HeroSection.astro
│   │       ├── ProblemSection.astro
│   │       ├── TransitionSection.astro
│   │       ├── HowItWorksSection.astro
│   │       ├── CapabilitiesSection.astro
│   │       ├── ConsultantsSection.astro
│   │       ├── CompaniesSection.astro
│   │       ├── TraceabilitySection.astro
│   │       ├── ComparisonSection.astro
│   │       ├── TrustBoundarySection.astro
│   │       ├── FaqSection.astro
│   │       └── FinalCtaSection.astro
│   ├── content/
│   │   ├── landing-page.ts
│   │   ├── faq.ts
│   │   ├── capabilities.ts
│   │   └── screenshots.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── content.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.jsonc
```

### Why this structure

- **sections/** memisahkan landing page per blok bisnis
- **ui/** menyimpan primitive reusable
- **content/** membuat copy mudah diubah tanpa bongkar layout
- **types/** menjaga data structure tetap eksplisit
- **public/images/screenshots/** memudahkan pengelolaan asset visual produk

---

## 6. Content Source of Truth

Dokumen berikut harus dianggap sebagai source of truth utama untuk copy dan hierarchy halaman:

- `GoverOne_Landing_Page_Content_Alternative_Market_Feature_Led_4.md`

Agent harus menjaga konsistensi dengan dokumen tersebut, terutama untuk:

- urutan section
- positioning
- audience framing
- product boundaries
- claims to avoid
- CTA emphasis

Jika perlu merapikan copy untuk layout, agent boleh menyesuaikan microcopy secara ringan, tetapi **tidak boleh** mengubah positioning inti tanpa instruksi baru.

---

## 7. Recommended Page Composition

### Required page order

1. Navigation
2. Hero
3. Problem framing
4. Product transition
5. How GoverOne works
6. Product capabilities
7. For consultants
8. For companies
9. Connected traceability
10. Why GoverOne
11. Trust and boundaries
12. FAQ
13. Final CTA
14. Footer

### Section design guidance

#### Hero
Must show:
- product UI
- value proposition cepat dipahami
- GoverOne bukan sekadar document storage

#### Problem framing
Must articulate:
- tools scattered
- implementation context hilang
- approval/evidence traceability lemah

#### Product transition
Must show:
- risk → control → document → approval/version → evidence relationship

#### Capabilities
Must stay concrete. Hindari capability inflation.

#### Trust and boundaries
Must explicitly reduce overclaim risk.

---

## 8. UI/UX Guidelines for the Agent

### Visual direction

Landing page sebaiknya terasa:

- professional
- structured
- modern
- trustworthy
- product-led
- B2B, not consumer-ish

### Avoid

- noisy gradients berlebihan
- illustration-heavy tanpa product proof
- generic stock photo hero
- overly playful visual language
- startup buzzword overload
- dark patterns on CTA

### Prefer

- clean layout
- product screenshots sebagai centerpiece
- strong spacing rhythm
- readable typography
- muted enterprise palette
- clear comparison tables/cards
- consistent CTA styling

### Screenshot usage

Prioritaskan screenshot berikut:

1. Workspace dashboard dengan beberapa client project
2. Risk register
3. Control mapping / SoA
4. Document approval dan version history
5. Control detail dengan linked risk, document, dan evidence
6. Evidence upload / evidence list
7. Project member management

Jangan meng-highlight capability yang belum matang seperti:

- audit readiness score
- advanced automation
- real-time reporting
- auto evidence collection

---

## 9. SEO and Metadata Requirements

### Minimum requirements

Agent harus menyiapkan:

- unique page `<title>`
- meta description
- canonical URL placeholder
- Open Graph title/description/image
- Twitter card metadata
- semantic heading structure
- one clear H1 only

### Baseline values

**Title:**
`GoverOne — Workspace Implementasi ISO 27001 untuk Konsultan dan Perusahaan`

**Meta description:**
`Kelola risk register, Statement of Applicability, dokumen, approval, dan evidence ISO 27001 bersama client dalam satu workspace yang terstruktur.`

**H1:**
`Satu workspace untuk menjalankan setiap proyek ISO 27001.`

---

## 10. Performance Requirements

Agent harus treat performance as a feature.

### Target behavior

- page mostly static
- minimal client JS
- optimized images
- no unnecessary third-party scripts
- no large icon/library bundle tanpa kebutuhan
- defer or avoid non-essential animation

### Best practices

- use Astro default rendering
- lazy-load below-the-fold large images when appropriate
- compress screenshots to WebP/AVIF when practical
- inline only critical assets if justified
- avoid hydration kecuali ada interaction nyata
- use semantic CSS/Tailwind classes, not runtime style systems

---

## 11. Accessibility Requirements

Minimum standard untuk agent:

- semantic landmarks (`header`, `main`, `section`, `footer`)
- accessible nav toggle
- keyboard reachable CTA/buttons
- alt text pada screenshot penting
- sufficient contrast
- proper heading nesting
- FAQ accordion accessible
- visible focus states

Aksesibilitas tidak perlu over-engineered, tapi tidak boleh diabaikan.

---

## 12. Cloudflare Workers Reference

### Recommended deployment model

Gunakan Cloudflare Workers sebagai host untuk landing page ini.

### Static-first Workers setup

Untuk site yang sepenuhnya static:

- build output Astro masuk ke `dist/`
- `wrangler.jsonc` cukup menunjuk ke assets directory
- tidak perlu `main` Worker script jika belum ada runtime logic

Example shape:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "goverone-website",
  "compatibility_date": "2026-07-23",
  "assets": {
    "directory": "./dist"
  }
}
```

### If runtime logic is later needed

Tambahkan Worker script hanya saat butuh:

- form submission
- campaign parameter handling
- geo-based personalization
- analytics proxy
- lightweight API endpoint

Jangan menambah Worker logic sebelum ada use case yang jelas.

---

## 13. Astro Reference

### Recommended Astro mode

Start with **static output**.

Gunakan SSR/on-demand rendering hanya kalau ada requirement nyata.

### Why Astro fits

- built for content-rich websites
- default minimal JS
- section component ergonomics bagus
- cocok untuk product marketing pages
- mudah maintain oleh agent dan human developer

### Component guidance

Setiap section landing page sebaiknya menjadi satu komponen `.astro` terpisah.

Contoh:
- `HeroSection.astro`
- `ProblemSection.astro`
- `TraceabilitySection.astro`
- `FaqSection.astro`

Tujuannya:
- review lebih mudah
- perubahan lokal tidak merusak seluruh page
- content-to-section mapping jelas

---

## 14. Tailwind Reference

### Why Tailwind

- cepat untuk eksekusi landing page
- styling konsisten
- mudah refactor
- cocok untuk design token ringan
- no custom CSS sprawl by default

### Tailwind usage guidance

Prefer:
- consistent spacing scale
- reusable class patterns via components
- small set of surface variants
- restrained color usage

Avoid:
- class soup tanpa abstraction
- arbitrary values berlebihan
- inconsistent responsive breakpoints
- inline style fallback kecuali unavoidable

---

## 15. Content Modeling Recommendation

Agar agent mudah iterasi, copy penting sebaiknya tidak ditanam semuanya langsung di `index.astro`.

### Recommended data files

#### `src/content/faq.ts`
Array FAQ items.

#### `src/content/capabilities.ts`
Array capability cards.

#### `src/content/landing-page.ts`
Structured object untuk hero, problem cards, CTA, comparison table, benefits.

### Why this matters

Ini membuat:
- copy update lebih aman
- section rendering lebih clean
- agent lain lebih gampang melanjutkan kerja
- future localization lebih mungkin

---

## 16. Suggested Implementation Boundaries

### MVP scope

Yang sebaiknya dibangun dulu:

- single landing page
- responsive layout
- section-based composition
- CTA buttons
- FAQ accordion
- metadata/SEO dasar
- screenshot placeholders or actual image slots

### Defer for later

- CMS integration
- multilingual support
- blog/resources system
- advanced analytics event model
- A/B testing engine
- dynamic personalization
- auth-gated demo flows
- heavy animation system

---

## 17. Claims and Messaging Guardrails

Agent **must avoid** implementing copy yang menyiratkan bahwa GoverOne:

- otomatis menjalankan seluruh implementasi ISO 27001
- selalu audit-ready
- menentukan compliance secara AI
- menjamin lulus audit
- otomatis mengumpulkan evidence dari sistem client
- memberi real-time readiness score
- otomatis escalation/workflow yang belum ada

Safer phrasing yang boleh digunakan:

- menyatukan catatan implementasi
- membantu menghubungkan risk, control, dokumen, dan evidence
- membantu konsultan dan client bekerja dalam struktur yang sama
- membuat approval dan evidence lebih mudah ditelusuri

---

## 18. Agent Execution Checklist

Sebelum agent menganggap pekerjaan selesai, verifikasi:

### Content
- [ ] Copy mengikuti positioning yang sudah disetujui
- [ ] Tidak ada overclaim produk
- [ ] CTA jelas dan konsisten

### UI
- [ ] Semua section utama ada
- [ ] Responsive mobile/tablet/desktop
- [ ] Screenshot slot/logika visual jelas
- [ ] Hierarchy mudah dipindai

### Tech
- [ ] Astro build berhasil
- [ ] Wrangler config valid
- [ ] Static assets tersaji dengan benar
- [ ] Tidak ada hydration yang tidak perlu

### SEO / accessibility
- [ ] Title + meta description ada
- [ ] H1 tunggal
- [ ] Semantic landmarks ada
- [ ] Focus states dan alt text minimum ada

### Performance
- [ ] Tidak ada dependency frontend berat tanpa alasan
- [ ] Image strategy masuk akal
- [ ] JS payload tetap kecil

---

## 19. Recommended Build Sequence for the Agent

1. Initialize Astro project for Cloudflare Workers
2. Add Tailwind
3. Create base layout and design tokens
4. Create navbar, footer, and shared UI primitives
5. Convert content document into structured data files
6. Build sections one by one in approved order
7. Add responsive behavior
8. Add metadata and OG configuration
9. Run build and verify output
10. Prepare deployment config for Workers

---

## 20. Final Recommendation to the Implementing Agent

If there is any doubt, bias toward:

- simpler architecture
- stronger content clarity
- lower client-side complexity
- more visible product proof
- safer claims
- easier deployment

The goal is **not** to show technical sophistication.
The goal is to ship a landing page that clearly explains GoverOne, builds trust, and can evolve without rework.

---

## 21. Short Decision Summary

**Recommended build choice:**
Astro + Tailwind + Cloudflare Workers Static Assets

**Rendering default:**
Static-first

**Do first:**
Build the marketing page cleanly and fast

**Do later only if needed:**
SSR, dynamic logic, experiments, backend-style features
