# DS-Lab — Figma MCP Integration Rules

This document is used by AI agents and the Figma MCP server to understand how this design system is structured so that Figma designs are correctly translated into code.

---

## 1. Project Overview

| Property | Value |
|---|---|
| Framework | React 19 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v4 + CSS custom properties (`--ds-*` tokens) |
| Bundler | Vite |
| Component docs | Storybook 10 (`@storybook/react-vite`) |
| Radix UI | Used for accessible primitives (Avatar, Toast) |

---

## 2. Design Token System

Tokens use the `--ds-*` prefix in three layers. **Components must only consume theme (semantic) tokens** — never brand or base directly.

| Layer | CSS prefix | Figma collection | Who consumes |
|---|---|---|---|
| Base | `--ds-base-*` | `Base` | Theme aliases only |
| Brand | `--ds-brand-*` | `Brand (Primitives)` | Theme `var()` references |
| Theme | `--ds-*` (semantic) | `Theme (Semantic)` | Components, Tailwind |

Activation: `data-brand="farco|neutral"` on `<body>` + `data-mode="light|dark"`. Helpers in `src/tokens/tokens.js`.

### Token files

| File | Layer | Contents |
|---|---|---|
| `src/tokens/base.css` | Base | Spacing (`--ds-base-spacing-*`), font-size, line-height, letter-spacing, animation |
| `src/tokens/brand/farco.css` | Brand | Palette scales, feedback, overlay shadow tints, radius, font-family (`[data-brand="farco"]`) |
| `src/tokens/brand/neutral.css` | Brand | Same structure for White Label (`[data-brand="neutral"]`) |
| `src/tokens/theme/light.css` | Theme | Semantic colors, radius, typography, spacing, shadows (`[data-mode="light"]`) |
| `src/tokens/theme/dark.css` | Theme | Dark overrides (`[data-mode="dark"]`) |
| `src/tokens/tokens.js` | — | `switchBrand()` / `switchMode()` |

### Base tokens (`src/tokens/base.css`)

Never used directly in components. Examples:

```css
--ds-base-spacing-4: 4px    /* through --ds-base-spacing-120: 120px */
--ds-base-font-size-xs: 12px
--ds-base-font-size-sm: 14px
--ds-base-font-size-md: 16px
--ds-base-font-size-lg: 20px
--ds-base-font-size-xl: 24px
--ds-base-line-height-tight: 1.2
--ds-base-line-height-base: 1.5
--ds-base-letter-spacing-tight: -0.01em
--ds-base-letter-spacing-wide: 0.02em
```

Figma `Base`: `size/*`, `font/size-*`, `font/line-height-*`, `font/letter-spacing-*`, `radius/*`, `color/black`, `color/white`.

**Structural binding rule (components):** Components must bind spacing + radius to `Theme (Semantic)` variables (`spacing/*`, `radius/*`) — never directly to `Base/*` or to legacy variable collections.

### Brand tokens (`src/tokens/brand/`)

Raw palette and brand-specific values. Naming: `--ds-brand-color-{light|dark}-{palette}-{stop}`.

```css
/* Examples — full scales in farco.css / neutral.css */
--ds-brand-color-light-primary-500: #ACEA42   /* Farco */
--ds-brand-color-light-neutral-950: #4A3F2F
--ds-brand-color-light-error-500: #e53535
--ds-brand-radius-sm: 4px   /* Farco; neutral brand may differ */
--ds-brand-font-family-body: 'Overused Grotesk', sans-serif
```

Figma `Brand (Primitives)`: `light/neutral/*`, `light/primary/*`, `light/secondary/*`, `light/feedback/*`, `light/overlays/shadow/*`, `radius/*`, and `dark/*` counterparts. Modes: `Farco`, `White Label`.

### Theme — semantic color tokens (`src/tokens/theme/`)

Components bind to these. Pattern: `--ds-color-{property}-{role}-{variant}`.

**Action (buttons):**

```css
--ds-color-background-action-primary
--ds-color-background-action-primary-hover
--ds-color-background-action-primary-pressed
--ds-color-background-action-primary-disabled
--ds-color-foreground-action-on-primary
--ds-color-border-action-primary
--ds-color-border-action-focus
/* secondary + destructive variants — see theme/light.css */
```

