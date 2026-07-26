# Requirements — Sprinto-Inspired Landing Page

## 1. Classification

- Type: UI enhancement / frontend feature
- Scope: Public homepage only
- Destination: `docs/specs-v2/2026-07-26-sprinto-inspired-landing-page/`
- Reference constraint: Use Sprinto as a quality, interaction, and layout-density reference only. Do not copy Sprinto copy, assets, logo, screenshots, proprietary illustrations, brand identity, or exact protected visual expression.

## 2. Functional Intent

### Actor

Primary actor: public website visitor evaluating Goverone/Pramana as an ISO implementation operating system.

Secondary actor: site owner or product team member reviewing whether the landing page communicates credibility, compliance workflow clarity, and conversion intent.

### Action

The visitor lands on the homepage, scans the value proposition, understands the product workflow, observes credibility signals, and can take a primary call-to-action without navigating to other pages.

### Ownership

This is a marketing UI change. No compliance decision, approval, audit entity, RBAC rule, or ownership state is created or modified.

## 3. Problem Statement

The existing homepage needs a more polished, premium, SaaS-compliance presentation with careful typography, spacing, visual rhythm, motion, responsive behavior, and conversion clarity. The implementation should feel as detailed and refined as the Sprinto homepage reference while remaining original and aligned to the current Goverone/Pramana design system.

## 4. Desired Outcome

A redesigned homepage that:

