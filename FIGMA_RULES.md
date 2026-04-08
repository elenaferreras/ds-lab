# DS-Lab — Figma MCP Integration Rules

This document is used by AI agents and the Figma MCP server to understand how this design system is structured so that Figma designs are correctly translated into code.

---

## 1. Project Overview

| Property | Value |
|---|---|
| Framework | React 19 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v4 + CSS custom properties (`--farco-*` tokens) |
| Bundler | Vite |
| Component docs | Storybook 10 (`@storybook/react-vite`) |
| Radix UI | Used for accessible primitives (Avatar, Toast) |

---

## 2. Design Token System

All design values are defined as CSS custom properties prefixed with `--farco-`. Tokens are declared in theme files and consumed inline via Tailwind's arbitrary-value syntax.

### Token files
- `src/tokens/base.css` — font-face declarations
- `src/tokens/tokens.css` — full token contract (documentation only)
- `src/tokens/themes/farco.css` — default (Farco) theme values on `:root, .theme-farco`
- `src/tokens/themes/white-label.css` — alternate White Label theme on `.theme-white-label`

### Color Tokens

```css
/* Primary */
--farco-color-primary: #000000
--farco-color-primary-hover: #1a1a1a
--farco-color-primary-active: #333333
--farco-color-accent: #c9f29f        /* lime-green accent */
--farco-color-success: #52c41a
--farco-color-warning: #faad14
--farco-color-danger: #ff4d4f

/* Neutrals (0 = white, 100 = black) */
--farco-color-neutral-0:   #ffffff
--farco-color-neutral-10:  #f5f5f5
--farco-color-neutral-20:  #e8e8e8
--farco-color-neutral-30:  #d9d9d9
--farco-color-neutral-40:  #bfbfbf
--farco-color-neutral-50:  #8c8c8c
--farco-color-neutral-60:  #595959
--farco-color-neutral-70:  #434343
--farco-color-neutral-80:  #262626
--farco-color-neutral-90:  #1f1f1f
--farco-color-neutral-100: #000000

/* Semantic */
--farco-color-border:    #000000
--farco-color-bg-base:   #ffffff
--farco-color-bg-subtle: #f5f5f5
```

### Typography Tokens

```css
--farco-font-family-base: 'Overused Grotesk', sans-serif
--farco-font-size-xs:  12px
--farco-font-size-sm:  14px
--farco-font-size-md:  16px
--farco-font-size-lg:  20px
--farco-font-size-xl:  24px
--farco-font-weight-regular: 400
--farco-font-weight-medium:  500
--farco-font-weight-bold:    700
--farco-line-height-tight:   1.2
--farco-line-height-base:    1.5
--farco-line-height-relaxed: 1.75
--farco-letter-spacing-tight: -0.01em
--farco-letter-spacing-base:   0.01em
```

### Spacing Tokens (4 px grid)

```css
--farco-spacing-1:  4px
--farco-spacing-2:  8px
--farco-spacing-3:  12px
--farco-spacing-4:  16px
--farco-spacing-5:  20px
--farco-spacing-6:  24px
--farco-spacing-8:  32px
--farco-spacing-10: 40px
--farco-spacing-12: 48px
--farco-spacing-16: 64px
```

### Border Radius Tokens

```css
--farco-radius-none: 0
--farco-radius-sm:   4px
--farco-radius-md:   6px
--farco-radius-lg:   8px
--farco-radius-xl:   12px
--farco-radius-full: 9999px
```

### Shadow Tokens

```css
--farco-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--farco-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.10)
--farco-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12)
```

### Misc

```css
--farco-opacity-disabled: 0.4
```

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