**Surface:**

```css
--ds-color-background-surface-page
--ds-color-background-surface-subtle
--ds-color-background-surface-raised
--ds-color-background-surface-overlay
--ds-color-border-surface-default
--ds-color-border-surface-strong
```

**Text:**

```css
--ds-color-foreground-text-primary
--ds-color-foreground-text-secondary
--ds-color-foreground-text-disabled
--ds-color-foreground-text-inverse
--ds-color-foreground-text-link
```

**Feedback:**

```css
--ds-color-background-feedback-success
--ds-color-background-feedback-success-emphasis
--ds-color-background-feedback-error-emphasis
--ds-color-foreground-feedback-on-error
--ds-color-border-feedback-warning
/* success, warning, info — see theme/light.css */
```

**Input:**

```css
--ds-color-background-input-default
--ds-color-border-input-default
--ds-color-border-input-focused
--ds-color-border-input-error
--ds-color-foreground-input-placeholder
```

Figma `Theme (Semantic)`: aliases to `Brand (Primitives)/light/*` or `dark/*` per mode. See `.cursor/skills/figma-sync/references/COMPONENT_SPECS.md` §1 for the full alias table.

**Deprecation:** The legacy Theme (Semantic) variable `color/border` has been removed from Figma. Use `color/border/subtle` instead.

**Migration note:** Some older components were bound to legacy `spacing/*` and `radius/*` variables from a non-local collection. `figma-sync` Workflow M migrates those bindings to the current local `Theme (Semantic)` variables by name.

### Typography tokens (theme)

```css
--ds-font-family-body: var(--ds-brand-font-family-body)
--ds-font-size-xs: var(--ds-base-font-size-xs)   /* 12px */
--ds-font-size-sm: var(--ds-base-font-size-sm)   /* 14px */
--ds-font-size-md: var(--ds-base-font-size-md)   /* 16px */
--ds-font-size-lg: var(--ds-base-font-size-lg)   /* 20px */
--ds-font-size-xl: var(--ds-base-font-size-xl)   /* 24px */
```

### Spacing tokens (theme, 4px grid)

Theme exposes pixel-keyed aliases to base spacing:

```css
--ds-spacing-4: var(--ds-base-spacing-4)    /* 4px */
--ds-spacing-8: var(--ds-base-spacing-8)    /* 8px */
--ds-spacing-12: var(--ds-base-spacing-12)  /* 12px */
--ds-spacing-16: var(--ds-base-spacing-16)  /* 16px */
--ds-spacing-24: var(--ds-base-spacing-24)  /* 24px */
--ds-spacing-32: var(--ds-base-spacing-32)  /* 32px */
--ds-spacing-40: var(--ds-base-spacing-40)  /* 40px */
--ds-spacing-48: var(--ds-base-spacing-48)  /* 48px */
/* …through --ds-spacing-120 */
```

### Border radius tokens (theme)

```css
--ds-radius-sm: var(--ds-brand-radius-sm)
--ds-radius-md: var(--ds-brand-radius-md)
--ds-radius-lg: var(--ds-brand-radius-lg)
--ds-radius-full: var(--ds-brand-radius-full)
```

### Shadow Tokens

Shadows use a two-layer model: **brand overlay tint** (primitive color) + **theme elevation** (full `box-shadow`). Components consume `--ds-shadow-*` via Tailwind (`shadow-sm`, `shadow-md`, `shadow-lg`).

#### Brand — overlay tint (`src/tokens/brand/farco.css`, `src/tokens/brand/neutral.css`)

Raw shadow tint `#4A3F2F` in both brands (Farco and Neutral / White Label). Maps to Figma collection **Brand (Primitives)**.

**Figma divergence:** Variables cannot run `color-mix`. Figma stores the **pre-mixed** result (tint + size alpha). Code keeps the raw tint; theme CSS applies the mix.