- Uses existing project colors and design tokens from [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L3-L92).
- Uses the Sprinto reference as the primary guide for visible landing-page structure, section density, and what amount of copy appears on-screen, while using [GoverOne_Landing_Page_Content_Alternative_Market_Feature_Led_4.md](file:///Users/indranugraha/Codes/personal/goverone-website/GoverOne_Landing_Page_Content_Alternative_Market_Feature_Led_4.md) as a content pool to select and adapt only the copy that fits those sections.
- Uses original product-style assets, diagrams, cards, and visual compositions.
- Provides motion and transition quality comparable to the reference: smooth scroll reveals, deliberate hover states, gentle transforms, and responsive transitions.
- Preserves legal distinction from Sprinto by not duplicating protected copy, assets, brand marks, or exact visual compositions.
- Works on desktop, tablet, mobile, and narrow mobile without horizontal overflow.

## 5. Terminology

- “Reference”: Sprinto homepage as a benchmark for polish, density, motion feel, and conversion structure.
- “Legally distinct”: Original copy, assets, section compositions, and brand expression that do not reproduce third-party protected material.
- “Existing design reference”: Current Goverone/Pramana CSS tokens, typography scale, spacing system, border radius, button treatment, card treatment, and color palette.
- “Motion feel”: Timing, easing, sequencing, and interaction smoothness inspired by the quality level of the reference, not exact cloned animation code.

## 6. Requirements

### R1 — Homepage-only scope

The implementation must update only the public homepage experience and must not add or implement secondary pages.

Acceptance criteria:

- The primary route renders the redesigned landing page.
- No new product, pricing, resource, customer story, login, or external landing page routes are added for this feature.
- Header and footer links that would lead to unavailable pages are either non-navigating anchors, omitted, or mapped to in-page sections.

### R2 — Existing design system color usage

The page must use Goverone/Pramana design tokens as the color source of truth.

Acceptance criteria:

- Primary color usage comes from `--go-brand-primary`, `--go-brand-primary-hover`, `--go-brand-subtle`, `--go-brand-soft`, `--go-brand-border`, and related tokens.
- Neutral backgrounds, borders, and foreground colors use the existing `--go-*` token family.
- Sprinto-specific color values must not be copied.
- Color is semantic: CTA, status, hierarchy, and state only.

### R3 — Original copy with comparable conversion structure

The landing page must use original copy written for Goverone/Pramana, not copied text from Sprinto.

Acceptance criteria:

- Hero headline uses or adapts the source H1: “Satu workspace untuk menjalankan setiap proyek ISO 27001.”
- Body copy adapts the source positioning: project setup, risk register, Statement of Applicability, documents, approvals, and evidence in one consultant-client workspace.
- Navigation, CTA, problem statements, capabilities, consultant/company sections, traceability, FAQ, and final CTA should select only the strongest and most relevant copy from the content source; the page must not attempt to display all reference-document copy.
- Feature copy is specific to GoverOne ISO 27001 implementation workspace concepts, not generic copied phrasing.
- All final copy is present in code and reviewable.

### R4 — Section composition

The homepage must include a conversion-oriented section sequence whose visible structure and copy density follows the Sprinto reference, with GoverOne content selected and adapted only where it strengthens that structure.

Acceptance criteria:

- Header with brand, concise navigation, and primary CTA adapted from the content source.
- Hero with badge, headline, body copy, primary CTA, secondary CTA, supporting line, and detailed product visual.
- Problem framing section explaining fragmented ISO implementation work.
- Product transition section showing how scattered files become connected implementation records.
- How GoverOne Works section showing project setup through evidence linkage.
- Product capabilities section covering workspace, onboarding, asset/risk, control/SoA, document lifecycle, templates, evidence, and role-based collaboration.
- Audience sections for ISO consultants and companies.
- Connected traceability section as a visual centerpiece.
- Why GoverOne comparison section.
- Trust and product boundaries section.
- FAQ section.
- Final CTA section with optional lead form fields from the content source.
- Footer limited to homepage-safe links or labels.

### R5 — Typography detail

Font sizes, line heights, letter spacing, and hierarchy must be explicitly controlled and responsive.

Acceptance criteria:

- Desktop hero headline uses a large display size aligned to `--go-display-xl-size` or an intentionally documented override.
- Mobile hero headline remains readable at approximately 2.25rem–2.5rem with tight but legible line height.
- Section titles use existing display scales: `--go-display-lg-size` or `--go-display-md-size`.
- Body copy uses 1rem–1.25rem depending on hierarchy.
- Eyebrows, badges, metadata, and UI labels use compact sizes around 0.7rem–0.875rem.
- Each text style specifies line-height and letter-spacing where needed.
- Text blocks use balanced max-widths to avoid long unreadable lines.

### R6 — Spacing, layout, and visual rhythm

The page must use deliberate spacing and container rules.

Acceptance criteria:

- Page containers align with `--go-content-max`, `--go-container-max`, and existing `.container-shell` behavior.
- Sections use `--go-section-compact`, `--go-section-default`, and `--go-section-featured` appropriately.
- Cards use existing radii, borders, shadows, and padding scales.
- Desktop layouts avoid loose empty space and maintain premium density.
- Mobile layouts reduce spacing without collapsing hierarchy.

### R7 — Product visual and assets

The page must use original product-style visuals rather than external copied assets.

Acceptance criteria:

- Hero visual is an original compliance dashboard composition built from HTML/CSS or original generated assets.
- No Sprinto images, logos, icons, illustrations, screenshots, or SVGs are imported.
- Visual content reflects Pramana/Goverone workflows: scope, risk, controls, approvals, evidence, audit trail.
- If generated web images are needed, they must use the approved Trae text-to-image endpoint and concrete URL-encoded prompts.
- Prefer CSS/HTML product UI compositions over raster images for auditability and responsiveness.

### R8 — Motion and transition detail

The page must include high-quality motion and transitions comparable in polish to the reference while remaining original.

Acceptance criteria:

- Header, buttons, cards, nav items, visual panels, and CTAs have consistent hover/focus transitions.
- Scroll reveal animations use subtle opacity, translateY, scale, or blur transitions with documented durations and easing.
- Hero visual may include gentle looped ambient movement for status chips, timeline lines, or product cards.
- Motion respects `prefers-reduced-motion: reduce`.
- Animation should not block content readability.
- No exact third-party animation code or proprietary asset animation is copied.

### R9 — Responsive behavior

The homepage must be carefully responsive across desktop, tablet, mobile, and narrow mobile.

Acceptance criteria:

- Desktop layout supports wide screens without stretching text beyond readable max widths.
- Tablet layout converts multi-column sections to one or two columns based on content density.
- Mobile layout uses single-column stacking and preserves CTA touch targets.
- Narrow mobile around 320–359px has no horizontal overflow.
- Header navigation provides mobile-safe behavior.
- Product visuals simplify gracefully on mobile without becoming illegible.

### R10 — Accessibility and performance

The page must remain accessible and performant. Testimonial, review, customer logo, or client proof sections must use clearly labeled placeholders when verified proof is not yet available, and must not invent customer claims, names, logos, quotes, or metrics.

Acceptance criteria:

- Semantic headings follow a logical hierarchy.
- Interactive elements have visible focus states.
- CTAs use descriptive verbs.
- Touch targets are at least 44px where applicable.
- Images have meaningful alt text or are marked decorative when appropriate.
- Animations do not cause layout shift.
- Any testimonial, review, client logo, customer proof, or metric not backed by verified project content is rendered as an empty placeholder or omitted.
- Placeholder content is clearly marked for future replacement and does not imply real customer validation.
- No heavy third-party animation dependency is introduced unless justified.

### R11 — Branch requirement

Implementation tasks must include creating a new branch before code changes.

Acceptance criteria:

- Tasks specify a branch name before implementation work.
- Branch creation is not performed by this spec generation step.

### R12 — Preservation boundaries

The implementation must preserve unrelated site behavior.

Acceptance criteria:

- No backend, API, database, RBAC, audit log, or compliance workflow behavior is modified.
- No authentication or app dashboard behavior is modified.
- Existing design tokens are reused unless a task explicitly documents a homepage-specific addition.

## 7. Out of Scope

- Copying Sprinto copy verbatim.
- Using Sprinto assets, screenshots, logos, SVGs, icons, illustrations, or proprietary visual compositions.
- Implementing secondary pages.
- Backend workflows, data persistence, approvals, audit logs, AI drafting, or RBAC changes.
- Adding external hyperlinks that are not required for the homepage.

## 8. Compliance, Approval, RBAC, Audit, and AI Implications

- Approval modeling: not applicable.
- RBAC: not applicable.
- Audit logs: not applicable because this is a static marketing UI change.
- AI output: if AI assists with copy or asset prompts, outputs must be reviewable in code/spec and must not be persisted as hidden decisions.
- Ownership: page content remains product/marketing-owned, not AI-owned.

## 9. Correctness Properties

- CP1: The homepage uses only original copy and original or generated assets.
- CP2: The visual language uses existing design tokens rather than copied third-party colors.
- CP3: The page renders without horizontal overflow from 320px through desktop widths.
- CP4: Reduced-motion users receive non-disruptive static or near-static behavior.
- CP5: Font sizes, spacing, and interaction states are explicitly defined and consistent.

## 10. Open Questions

- Use “GoverOne” as the primary page brand per the source content unless implementation review finds the product UI uses a different canonical casing.
- Use Indonesian copy from the source content as the primary copy direction unless a later product review requests bilingual or English copy.
- Should homepage navigation be converted entirely to in-page anchors if secondary pages are not implemented?
