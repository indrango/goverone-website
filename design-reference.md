---
name: goverone-landing-page-visual
version: 1.0.0
status: production-ready
category: frontend-design
summary: Build and refine the GoverOne landing page visual experience using the GoverOne design system and the Calm Operational Trust direction. This skill governs visual design and frontend implementation only; page structure and approved copy come from separate source documents.
---

# GoverOne Landing Page Visual Skill

## 1. Purpose

Use this skill to design, implement, review, or refine the **visual presentation and frontend quality** of the GoverOne marketing landing page.

The finished page must feel:

- calm;
- credible;
- structured;
- operational;
- professional;
- product-forward;
- suitable for ISO 27001 implementation and compliance work;
- visually comparable in maturity to leading B2B compliance brands without imitating their proprietary identity.

The governing creative direction is:

> **Calm Operational Trust** — GoverOne should look like a reliable operating environment for delivering ISO 27001 projects, not a generic AI startup, cybersecurity consultancy, template marketplace, or complex enterprise ERP.

This skill is **self-contained for visual execution**. It includes the required design language, marketing token extensions, responsive rules, implementation workflow, and quality gates.

---

## 2. Scope

### This skill controls

- visual direction;
- color usage;
- typography presentation;
- spacing and layout rhythm;
- surfaces, borders, radius, and elevation;
- imagery and product visual treatment;
- responsive composition;
- motion and transitions;
- component styling;
- frontend implementation quality;
- accessibility of the visual implementation;
- visual regression and review procedures;
- design-system compliance.

### This skill does not control

- page information architecture;
- section order;
- approved headlines and body copy;
- product positioning;
- feature claims;
- pricing;
- SEO copy;
- conversion strategy;
- testimonials, metrics, or customer evidence;
- adding or removing sections.

Those decisions must come from the approved landing-page content document.

### Non-negotiable content rule

Do not rewrite, invent, reorder, shorten, expand, or reinterpret approved landing-page content unless the task explicitly authorizes content editing.

Visual implementation may:

- apply deliberate line breaks;
- constrain line length;
- choose typographic emphasis;
- adapt layout at different viewports;
- truncate only when the content specification explicitly permits it.

Visual implementation must not change the meaning of the approved copy.

---

## 3. Source-of-truth hierarchy

When instructions conflict, apply this order:

1. Approved landing-page content and structure document.
2. This visual skill.
3. GoverOne core design tokens and existing production components.
4. Existing repository conventions.
5. Existing page implementation.
6. Agent preference.

If a needed visual decision is not covered:

1. reuse an existing core token or component;
2. use the closest pattern in this skill;
3. propose a new semantic marketing token;
4. do not introduce an arbitrary value silently.

---

## 4. Brand posture

### GoverOne must communicate

- implementation clarity;
- visible accountability;
- controlled progress;
- practitioner credibility;
- audit readiness;
- dependable collaboration;
- human ownership supported by technology.

### GoverOne must not communicate

- speculative futurism;
- playful consumer software;
- fear-based cybersecurity;
- AI replacing professional judgment;
- decorative complexity;
- visual noisiness;
- enterprise bureaucracy.

### Desired comparison

The page may match the craft quality, restraint, clarity, and product credibility of leading compliance SaaS brands. It must not copy their:

- exact layout;
- illustrations;
- palette;
- motion signature;
- headline phrasing;
- distinctive branded graphics.

Learn principles, not pixels.

---

## 5. Visual principles

### 5.1 Product evidence over decoration

Use actual or implementation-accurate GoverOne UI as the primary visual evidence.

Preferred visual subjects:

- project progress;
- control or requirement mapping;
- ownership by department or person;
- evidence readiness;
- risk or task state;
- audit preparation;
- implementation timeline;
- AI assistance with source references and human review.

Do not create random dashboards only to fill space.

Do not invent:

- customer data;
- unsupported features;
- false metrics;
- fake company logos;
- fake testimonials;
- audit outcomes.

When example data is necessary, use plausible neutral sample data and mark it as sample where appropriate.

### 5.2 Structure creates premium quality

Premium quality must come primarily from:

- strong hierarchy;
- clear alignment;
- intentional spacing;
- coherent section rhythm;
- restrained color;
- legible product UI;
- consistent component geometry;
- thoughtful responsive composition.

Do not rely on visual effects to compensate for weak composition.

### 5.3 Restrained expression

Allowed:

- flat neutral surfaces;
- subtle blue-tinted surfaces;
- thin structural lines;
- implementation paths;
- document-to-control relationships;
- restrained grid or dot patterns;
- quiet product highlights;
- meaningful motion;
- carefully framed product UI.

Not allowed:

- atmospheric gradients;
- neon glow;
- glassmorphism;
- random 3D objects;
- floating shields or locks;
- robot illustrations;
- cyberpunk motifs;
- decorative semantic colors;
- large blurred blobs;
- excessive parallax;
- multiple unrelated illustration styles.

### 5.4 Marketing outside, product inside

