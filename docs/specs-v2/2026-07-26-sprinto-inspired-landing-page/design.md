# Design — Sprinto-Inspired Landing Page

## 1. Source Requirements

This design implements [requirements.md](file:///Users/indranugraha/Codes/personal/goverone-website/docs/specs-v2/2026-07-26-sprinto-inspired-landing-page/requirements.md).

Traceability:

- R1: Homepage-only scope
- R2: Existing design system color usage
- R3: Original copy with comparable conversion structure
- R4: Section composition
- R5: Typography detail
- R6: Spacing, layout, and visual rhythm
- R7: Product visual and assets
- R8: Motion and transition detail
- R9: Responsive behavior
- R10: Accessibility and performance
- R11: Branch requirement
- R12: Preservation boundaries

## 2. Design Principles

1. Legally distinct reference adaptation: match the expected quality level, not protected third-party expression.
2. Typography-first polish: control font size, line height, tracking, text width, and responsive hierarchy before adding decoration.
3. Product-led credibility: use original product UI compositions to explain ISO workflows.
4. Calm motion: use motion to guide attention, never to obscure accountability or readability.
5. Existing-token fidelity: keep the current Goverone visual identity as source of truth.

## 3. Existing Design Foundation

The current homepage styling foundation is in [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css).

Important existing tokens:

- Colors: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L3-L41)
- Type scale: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L42-L55)
- Spacing: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L56-L75)
- Radius, motion, shadow: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L76-L88)
- Header and button primitives: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L156-L221)
- Current hero baseline: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L266-L293)
- Existing responsive behavior: [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L487-L628)

## 4. Information Architecture

Homepage section order should follow what is visibly presented on the Sprinto landing page: a polished SaaS homepage rhythm with concise above-the-fold messaging, proof/credibility moments, product-led feature sections, audience/value sections, trust boundaries, FAQ if the reference pattern warrants it, and a strong final CTA. The GoverOne reference document is a content pool, not a mandate to render every section or paragraph.

Recommended implementation sequence:

1. Sticky navigation
2. Hero with product UI visual
3. Proof/credibility or concise problem framing, matching the reference density
4. Product-led transition from fragmented work to connected workspace
5. Feature/workflow sections using the strongest GoverOne capabilities
6. Audience/value section for consultants and companies, combined or split depending on reference layout density
7. Connected traceability visual centerpiece
8. Comparison / why GoverOne section
9. Trust boundaries, if it can be presented concisely without creating heavy legal copy
10. FAQ, only if the reference page includes a comparable FAQ or if needed to handle launch claims safely
11. Final CTA
12. Footer

No secondary pages are required. Navigation should prefer in-page anchors such as `#product`, `#consultants`, `#companies`, `#workflow`, and `#faq` only for sections that actually appear.

## 5. Copy System

Copy must be original to GoverOne and selected from the provided content source only where it fits the visible Sprinto-style landing page structure. If the source document contains more copy than the reference-style page should display, condense, combine, or omit copy rather than adding extra sections.

### Positioning

- Category: “ISO 27001 Implementation Workspace”.
- Primary buyer: ISO 27001 consultants and small consulting firms managing multiple client projects.
- Primary users: consultants, ISO PIC, project members, document approvers, and management.
- Core promise: one workspace connecting project setup, risk, control/SoA, document, approval, and evidence.

### Navigation

- Logo: “GoverOne”
- Menu: Product, Untuk Konsultan, Untuk Perusahaan, Cara Kerja, FAQ
- Primary CTA: “Jadwalkan Demo”
- Secondary link: “Masuk” only if login exists; otherwise omit or keep non-prominent.

### Hero

- Eyebrow: “Workspace Implementasi ISO 27001 untuk Konsultan & Klien”
- H1: “Satu workspace untuk menjalankan setiap proyek ISO 27001.”
- Subheadline: adapt the source copy about managing project setup, risk register, Statement of Applicability, documents, approvals, and evidence with clients without scattering the process across spreadsheets, folders, and conversations.
- Primary CTA: “Jadwalkan Demo”
- Secondary CTA: “Lihat Cara Kerja”
- Supporting line: “Dibangun khusus untuk proses implementasi ISO/IEC 27001 oleh konsultan dan tim perusahaan.”