| CSS token (raw tint) | Figma variable | Figma value (pre-mixed) |
|---|---|---|
| `--ds-brand-color-light-overlays-shadow-sm` | `light/overlays/shadow/sm` | `#4A3F2F0D` (5%) |
| `--ds-brand-color-light-overlays-shadow-md` | `light/overlays/shadow/md` | `#4A3F2F1A` (10%) |
| `--ds-brand-color-light-overlays-shadow-lg` | `light/overlays/shadow/lg` | `#4A3F2F1F` (12%) |
| `--ds-brand-color-dark-overlays-shadow-sm` | `dark/overlays/shadow/sm` | `#4A3F2F0D` (5%) |
| `--ds-brand-color-dark-overlays-shadow-md` | `dark/overlays/shadow/md` | `#4A3F2F1A` (10%) |
| `--ds-brand-color-dark-overlays-shadow-lg` | `dark/overlays/shadow/lg` | `#4A3F2F1F` (12%) |

#### Theme — composed shadows (`src/tokens/theme/light.css`, `src/tokens/theme/dark.css`)

Semantic tokens only in **code** — no matching variables in Figma **Theme (Semantic)**.

**Light mode** (`[data-mode="light"]`):

```css
--ds-shadow-sm: 0 1px 2px 0 color-mix(in srgb, var(--ds-brand-color-light-overlays-shadow-sm) 5%, transparent)
--ds-shadow-md: 0 4px 8px 0 color-mix(in srgb, var(--ds-brand-color-light-overlays-shadow-md) 10%, transparent)
--ds-shadow-lg: 0 8px 24px 0 color-mix(in srgb, var(--ds-brand-color-light-overlays-shadow-lg) 12%, transparent)
```

**Dark mode** (`[data-mode="dark"]`):

```css
--ds-shadow-sm: 0 1px 2px 0 color-mix(in srgb, var(--ds-brand-color-dark-overlays-shadow-sm) 5%, transparent)
--ds-shadow-md: 0 4px 8px 0 color-mix(in srgb, var(--ds-brand-color-dark-overlays-shadow-md) 10%, transparent)
--ds-shadow-lg: 0 8px 24px 0 color-mix(in srgb, var(--ds-brand-color-dark-overlays-shadow-lg) 12%, transparent)
```

| Token | Offset / blur | Alpha (color-mix) | Used by |
|---|---|---|---|
| `--ds-shadow-sm` | `0 1px 2px 0` | 5% | Card root (`shadow-sm`) |
| `--ds-shadow-md` | `0 4px 8px 0` | 10% | Toast (`shadow-md`) |
| `--ds-shadow-lg` | `0 8px 24px 0` | 12% | Modals, dialogs |

#### Figma — Effect Styles (not variables)

Bind color to the overlay variable; effect opacity is **1** (alpha is baked into the variable).

| Effect Style | Geometry | Color binding |
|---|---|---|
| `shadow/sm` | x: 0, y: 1, blur: 2, spread: 0 | `Brand (Primitives)/light/overlays/shadow/sm` |
| `shadow/md` | x: 0, y: 4, blur: 8, spread: 0 | `Brand (Primitives)/light/overlays/shadow/md` |
| `shadow/lg` | x: 0, y: 8, blur: 24, spread: 0 | `Brand (Primitives)/light/overlays/shadow/lg` |

### Misc

Disabled UI uses `opacity: 0.4` on components (e.g. `disabled:opacity-40` in Tailwind). Figma `Base` has `opacity/disabled` = `0.4` for variable binding where needed.

---

## 3. Component Library

### Location & structure

Every UI component lives in its own sub-folder:

```
src/components/ui/<name>/
├── <name>.jsx         # Implementation (named export)
├── <name>.stories.jsx # Storybook stories
└── index.js           # Re-export: export { Foo } from './foo'
```

All public components are re-exported from `src/components/index.js`.

### Styling conventions

- Use Tailwind CSS with **arbitrary CSS-variable values**: `bg-[var(--ds-color-background-action-primary)]`
- For interactive states use Tailwind's `enabled:hover:`, `enabled:active:`, `focus-visible:` prefixes
- Color mixing for hover/subtle states: `color-mix(in_oklab, var(--ds-color-background-action-primary) 92%, var(--ds-color-foreground-text-primary))`
- Shadows: Tailwind `shadow-sm|md|lg` (mapped to `--ds-shadow-*` in `tailwind.config.js`)
- Import the `cn` helper from `src/lib/cn.js` for conditional class merging (wraps `clsx` + `tailwind-merge`)

---

## 4. Component Specifications

### Button