The outer landing-page composition should feel spacious, editorial, and brand-led.

The product UI shown inside frames should remain denser, functional, and faithful to the application design system.

Do not enlarge application components and treat them as a complete marketing system.

Do not make the marketing page look like a dashboard with extra margins.

---

## 6. Core visual foundation

## 6.1 Canonical colors

Use semantic token names in implementation. The following values define the canonical light-theme foundation.

```css
:root {
  --go-background: hsl(0 0% 99%);
  --go-foreground: hsl(220 15% 15%);

  --go-card: hsl(0 0% 100%);
  --go-card-foreground: hsl(220 15% 15%);

  --go-secondary: hsl(220 14% 96%);
  --go-secondary-foreground: hsl(220 15% 15%);

  --go-muted: hsl(220 14% 96%);
  --go-muted-foreground: hsl(220 10% 46%);

  --go-border: hsl(220 13% 91%);
  --go-input: hsl(220 13% 91%);

  --go-brand-primary: hsl(220 70% 50%);
  --go-brand-primary-hover: hsl(220 70% 45%);
  --go-brand-primary-focus: hsl(220 70% 40%);
  --go-brand-primary-foreground: hsl(0 0% 100%);

  --go-brand-special: oklch(0.623 0.214 259.815);

  --go-ring: hsl(220 70% 50%);
}
```

### Canonical primary rule

`hsl(220 70% 50%)` is the canonical primary value.

Do not substitute `#3b82f6` for the primary token. The two values are not identical.

### Relationship between brand tokens

- `brand-primary`: standard GoverOne brand and action color.
- `brand-special`: rare supporting accent for a small highlighted detail only.
- `brand-special` must not become a second competing CTA color.
- Do not create a gradient between `brand-primary` and `brand-special`.

### Brand tint scale

Create approved tints from the primary hue and expose them as tokens. Recommended roles:

```css
--go-brand-subtle: hsl(220 70% 98%);
--go-brand-soft: hsl(220 65% 95%);
--go-brand-muted: hsl(220 55% 90%);
--go-brand-border: hsl(220 45% 84%);
```

Use these for:

- section backgrounds;
- quiet highlights;
- product frame accents;
- workflow paths;
- active informational states.

Do not use semantic success, warning, info, or destructive colors as decorative marketing accents.

---

## 6.2 Semantic status colors

Status colors exist to communicate application state, not brand decoration.

Use soft badges with dark foregrounds for small text.

```css
--go-status-success-bg: hsl(142 55% 94%);
--go-status-success-fg: hsl(142 70% 26%);
--go-status-success-border: hsl(142 42% 80%);

--go-status-warning-bg: hsl(38 100% 94%);
--go-status-warning-fg: hsl(32 90% 25%);
--go-status-warning-border: hsl(38 82% 78%);

--go-status-info-bg: hsl(199 80% 94%);
--go-status-info-fg: hsl(199 85% 27%);
--go-status-info-border: hsl(199 65% 80%);

--go-status-destructive-bg: hsl(0 75% 96%);
--go-status-destructive-fg: hsl(0 65% 35%);
--go-status-destructive-border: hsl(0 58% 84%);
```

Status rules:

- always include a text label;
- add an icon when it improves recognition;
- never use color as the only status signal;
- avoid showing many saturated status colors close together;
- reserve solid destructive treatment for genuinely destructive or critical actions.

---

## 6.3 Dark theme

The marketing landing page should default to the light theme unless an approved page direction explicitly requires otherwise.

If dark mode is supported, define every token explicitly. Do not ask the agent to derive dark colors ad hoc.

Recommended base:

```css
.dark {
  --go-background: hsl(220 15% 8%);
  --go-foreground: hsl(220 14% 96%);

  --go-card: hsl(220 15% 10%);
  --go-card-foreground: hsl(220 14% 96%);

  --go-secondary: hsl(220 14% 14%);
  --go-secondary-foreground: hsl(220 14% 94%);

  --go-muted: hsl(220 13% 14%);
  --go-muted-foreground: hsl(220 10% 68%);

  --go-border: hsl(220 12% 20%);
  --go-input: hsl(220 12% 22%);

  --go-brand-primary: hsl(220 75% 62%);
  --go-brand-primary-hover: hsl(220 75% 67%);
  --go-brand-primary-focus: hsl(220 75% 72%);
  --go-brand-primary-foreground: hsl(220 20% 8%);

  --go-ring: hsl(220 75% 62%);
}
```

Dark mode must be visually reviewed separately. Passing light-mode tests does not validate dark mode.

---

## 7. Typography

## 7.1 Font family