### Section copy selection rules

Use these as source options, not mandatory full sections:

- Problem framing option: “Masalahnya bukan kekurangan template. Masalahnya, seluruh implementasi berjalan terpisah.”
- Product transition option: “Ubah kumpulan file menjadi catatan implementasi yang saling terhubung.”
- Workflow option: “Satu alur kerja dari project setup hingga bukti implementasi.”
- Capability option: “Fondasi yang dibutuhkan untuk mengelola implementasi ISO 27001.”
- Consultant option: “Berikan cara kerja yang konsisten kepada setiap client.”
- Company option: “Pahami apa yang sedang dibangun bersama konsultan Anda.”
- Traceability option: “Jangan hanya menyimpan dokumen. Hubungkan alasan, keputusan, dan buktinya.”
- Comparison option: “Dibangun untuk pekerjaan implementasi, bukan sekadar penyimpanan file.”
- Boundary option: “Peran profesional tetap berada pada orang yang bertanggung jawab.”
- Final CTA option: “Mulai satu proyek ISO 27001 dengan struktur yang lebih baik.”

Selection guidance:

- Prefer short section headlines, compact supporting copy, and visual-first cards.
- Combine consultant and company copy into one section if the reference layout does not show separate audience sections.
- Limit capability cards to the number that fits the reference density; do not force all eight if the page becomes too long.
- FAQ and trust-boundary content should be concise and only included if they strengthen clarity without making the page feel document-heavy.
- All final copy must be reviewed during implementation and can be adapted for clarity.

## 6. Visual Composition

### Header

- Sticky top header with existing translucent background token.
- Height: 72px desktop, 64px mobile.
- Brand at left, in-page nav center or right, CTA at right.
- Mobile: menu button with 44px minimum target.
- Avoid links to unavailable pages.

### Hero

Desktop layout:

- Two-layer hero: text block above or beside product visual depending current component structure.
- Container max width: current `--go-content-max` or `--go-container-max`.
- Headline max width: 10–13 words per line; target 18–22ch on large desktop.
- Product visual width: up to 1120px, centered, card-framed.

Hero product visual:

- Original dashboard composition with three zones:
  1. Workspace/project list
  2. Control detail and approval state
  3. Evidence/audit timeline
- Use cards, pills, timeline rows, progress indicators, and status chips.
- Visual labels should use original compliance wording.
- No external screenshots.

### Problem framing

- Split layout or card grid with a Sprinto-like high-polish rhythm.
- Copy and cards should adapt the source problems: lost project context, hard-to-trace versions and approvals, evidence disconnected from controls, and each client starting from scratch.
- Visual: Spreadsheet + Drive + Email + Chat flowing into fragmented implementation information, then transitioning toward GoverOne.

### Product transition

- Use connected cards to show Project → Risk → Control & SoA → Document → Approval & Version → Evidence.
- This section should visually bridge the problem section into the product workflow section.

### How GoverOne Works

- Five deterministic steps from the source:
  1. Siapkan client project
  2. Kelola asset dan risk
  3. Tentukan control dan SoA
  4. Susun dan review dokumen
  5. Hubungkan evidence
- Desktop: horizontal journey, interactive tabs, or rich stepper with UI slices.
- Mobile: vertical timeline with numbered circles.

### Product capabilities grid

- Select the strongest cards from the source, up to eight only if the reference-style page density supports it:
  1. Client project workspace
  2. Project onboarding
  3. Asset & risk register
  4. Control mapping & SoA
  5. Document lifecycle
  6. Document templates
  7. Evidence management
  8. Role-based collaboration
- Prefer 4–6 high-impact cards if that better matches the reference landing page.
- 2-column desktop cards with visual preview and content.
- 1-column mobile cards.
- Each card must include a compact product UI preview, not only a generic icon.

### Consultant and company sections

