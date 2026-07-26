---
version: alpha
name: Goverone-implementation
description: "A calm, neutral design system for ISO compliance management inspired by Asana's clarity and Linear's focus. Built around a dual-theme light/dark palette with semantic status colors, professional blue primary accent, and Radix UI primitives. The system emphasizes readability, clear ownership visibility, and audit-safe neutrality without decorative elements. Typography uses system fonts at measured weights with optimal line heights. Components follow a consistent pattern of drawers for secondary actions, modals for critical confirmations, and semantic color-coded status badges."

colors:
  primary: "hsl(220, 70%, 50%)"
  primary-foreground: "hsl(0, 0%, 100%)"
  primary-hover: "hsl(220, 70%, 45%)"
  primary-focus: "hsl(220, 70%, 40%)"
  secondary: "hsl(220, 14%, 96%)"
  secondary-foreground: "hsl(220, 15%, 15%)"
  muted: "hsl(220, 14%, 96%)"
  muted-foreground: "hsl(220, 10%, 46%)"
  accent: "hsl(220, 14%, 96%)"
  accent-foreground: "hsl(220, 15%, 15%)"
  destructive: "hsl(0, 72%, 51%)"
  destructive-foreground: "hsl(0, 0%, 100%)"
  background: "hsl(0, 0%, 99%)"
  foreground: "hsl(220, 15%, 15%)"
  card: "hsl(0, 0%, 100%)"
  card-foreground: "hsl(220, 15%, 15%)"
  border: "hsl(220, 13%, 91%)"
  input: "hsl(220, 13%, 91%)"
  ring: "hsl(220, 70%, 50%)"
  success: "hsl(142, 71%, 45%)"
  success-foreground: "hsl(0, 0%, 100%)"
  warning: "hsl(38, 92%, 50%)"
  warning-foreground: "hsl(0, 0%, 100%)"
  info: "hsl(199, 89%, 48%)"
  info-foreground: "hsl(0, 0%, 100%)"
  sidebar-background: "hsl(0, 0%, 98%)"
  sidebar-foreground: "hsl(220, 10%, 30%)"
  sidebar-primary: "hsl(220, 70%, 50%)"
  sidebar-primary-foreground: "hsl(0, 0%, 100%)"
  sidebar-accent: "hsl(220, 14%, 96%)"
  sidebar-accent-foreground: "hsl(220, 15%, 15%)"
  sidebar-border: "hsl(220, 13%, 91%)"
  sidebar-ring: "hsl(220, 70%, 50%)"
  brand: "oklch(0.623, 0.214, 259.815)"

typography:
  h1:
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  h2:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  h3:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.2px
  h4:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.1px
  body-lg:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  label:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  card-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  input-default:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  badge-default:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  badge-outline:
    backgroundColor: transparent
    textColor: "{colors.foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  sidebar-default:
    backgroundColor: "{colors.sidebar-background}"
    textColor: "{colors.sidebar-foreground}"
    typography: "{typography.body}"
    rounded: 0
  sidebar-item-active:
    backgroundColor: "{colors.sidebar-accent}"
    textColor: "{colors.sidebar-accent-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
  drawer-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    typography: "{typography.body}"
    rounded: 0
  dialog-default:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  status-badge-draft:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
  status-badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.success-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
  status-badge-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.warning-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
  status-badge-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.info-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
  status-badge-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.destructive-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"

---

## Overview

Goverone's design system is a calm, neutral palette built for ISO compliance management. The system uses professional blue (`{colors.primary}` #3b82f6) as the primary accent, with semantic status colors (success green, warning amber, info blue, destructive red) used exclusively for status indicators. The design emphasizes clarity, readability, and audit-safe neutrality without decorative elements.

The system supports both light and dark themes, with all colors defined as HSL values for smooth theme transitions. The light mode uses a clean white/canvas background with neutral grays, while dark mode uses deep blue-gray backgrounds for reduced eye strain during long compliance sessions.

**Key Characteristics:**
- **Professional blue accent** (`{colors.primary}` hsl(220, 70%, 50%)) — primary CTAs, navigation highlights, interactive elements
- **Semantic status colors** — success (green), warning (amber), info (blue), destructive (red) used strictly for status indicators
- **Dual-theme support** — light mode default with comprehensive dark mode implementation
- **System typography** — San Francisco/Inter fallbacks at measured weights with optimal line heights for readability
- **Drawer-first navigation** — secondary actions open in drawers, critical confirmations use modals
- **Radix UI primitives** — all components built on accessible, keyboard-navigable Radix UI primitives
- **Audit-safe neutrality** — no playful metaphors, emojis in core workflows, or decorative elements