- Use Tailwind CSS with **arbitrary CSS-variable values**: `bg-[var(--farco-color-primary)]`
- For interactive states use Tailwind's `enabled:hover:`, `enabled:active:`, `focus-visible:` prefixes
- Color mixing for hover/subtle states: `color-mix(in_oklab, var(--farco-color-primary) 92%, var(--farco-color-neutral-100))`
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
sm → h-[--farco-spacing-8]  (32px)  px-[--farco-spacing-3]  text-sm  gap-1
md → h-[--farco-spacing-10] (40px)  px-[--farco-spacing-6]  text-md  gap-2
lg → h-[--farco-spacing-12] (48px)  px-[--farco-spacing-8]  text-md  gap-2
```

**Icon size map:** `sm → 14px`, `md → 16px`, `lg → 18px`

**Variant × Intent matrix:**
- `primary/regular` — solid black bg, white text
- `primary/danger` — solid `--farco-color-danger` bg, white text
- `secondary/regular` — transparent bg, black text, neutral border
- `secondary/danger` — transparent bg, danger text, danger border
- `ghost/regular` — transparent bg, black text, no border
- `ghost/danger` — transparent bg, danger text, no border

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
sm → h-[--farco-spacing-5] (20px)  px-2  text-xs  gap-[6px]
md → h-[--farco-spacing-6] (24px)  px-3  text-sm  gap-1
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

Built on `@radix-ui/react-toast`. Toast items stack from the bottom-right corner. Each variant has an icon (CheckCircleOutlined / WarningOutlined / XCircleOutlined).

---

## 5. Icon System

**Location:** `src/components/ui/icons/`
**Figma page:** `Icons`

**Available icons:**
- `ArrowRightOutlined`
- `CheckCircleOutlined`
- `CloseOutlined`
- `PlusOutlined`
- `WarningOutlined`
- `XCircleOutlined`

**Figma component rules:**
- One Figma component per `.jsx` file — 14×14 frame, named after the icon
- Constraints set to **Scale** on both axes so the component resizes proportionally when used inside other components
- All stroke/fill layers bound to `DS-Lab Tokens` Variable `color/neutral-100` by default; consuming components override color at the instance level
- When a UI component uses an icon as a child (Button icon slots, Badge dismiss ×, Toast status icons), the icon slot must be a **nested instance** of the Figma icon component — not a raw vector copy

**Usage:**
```jsx
import { PlusOutlined } from '../components/ui/icons'
<PlusOutlined width={16} height={16} />
```

All icons are plain SVG React components accepting `width` and `height` props.

---

## 6. How to Generate New Components from Figma

When the Figma MCP provides design context for a new component, follow these rules:

1. **Token mapping** — Map all Figma color/spacing/typography values to their `--farco-*` equivalents instead of hardcoding hex values.
2. **File placement** — Create `src/components/ui/<name>/<name>.jsx` + `index.js`. Add the named export to `src/components/index.js`.
3. **Styling** — Use Tailwind arbitrary value syntax: `bg-[var(--farco-color-primary)]`. Use `cn()` for conditional classes.
4. **Radix UI primitives** — Prefer `@radix-ui/react-*` for interactive/accessible components (already installed: accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, label, popover, radio-group, select, separator, slider, slot, switch, tabs, toast, tooltip).
5. **Storybook story** — Always create a matching `<name>.stories.jsx` following the pattern in `STORYBOOK_GUIDELINES.md`.
6. **Props** — Validate enums with a `const` array and fall back to the default if the value is out-of-range.
7. **No hardcoded values** — Heights, paddings, font sizes, colours, radii, and shadows must all reference a `--farco-*` token.

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
| Toast | `6:6` | `12:25` | COMPONENT_SET |
| Icons / ArrowRightOutlined | `43:2` | `43:9` | COMPONENT |
| Icons / CheckCircleOutlined | `43:2` | `43:14` | COMPONENT |
| Icons / CloseOutlined | `43:2` | `43:18` | COMPONENT |
| Icons / PlusOutlined | `43:2` | `43:22` | COMPONENT |
| Icons / WarningOutlined | `43:2` | `43:28` | COMPONENT |
| Icons / XCircleOutlined | `43:2` | `43:33` | COMPONENT |

To get design context for a specific component, open the Figma file in the Figma Desktop app, select the component frame, then call `get_design_context` (the node ID will be in the selection).