- Use consultant and company copy only in the form that matches the reference page: separate sections if the reference uses audience-specific sections, or one combined audience/value section if the reference is more compact.
- Consultant messaging focuses on consistent delivery across client projects, reusable structure, templates, review, and reducing reliance on memory.
- Company messaging focuses on understanding implementation progress, role-based collaboration, traceable document approval, contextual evidence, and project knowledge retention.

### Traceability section

- Graph-like chain: Scope → Risk → Control → Evidence → Approval → Audit log.
- Desktop: horizontal graph.
- Tablet/mobile: stacked cards with connector arrows.

### Comparison section

Compare “Spreadsheets/checklists” vs “Implementation OS”.

Rows:

- Ownership
- State transitions
- Evidence linkage
- Approval visibility
- Audit readiness

### Final CTA

- Dark or high-contrast section using existing `--go-dark` tokens.
- One primary CTA.
- Optional compact form only if already present; otherwise simple CTA block.

## 7. Typography Specification

Use existing tokens unless a homepage-specific override is necessary.

### Desktop

- Hero h1: `clamp(3rem, 5.4vw, 4.75rem)` if added, or existing `--go-display-xl-size` if preserving token scale. Line-height 1.02–1.06. Weight 600–650. Tracking -0.035em to -0.03em.
- Hero body: `clamp(1.125rem, 1.7vw, 1.25rem)`, line-height 1.55.
- Section h2 large: `clamp(2.25rem, 4vw, 3rem)`, line-height 1.08–1.12, tracking -0.025em.
- Section h2 medium: `clamp(2rem, 3.2vw, 2.5rem)`, line-height 1.15.
- Card h3: 1.0625rem–1.25rem, line-height 1.35–1.4.
- Body text: 0.95rem–1.0625rem, line-height 1.6–1.65.
- Metadata/eyebrow: 0.72rem–0.8rem, uppercase only when semantically useful, tracking 0.04em–0.06em.
- Badge: 0.75rem–0.8rem, min-height 28–30px.

### Tablet

- Hero h1: 2.75rem–3.5rem, line-height 1.04–1.08.
- Section h2: 2rem–2.5rem.
- Product visual should reduce non-essential side panels before text becomes cramped.

### Mobile

- Hero h1: 2.25rem–2.5rem, line-height 1.04–1.08, no overly narrow max-width.
- Hero body: 1rem–1.0625rem, line-height 1.58.
- Section h2: 1.625rem–1.875rem, line-height 1.12–1.18.
- Card body: 0.9rem–0.95rem.
- Metadata: 0.7rem–0.75rem.
- Buttons: 0.875rem–0.95rem, 44–48px min-height.

## 8. Spacing and Layout Specification

- Container: keep `.container-shell` width behavior.
- Section padding:
  - Hero: `--go-section-default` on desktop, 64px mobile.
  - Feature-heavy sections: `--go-section-featured` desktop.
  - Credibility strip: `--go-section-compact` or smaller internal padding.
- Grid gaps:
  - Desktop large splits: 48px–64px.
  - Card grids: 24px–32px.
  - Mobile card gaps: 16px–24px.
- Card padding:
  - Desktop: 24px–32px.
  - Mobile: 16px–20px.
- Border radius: existing `--go-radius-lg`, `--go-radius-xl`, `--go-radius-2xl`.
- Shadows: use existing `--go-shadow-soft` and `--go-shadow-brand` sparingly.

## 9. Motion and Transition Specification

Use CSS transitions and keyframes unless a lightweight existing animation helper already exists.

### Global interaction motion

- Default transition duration: 180ms.
- Elevated hover duration: 220ms–280ms.
- Easing: `var(--go-ease-standard)`.
- Button hover: translateY(-1px) to translateY(-2px), optional shadow increase.
- Card hover: translateY(-2px), border-color shift to brand border, subtle shadow.
- Nav hover: color shift and optional underline scaleX.

### Scroll reveals