## Colors

### Brand & Accent
- **Primary Blue** ({colors.primary}): The signature Goverone accent — primary CTA, navigation active states, interactive elements. HSL(220, 70%, 50%)
- **Primary Foreground** ({colors.primary-foreground}): White text on primary backgrounds. HSL(0, 0%, 100%)
- **Primary Hover** ({colors.primary-hover}): Darker blue for hover states. HSL(220, 70%, 45%)
- **Primary Focus** ({colors.primary-focus}): Focus ring color. HSL(220, 70%, 40%)
- **Brand** ({colors.brand}): Lavender-blue brand accent for special elements. oklch(0.623, 0.214, 259.815)

### Neutral Surfaces
- **Background** ({colors.background}): Default page background — light gray/white. HSL(0, 0%, 99%)
- **Foreground** ({colors.foreground}): Primary text color — dark gray. HSL(220, 15%, 15%)
- **Card** ({colors.card}): Card and panel backgrounds — white. HSL(0, 0%, 100%)
- **Card Foreground** ({colors.card-foreground}): Text within cards. HSL(220, 15%, 15%)
- **Secondary** ({colors.secondary}): Secondary backgrounds — light gray. HSL(220, 14%, 96%)
- **Secondary Foreground** ({colors.secondary-foreground}): Text on secondary backgrounds. HSL(220, 15%, 15%)
- **Muted** ({colors.muted}): Muted backgrounds — light gray. HSL(220, 14%, 96%)
- **Muted Foreground** ({colors.muted-foreground}): Secondary text — medium gray. HSL(220, 10%, 46%)

### Semantic Status Colors
- **Success Green** ({colors.success}): Completed, approved, implemented states. HSL(142, 71%, 45%)
- **Warning Amber** ({colors.warning}): Pending, in-progress, caution states. HSL(38, 92%, 50%)
- **Info Blue** ({colors.info}): Informational, active states. HSL(199, 89%, 48%)
- **Destructive Red** ({colors.destructive}): Error, rejected, critical states. HSL(0, 72%, 51%)

### Borders & Inputs
- **Border** ({colors.border}): Default border color — light gray. HSL(220, 13%, 91%)
- **Input** ({colors.input}): Input field borders — same as border. HSL(220, 13%, 91%)
- **Ring** ({colors.ring}): Focus ring color — matches primary. HSL(220, 70%, 50%)

### Sidebar
- **Sidebar Background** ({colors.sidebar-background}): Sidebar background — light gray. HSL(0, 0%, 98%)
- **Sidebar Foreground** ({colors.sidebar-foreground}): Sidebar text. HSL(220, 10%, 30%)
- **Sidebar Primary** ({colors.sidebar-primary}): Sidebar primary actions. HSL(220, 70%, 50%)
- **Sidebar Accent** ({colors.sidebar-accent}): Active sidebar item background. HSL(220, 14%, 96%)

### Dark Mode
Dark mode uses darker versions of all colors with adjusted lightness values:
- Background shifts to HSL(220, 15%, 8%) — deep blue-gray
- Foreground shifts to HSL(220, 14%, 96%) — light gray
- Card shifts to HSL(220, 15%, 10%) — dark blue-gray
- All semantic colors maintain their hue but have reduced lightness for dark mode compatibility

## Typography

### Font Family

Goverone uses system fonts for optimal performance and native feel:

- **Display/Headings** — System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Body** — Same system font stack for consistency
- **Monospace** — `ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace` for code and technical elements

This approach ensures the application feels native on each platform while maintaining consistent visual rhythm.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 30px | 600 | 1.2 | -0.5px | Page headers, hero titles |
| `{typography.h2}` | 24px | 600 | 1.3 | -0.3px | Section headers, card titles |
| `{typography.h3}` | 20px | 600 | 1.4 | -0.2px | Sub-section headers |
| `{typography.h4}` | 18px | 600 | 1.4 | -0.1px | Small headers, label groups |
| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | Lead paragraphs, emphasized body |
| `{typography.body}` | 16px | 400 | 1.5 | 0 | Default body text |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Secondary text, metadata |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Captions, timestamps, status |
| `{typography.button}` | 14px | 500 | 1.2 | 0 | All button labels |
| `{typography.label}` | 14px | 500 | 1.4 | 0 | Form labels |