**File:** `src/components/ui/button/button.jsx`

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | ReactNode | `'Label'` | Button label |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual hierarchy |
| `intent` | `'regular' \| 'danger'` | `'regular'` | Color intent |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height/padding scale |
| `disabled` | boolean | `false` | Disabled state |
| `loading` | boolean | `false` | Shows animated spinner |
| `iconLeft` | ReactNode | — | Icon before label |
| `iconRight` | ReactNode | — | Icon after label |
| `className` | string | — | Extra CSS classes |
| `onClick` | MouseEventHandler | — | Click handler |

**Size map:**
```
sm → h-[--ds-spacing-32] (32px)  px-[--ds-spacing-12]  text-sm  gap-[--ds-spacing-4]
md → h-[--ds-spacing-40] (40px)  px-[--ds-spacing-24]  text-md  gap-[--ds-spacing-8]
lg → h-[--ds-spacing-48] (48px)  px-[--ds-spacing-32]  text-md  gap-[--ds-spacing-8]
```

**Icon size map:** `sm → 14px`, `md → 16px`, `lg → 18px`

**Variant × Intent matrix:**
- `primary/regular` — `--ds-color-background-action-primary`, label `--ds-color-foreground-action-on-primary` (light: Farco → `on-brand-inverse`, neutral → `on-brand`)
- `primary/danger` — `--ds-color-background-feedback-error-emphasis`, label `--ds-color-foreground-text-on-brand`
- `secondary/regular` — transparent bg, `--ds-color-foreground-text-primary`, `--ds-color-border-surface-strong`
- `secondary/danger` — transparent bg, error emphasis color/border
- `ghost/regular` — transparent bg, primary text, no border
- `ghost/danger` — transparent bg, error emphasis text, no border

**Loading state:** animated spinner (0.8 s CSS rotation), button content remains but opacity reduced; `aria-busy="true"` is set.

---

### Badge

**File:** `src/components/ui/badge/badge.jsx`

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | ReactNode | — | Badge label |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'accent'` | `'default'` | Color variant |
| `size` | `'sm' \| 'md'` | `'md'` | Height/padding scale |
| `onDismiss` | `() => void` | — | If provided, renders a dismiss (×) button |
| `className` | string | — | Extra CSS classes |

**Size map:**
```
sm → h-[--ds-spacing-20] (20px)  px-[--ds-spacing-8]  text-xs  gap-[6px]
md → h-[--ds-spacing-24] (24px)  px-[--ds-spacing-12]  text-sm  gap-[--ds-spacing-4]
```

**Variant styles:** Pill shape (`rounded-full`), 1 px border. Background/text/border all derived from the semantic color via `color-mix`. Text is uppercase + letter-spacing.

---

### Avatar

**File:** `src/components/ui/avatar/avatar.jsx`

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | string | — | Image URL |
| `alt` | string | `''` | Image alt text |
| `fallback` | string | — | Initials displayed when image fails |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Diameter |
| `className` | string | — | Extra CSS classes |

**Size map:**
```
sm → 24×24 px  text-[10px]
md → 32×32 px  text-[12px]
lg → 40×40 px  text-[14px]
xl → 48×48 px  text-[16px]
```

Built on `@radix-ui/react-avatar`. Shows a skeleton pulse while the image loads; shows initials after 300 ms if image fails.

---

### Card

**File:** `src/components/ui/card/card.jsx`

Compound component — exported as `Card` with sub-components `Card.Header`, `Card.Body`, `Card.Footer`.

**Anatomy:**
```jsx
<Card>
  <Card.Header>…</Card.Header>
  <Card.Body>…</Card.Body>
  <Card.Footer>…</Card.Footer>