Default stack:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
```

Use the same family for product and marketing unless a separately approved brand decision introduces a display font.

Do not add an external font merely to imitate another SaaS brand.

Premium typography should come from:

- scale;
- line breaks;
- tracking;
- width constraints;
- weight;
- whitespace;
- hierarchy.

## 7.2 Product typography

Retain the application scale for product UI and product screenshots:

| Token | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Product H1 | 30px | 600 | 1.2 | -0.5px |
| Product H2 | 24px | 600 | 1.3 | -0.3px |
| Product H3 | 20px | 600 | 1.4 | -0.2px |
| Product H4 | 18px | 600 | 1.4 | -0.1px |
| Body large | 18px | 400 | 1.5 | 0 |
| Body | 16px | 400 | 1.5 | 0 |
| Body small | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 400 | 1.4 | 0 |
| Button | 14px | 500 | 1.2 | 0 |
| Label | 14px | 500 | 1.4 | 0 |

## 7.3 Marketing display typography

Use responsive display tokens for the outer marketing page.

```css
--go-display-xl-size: clamp(2.5rem, 5vw, 4rem);
--go-display-xl-line: 1.05;
--go-display-xl-weight: 600;
--go-display-xl-track: -0.03em;

--go-display-lg-size: clamp(2.25rem, 4vw, 3rem);
--go-display-lg-line: 1.1;
--go-display-lg-weight: 600;
--go-display-lg-track: -0.025em;

--go-display-md-size: clamp(2rem, 3.2vw, 2.5rem);
--go-display-md-line: 1.15;
--go-display-md-weight: 600;
--go-display-md-track: -0.02em;