### Principles

- **System fonts first** — no external font dependencies for optimal performance
- **Measured tracking** — negative tracking on display sizes (-0.5px at 30px) for visual density
- **Optimal line heights** — 1.4–1.5 for readability at all sizes
- **Weight hierarchy** — 600 for headings, 500 for labels/CTAs, 400 for body
- **Consistent rhythm** — 2px size increments create clear visual hierarchy

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Card interior padding: `{spacing.lg}` 24px on most cards.
- Button padding: `{spacing.md}` 16px horizontal · 10px vertical.
- Form input padding: `{spacing.md}` 12px horizontal · 10px vertical.
- Badge padding: 2px vertical · 10px horizontal.

### Grid & Container

- Max content width: 1400px (2xl breakpoint).
- Card grids: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Sidebar width: 260px with responsive collapse.
- Main content: Responsive with fluid width up to max container.

### Whitespace Philosophy

- Generous spacing between sections ({spacing.section}` 96px`) for visual breathing room.
- Consistent padding within cards ({spacing.lg}` 24px) for content clarity.
- Tight spacing within component groups ({spacing.md}` 16px) for cohesion.
- Spacing scales with content density — more complex content gets more breathing room.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|------|
| 0 (flat) | No shadow, no border | Body text, inline elements |
| 1 (card lift) | `{colors.card}` background, 1px `{colors.border}` | Default cards, panels |
| 2 (hover lift) | Hover state with subtle shadow or border color change | Hovered cards, interactive elements |
| 3 (focus ring) | 2px `{colors.ring}` outline at 50% opacity | Focused inputs, focused buttons |
| 4 (drawer/dialog) | `{colors.card}` background, enhanced shadow | Drawers, dialogs, overlays |

Goverone uses subtle shadows and border color changes for depth, avoiding heavy drop shadows to maintain a clean, professional appearance.

### Decorative Depth

- **No atmospheric gradients or spotlight cards** — all visual hierarchy is achieved through color, spacing, and typography.
- **Subtle border color changes** for hover states provide depth without heavy shadows.
- **Focus rings** use the primary color at reduced opacity for accessibility and visual feedback.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, inline tags |
| `{rounded.sm}` | 6px | Sidebar items, small components |
| `{rounded.md}` | 8px | All buttons, form inputs, badges |
| `{rounded.lg}` | 12px | Cards, dialogs, panels |
| `{rounded.xl}` | 16px | Large cards, featured sections |
| `{rounded.xxl}` | 24px | Oversized cards (rare) |
| `{rounded.pill}` | 9999px | Badges, status pills |
| `{rounded.full}` | 9999px | Avatar circles |

### Geometry Principles

- **Consistent rounding** — most components use `{rounded.md}` 8px for consistency.
- **Cards use `{rounded.lg}` 12px** — slightly softer corners for containers.
- **Badges are pill-shaped** — `{rounded.pill}` for status indicators.
- **Avatars are circular** — `{rounded.full}` for user profiles.

## Components

### Buttons

**`button-primary`** — Primary blue CTA for main actions.
- Background `{colors.primary}`, text `{colors.primary-foreground}`, type `{typography.button}`, padding 10px 16px, rounded `{rounded.md}`.
- Hover state: background shifts to `{colors.primary-hover}` (darker blue).
- Focus state: 2px `{colors.ring}` outline at 50% opacity.

**`button-secondary`** — Light gray button for secondary actions.
- Background `{colors.secondary}`, text `{colors.secondary-foreground}`, type `{typography.button}`, padding 10px 16px, rounded `{rounded.md}`.
- Hover state: background becomes 80% opacity.

**`button-destructive`** — Red button for destructive actions (delete, reject).
- Background `{colors.destructive}`, text `{colors.destructive-foreground}`, type `{typography.button}`, padding 10px 16px, rounded `{rounded.md}`.
- Used only for actions that cannot be undone or have significant consequences.

**`button-ghost`** — Transparent button for subtle actions.
- Background transparent, text `{colors.foreground}`, type `{typography.button}`, padding 10px 16px, rounded `{rounded.md}`.
- Hover state: background becomes `{colors.accent}`.

**`button-outline`** — Outlined button for tertiary actions.
- Background transparent, text `{colors.foreground}`, 1px `{colors.input}` border, type `{typography.button}`, padding 10px 16px, rounded `{rounded.md}`.
- Hover state: background becomes `{colors.accent}`, text becomes `{colors.accent-foreground}`.

