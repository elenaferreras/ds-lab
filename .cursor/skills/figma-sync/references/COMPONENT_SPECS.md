# Component Specs — Figma Sync Reference

This file is loaded on demand by the `figma-sync` skill. It contains:

1. The full `--farco-*` token → Figma mapping table
2. Per-component Figma layer guides for all 6 components

---

## 1. Token → Figma Mapping

### Color Tokens

| CSS Variable | Resolved Value (Farco theme) | Figma Style / Variable Name |
|---|---|---|
| `--farco-color-primary` | `#000000` | `color/primary` |
| `--farco-color-primary-hover` | `#1a1a1a` | `color/primary-hover` |
| `--farco-color-primary-active` | `#333333` | `color/primary-active` |
| `--farco-color-accent` | `#c9f29f` | `color/accent` |
| `--farco-color-success` | `#52c41a` | `color/success` |
| `--farco-color-warning` | `#faad14` | `color/warning` |
| `--farco-color-danger` | `#ff4d4f` | `color/danger` |

### Neutral Tokens

| CSS Variable | Resolved Value | Figma Style / Variable Name |
|---|---|---|
| `--farco-color-neutral-0` | `#ffffff` | `color/neutral-0` |
| `--farco-color-neutral-10` | `#f5f5f5` | `color/neutral-10` |
| `--farco-color-neutral-20` | `#e8e8e8` | `color/neutral-20` |
| `--farco-color-neutral-30` | `#d9d9d9` | `color/neutral-30` |
| `--farco-color-neutral-40` | `#bfbfbf` | `color/neutral-40` |
| `--farco-color-neutral-50` | `#8c8c8c` | `color/neutral-50` |
| `--farco-color-neutral-60` | `#595959` | `color/neutral-60` |
| `--farco-color-neutral-70` | `#434343` | `color/neutral-70` |
| `--farco-color-neutral-80` | `#262626` | `color/neutral-80` |
| `--farco-color-neutral-90` | `#1f1f1f` | `color/neutral-90` |
| `--farco-color-neutral-100` | `#000000` | `color/neutral-100` |

### Semantic Color Tokens

| CSS Variable | Resolved Value | Figma Style / Variable Name |
|---|---|---|
| `--farco-color-border` | `#000000` | `color/border` |
| `--farco-color-bg-base` | `#ffffff` | `color/bg-base` |
| `--farco-color-bg-subtle` | `#f5f5f5` | `color/bg-subtle` |

### Spacing Tokens

| CSS Variable | Resolved Value | Figma Variable Name |
|---|---|---|
| `--farco-spacing-1` | `4px` | `spacing/1` |
| `--farco-spacing-2` | `8px` | `spacing/2` |
| `--farco-spacing-3` | `12px` | `spacing/3` |
| `--farco-spacing-4` | `16px` | `spacing/4` |
| `--farco-spacing-5` | `20px` | `spacing/5` |
| `--farco-spacing-6` | `24px` | `spacing/6` |
| `--farco-spacing-8` | `32px` | `spacing/8` |
| `--farco-spacing-10` | `40px` | `spacing/10` |
| `--farco-spacing-12` | `48px` | `spacing/12` |
| `--farco-spacing-16` | `64px` | `spacing/16` |

### Border Radius Tokens

| CSS Variable | Resolved Value | Figma Variable Name |
|---|---|---|
| `--farco-radius-none` | `0` | `radius/none` |
| `--farco-radius-sm` | `4px` | `radius/sm` |
| `--farco-radius-md` | `6px` | `radius/md` |
| `--farco-radius-lg` | `8px` | `radius/lg` |
| `--farco-radius-xl` | `12px` | `radius/xl` |
| `--farco-radius-full` | `9999px` | `radius/full` |

### Shadow Tokens

| CSS Variable | Resolved Value | Figma Effect Style Name |
|---|---|---|
| `--farco-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | `shadow/sm` |
| `--farco-shadow-md` | `0 4px 8px rgba(0,0,0,0.10)` | `shadow/md` |
| `--farco-shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | `shadow/lg` |

### Typography Tokens