- Reveal initial state: opacity 0, translateY(16px–24px), optional scale(0.985).
- Reveal active state: opacity 1, translateY(0), scale(1).
- Duration: 420ms–640ms.
- Easing: cubic-bezier(0.2, 0, 0, 1).
- Stagger: 60ms–120ms between related cards.
- Use IntersectionObserver or CSS-only view timeline only if browser support is acceptable; prefer a small deterministic observer helper if needed.

### Hero ambient motion

Allowed original motions:

- Status chip pulse: opacity/box-shadow loop at 2.8s–4s.
- Timeline connector shimmer: background-position loop at 4s–6s.
- Floating card offset: translateY(-4px to 4px) at 5s–7s.
- Product panel entrance: 480ms–720ms delayed sequence after hero copy.

Motion must be subtle. Do not animate large text continuously.

### Reduced motion

The existing reduced-motion rule in [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L619-L628) must remain effective. New animation classes must not bypass it.

## 10. Responsive Design

Breakpoints should align with existing media queries:

- Desktop: above 1023px
- Tablet: max-width 1023px
- Mobile: max-width 767px
- Narrow mobile: max-width 359px

Responsive rules:

- Desktop header shows full nav and CTA.
- Tablet/mobile header hides desktop nav and uses a menu button.
- Product visual hides or stacks side panels below 1023px.
- Mobile hero actions use full-width or two-column buttons only if labels fit.
- Mobile product cards remove non-essential metadata while preserving meaning.
- No element may exceed viewport width at 320px.

## 11. Data Model and Backend

No data model changes.

No backend API changes.

No database, RBAC, approval, audit log, or AI-persistence changes.

## 12. Implementation Architecture

Expected file scope must be verified before implementation. Likely files:

- Homepage React entry/component files under `src/`
- Shared or marketing components under `src/components/` if present
- Global marketing styles in [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css)

Implementation should reuse existing classes where possible and add only focused homepage-specific classes when needed.

Do not introduce a design system rewrite.

## 13. Placeholder and Proof Content Policy

If the Sprinto-style reference includes testimonial, review, customer logo, client count, rating, award, or quantified proof sections, implementation must not fabricate equivalent GoverOne proof.

Rules:

- Use verified content only when it exists in the repository or is provided by the user.
- If verified proof is unavailable, render an empty placeholder section only when preserving the reference layout requires it.
- Placeholder labels should be internal and explicit, e.g. “Client testimonial placeholder — pending approved customer quote”.
- Do not invent client names, logos, quotes, star ratings, certification outcomes, usage metrics, or review snippets.
- If a placeholder would weaken the public page, omit the section and keep the surrounding layout rhythm with product proof instead.
- Prefer product evidence placeholders such as UI cards, workflow states, or capability previews over fake social proof.

## 14. Accessibility Design

- Use one h1.
- Section headings should be h2.
- Card headings should be h3 where nested.
- CTA labels must be descriptive verbs.
- Focus states must remain visible.
- Decorative visual elements must use empty alt text or be CSS-only.
- Product UI text used as visual content should remain readable at desktop and not be essential-only on mobile if hidden.

## 14. Test Strategy

Manual and automated checks:

- Typecheck/build passes.
- No horizontal overflow at 320px, 375px, 768px, 1024px, 1440px.
- Reduced motion mode disables continuous motion.
- Keyboard focus reaches header/menu/CTA elements visibly.
- No external Sprinto assets or copied text are present.
- No fabricated testimonials, reviews, client logos, customer names, awards, ratings, or metrics are present.
- Any proof placeholders are clearly marked for future replacement or omitted from public-facing layout if not useful.
- Lighthouse-style checks for accessibility and performance where available.

## 15. Alternatives Considered

### Exact clone

Rejected. It would risk copying protected third-party copy, assets, and trade dress.

### Use screenshots as assets

Rejected. It would reduce responsiveness, auditability, accessibility, and legal distinction.

### Full design system rebuild

Rejected. The requirement is a focused homepage redesign using existing project identity.

## 17. Open Questions

- Confirm whether brand label should be “Goverone”, “Pramana”, or “Goverone Pramana”.
- Confirm final CTA language.
- Confirm whether the mobile menu should open a drawer-like menu or simple inline dropdown using existing header behavior.
