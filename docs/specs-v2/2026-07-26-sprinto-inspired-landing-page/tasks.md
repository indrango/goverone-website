# Tasks — Sprinto-Inspired Landing Page

## 1. Implementation Handoff

Spec path: `docs/specs-v2/2026-07-26-sprinto-inspired-landing-page/`

Artifacts:

- [requirements.md](file:///Users/indranugraha/Codes/personal/goverone-website/docs/specs-v2/2026-07-26-sprinto-inspired-landing-page/requirements.md)
- [design.md](file:///Users/indranugraha/Codes/personal/goverone-website/docs/specs-v2/2026-07-26-sprinto-inspired-landing-page/design.md)

Goal: rebuild the public homepage as a legally distinct, Sprinto-quality-inspired landing page using Goverone/Pramana colors, copy, typography detail, product visuals, responsive behavior, and polished motion.

## 2. Task List

### T1 — Create implementation branch

Requirements: R11

- [x] Create a new branch before code changes.
- [x] Suggested branch name: `feature/sprinto-inspired-landing-page`.
- [x] Do not commit as part of implementation unless explicitly requested.

Checkpoint:

- [x] Current branch is not main/master before editing.

### T2 — Inspect homepage file structure

Requirements: R1, R12

- [x] Locate the current homepage component or route under `src/`.
- [x] Locate reusable marketing components, if any.
- [x] Locate current style entry points, especially [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css).
- [x] Identify the smallest file scope needed for homepage-only changes.

Checkpoint:

- [x] File scope is known before editing.
- [x] No backend/API files are included in scope.

### T3 — Define final homepage content map

Requirements: R3, R4

- [x] First map what sections and copy density are visibly needed from the Sprinto-style reference.
- [x] Then select only the strongest relevant copy from [GoverOne_Landing_Page_Content_Alternative_Market_Feature_Led_4.md](file:///Users/indranugraha/Codes/personal/goverone-website/GoverOne_Landing_Page_Content_Alternative_Market_Feature_Led_4.md) to fit those sections.
- [x] Do not render every paragraph or every section from the source document.
- [x] Use “GoverOne” as the primary brand label unless implementation review finds different canonical casing in the codebase.
- [x] Use Indonesian source copy as the primary direction.
- [x] Use source CTAs such as “Jadwalkan Demo”, “Lihat Cara Kerja”, and “Diskusikan Pilot Project” only where they fit the final page flow.
- [x] Map header navigation to in-page anchors only for sections that actually appear.

Acceptance checks:

- [x] No Sprinto copy is copied verbatim.
- [x] Copy explains deterministic ISO workflows, human approvals, ownership visibility, and audit-ready evidence.
- [x] No unavailable page link is introduced.

### T4 — Implement semantic homepage structure

Requirements: R1, R4, R10, R12

- [x] Build the homepage section sequence according to the visible Sprinto-style reference structure.
- [x] Use semantic landmarks and heading hierarchy.
- [x] Keep one h1.
- [x] Use h2 for main sections and h3 for cards.

Acceptance checks:

- [x] Homepage renders all planned sections.
- [x] Secondary pages are not created.
- [x] No backend files are changed.

### T5 — Build original product visual system

Requirements: R7, R8, R9, R10

- [x] Replace or enhance hero visual with original HTML/CSS product UI.
- [x] Include original dashboard zones: workspace list, control detail, approval/evidence timeline.
- [x] Add original status chips, cards, timeline rows, and traceability indicators.
- [x] Ensure visual content reflects scope, risk, controls, evidence, approvals, and audit trail.

Acceptance checks:

- [x] No Sprinto screenshots, images, SVGs, logos, or icons are used.
- [x] Visual remains readable on desktop.
- [x] Visual simplifies gracefully on tablet/mobile.

### T6 — Apply existing-token color and surface system

Requirements: R2, R6, R12

- [x] Use existing `--go-*` colors from [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L3-L41).
- [x] Use existing radii, borders, shadows, and button primitives where possible.
- [x] Add only focused homepage-specific classes if existing classes cannot express the layout.

Acceptance checks:

- [x] No Sprinto-specific color values are copied.
- [x] Colors remain semantic and aligned to existing design identity.
- [x] Existing unrelated styles are not rewritten.

### T7 — Implement precise typography scale

Requirements: R5, R6, R9

- [x] Set desktop hero h1 size, line-height, weight, tracking, and max-width explicitly.
- [x] Set section heading, card heading, body, badge, metadata, and CTA font sizes explicitly.
- [x] Add responsive typography rules for tablet, mobile, and narrow mobile.
- [x] Keep text max widths readable.

Acceptance checks:

- [x] Desktop hero headline has premium display scale and balanced line breaks.
- [x] Mobile hero headline remains 2.25rem–2.5rem range unless design review justifies otherwise.
- [x] Body and metadata text stay legible.
- [x] No text block becomes too wide on desktop.

### T8 — Implement spacing, grids, and responsive layout

Requirements: R6, R9

- [x] Use existing container and section spacing tokens.
- [x] Implement desktop split/grid layouts for hero, problem, capabilities, traceability, and comparison.
- [x] Implement tablet transformations at max-width 1023px.
- [x] Implement mobile transformations at max-width 767px.
- [x] Verify narrow mobile behavior at max-width 359px.

Acceptance checks:

- [x] No horizontal overflow at 320px.
- [x] Cards and sections maintain hierarchy on mobile.
- [x] CTAs remain usable touch targets.
- [x] Product visual does not force viewport overflow.

### T9 — Implement polished motion and interaction states

Requirements: R8, R10

- [x] Add hover/focus transitions for cards, buttons, nav links, and product visual elements.
- [x] Add scroll reveal behavior with subtle opacity/translate/scale and deterministic stagger.
- [x] Add optional ambient hero motion for original product elements only.
- [x] Preserve `prefers-reduced-motion` behavior from [global.css](file:///Users/indranugraha/Codes/personal/goverone-website/src/styles/global.css#L619-L628).

Acceptance checks:

- [x] Motion duration and easing match the design spec.
- [x] Reduced-motion mode disables continuous movement.
- [x] No animation causes layout shift.
- [x] No third-party proprietary animation code is copied.

### T10 — Accessibility pass

Requirements: R10

- [x] Verify heading hierarchy.
- [x] Verify keyboard focus visibility.
- [x] Verify CTA labels are descriptive verbs.
- [x] Verify mobile menu accessibility if modified.
- [x] Ensure decorative visuals are not exposed as noisy screen reader content.

Acceptance checks:

- [x] Keyboard users can reach primary actions.
- [x] Focus states are visible.
- [x] Semantic structure is coherent.

### T11 — Legal-distinction and preservation review

Requirements: R1, R2, R3, R7, R12

- [x] Search implemented copy for accidental copied third-party phrasing.
- [x] Confirm no Sprinto asset URLs or downloaded files are present.
- [x] Confirm no fabricated testimonials, reviews, client logos, customer names, awards, ratings, or usage metrics are present.
- [x] If testimonial/review/client proof areas are needed to match the reference structure, use clearly labeled empty placeholders or omit them.
- [x] Confirm no secondary pages or backend changes were introduced.
- [x] Confirm colors derive from existing project tokens.

Acceptance checks:

- [x] Page is inspired by quality, not cloned protected expression.
- [x] All assets and copy are original/reviewable.
- [x] Unavailable social proof is represented only by approved placeholders or omitted.

### T12 — Verification

Requirements: R5, R8, R9, R10, R12

Run project-appropriate verification commands after inspecting package scripts.

Minimum verification:

- [x] Typecheck or build command passes.
- [x] Lint command passes if available.
- [x] Manual responsive review at 320, 375, 768, 1024, and 1440 widths.
- [x] Reduced-motion review.
- [x] Keyboard navigation review.

Acceptance checks:

- [x] Build/typecheck pass.
- [x] No horizontal overflow.
- [x] Motion and typography detail match design intent.

## 3. Dependency Order

1. T1 — branch
2. T2 — inspect files
3. T3 — content map
4. T4 — semantic structure
5. T5 — product visuals
6. T6 — colors/surfaces
7. T7 — typography
8. T8 — responsive layout
9. T9 — motion
10. T10 — accessibility
11. T11 — legal/preservation review
12. T12 — verification

## 4. Final Checkpoint

Implementation is complete only when:

- Homepage is redesigned and responsive.
- Font sizes, line heights, spacing, and detail states are intentionally controlled.
- Visual quality and motion feel are comparable to the reference.
- Copy, assets, colors, and visual expression remain original and project-aligned.
- No backend, API, database, RBAC, audit, or approval behavior changes.
- Verification passes.