--go-lead-size: clamp(1.125rem, 1.7vw, 1.25rem);
--go-lead-line: 1.55;
--go-lead-weight: 400;
```

Recommended mapping:

- hero title: `display-xl`;
- major section heading: `display-lg`;
- supporting section heading: `display-md`;
- lead copy: `lead`;
- body copy: existing body scale.

### Typography rules

- Hero heading should normally use no more than 10–12 words per visual line.
- Hero heading should normally occupy no more than three lines on a 390px viewport.
- Section heading measure: approximately 12–18 words per line depending on size.
- Body copy measure: approximately 55–72 characters per line.
- Avoid full-width paragraphs.
- Avoid forcing every heading to be centered.
- Avoid excessive bold text in paragraphs.
- Use sentence case unless approved brand content specifies otherwise.
- Keep heading weight primarily at 600; do not make the page visually heavy with 700–900 weights.

---

## 8. Spacing and layout

## 8.1 Base spacing scale

```css
--go-space-1: 4px;
--go-space-2: 8px;
--go-space-3: 12px;
--go-space-4: 16px;
--go-space-6: 24px;
--go-space-8: 32px;
--go-space-12: 48px;
--go-space-16: 64px;
--go-space-18: 72px;
--go-space-20: 80px;
--go-space-24: 96px;
--go-space-32: 128px;
```

Do not skip to arbitrary spacing values.

## 8.2 Marketing section rhythm

Use semantic section spacing:

```css
--go-section-compact: clamp(48px, 6vw, 72px);
--go-section-default: clamp(56px, 8vw, 96px);
--go-section-featured: clamp(64px, 10vw, 128px);
```

Suggested use:

- trust strip or narrow proof area: compact;
- normal feature or narrative section: default;
- hero, major product story, or final CTA: featured.

Do not give every section identical top and bottom spacing. Use rhythm intentionally while staying on the token scale.

## 8.3 Container system

```css
--go-container-max: 1400px;
--go-content-max: 1180px;
--go-reading-max: 720px;
--go-narrow-max: 620px;
```

Horizontal page padding:

```css
padding-inline: clamp(20px, 4vw, 48px);
```

Rules:

- major page elements align to the same container edges;
- do not create a different arbitrary width for every section;
- text and visuals may use separate internal columns while sharing the outer container;
- full-bleed backgrounds may extend to the viewport, but content remains aligned to the container.

## 8.4 Grid

Default marketing grid:

- desktop: 12 columns;
- tablet: 8 columns;
- mobile: 4 columns.

Default gaps:

- desktop: 24–32px;
- tablet: 20–24px;
- mobile: 16–20px.

Do not turn every section into a three-card grid. Choose composition based on the content supplied by the content document.

Preferred composition families:

- editorial text with a product visual;
- centered statement with one proof visual;
- alternating split narrative;
- structured workflow path;
- compact proof or logo strip;
- feature detail with UI annotation;
- final conversion block.

Limit the page to a small set of repeated composition families so it feels designed as one system.

---

## 9. Geometry and elevation

## 9.1 Radius

```css
--go-radius-xs: 4px;
--go-radius-sm: 6px;
--go-radius-md: 8px;
--go-radius-lg: 12px;
--go-radius-xl: 16px;
--go-radius-2xl: 24px;
--go-radius-pill: 9999px;
```

Usage:

- small tags: 4–6px or pill when status/category semantics require it;
- buttons and inputs: 8px;
- product cards and normal panels: 12px;
- marketing feature frames: 16px;
- oversized hero or CTA surface: up to 24px, used rarely.

Do not mix several radius styles within one composition.

## 9.2 Elevation

GoverOne is border-first and shadow-light.

### Level 0

- no shadow;
- no border;
- inline content or flat surface.

### Level 1

- white/card surface;
- 1px neutral border;
- default product and marketing card.

### Level 2

- subtle border shift or restrained shadow on hover;
- interactive card only.

### Level 3

- visible 2px focus ring;
- keyboard and form focus.

### Level 4

- stronger but restrained shadow;
- drawer, modal, or floating navigation only.

Rules:

- do not give all cards a floating shadow;
- do not stack shadow, gradient, border, and glow together;
- hover elevation must indicate interactivity, not decoration;
- use borders and background contrast before shadow.

---

## 10. Surfaces

Approved marketing surface types:

### Base canvas

- near-white background;
- dark neutral text;
- default for most of the page.

### Muted neutral section

- light neutral background;
- useful for separating a dense product narrative from the previous section.

### Brand subtle section

- approved brand tint only;
- useful for one or two highlighted sections;
- not for alternating every section.

### Dark contrast section

- optional;
- use sparingly for a major transition, proof, or final CTA;
- must retain GoverOne restraint;
- do not add neon or space-like effects.

### Card surface

- white or theme card color;
- 1px border;
- radius 12–16px;
- padding based on content density.

Avoid zebra-striping every section with different colors. Section distinction should also come from composition and spacing.

---

## 11. Marketing component system

Reuse core product primitives where appropriate, but define marketing-specific components for page composition.

## 11.1 Marketing container

Responsibilities:

- consistent max width;
- responsive page padding;
- stable alignment across sections.

Do not create per-section custom container widths unless approved as `reading`, `narrow`, `content`, or `max` variants.

## 11.2 Marketing section

Required variants:

- `compact`;
- `default`;
- `featured`;
- `base` surface;
- `muted` surface;
- `brand-subtle` surface;
- optional `dark` surface.

The section component should control spacing and surface. Content components should not duplicate section padding.

## 11.3 Marketing heading

Required variants:

- `display-xl`;
- `display-lg`;
- `display-md`;
- left aligned;
- centered;
- narrow measure;
- standard measure.

The component may control line length but must not rewrite the supplied copy.

## 11.4 Buttons

Core application button styling remains the foundation.

Marketing button variants:

- primary;
- secondary;
- outline;
- ghost or text-link.

Sizing:

```css
--go-button-sm-height: 36px;
--go-button-md-height: 40px;
--go-button-lg-height: 48px;
--go-touch-target-min: 44px;
```

Rules:

- hero CTA uses large sizing;
- navigation CTA uses medium sizing;
- mobile interactive target is at least 44px;
- use one primary action per section;
- the same page-level conversion action may repeat in navigation, hero, and final CTA;
- avoid two equally dominant buttons;
- button labels come from the content document.

## 11.5 Product frame

This is the most important marketing component.

Recommended token contract:

```css
--go-product-frame-bg: var(--go-card);
--go-product-frame-border: var(--go-border);
--go-product-frame-radius: var(--go-radius-xl);
--go-product-frame-padding: clamp(8px, 1vw, 14px);
--go-product-frame-max: 1120px;
```

Product frame rules:

- use real or implementation-accurate GoverOne components;
- retain application typography and density inside the frame;
- preserve legible statuses, labels, and ownership indicators;
- use a neutral frame, not a fake device mockup unless browser context is important;
- optional toolbar must be visually quiet;
- do not show fake browser controls as decoration;
- do not place product UI on a dramatic perspective angle that harms legibility;
- do not use an entire desktop screenshot scaled down on mobile.

Mobile product visual strategy must choose one:

1. recompose the UI into a focused mobile crop;
2. show one meaningful product panel;
3. horizontally pan a deliberately framed product area;
4. replace the broad screenshot with a mobile-specific component composition.

Never simply shrink a 1440px dashboard to 390px.

## 11.6 Workflow path

Use when approved content describes a sequence or implementation journey.

Visual grammar:

- simple step labels;
- restrained connecting line;
- current or completed state where relevant;
- small product evidence near selected steps;
- optional purposeful progression motion.

Do not turn the workflow into a colorful infographic.

## 11.7 Feature narrative

Use a two-column or asymmetric layout when content pairs a message with product evidence.

Rules:

- text and visual must explain the same claim;
- avoid placing a generic UI screenshot beside unrelated copy;
- annotations should point to actual evidence in the UI;
- keep annotations brief and quiet;
- alternate layout only when it improves rhythm, not automatically.

## 11.8 Trust strip

May contain only approved proof:

- real customer logos;
- practitioner or methodology statements;
- real integrations;
- real certifications;
- approved trust statements.

Do not fabricate logos or claim certifications not provided by the source document.

## 11.9 Metric proof

Only render metrics supplied by approved content.

Visual treatment:

- large but restrained number;
- clear label;
- supporting context;
- no decorative chart if the metric does not need one.

## 11.10 Testimonial

Use only real approved quote content.

Design:

- readable quote;
- restrained quotation treatment;
- person, role, and company only when supplied;
- real avatar only when approved;
- no fabricated portrait.

## 11.11 Final CTA

The final CTA may use a featured surface and stronger contrast.

It must:

- remain calm and credible;
- repeat the approved conversion action;
- avoid becoming a large decorative gradient banner;
- work at 390px without crowded controls.

## 11.12 Marketing navigation

The marketing navigation is separate from the product top navigation.

Rules:

- clear brand identity;
- restrained height;
- one visually dominant CTA;
- legible dropdown or mobile menu;
- sticky behavior only when it benefits navigation;
- if sticky, apply subtle border or surface transition on scroll;
- no heavy blur or glass effect.

## 11.13 Marketing footer

Follow the approved information architecture.

Visual rules:

- clear grouping;
- subdued hierarchy;
- sufficient spacing;
- accessible link states;
- no unnecessary illustration.

---

## 12. Imagery and illustration

### Preferred hierarchy

1. Real product UI.
2. Purpose-built product diagrams.
3. Abstract structural patterns tied to compliance workflow.
4. Approved customer or team photography when available.
5. Stock imagery only when explicitly requested and strategically relevant.

### Avoid

- generic office meetings;
- people pointing at laptops;
- padlocks, shields, or server racks;
- AI brains or robots;
- unrelated 3D objects;
- busy isometric illustrations;
- multiple illustration styles on one page.

### Diagram rules

Diagrams should represent real GoverOne concepts such as:

- task ownership;
- document and evidence linkage;
- control mapping;
- implementation stages;
- consultant and company collaboration;
- readiness progression.

Use:

- neutral surfaces;
- brand-blue connection lines;
- product icon family;
- limited text;
- consistent geometry.

---

## 13. Iconography

Use Lucide React or the established repository icon set.

Rules:

- one icon family only;
- consistent stroke weight;
- default size families: 16, 20, 24px;
- icons support meaning, not decoration;
- do not place an icon in every heading;
- do not use emoji in core visual communication;
- status icons must accompany text, not replace it.

---

## 14. Motion system

Motion must communicate:

- progression;
- relationship;
- state change;
- reveal of relevant product evidence;
- navigation feedback.

Motion must not exist only to make the page look active.

## 14.1 Timing tokens

```css
--go-motion-fast: 120ms;
--go-motion-base: 180ms;
--go-motion-slow: 280ms;
--go-motion-emphasis: 420ms;