</Card>
```

**All props:** `children` + `className` only.

**Spacing:**
```
Root     → rounded-xl border neutral-20 shadow-sm overflow-hidden
Header   → px-6 pt-6 pb-4  border-bottom neutral-20
Body     → flex-1 px-6 py-5
Footer   → px-6 pt-4 pb-6  border-top neutral-20
```

---

### Input

**File:** `src/components/ui/input/input.jsx`

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | — | Label above input |
| `placeholder` | string | — | Placeholder text |
| `helperText` | string | — | Helper text below input |
| `error` | string | — | Error message (overrides helperText, applies error styles) |
| `disabled` | boolean | `false` | Disabled state |
| `id` | string | auto (`useId`) | Custom input id |
| `className` | string | — | Container classes |
| `inputClassName` | string | — | Input element classes |
| `value` | string | — | Controlled value |
| `onChange` | ChangeEventHandler | — | Change handler |

**States:** default, focus (accent ring), error (danger border + danger ring), disabled (opacity 0.4, `bg-neutral-10`, not-allowed cursor).

---

### InputPassword

**File:** `src/components/ui/input-password/input-password.jsx`

A specialised password field built on the same visual foundation as `Input`. Adds a password visibility toggle on the trailing edge of the field.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | — | Label above the input |
| `placeholder` | string | — | Placeholder text |
| `helperText` | string | — | Helper text below the input |
| `error` | string | — | Error message (overrides helperText, applies error styles) |
| `disabled` | boolean | `false` | Disables both the input and the visibility toggle |
| `id` | string | auto (`useId`) | Custom input id |
| `className` | string | — | Container classes |
| `inputClassName` | string | — | Input element classes |
| `value` | string | — | Controlled value |
| `onChange` | ChangeEventHandler | — | Change handler |
| `defaultVisible` | boolean | `false` | Initial visibility state (uncontrolled) |
| `visible` | boolean | — | Controlled visibility state |
| `onVisibleChange` | `(visible: boolean) => void` | — | Callback fired when the toggle is clicked |

**Visibility toggle:**
- Hidden password → `Eye` icon (weight: regular), aria-label: "Show password"
- Visible password → `EyeSlash` icon (weight: regular), aria-label: "Hide password"
- Toggle is a `type="button"` absolutely positioned on the trailing edge of the input field
- Inherits the `disabled` state of the field
- Focus ring: `focus-visible:ring-2` using `--ds-color-border-action-focus`, `ring-inset`

**Figma anatomy:**
```
InputPassword (Frame, auto-layout column, gap=4)
├── Label (Text, optional)
├── InputRow (Frame, relative, auto-layout row)
│   ├── Input field (fills width, pr=40)
│   └── ToggleButton (40×40, right-aligned, rounded-r-md)
│       └── Eye / EyeSlash icon (16×16, nested Phosphor instance)
└── HelperText (Text, optional)
```

**States:** default, focus (accent ring on input), error (danger border + ring on input), disabled (opacity 0.4, subtle bg, pointer-events-none on toggle).

---

### Toast

**File:** `src/components/ui/toast/toast.jsx`

**Usage pattern:**
```jsx
// Wrap app with provider
<ToastProvider>
  <App />
</ToastProvider>

// Trigger from any component
const { toast } = useToast()
toast({
  title: 'Saved!',
  description: 'Your changes were saved.',
  variant: 'success',   // 'default' | 'success' | 'warning' | 'danger'
  duration: 4000,        // ms; Infinity for permanent
})
```

Built on `@radix-ui/react-toast`. Toast items stack from the bottom-right corner. Each variant has an icon (`CheckCircle` / `Warning` / `XCircle` from Phosphor).

---

## 5. Icon System

**Code source of truth:** `@phosphor-icons/react`
**Figma source of truth:** Phosphor icon components from the `DS Lab: Phosphor Icons` library (instances inside DS-Lab components)

**Icon usage rules (Figma):**
- When a UI component uses an icon (Button icon slots, Badge dismiss ×, Toast status icons), the icon layer must be a **nested instance** of the correct Phosphor library icon component — not a raw vector copy and not a detached instance.
- Icon colour must be controlled by the consuming component (typically via `color` / text colour). If a specific icon layer needs a different Variable binding, apply it as an **instance override** (do not detach).

**Default weight policy (code → Figma):**
- Status icons (Toast variants) use `weight=\"fill\"`
- UI chrome icons (dismiss/close, generic affordances) use `weight=\"regular\"`

**Default format policy (Phosphor in Figma):**
- Always use **`Format = Outline`** for nested icon instances. Never use `Stroke`.

**Usage:**
```jsx
import { PlusIcon } from '@phosphor-icons/react'
<PlusIcon size={16} weight="regular" />
```

All icons are Phosphor React components accepting `size` and `weight` props.