### Cards & Containers

**`card-default`** — Standard card component for content grouping.
- Background `{colors.card}`, text `{colors.card-foreground}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.
- Used for grouping related content, forms, and informational displays.

**`drawer-default`** — Side drawer for secondary actions and details.
- Background `{colors.card}`, text `{colors.card-foreground}`, type `{typography.body}`, no rounded corners (edge-to-edge).
- Slides in from the right side, used for viewing details, editing forms, and secondary actions.

**`dialog-default`** — Modal dialog for critical confirmations and creation flows.
- Background `{colors.card}`, text `{colors.card-foreground}`, type `{typography.body}`, rounded `{rounded.lg}`, padding 24px.
- Centered on screen with backdrop overlay, used for confirmations, deletions, and primary creation flows.

### Inputs & Forms

**`input-default`** — Standard text input field.
- Background `{colors.background}`, text `{colors.foreground}`, type `{typography.body}`, rounded `{rounded.md}`, padding 10px 12px.
- Border color: 1px `{colors.input}`.
- Focus state: 2px `{colors.ring}` outline at 50% opacity, border color becomes `{colors.ring}`.

**`textarea-default`** — Multi-line text input.
- Same styling as `input-default` but with resizable vertical direction.
- Used for descriptions, comments, and longer text fields.

**`select-default`** — Dropdown select input.
- Trigger button styled like `input-default` with chevron icon.
- Dropdown uses `{colors.card}` background with `{colors.border}` borders.

### Badges & Status Indicators

**`badge-default`** — Primary badge with blue background.
- Background `{colors.primary}`, text `{colors.primary-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 2px 10px.
- Used for primary categories and featured tags.

**`badge-secondary`** — Secondary badge with gray background.
- Background `{colors.secondary}`, text `{colors.secondary-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 2px 10px.
- Used for neutral categories and metadata.

**`badge-outline`** — Outlined badge with transparent background.
- Background transparent, text `{colors.foreground}`, 1px `{colors.input}` border, type `{typography.caption}`, rounded `{rounded.pill}`, padding 2px 10px.
- Used for subtle tags and status indicators.

**`status-badge-draft`** — Draft status badge.
- Background `{colors.muted}`, text `{colors.muted-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`status-badge-success`** — Success/completed status badge.
- Background `{colors.success}`, text `{colors.success-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`status-badge-warning`** — Warning/pending status badge.
- Background `{colors.warning}`, text `{colors.warning-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`status-badge-info`** — Info/active status badge.
- Background `{colors.info}`, text `{colors.info-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`status-badge-destructive`** — Destructive/rejected status badge.
- Background `{colors.destructive}`, text `{colors.destructive-foreground}`, type `{typography.caption}`, rounded `{rounded.pill}`.

### Navigation

**`sidebar-default`** — Left navigation sidebar.
- Background `{colors.sidebar-background}`, text `{colors.sidebar-foreground}`, type `{typography.body}`, no rounded corners.
- Contains project navigation, workspace switching, and user account menu.

**`sidebar-item-active`** — Active sidebar item.
- Background `{colors.sidebar-accent}`, text `{colors.sidebar-accent-foreground}`, type `{typography.body}`, rounded `{rounded.sm}`.
- Indicates the currently active navigation section.

**`top-nav`** — Top navigation bar.
- Background `{colors.card}`, text `{colors.foreground}`, type `{typography.body-sm}`, height 56px.
- Contains project selector, breadcrumb navigation, and action buttons.

### Data Display

**`table-default`** — Standard data table.
- Background transparent, text `{colors.foreground}`, type `{typography.body}`.
- Headers: 14px weight 500 with `{colors.muted-foreground}` color.
- Rows: alternating backgrounds for readability, hover state with `{colors.accent}` background.
- Borders: 1px `{colors.border}` on bottom of rows.

**`badge-outline-variant`** — Outline badge variant for tables.
- Background transparent, text `{colors.foreground}`, 1px `{colors.border}` border.
- Used in tables for status indicators and categories.

## Do's and Don'ts

### Do

- Use semantic colors strictly for status indicators — success for completed, warning for pending, info for active, destructive for errors.
- Drawers for secondary actions (viewing details, editing forms, navigating to related content).
- Modals for critical confirmations (deletions, rejections, important decisions) and creation flows.
- One primary button per screen — use verbs for button labels.
- System fonts for optimal performance and native feel.
- Focus rings for accessibility — 2px `{colors.ring}` outline at 50% opacity.
- Consistent spacing based on the 4px grid system.
- Status badges with icons for improved visual communication.
- Avatar circles for user profiles and ownership indicators.

### Don't

- Don't use emojis in core workflows — use icons or text labels instead.
- Don't introduce decorative gradients or atmospheric effects.
- Don't use saturated colors for decorative purposes — colors are semantic only.
- Don't create multiple primary buttons on a single screen.
- Don't use modals for viewing content — use drawers instead.
- Don't combine multiple bright status colors in close proximity.
- Don't use color as the only indicator of status — always include text labels.
- Don't override the system font stack — use system fonts for consistency.
- Don't skip spacing levels — use the defined spacing tokens consistently.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| 2XL | 1400px | Max content width, 3-up card grids |
| XL | 1280px | Default desktop layout |
| LG | 1024px | Tablet layout, 2-up card grids |
| MD | 768px | Sidebar collapses to drawer, 1-up card grids |
| SM | 480px | Mobile layout, full-width cards |

### Touch Targets

- Buttons maintain minimum 44px tap height on touch devices.
- Form inputs maintain minimum 44px tap target on touch devices.
- Badge tap targets expand to minimum 32px on touch devices.
- Navigation items maintain minimum 44px tap target.

### Collapsing Strategy

- **Sidebar**: Full width → collapsed icon sidebar → drawer on mobile
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px
- **Tables**: Full width → horizontally scrollable on mobile
- **Top navigation**: Full → condensed → hamburger menu on mobile
- **Typography**: Scaling maintains line height but reduces size proportionally

### Mobile Adaptations

- Drawers become full-width on mobile devices.
- Modals maintain consistent padding but adjust to viewport height.
- Tables enable horizontal scrolling with sticky headers.
- Form inputs and buttons maintain 44px minimum tap targets.
- Navigation collapses to hamburger menu with slide-out drawer.

## Implementation Guidelines

### Component Patterns

1. **Buttons**: Use class-variance-authority (CVA) for variant management
2. **Forms**: React Hook Form + Zod for validation
3. **Data Fetching**: TanStack Query for server state
4. **State Management**: React Context for app state
5. **Routing**: React Router for client-side navigation
6. **Icons**: Lucide React for consistent icon set

### Color Usage

- All colors defined as HSL values in CSS custom properties
- Use `hsl(var(--color-name))` syntax in Tailwind config
- Dark mode colors in `.dark` class selector
- Semantic colors have consistent meaning across the application

### Typography Usage

- Use system font stack for optimal performance
- Maintain consistent line heights (1.4-1.5) for readability
- Use negative tracking on display sizes (-0.5px at 30px)
- Weight hierarchy: 600 for headings, 500 for labels/CTAs, 400 for body

### Accessibility

- All interactive elements have focus states with visible focus rings
- Color contrast meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- All components built on Radix UI primitives for keyboard navigation
- ARIA labels provided for screen readers where needed
- Touch targets minimum 44px on mobile devices

## Known Gaps

- Dark mode is fully implemented but may need refinement for complex data visualizations
- Print styles are not yet defined
- High contrast mode support is not yet implemented
- Some complex tables may need additional mobile optimizations
- Animation and transition timing could be further refined for consistency
- Custom scrollbar styling is not yet defined

## Migration Notes

### From Linear Reference

The Goverone design system was initially inspired by Linear's dark-canvas approach but has evolved to better suit ISO compliance workflows:

- **Dual-theme support** — Linear is dark-only, Goverone supports both light and dark modes
- **Semantic color expansion** — Linear uses minimal semantic colors, Goverone has comprehensive status color system
- **Professional blue accent** — Linear uses lavender-blue, Goverone uses professional blue for broader appeal
- **Neutral palette** — Goverone uses lighter, more neutral backgrounds for better readability during long compliance sessions
- **System fonts** — Linear uses custom fonts, Goverone uses system fonts for performance

### Future Enhancements

- Advanced data visualization components (charts, graphs, heatmaps)
- Document canvas editor with rich text capabilities
- Real-time collaboration indicators
- Advanced filtering and sorting interfaces
- Bulk action interfaces with clear confirmation flows
- Export and print-friendly layouts
- Accessibility audit and remediation tools