--go-ease-standard: cubic-bezier(0.2, 0, 0, 1);
--go-ease-enter: cubic-bezier(0, 0, 0, 1);
--go-ease-exit: cubic-bezier(0.3, 0, 1, 1);
```

## 14.2 Approved motion

- button and link state transitions;
- subtle card border or elevation change;
- product panel reveal;
- workflow progression;
- small ownership or status transition;
- navigation surface transition on scroll;
- short section reveal when it improves orientation.

## 14.3 Prohibited motion

- continuous floating;
- excessive parallax;
- large zoom effects;
- scroll hijacking;
- animated gradients;
- random particles;
- staggered animation on every small element;
- auto-playing product motion that prevents reading.

## 14.4 Reduced motion

Always support:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

Replace motion-dependent communication with static visual state.

---

## 15. Responsive behavior

Required review viewports:

- 390 × 844;
- 768 × 1024;
- 1024 × 768 or equivalent landscape tablet;
- 1280 × 800;
- 1440 × 1000.

Optional additional checks:

- 320px narrow mobile;
- 1920px large desktop.

## 15.1 Breakpoints

Use repository conventions when available. Conceptual breakpoints:

- mobile: below 768px;
- tablet: 768–1023px;
- desktop: 1024–1399px;
- wide: 1400px and above.

## 15.2 Responsive principles

Responsive design is recomposition, not uniform shrinking.

At smaller widths:

- stack text and visuals intentionally;
- preserve message hierarchy;
- reduce decorative complexity;
- simplify annotations;
- recompose product UI;
- keep tap targets at least 44px;
- protect readable line lengths;
- prevent horizontal overflow;
- avoid tiny UI labels.

## 15.3 Mobile navigation

- use a clear menu trigger;
- provide visible focus;
- keep links easy to tap;
- maintain one primary CTA;
- use a drawer or full-height panel based on existing primitives;
- prevent background scroll while open;
- return focus correctly when closed.

## 15.4 Mobile product visuals

Minimum product label size should remain readable without zoom.

If the complete interface cannot remain legible:

- crop;
- isolate;
- recompose;
- replace with a focused product state.

Do not hide the primary proof visual without an equivalent mobile replacement.

---

## 16. Accessibility

Target WCAG AA.

Required:

- semantic heading order;
- keyboard-operable navigation;
- visible focus ring;
- text contrast of at least 4.5:1 for normal text;
- large-text contrast of at least 3:1;
- non-text UI contrast of at least 3:1 where applicable;
- alt text for meaningful images;
- empty alt text for decorative images;
- descriptive labels for controls;
- no color-only status communication;
- minimum 44px mobile touch target;
- reduced-motion support;
- correct menu, dialog, drawer, and tooltip semantics.

Do not rely solely on Radix primitives. Verify the composed page behavior.

Muted text must be tested on every surface where it appears.

---

## 17. Frontend implementation rules

## 17.1 Token-only styling

Do not introduce raw design values when a token exists.

Prohibited:

```tsx
className="mt-[37px] bg-[#2563eb] rounded-[18px] shadow-[...]"
```

Preferred:

```tsx
className="mt-section-default bg-brand-primary rounded-marketing-frame"
```

New values require a semantic token proposal.

## 17.2 Component boundaries

Build reusable components for repeated visual patterns.

Do not create one universal component with dozens of boolean props.

Preferred layers:

- core UI primitives;
- product components;
- marketing primitives;
- landing-page section composition.

Section components may compose patterns but should not redefine shared tokens.

## 17.3 Allowed file changes

When a task provides an allowed-file list, modify only those files.

Do not edit global tokens, fonts, or shared components silently to solve a local section problem.

## 17.4 CSS and framework practices

- follow the repository's established styling system;
- use CSS variables for semantic tokens;
- use CVA or the existing variant mechanism for component variants;
- avoid inline styles for stable design decisions;
- avoid duplicated long utility strings by extracting components or variants;
- preserve semantic HTML;
- prefer CSS layout over JavaScript-driven positioning;
- avoid measuring the viewport in JavaScript when CSS can solve it.

## 17.5 Product UI fidelity

When building a product visual:

- reuse actual components when possible;
- use the same typography, spacing, status rules, and icon family as the product;
- do not simplify to the point that it becomes a fake illustration;
- do not expose confidential or real customer data;
- use stable mock data fixtures for marketing examples.

## 17.6 Performance

- use responsive images;
- specify image width and height;
- lazy-load below-the-fold media;
- do not lazy-load the primary hero visual if it harms LCP;
- minimize large client-side animation libraries;
- prefer CSS transitions for simple motion;
- avoid shipping unused component libraries;
- reserve layout space to prevent CLS;
- optimize fonts if a custom font is ever approved;
- keep product screenshots appropriately compressed.

Recommended launch thresholds:

- Lighthouse Performance: 90 or higher;
- Accessibility: 95 or higher;
- Best Practices: 95 or higher;
- SEO: 95 or higher;
- no serious accessibility violations;
- no unexpected visual regressions.

Treat Lighthouse as a repeatable signal, not the only definition of quality.

---

## 18. Agent workflow

Use a controlled evaluator–optimizer loop.

## Step 1: Read sources

Read:

- approved landing-page content and structure;
- this skill;
- existing core tokens;
- existing marketing and product components;
- current page implementation when refining an existing page.

Do not start coding before identifying the relevant source-of-truth files.

## Step 2: Produce a visual implementation note

Before implementation, state:

- section or component being built;
- approved content being rendered;
- selected composition family;
- reused components;
- required new marketing tokens, if any;
- responsive strategy;
- primary visual risk.

Keep this note concise. Do not redesign the content architecture.

## Step 3: Build foundation first

Before composing many sections, confirm that these exist:

- marketing container;
- marketing section;
- display typography;
- buttons;
- product frame;
- navigation primitives;
- surface variants;
- motion tokens.

Do not hardcode each section independently.

## Step 4: Implement one coherent scope

Preferred task scope:

- one major section;
- one component family;
- one visual system improvement.

Avoid redesigning the entire landing page in one unreviewable change unless explicitly requested.

## Step 5: Render and inspect

Evaluate rendered output, not source code alone.

Capture:

- desktop screenshot;
- mobile screenshot;
- section-level screenshot when useful;
- interaction states;
- console output;
- visual diff;
- accessibility result.

## Step 6: Evaluate against the rubric

Classify findings:

- critical;
- major;
- minor.

Every finding should include:

- viewport;
- section or component;
- visible evidence;
- violated rule;
- recommended correction;
- whether human judgment is required.

## Step 7: Optimize

Fix critical issues first, then major issues.

Do not perform endless visual polishing. After two or three evaluator loops, surface remaining subjective decisions for human review.

## Step 8: Report

Provide:

- implementation summary;
- files changed;
- components reused or introduced;
- tokens introduced or proposed;
- tests run;
- responsive states reviewed;
- known visual risks;
- any content or product claim that could not be represented faithfully.

---

## 19. Visual QA rubric

Score the implementation out of 100.

| Category | Weight |
|---|---:|
| Visual hierarchy | 15 |
| Brand consistency | 15 |
| Product credibility | 15 |
| Layout and spacing | 12 |
| Typography quality | 10 |
| Responsive composition | 10 |
| Component consistency | 8 |
| Accessibility | 7 |
| Motion restraint | 4 |
| Performance readiness | 4 |
| Total | 100 |

### Launch threshold

- total score at least 85;
- no category below 70% of its available score;
- no critical issue;
- no horizontal overflow;
- no placeholder content;
- no invented product claim or proof;
- no unapproved raw design values;
- mobile and desktop reviewed;
- visual regressions approved.

### Category guidance

#### Visual hierarchy

- The primary message is immediately visible.
- Section hierarchy is clear without relying on color alone.
- CTA prominence matches the approved content goal.

#### Brand consistency

- Calm Operational Trust is evident.
- No generic AI or cybersecurity visual cliché appears.
- Brand blue is restrained and consistent.

#### Product credibility

- Product UI looks real and coherent.
- Visual evidence supports the accompanying message.
- Labels and states remain legible.

#### Layout and spacing

- Alignment is consistent.
- Whitespace creates rhythm.
- No section feels crowded or arbitrarily empty.

#### Typography

- Display and product scales are used in the correct contexts.
- Line lengths and line breaks are intentional.
- Mobile headings remain readable.

#### Responsive composition

- Mobile is recomposed rather than merely scaled.
- Product proof remains useful.
- Tap targets and spacing remain comfortable.

#### Component consistency

- Repeated patterns share components and tokens.
- Radius, border, icon, and button systems remain coherent.

#### Accessibility

- Contrast, focus, semantics, motion, and keyboard behavior pass.

#### Motion restraint

- Motion helps explain state or progression.
- The page remains calm when idle.

#### Performance readiness

- Images, fonts, and motion are optimized.
- Layout is stable.

---

## 20. Automated quality gates

## 20.1 Visual regression

Use Playwright or the repository's visual testing framework.

Minimum screenshot coverage:

- navigation;
- hero;
- every major product visual;
- workflow section;
- CTA;
- footer;
- mobile menu;
- focus or hover state for key interactive elements.

Review diffs intentionally. Do not update baselines merely to make tests pass.

## 20.2 Accessibility testing

Use automated accessibility checks in addition to manual keyboard review.

Required checks:

- serious or critical violations;
- heading hierarchy;
- landmark structure;
- focus order;
- menu and dialog behavior;
- color contrast;
- reduced motion.

## 20.3 Token linting

Fail review when implementation introduces:

- raw hex, RGB, HSL, or OKLCH values outside token files;
- arbitrary spacing values;
- arbitrary radius values;
- unapproved shadows;
- an unapproved font;
- semantic status colors used decoratively;
- duplicated component styling that should be shared.

Allow exceptions only in approved token-definition files.

## 20.4 Functional checks

- navigation links work;
- CTA destinations are correct;
- mobile menu opens, closes, traps or manages focus correctly, and restores focus;
- forms expose errors and success states correctly when present;
- no console errors;
- no broken image or layout shift.

---

## 21. Common failure modes

### Generic SaaS hero

Symptoms:

- centered headline;
- blue gradient background;
- floating cards;
- fake dashboard;
- no relationship to GoverOne's real workflow.

Correction:

- use the approved content hierarchy;
- show real product evidence;
- build a composition around implementation accountability.

### Dashboard-shaped landing page

Symptoms:

- every section is a bordered card;
- typography never exceeds application H1 size;
- dense layout everywhere;
- no editorial rhythm.

Correction:

- use marketing display type;
- introduce spacious sections;
- use cards only when content needs containment;
- separate marketing composition from product UI.

### Excessive decoration

Symptoms:

- gradients, glow, particles, blurred shapes, perspective screenshots.

Correction:

- remove effects;
- strengthen alignment, spacing, and product framing;
- retain only structural or meaningful visual devices.

### Product screenshot becomes unreadable

Symptoms:

- complete desktop UI shrunk into a small frame;
- labels under 12px equivalent;
- mobile screenshot cannot be understood.

Correction:

- crop or recompose;
- isolate one product state;
- enlarge the proof that supports the message.

### Copy and visual mismatch

Symptoms:

- content discusses accountability but the visual shows generic analytics;
- content discusses audit readiness but the visual shows chat only.

Correction:

- select a product state that directly evidences the approved message.

### Uncontrolled token drift

Symptoms:

- many shades of blue;
- slightly different section spacing;
- inconsistent radii;
- repeated custom Tailwind values.

Correction:

- consolidate into semantic tokens;
- reject arbitrary values;
- update shared components.

### Status colors used as marketing decoration

Symptoms:

- green, orange, and red cards used for visual variety.

Correction:

- return marketing accents to neutral and brand-blue tokens;
- reserve status colors for actual state.

### Every section uses a new visual language

Symptoms:

- unrelated card styles;
- different illustration methods;
- inconsistent alignment and surfaces.

Correction:

- reuse two to four approved composition families;
- use one icon and product-frame system;
- maintain shared container alignment.

### AI-first cliché

Symptoms:

- chatbot is the hero proof for every message;
- sparkle icons;
- AI brain or agent swarm illustration;
- implication that AI owns compliance decisions.

Correction:

- show AI as a supporting capability;
- include sources, suggested actions, and human approval;
- keep operational workflow and accountability central.

---

## 22. Hard constraints checklist

The agent must confirm all items before declaring visual completion.

### Content integrity

- [ ] Existing section structure is unchanged unless explicitly authorized.
- [ ] Approved copy is not rewritten.
- [ ] No unsupported claim, metric, logo, testimonial, or feature was invented.

### Brand

- [ ] Page communicates Calm Operational Trust.
- [ ] No generic AI or cybersecurity cliché is present.
- [ ] Product evidence is more prominent than decoration.

### Tokens

- [ ] Canonical primary is `hsl(220 70% 50%)` through a semantic token.
- [ ] No arbitrary design value exists outside token definitions.
- [ ] Semantic status colors are not used decoratively.
- [ ] Dark tokens are explicit when dark mode is supported.

### Typography

- [ ] Marketing display scale is used outside product UI.
- [ ] Product typography remains inside product visuals.
- [ ] Heading and paragraph measures are readable.
- [ ] Mobile hero heading remains controlled.

### Layout

- [ ] Containers align across sections.
- [ ] Section spacing uses semantic responsive tokens.
- [ ] Composition is not an endless card grid.
- [ ] No horizontal overflow exists.

### Product visuals

- [ ] UI is real or implementation-accurate.
- [ ] Product evidence supports adjacent copy.
- [ ] Product labels remain readable.
- [ ] Mobile product UI is recomposed, cropped, or focused.

### Interaction

- [ ] Key controls meet touch-target requirements.
- [ ] Focus state is visible.
- [ ] Motion is purposeful.
- [ ] Reduced motion is supported.

### QA

- [ ] Required viewports were reviewed.
- [ ] Visual tests pass or approved diffs are documented.
- [ ] Accessibility checks pass without serious violations.
- [ ] Performance thresholds are met or exceptions documented.
- [ ] Remaining subjective risks are surfaced for human review.

---

## 23. Agent task template

Use this format for implementation work:

```md
# Task
Implement or refine [section/component name] for the GoverOne landing page.