---

## 6. How to Generate New Components from Figma

When the Figma MCP provides design context for a new component, follow these rules:

1. **Token mapping** — Map all Figma color/spacing/typography values to `--ds-*` theme (semantic) tokens — never hardcode hex or reference brand/base directly in components.
2. **File placement** — Create `src/components/ui/<name>/<name>.jsx` + `index.js`. Add the named export to `src/components/index.js`.
3. **Styling** — Use Tailwind arbitrary value syntax: `bg-[var(--ds-color-background-action-primary)]`. Use `cn()` for conditional classes.
4. **Radix UI primitives** — Prefer `@radix-ui/react-*` for interactive/accessible components (already installed: accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, label, popover, radio-group, select, separator, slider, slot, switch, tabs, toast, tooltip).
5. **Storybook story** — Always create a matching `<name>.stories.jsx` following the pattern in `STORYBOOK_GUIDELINES.md`.
6. **Props** — Validate enums with a `const` array and fall back to the default if the value is out-of-range.
7. **No hardcoded values** — Heights, paddings, font sizes, colours, radii, and shadows must use `--ds-*` tokens. Shadows: `--ds-shadow-sm|md|lg` or Tailwind `shadow-sm|md|lg`.

---

## 7. Storybook Story Pattern

See `STORYBOOK_GUIDELINES.md` for the full guide. Quick summary:

```jsx
export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['a', 'b'], description: '...' },
    disabled: { control: 'boolean', description: '...' },
  },
}

// Always first:
export const Playground = { args: { /* defaults */ } }

// Additional stories per variant / state:
export const Variants = { render: () => ( /* … */ ) }
```

---

## 8. Figma MCP Node IDs

The design file is: `https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components`

| Page | Page Node ID | Component Node ID | Type |
|---|---|---|---|
| Button | `0:1` | `3:38` | COMPONENT_SET |
| Badge | `6:2` | `7:22` | COMPONENT_SET |
| Avatar | `6:3` | `8:14` | COMPONENT_SET |
| Card | `6:4` | `10:2` | COMPONENT |
| Input | `6:5` | `11:27` | COMPONENT_SET |
| InputPassword | TBD | TBD | COMPONENT_SET |
| Toast | `6:6` | `12:25` | COMPONENT_SET |
| Button / Documentation | `0:1` | `172:116` | FRAME |
| Badge / Documentation | `6:2` | `172:205` | FRAME |
| Avatar / Documentation | `6:3` | `172:290` | FRAME |
| Card / Documentation | `6:4` | `172:365` | FRAME |
| Input / Documentation | `6:5` | `172:431` | FRAME |
| Toast / Documentation | `6:6` | `172:525` | FRAME |

To get design context for a specific component, open the Figma file in the Figma Desktop app, select the component frame, then call `get_design_context` (the node ID will be in the selection).

### Phosphor icon references (authoritative for icons)

The DS-Lab-Components file uses the subscribed library `DS Lab: Phosphor Icons`. These keys are used by the `figma-sync` skill (Workflow I) to import and wire icon instances.

| Code import name | Phosphor component set name | Library name | Library key | Component key |
|---|---|---|---|---|
| `XIcon` | `X` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `71645eedc1868f7b94a3e1284a73070733e951bc` |
| `CheckCircleIcon` | `CheckCircle` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `600cf90069a057235f5675a55c3a56592691544f` |
| `WarningIcon` | `Warning` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `eb0fd29ef6d5df262601e0ea7025b6517403b31f` |
| `XCircleIcon` | `XCircle` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `5557c9aa1f5aa166243bca01a2107496666f2632` |
| `PlusIcon` | `Plus` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `c1b8a390deee2ebb32f6d22211b031833595619a` |
| `ArrowRightIcon` | `ArrowRight` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | `c838cca546e0059b52148b958ab3e0749c5d0132` |
| `Eye` | `Eye` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | TBD |
| `EyeSlash` | `EyeSlash` | `DS Lab: Phosphor Icons` | `lk-12537a39e566ea8a49c7c5b948590a83d1b0be20cb337647680ae1e2912b0b80dc96101434286561484108b914d52a083be12f0cdf86b30fd2ea100344d18149` | TBD |