| CSS Variable | Resolved Value | Figma Text Style / Variable Name |
|---|---|---|
| `--farco-font-family-base` | `'Overused Grotesk', sans-serif` | `font/family-base` |
| `--farco-font-size-xs` | `12px` | `font/size-xs` |
| `--farco-font-size-sm` | `14px` | `font/size-sm` |
| `--farco-font-size-md` | `16px` | `font/size-md` |
| `--farco-font-size-lg` | `20px` | `font/size-lg` |
| `--farco-font-size-xl` | `24px` | `font/size-xl` |
| `--farco-font-weight-regular` | `400` | `font/weight-regular` |
| `--farco-font-weight-medium` | `500` | `font/weight-medium` |
| `--farco-font-weight-bold` | `700` | `font/weight-bold` |
| `--farco-line-height-tight` | `1.2` | `font/line-height-tight` |
| `--farco-line-height-base` | `1.5` | `font/line-height-base` |
| `--farco-line-height-relaxed` | `1.75` | `font/line-height-relaxed` |
| `--farco-letter-spacing-tight` | `-0.01em` | `font/letter-spacing-tight` |
| `--farco-letter-spacing-base` | `0.01em` | `font/letter-spacing-base` |

### Misc Tokens

| CSS Variable | Resolved Value | Figma Variable Name |
|---|---|---|
| `--farco-opacity-disabled` | `0.4` | `opacity/disabled` |

---

## 2. Per-Component Figma Layer Guides

### Button

**Source:** `src/components/ui/button/button.jsx`

**Variants:** `primary`, `secondary`, `ghost`
**Intents:** `regular`, `danger`
**Sizes:** `sm` (32px h), `md` (40px h), `lg` (48px h)
**States:** Default, Hover, Active, Disabled, Loading

**Size → Figma dimensions:**

| Size | Height | H-Padding | Font Size | Gap |
|---|---|---|---|---|
| `sm` | 32px (`spacing/8`) | 12px (`spacing/3`) | 14px (`font/size-sm`) | 4px (`spacing/1`) |
| `md` | 40px (`spacing/10`) | 24px (`spacing/6`) | 16px (`font/size-md`) | 8px (`spacing/2`) |
| `lg` | 48px (`spacing/12`) | 32px (`spacing/8`) | 16px (`font/size-md`) | 8px (`spacing/2`) |

**Icon sizes:** `sm` → 14px, `md` → 16px, `lg` → 18px

**Variant × Intent fill matrix:**