## Objective
Render the approved content with a calm, credible, structured, product-forward visual presentation.

## Source of truth
- Approved landing-page content document
- GoverOne Landing Page Visual Skill
- GoverOne core tokens and existing components

## Scope
Visual design and frontend implementation only.
Do not change section order or approved copy.

## Allowed files
[List exact files when known]

## Required composition
[Choose an approved composition family or state the reason for another approach]

## Constraints
- Use semantic design tokens only.
- Do not introduce gradients, glow, glassmorphism, random 3D imagery, or cybersecurity clichés.
- Do not use status colors decoratively.
- Reuse real GoverOne product components where possible.
- Do not invent data, metrics, features, logos, or testimonials.
- Preserve visible focus and reduced-motion behavior.

## Responsive requirements
- Review at 390, 768, 1280, and 1440px.
- No horizontal overflow.
- Recompose product visuals for mobile.
- Maintain 44px touch targets.

## Acceptance criteria
- Content meaning and order are preserved.
- Visual hierarchy is clear.
- Product proof directly supports the section message.
- All spacing, colors, radius, typography, and motion use approved tokens.
- Screenshot tests pass.
- No serious accessibility violation.
- No console error.

## Required report
- Summary
- Files changed
- Components reused or added
- Tokens proposed or added
- Tests executed
- Remaining visual risks
```

---

## 24. Evaluator prompt

Use this after rendering:

```md
Evaluate the rendered GoverOne landing-page implementation using the GoverOne Landing Page Visual Skill.

Do not rewrite the supplied content and do not propose a new page structure unless the current implementation violates an explicit source-of-truth requirement.

Score the implementation using the visual QA rubric.

For each issue provide:
1. Severity: critical, major, or minor
2. Viewport
3. Section or component
4. Visible evidence
5. Violated skill rule
6. Recommended visual correction
7. Whether human judgment is required

Prioritize:
- unclear hierarchy;
- weak alignment or spacing;
- generic SaaS appearance;
- mismatch between message and product evidence;
- unreadable product UI;
- dashboard-like marketing composition;
- decorative status colors;
- uncontrolled token values;
- awkward line breaks;
- mobile layouts that are only scaled-down desktop layouts;
- accessibility or reduced-motion failures.

Do not recommend gradients, glow, glassmorphism, decorative 3D imagery, or generic AI/cybersecurity motifs.
```

---

## 25. Definition of done

The landing-page visual implementation is done when:

1. It faithfully renders the separately approved page structure and content.
2. It clearly expresses Calm Operational Trust.
3. It looks like a mature GoverOne brand experience rather than a generic SaaS template.
4. It uses one coherent visual system across every section.
5. It preserves direct visual continuity with the GoverOne product.
6. It uses real, legible product evidence instead of decorative dashboards.
7. It is intentionally recomposed for mobile.
8. It passes token, visual, accessibility, and functional quality gates.
9. It meets the visual QA launch threshold.
10. Any remaining subjective decision is explicitly surfaced rather than silently improvised by the agent.