| Variant | Intent | Background | Text | Border |
|---|---|---|---|---|
| `primary` | `regular` | `color/primary` (#000) | `color/neutral-0` (#fff) | `color/primary` (#000) |
| `primary` | `danger` | `color/danger` (#ff4d4f) | `color/neutral-0` (#fff) | `color/danger` (#ff4d4f) |
| `secondary` | `regular` | transparent | `color/neutral-100` (#000) | `color/border` (#000) |
| `secondary` | `danger` | transparent | `color/danger` (#ff4d4f) | `color/danger` (#ff4d4f) |
| `ghost` | `regular` | transparent | `color/neutral-100` (#000) | transparent |
| `ghost` | `danger` | transparent | `color/danger` (#ff4d4f) | transparent |

**Shared styling:**
- Border radius: `radius/full` (9999px) — full pill shape
- Border width: 1px on all variants (transparent border on ghost)
- Font: `font/family-base`, uppercase, `font/letter-spacing-base`, `font/weight-regular`
- Focus ring: 2px, `color/accent` (#c9f29f), 2px offset
- Disabled opacity: `opacity/disabled` (0.4)
- Loading opacity: 0.7, spinner replaces left icon (same size as icon for that size)

**Figma layers to update when a token changes:**
- Fill color change → update the `Background` fill layer on affected variant frames
- Border color change → update the `Border` stroke on affected variant frames
- Text color change → update the `Label` text layer fill
- Radius change → update corner radius on the root frame of all Button variants
- Size token change → update frame height and horizontal padding constraints
- Font size change → update `Label` text layer font size

---

### Badge

**Source:** `src/components/ui/badge/badge.jsx`

**Variants:** `default`, `success`, `warning`, `danger`, `accent`
**Sizes:** `sm` (20px h), `md` (24px h)
**States:** Default, Dismissible (with × button)

**Size → Figma dimensions:**

| Size | Height | H-Padding | Font Size | Gap |
|---|---|---|---|---|
| `sm` | 20px (`spacing/5`) | 8px (`spacing/2`) | 12px (`font/size-xs`) | 6px |
| `md` | 24px (`spacing/6`) | 12px (`spacing/3`) | 14px (`font/size-sm`) | 4px (`spacing/1`) |

**Variant color matrix** (all values use `color-mix` — apply as computed fills):

| Variant | Background | Text | Border |
|---|---|---|---|
| `default` | `color/neutral-10` (#f5f5f5) | `color/neutral-80` (#262626) | `color/neutral-20` (#e8e8e8) |
| `success` | `color/success` 12% tint | `color/success` 80% darkened | `color/success` 30% tint |
| `warning` | `color/warning` 12% tint | `color/warning` 80% darkened | `color/warning` 30% tint |
| `danger` | `color/danger` 10% tint | `color/danger` (#ff4d4f) | `color/danger` 30% tint |
| `accent` | `color/accent` 40% tint | `color/neutral-100` (#000) | `color/accent` 60% tint |

**Shared styling:**
- Border radius: `radius/full` (9999px)
- Border width: 1px
- Font: `font/family-base`, uppercase, `font/letter-spacing-base`, `font/weight-medium`

**Figma layers to update when a token changes:**
- Variant color token → update `Background` fill, `Label` text fill, and `Border` stroke on all affected variant frames
- Size token → update frame height and horizontal padding on affected size frames

---

### Avatar

**Source:** `src/components/ui/avatar/avatar.jsx`

**Sizes:** `sm` (24px), `md` (32px), `lg` (40px), `xl` (48px)
**States:** Image loaded, Loading (skeleton pulse), Fallback (initials)

**Size → Figma dimensions:**

| Size | Diameter | Fallback Font Size |
|---|---|---|
| `sm` | 24×24px | 10px |
| `md` | 32×32px | 12px |
| `lg` | 40×40px | 14px |
| `xl` | 48×48px | 16px |

**Layer structure per size frame:**
- `Root` — circle frame, `radius/full`, `color/neutral-20` background fill, `overflow: hidden`
  - `Image` — fills full frame, object-fit cover
  - `Skeleton` — absolute fill, `color/neutral-20`, shown during load
  - `Fallback` — absolute fill, `color/neutral-20` bg, `color/neutral-60` text, initials centered

**Figma layers to update when a token changes:**
- `color/neutral-20` change → update `Root` bg, `Skeleton` fill, `Fallback` bg across all size frames
- `color/neutral-60` change → update `Fallback` text fill across all size frames
- Size token change → update frame dimensions on the affected size frames

---

### Card

**Source:** `src/components/ui/card/card.jsx`

**Structure:** Compound component — `Card` root with `Card.Header`, `Card.Body`, `Card.Footer`
**States:** Default only (no interactive states)

**Spacing:**

| Section | Padding |
|---|---|
| `Card.Header` | px: 24px (`spacing/6`), pt: 24px (`spacing/6`), pb: 16px (`spacing/4`) |
| `Card.Body` | px: 24px (`spacing/6`), py: 20px (`spacing/5`) |
| `Card.Footer` | px: 24px (`spacing/6`), pt: 16px (`spacing/4`), pb: 24px (`spacing/6`) |

**Shared styling:**
- Root border: 1px, `color/neutral-20` (#e8e8e8)
- Root border radius: `radius/xl` (12px)
- Root shadow: `shadow/sm`
- Root background: `color/bg-base` (#ffffff)
- Section dividers: 1px border, `color/neutral-20`, between Header/Body and Body/Footer

**Figma layers to update when a token changes:**
- `color/neutral-20` change → update root border stroke and all section divider strokes
- `color/bg-base` change → update root background fill
- `radius/xl` change → update root frame corner radius
- `shadow/sm` change → update root frame drop shadow effect
- Spacing token change → update padding values on the affected section layer

---

### Input

**Source:** `src/components/ui/input/input.jsx`

**States:** Default, Focus, Error, Error+Focus, Disabled
**No size variants** — single size (height: 40px, `spacing/10`)

**State color matrix:**

| State | Border | Background | Ring |
|---|---|---|---|
| Default | `color/neutral-30` (#d9d9d9) | `color/bg-base` (#fff) | none |
| Focus | `color/primary` (#000) | `color/bg-base` (#fff) | 2px `color/accent` (#c9f29f) |
| Error | `color/danger` (#ff4d4f) | `color/bg-base` (#fff) | none |
| Error+Focus | `color/danger` (#ff4d4f) | `color/bg-base` (#fff) | 2px `color/danger` 30% tint |
| Disabled | `color/neutral-30` (#d9d9d9) | `color/neutral-10` (#f5f5f5) | none |

**Typography:**
- Input text: `font/size-sm` (14px), `font/family-base`, `color/neutral-100`
- Placeholder text: `font/size-sm` (14px), `color/neutral-40` (#bfbfbf)
- Label: `font/size-sm` (14px), `font/weight-medium`, `color/neutral-100`
- Helper text: `font/size-xs` (12px), `color/neutral-50` (#8c8c8c)
- Error text: `font/size-xs` (12px), `color/danger` (#ff4d4f)

**Layout:**
- Input height: 40px (`spacing/10`)
- Input border radius: `radius/md` (6px)
- Input horizontal padding: 16px (`spacing/4`)
- Gap between label, input, and helper: 4px (`spacing/1`)

**Figma layers to update when a token changes:**
- Border color token → update stroke on all affected state frames
- Background token → update fill on affected state frames
- Ring color → update focus ring effect on affected state frames
- Disabled opacity → update opacity on `Disabled` frame: `opacity/disabled` (0.4)
- Typography token → update the corresponding text layer across all state frames

---

### Toast

**Source:** `src/components/ui/toast/toast.jsx`

**Variants:** `default`, `success`, `warning`, `danger`
**States:** Default (visible), Dismissed (animate out)
**Position:** Fixed bottom-right, max-width 420px

**Variant color matrix** (all tinted backgrounds use `color-mix` — apply as computed fills):

| Variant | Background | Text | Border | Icon |
|---|---|---|---|---|
| `default` | `color/neutral-100` (#000) | `color/neutral-0` (#fff) | `color/neutral-80` (#262626) | none |
| `success` | `color/success` 12% tint over `color/bg-base` | `color/neutral-100` (#000) | `color/success` 40% tint | `CheckCircleOutlined`, `color/success` |
| `warning` | `color/warning` 12% tint over `color/bg-base` | `color/neutral-100` (#000) | `color/warning` 40% tint | `WarningOutlined`, `color/warning` |
| `danger` | `color/danger` 10% tint over `color/bg-base` | `color/neutral-100` (#000) | `color/danger` 35% tint | `XCircleOutlined`, `color/danger` |

**Layout:**
- Border radius: `radius/lg` (8px)
- Border width: 1px
- Horizontal padding: 16px (`spacing/4`)
- Vertical padding: 12px (`spacing/3`)
- Gap between icon and content: 12px (`spacing/3`)
- Shadow: `shadow/md`
- Max width: 420px
- Gap between stacked toasts: 8px (`spacing/2`)

**Typography:**
- Title: `font/size-sm` (14px), `font/weight-medium`
- Description: `font/size-xs` (12px), 70% opacity
- Close button icon: 14px

**Figma layers to update when a token changes:**
- Variant background token → update `Background` fill on all affected variant frames
- Variant border token → update `Border` stroke on all affected variant frames
- `color/neutral-0` or `color/neutral-100` → update text fill on `default` variant frames
- `shadow/md` change → update drop shadow effect on all Toast variant frames
- `radius/lg` change → update corner radius on all Toast variant frames
- Spacing token change → update padding and gap values on affected frames
