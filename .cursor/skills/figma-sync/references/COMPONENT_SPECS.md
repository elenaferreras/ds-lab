# Component Specs — Figma Sync Reference

This file is loaded on demand by the `figma-sync` skill. It contains:

1. The full `--farco-*` token → Figma mapping table
2. Per-component Figma layer guides for all 6 components
3. Token sync reference — Variable types, modes, Effect Style format, Text Style matrix

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

**Overview:** Button is the primary action trigger in the system. It comes in three visual styles (primary, secondary, ghost) and two intents (regular, danger), supports three sizes, and handles loading and disabled states natively.

**Variants:**

| Name | Purpose |
|---|---|
| `primary` | High-emphasis action — filled background; use for the single most important action on a screen |
| `secondary` | Medium-emphasis — outlined; use for secondary actions alongside a primary button |
| `ghost` | Low-emphasis — no border or fill; use for tertiary actions or in dense UI where visual weight must be minimised |
| `danger` intent | Signals a destructive or irreversible action; available on all three variants |

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

**Overview:** Badge is a compact label used to convey status, category, or count. It supports five semantic variants, two sizes, and an optional dismiss button for user-removable tags.

**Variants:**

| Name | Purpose |
|---|---|
| `default` | Neutral label — use for categories, tags, or metadata with no semantic weight |
| `success` | Indicates a positive or completed state (e.g. "Active", "Approved") |
| `warning` | Indicates a state that requires attention but is not critical (e.g. "Pending", "In review") |
| `danger` | Indicates an error, failure, or destructive state (e.g. "Failed", "Rejected") |
| `accent` | Highlights a featured or promoted item using the brand accent colour |

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

**Overview:** Avatar displays a user's identity as a circular image, a fallback set of initials, or a skeleton placeholder while the image loads. It comes in four sizes and handles all three states automatically based on the `src` prop.

**Variants:**

| Name | Purpose |
|---|---|
| Image loaded (`src = true`) | Shows the user's photo filling the circle |
| Fallback (`src = false`) | Shows initials (driven by `Fallback` prop) when no image is available |
| Loading (skeleton) | Shows a pulsing neutral placeholder while the image is in flight |

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
- `Root` — circle frame, `radius/full`, `color/neutral-20` background fill, **`clip content: true`** (essential — without this the image overflows the circle). The `Root` frame itself must also have `radius/full` applied so clipping is circular.
  - `Image` — fills full frame (width and height 100% of `Root`), `radius/full`, image fill using `public/avatar-default.png` (upload via Figma MCP image upload API to receive an image hash, then set fill as `{ type: IMAGE, imageRef: <hash>, scaleMode: FILL }`). **Visible only when `src = true`; hidden when `src = false`.**
  - `Skeleton` — absolute fill, `color/neutral-20`, `radius/full`, shown during load. Hidden when `src = true`.
  - `Fallback` — absolute fill, `color/neutral-20` bg, `color/neutral-60` text, initials centered, `radius/full`. Visible when `src = false`; hidden when `src = true`.
  - `Alt` — text node, `visibility: true`, **`opacity: 0`**, font `font/family-base`, size `font/size-sm`, color `color/neutral-60`, positioned inside the frame. Opacity 0 (not `visibility: false`) is mandatory — Figma requires the layer to be in the visible layer tree to accept a component property binding. A hidden layer cannot be bound.

**Figma layers to update when a token changes:**
- `color/neutral-20` change → update `Root` bg, `Skeleton` fill, `Fallback` bg across all size frames
- `color/neutral-60` change → update `Fallback` text fill and `Alt` annotation layer color across all size frames
- Size token change → update frame dimensions on the affected size frames
- `src` / image presence is controlled by the `src` component property — it does not involve tokens

---

### Card

**Source:** `src/components/ui/card/card.jsx`

**Overview:** Card is a surface container for grouping related content. It is a compound component composed of three optional sub-components — Header, Body, and Footer — separated by dividers, with a subtle border and shadow.

**Variants:**

| Name | Purpose |
|---|---|
| `Card.Header` | Top section — typically contains a title or primary label for the card's content |
| `Card.Body` | Main content area — can hold any content: text, lists, data, media |
| `Card.Footer` | Bottom section — typically contains actions (buttons) or supplementary metadata |

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

**Overview:** Input is a single-line text field with an optional label, placeholder, helper text, and error message. It handles focus, error, and disabled states through explicit boolean props rather than visual variants.

**Variants:**

| Name | Purpose |
|---|---|
| Default | Resting state — neutral border, white background |
| Focus | Active text entry — primary-colour border + accent focus ring |
| Error | Inline validation failure — danger-colour border + error message below |
| Error + Focus | Both error and focus active simultaneously — danger border + danger focus ring |
| Disabled | Interaction prevented — dimmed appearance with `opacity/disabled` |

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

**Overview:** Toast is a transient notification that appears fixed at the bottom-right of the screen. It supports four semantic variants — each with a distinct icon and colour — and dismisses automatically or on user interaction.

**Variants:**

| Name | Purpose |
|---|---|
| `default` | General-purpose announcement or confirmation — dark fill, no icon |
| `success` | Confirms a successfully completed action (e.g. "Saved", "Sent") |
| `warning` | Warns of a recoverable issue or condition that needs attention |
| `danger` | Signals a failure or error that requires the user's immediate attention |

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

---

## 3. Token Sync Reference

### Variable Collection

| Property | Value |
|---|---|
| Collection name | `DS-Lab Tokens` |
| Mode 1 | `Farco` |
| Mode 2 | `White Label` |

---

### Variable Type Map

Every `--farco-*` token maps to a specific Figma Variable type. Tokens not listed here are handled as Effect Styles or Text Styles instead.

| Token category | CSS variables | Figma Variable type |
|---|---|---|
| Colors — Primary | `--farco-color-primary`, `-hover`, `-active`, `--farco-color-accent`, `--farco-color-success`, `--farco-color-warning`, `--farco-color-danger` | `COLOR` |
| Colors — Neutrals | `--farco-color-neutral-0` through `--farco-color-neutral-100` | `COLOR` |
| Colors — Semantic | `--farco-color-border`, `--farco-color-bg-base`, `--farco-color-bg-subtle` | `COLOR` |
| Spacing | `--farco-spacing-1` through `--farco-spacing-16` | `FLOAT` (strip `px`) |
| Border Radius | `--farco-radius-none` through `--farco-radius-xl` | `FLOAT` (strip `px`) |
| Border Radius (full) | `--farco-radius-full` | `FLOAT` — store as `9999` |
| Opacity | `--farco-opacity-disabled` | `FLOAT` |
| Font sizes | `--farco-font-size-xs` through `--farco-font-size-xl` | `FLOAT` (strip `px`) |
| Font weights | `--farco-font-weight-regular`, `-medium`, `-bold` | `FLOAT` |
| Line heights | `--farco-line-height-tight`, `-base`, `-relaxed` | `FLOAT` |
| Letter spacing | `--farco-letter-spacing-tight`, `-base` | `STRING` (keep `em` unit) |
| Font family | `--farco-font-family-base` | → Text Styles only, not a Variable |
| Shadows | `--farco-shadow-sm`, `-md`, `-lg` | → Effect Styles only, not Variables |

---

### Mode Values — Tokens That Differ Between Themes

Most tokens are identical across both themes. Only these differ — set the correct value per mode:

| Figma Variable name | Farco mode | White Label mode |
|---|---|---|
| `color/primary` | `#000000` | `#1677ff` |
| `color/primary-hover` | `#1a1a1a` | `#4096ff` |
| `color/primary-active` | `#333333` | `#0958d9` |
| `color/accent` | `#c9f29f` | `#4096ff` |
| `color/border` | `#000000` | `#d9d9d9` |

All other tokens: set the same value on both `Farco` and `White Label` modes.

---

### Effect Styles — Shadow Format

Parse each shadow CSS value into Figma's DROP_SHADOW format. Shadows are theme-invariant.

| Style name | CSS value | Figma effect |
|---|---|---|
| `shadow/sm` | `0 1px 2px rgba(0,0,0,0.05)` | type: DROP_SHADOW, x: 0, y: 1, blur: 2, spread: 0, color: #000000, opacity: 0.05 |
| `shadow/md` | `0 4px 8px rgba(0,0,0,0.10)` | type: DROP_SHADOW, x: 0, y: 4, blur: 8, spread: 0, color: #000000, opacity: 0.10 |
| `shadow/lg` | `0 8px 24px rgba(0,0,0,0.12)` | type: DROP_SHADOW, x: 0, y: 8, blur: 24, spread: 0, color: #000000, opacity: 0.12 |

---

### Text Styles — Matrix

Create one Text Style per meaningful size × weight combination used in the codebase. All use font family `Overused Grotesk`, line height `1.5` (`font/line-height-base`), and letter spacing `0.01em` (`font/letter-spacing-base`) unless the row explicitly overrides those values. Text Styles are theme-invariant.

| Style name | Font size | Font weight | Line height | Letter spacing |
|---|---|---|---|---|
| `text/xs-regular` | 12px | 400 | 1.5 | 0.01em |
| `text/sm-regular` | 14px | 400 | 1.5 | 0.01em |
| `text/sm-medium` | 14px | 500 | 1.5 | 0.01em |
| `text/md-regular` | 16px | 400 | 1.5 | 0.01em |
| `text/md-medium` | 16px | 500 | 1.5 | 0.01em |
| `text/lg-regular` | 20px | 400 | 1.5 | 0.01em |
| `text/xl-regular` | 24px | 400 | 1.5 | 0.01em |
| `text/display-lg` | 56px | 700 | 80px (≈1.43) | -2.24px (-0.04em) |

When creating or updating a Text Style, set all five properties: font family, size, weight, line height, and letter spacing. Never partially update a Text Style. Rows with absolute line-height or letter-spacing values (e.g. `text/display-lg`) override the default 1.5 / 0.01em — apply the values exactly as listed.

---

## 4. Figma Component Properties

### Property type rules

Every code prop maps to one of four Figma component property types:

| Figma property type | Use when the code prop is... |
|---|---|
| `VARIANT` | An enum — a fixed set of named string options |
| `BOOLEAN` | A `boolean` (`true` / `false`), or a function prop whose presence/absence toggles visible UI |
| `TEXT` | A free `string` — user-supplied content like labels, placeholder text, or initials |
| `TEXT` (hidden annotation) | An accessibility string prop (`alt`, `aria-label`, `title`, etc.) with no visual representation. Create a `TEXT` property bound to an **opacity-0 annotation layer** named after the prop in title case (e.g. `Alt`, `Aria Label`). The layer is a text node, `visibility: true` with **`opacity: 0`**, font `font/family-base`, size `font/size-sm`, color `color/neutral-60`. Use opacity 0, not `visibility: false` — Figma requires the layer to be in the visible layer tree to accept a component property binding. It appears in the properties panel and designers can author the value there; it is invisible on the canvas. |
| `INSTANCE_SWAP` (required slot) | A `ReactNode` prop that always renders — no `undefined` default. Use a single `INSTANCE_SWAP` property. |
| `BOOLEAN` + `INSTANCE_SWAP` (optional slot) | A `ReactNode` prop that defaults to `undefined` or `null` — the slot can be absent. Create two paired properties: `Has <SlotName>` (`BOOLEAN`, default `false`) to control layer visibility, and `<SlotName>` (`INSTANCE_SWAP`, default: a sensible first component) to control which instance fills the slot when visible. This mirrors the Storybook `None → pick component` dropdown exactly. |

Properties are defined on the **component set** (the parent node that wraps all variant frames), not on individual frames. Each property must have a default value matching the code default.

---

### Button

**Source:** `src/components/ui/button/button.jsx`

| Figma property name | Property type | Options | Default |
|---|---|---|---|
| `Variant` | `VARIANT` | `primary`, `secondary`, `ghost` | `primary` |
| `Intent` | `VARIANT` | `regular`, `danger` | `regular` |
| `Size` | `VARIANT` | `sm`, `md`, `lg` | `md` |
| `Disabled` | `BOOLEAN` | — | `false` |
| `Loading` | `BOOLEAN` | — | `false` |
| `Has Icon Left` | `BOOLEAN` | — | `false` |
| `Icon Left` | `INSTANCE_SWAP` | — | `PlusOutlined` |
| `Has Icon Right` | `BOOLEAN` | — | `false` |
| `Icon Right` | `INSTANCE_SWAP` | — | `ArrowRightOutlined` |
| `Label` | `TEXT` | — | `"Label"` |

**Visual rules per boolean state:**
- `Disabled = true` → apply `opacity/disabled` (0.4) to the entire component, set `pointer-events: none`
- `Loading = true` → opacity 0.7, replace `Icon Left` slot with the spinner instance, hide `Icon Right`
- `Disabled` and `Loading` are mutually exclusive — when `Loading = true`, `Disabled` is ignored
- `Has Icon Left = false` → hide the `Icon Left` slot layer entirely; `Has Icon Left = true` → show it, defaulting to the `PlusOutlined` instance
- `Has Icon Right = false` → hide the `Icon Right` slot layer entirely; `Has Icon Right = true` → show it, defaulting to the `ArrowRightOutlined` instance

---

### Badge

**Source:** `src/components/ui/badge/badge.jsx`

| Figma property name | Property type | Options | Default |
|---|---|---|---|
| `Variant` | `VARIANT` | `default`, `success`, `warning`, `danger`, `accent` | `default` |
| `Size` | `VARIANT` | `sm`, `md` | `md` |
| `Dismissible` | `BOOLEAN` | — | `false` |
| `Label` | `TEXT` | — | `"Badge"` |

**Visual rules per boolean state:**
- `Dismissible = true` → show the × (CloseOutlined) button at the end of the badge
- `Dismissible = false` → hide the × button layer entirely

---

### Avatar

**Source:** `src/components/ui/avatar/avatar.jsx`

| Figma property name | Property type | Options | Default |
|---|---|---|---|
| `Size` | `VARIANT` | `sm`, `md`, `lg`, `xl` | `md` |
| `src` | `BOOLEAN` | — | `false` |
| `Fallback` | `TEXT` | — | `"AB"` |
| `alt` | `TEXT` | — | `""` |

**Visual rules per boolean state:**
- `src = false` → hide `Image` layer; show `Fallback` layer (initials)
- `src = true` → show `Image` layer; hide `Skeleton` and `Fallback` layers

**Image layer setup (required regardless of boolean state):**
Before wiring the `src` boolean, the `Image` layer must have its fill set first:
1. Call the Figma MCP image upload API with the local path `public/avatar-default.png` to receive an **image hash**
2. Apply the fill on the `Image` layer: `{ type: IMAGE, imageRef: <hash>, scaleMode: FILL }` — do not use the file path as the fill value
3. Only after the fill is applied, set the layer's visibility to `false` (matching `src` default of `false`)
4. Wire the `src` boolean to the layer's visibility

This order is mandatory — wiring visibility before setting the fill leaves the layer in a broken state where toggling the boolean reveals an empty layer.

**Notes:**
- `src` is the visibility toggle — Figma cannot conditionally show a layer based on whether a string is empty, so the boolean is the correct driver
- `Fallback` drives the text content of the `Fallback` layer (initials) and is only visible when `src = false`
- `alt` is an accessibility annotation — it is bound to the `Alt` text layer (see §2 layer structure). The layer is visible but opacity 0, so it appears in the properties panel but is invisible on the canvas.

---

### Card

Card is a compound layout component. Figma properties are defined on each sub-component separately, not on the root Card.

| Sub-component | Figma property name | Property type | Default |
|---|---|---|---|
| `Card.Header` | `Header` | `TEXT` | `"Card Header"` |
| `Card.Body` | `Body` | `TEXT` | `"Card body content"` |
| `Card.Footer` | `Footer` | `TEXT` | `"Card Footer"` |

---

### Input

**Source:** `src/components/ui/input/input.jsx`

| Figma property name | Property type | Options | Default |
|---|---|---|---|
| `Disabled` | `BOOLEAN` | — | `false` |
| `Has Error` | `BOOLEAN` | — | `false` |
| `Label` | `TEXT` | — | `"Label"` |
| `Placeholder` | `TEXT` | — | `"Placeholder"` |
| `Helper Text` | `TEXT` | — | `""` |
| `Error Text` | `TEXT` | — | `"Error message"` |

**Visual rules per boolean state:**
- `Disabled = true` → apply `opacity/disabled` (0.4) to the entire component; input background switches to `color/neutral-10`; label and helper text also dimmed
- `Has Error = true` → border switches to `color/danger`; `Error Text` layer is shown in place of `Helper Text`; `Has Error = false` → show `Helper Text` layer instead
- `Disabled` takes visual precedence over `Has Error` — a disabled+error input shows the disabled appearance

---

### Toast

**Source:** `src/components/ui/toast/toast.jsx`

| Figma property name | Property type | Options | Default |
|---|---|---|---|
| `Variant` | `VARIANT` | `default`, `success`, `warning`, `danger` | `default` |
| `Title` | `TEXT` | — | `"Toast title"` |
| `Description` | `TEXT` | — | `""` |

**Notes:**
- When `Variant = default`, the icon layer is hidden (no icon for the default variant)
- When `Variant` is `success`, `warning`, or `danger`, show the corresponding icon layer (CheckCircleOutlined, WarningOutlined, XCircleOutlined respectively)
- `Description` being empty should hide the description text layer in the Figma component

---

## 5. Icons

### Overview

**Source folder:** `src/components/ui/icons/`
**Figma page:** `Icons`
**Files to sync:** one Figma component per `.jsx` file — ignore `index.js` and `*.stories.jsx`

**6 icon components:**
1. `ArrowRightOutlined`
2. `CheckCircleOutlined`
3. `CloseOutlined`
4. `PlusOutlined`
5. `WarningOutlined`
6. `XCircleOutlined`

---

### Canvas and constraint rules

- Each icon is a **14×14 Figma component** (matching the default `width`/`height` in the SVG source)
- Set **constraints to Scale** on both horizontal and vertical axes on the root frame — this allows the icon to resize proportionally when used inside other components
- Arrange all 6 components in a **single row** on the `Icons` page, spaced 40px apart, labeled by component name below each frame
- All SVG path/stroke/fill layers must have their color bound to the `DS-Lab Tokens` Variable **`color/neutral-100`** as the default — consuming components override this at the instance level

---

### SVG layer breakdown per icon

Each icon's root frame contains one or more vector layers translated from the SVG paths. Map each SVG child element to a Figma vector node, preserving stroke/fill attributes.

#### ArrowRightOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Arrow` | Vector (fillRule: evenodd) | fill: `color/neutral-100` |
| `Clip` | Clip mask rectangle 14×14 | — |

SVG path: `fillRule="evenodd"` filled arrow. The `<clipPath>` becomes a clip mask on the root frame.

#### CheckCircleOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Circle` | Ellipse | stroke: `color/neutral-100`, strokeWidth: 1.2, opacity: 0.5 |
| `Check` | Vector | stroke: `color/neutral-100`, strokeWidth: 1.2, lineCap: round, lineJoin: round |

#### CloseOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Cross` | Vector (two diagonal lines as one path) | stroke: `color/neutral-100`, strokeWidth: 1.2, lineCap: round |

#### PlusOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Plus` | Vector (vertical + horizontal lines as one path) | stroke: `color/neutral-100`, strokeWidth: 1.2, lineCap: round |

#### WarningOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Triangle` | Vector | stroke: `color/neutral-100`, strokeWidth: 1.2, lineJoin: round, opacity: 0.5 |
| `Stem` | Vector | stroke: `color/neutral-100`, strokeWidth: 1.2, lineCap: round |
| `Dot` | Ellipse (cx: 7, cy: 10.3, r: 0.65) | fill: `color/neutral-100` |

#### XCircleOutlined

| Layer name | Type | Attribute |
|---|---|---|
| `Circle` | Ellipse | stroke: `color/neutral-100`, strokeWidth: 1.2, opacity: 0.5 |
| `Cross` | Vector (two diagonal lines as one path) | stroke: `color/neutral-100`, strokeWidth: 1.2, lineCap: round |

---

### Nested instances in consuming components

When a UI component uses an icon as a child, that icon slot must be represented as a **nested instance** of the Figma icon component — not a raw vector copy. Use the node IDs from `FIGMA_RULES.md` §8 to reference the correct component.

After placing the instance, **override the fill/stroke Variable on the instance's vector layers** to match the color that component uses for that icon. Do not leave the instance using the icon's default `color/neutral-100` — override it at the instance level using the Variable listed below.

| Consuming component | Icon used | Where | Fill Variable override |
|---|---|---|---|
| `Button` (primary, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/neutral-0` |
| `Button` (primary, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/neutral-0` |
| `Button` (secondary, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/neutral-100` |
| `Button` (secondary, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/danger` |
| `Button` (ghost, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/neutral-100` |
| `Button` (ghost, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/danger` |
| `Badge` | `CloseOutlined` | dismiss × button layer | same Variable as the badge's text color for that variant (see §2 Badge color matrix) |
| `Toast` (success) | `CheckCircleOutlined` | icon layer | `color/success` |
| `Toast` (warning) | `WarningOutlined` | icon layer | `color/warning` |
| `Toast` (danger) | `XCircleOutlined` | icon layer | `color/danger` |

After creating or updating icon components, verify that each of the above consuming components has the icon slot wired to a live instance (not a detached vector) and that the fill Variable override is correctly set on the instance. If the slot is a raw vector, replace it with an instance and apply the override.

---

## 6. Documentation Templates

This section defines the layout, content, and typography for the `Documentation` frame that Workflow D creates on each component page. Only component pages receive this frame — the `Icons` page does not.

The canonical reference design lives at Figma node `134:2082` (a standalone mockup named `Avatar` at `(1682, 143)`). The outer "Farco" header bar in that mockup is chrome only — it is **not** part of the Documentation frame template.

---

### Section frame spec

| Property | Value |
|---|---|
| Frame name | `Documentation` |
| Frame type | Frame with **vertical autolayout** (`layout: VERTICAL`) |
| Position | On the component page, below the component grid (120px gap, or immediately after the component set if the component set has been relocated into this frame — see below) |
| Content width | 1128px (frame width becomes 1224px including 48px padding on each side) |
| Autolayout padding | 48px on all sides (`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`: 48) |
| Autolayout gap | 48px (`itemSpacing: 48`) |
| Fill | `color/neutral-0` |
| Sizing | Width: fixed (1224px). Height: **Hug contents** |

> **Do not create a Figma Section.** A Section has no autolayout and child frames will overlap. Use a standard Frame with vertical autolayout so sub-sections stack correctly.

---

### Sub-section order and inventory

The Documentation frame contains **seven children** in this exact top-to-bottom order:

1. `summary` — auto-generated
2. The component set itself (e.g. Avatar `8:14`, Button `3:38`) — **relocated** from its page-level position into this frame as the next autolayout child
3. `Variants` — auto-generated
4. `Props` — auto-generated
5. `Do / Don't` — scaffolded (human-authored)
6. `Content guidelines` — scaffolded (human-authored)
7. `Accessibility` — scaffolded (human-authored)

**Auto-generated** children (`summary`, `Variants`, `Props`) and the **component-set placement** are fully owned by the skill. On each run, compare the current Figma content against the source data in this file. If the data (or the ordering of the component set) differs → update. If unchanged → skip.

**Scaffolded** children (`Do / Don't`, `Content guidelines`, `Accessibility`) are initialised by the skill on first creation only. After that, they belong to the designer. Never overwrite, reorder, or delete them on subsequent runs — even if the content is still the placeholder text.

> **Component set relocation.** The new design places the component set *inside* the Documentation frame rather than as a sibling above it. When migrating a page that was built by the previous spec, reparent the existing component set node (keep its node ID stable so all existing instances continue to resolve) into the Documentation frame at index 1 (0-indexed). Do not clone or re-create the component set.

---

### Typography

| Context | Text Style | Colour Variable |
|---|---|---|
| Summary title (component name) | `text/display-lg` | `color/neutral-100` |
| Variants / Props section heading | `text/xl-regular` | `color/neutral-100` |
| Overview heading | `text/md-medium` | `color/neutral-100` |
| Overview body | `text/md-regular` | `color/neutral-100` |
| Table header row cells | `text/md-medium` | `color/neutral-100` |
| Table data row cells | `text/md-regular` | `color/neutral-100` |
| Card label (`Do`, `Don't`, `Content guidelines`, `Accessibility`) | `text/sm-medium` | `color/neutral-100` |
| Card placeholder body | `text/sm-regular` | `color/neutral-40` |

All text layers must be bound to the named Text Style — do not set raw font properties.

---

### `summary` sub-section

Auto-generated. Vertical autolayout frame named `summary`.

| Property | Value |
|---|---|
| Layout | `VERTICAL`, gap 48, width 1128 (fill container), hug contents vertically |
| Padding | 0 |

Children, in order:

1. **Title** — text layer named `Title`. Content: the component's PascalCase name (e.g. `Avatar`, `Button`). Text Style `text/display-lg`. Colour bound to `color/neutral-100`. Width: hug contents (auto).
2. **Overview** — vertical autolayout frame named `Overview`. Gap 16. Width fixed 480. Padding 0.
   - Heading text layer named `Overview`. Content: literal string `Overview`. Text Style `text/md-medium`. Colour `color/neutral-100`.
   - Body text layer named after the body string. Content: the 1–2 sentence description from the component's entry in §2 of this file. Text Style `text/md-regular`. Colour `color/neutral-100`. Width: fill container (480px).

---

### `Variants` and `Props` sub-section (table layout)

Both sub-sections share the same structural spec.

Outer frame: vertical autolayout, width 1128 (fill container), gap 16 between heading and table.

**Heading** — text layer whose content is literally `Variants` or `Props`. Text Style `text/xl-regular`. Colour `color/neutral-100`.

**Table** — vertical autolayout frame named `Table`. Width 1128 (fill container). Gap 0 (rows stack flush; data rows carry their own bottom border). No padding. No fill.

The table's children are one **Header** row followed by N **Background** (data) rows.

**Header row** (frame named `Header`):

| Property | Value |
|---|---|
| Layout | `HORIZONTAL`, gap 40, width fill (1128) |
| Padding | `32` left/right, `16` top/bottom |
| Fill | `color/neutral-10` |
| Border | None |
| Corner radius | 0 |

Header row cells are text layers placed directly in the header row (not wrapped in `div` frames):

- First cell: text layer named `Name`, content `Name`, width **fixed 320px**.
- Remaining cells: text layers, width **fill (`flex: 1`)**. Content matches the column label — Variants uses `Purpose`; Props uses `Type` and `Default` (two cells).

All header cells use Text Style `text/md-medium`, colour `color/neutral-100`.

**Data rows** (each row is a frame named `Background`):

| Property | Value |
|---|---|
| Layout | `HORIZONTAL`, gap 40, width fill (1128) |
| Padding | `32` left/right, `16` top/bottom |
| Fill | `color/neutral-0` |
| Border | 1px bottom, colour `color/neutral-40` |
| Corner radius | 4 |

Each data row wraps its cells in inner autolayout frames named `div` (vertical autolayout, items-start, justify-center, gap 0, no padding, no fill):

- First `div`: width **fixed 320px**. Contains one text layer with the row's `Name` value.
- Remaining `div`s: width **fill (`flex: 1`)**. Each contains one text layer with the corresponding column value.

All data-row text layers use Text Style `text/md-regular`, colour `color/neutral-100`.

**Column content sources:**

- **Variants:** rows come from the §2 Variants table for this component. Columns: `Name`, `Purpose`.
- **Props:** rows come from the §4 property table for this component. Use `Figma property name` → `Name`, `Property type` → `Type`, `Default` → `Default`. Columns: `Name`, `Type`, `Default`.

> The reference mockup at `134:2082` has the Props header text layers mis-named `Purpose` in the layer tree (duplicated from Variants). When creating new tables, name the layers `Name`, `Type`, and `Default` to match their displayed content.

---

### `Do / Don't`, `Content guidelines`, `Accessibility` (card sub-sections)

All three scaffolded sub-sections share the same card style.

**Card frame spec:**

| Property | Value |
|---|---|
| Layout | `VERTICAL`, gap 12, items-start |
| Padding | 24px on all sides |
| Fill | `color/bg-subtle` |
| Corner radius | `radius/lg` (8) |
| Border | None |

Each card contains exactly two text layers:

- **Label** — Text Style `text/sm-medium`, colour `color/neutral-100`, content per the Placeholder strings table below.
- **Body** — Text Style `text/sm-regular`, colour `color/neutral-40`, content per the Placeholder strings table below. Width: fill container.

**`Do / Don't` layout:** a horizontal autolayout wrapper frame named `Do / Don't`, gap 24, containing two cards (`Do` and `Don't`) each with fixed width **552px** — the two cards plus the 24px gap sum to 1128px.

**`Content guidelines` and `Accessibility` layouts:** a single card, width fill (1128px), named after the sub-section.

---

### Placeholder strings

Use exactly these strings for scaffolded cards. They are intentionally generic — designers replace them.

| Sub-section | Label | Placeholder body |
|---|---|---|
| `Do / Don't` — Do card | `Do` | `Describe the correct or recommended usage of this component.` |
| `Do / Don't` — Don't card | `Don't` | `Describe what to avoid when using this component.` |
| `Content guidelines` card | `Content guidelines` | `Describe voice, tone, and copy rules for the labels and text inside this component.` |
| `Accessibility` card | `Accessibility` | `List keyboard interactions, screen reader behaviour, ARIA roles, and any required alt text patterns.` |

---

### Auto-generated content format (quick reference)

```
Documentation (vertical autolayout, gap 48, padding 48, width 1224)
├── summary (vertical autolayout, gap 48, width 1128)
│   ├── [text/display-lg, color/neutral-100] <ComponentName>
│   └── Overview (vertical autolayout, gap 16, width 480)
│       ├── [text/md-medium, color/neutral-100] Overview
│       └── [text/md-regular, color/neutral-100] <1–2 sentence description from §2>
├── <component set>                          (relocated; not cloned)
├── Variants (vertical autolayout, gap 16, width 1128)
│   ├── [text/xl-regular, color/neutral-100] Variants
│   └── Table
│       ├── Header    (bg color/neutral-10)        Name (320) | Purpose (flex)
│       └── Background (bg color/neutral-0, border-b color/neutral-40, radius 4)
│                      <variant name> | <purpose>
│           … one Background frame per variant
├── Props (vertical autolayout, gap 16, width 1128)
│   ├── [text/xl-regular, color/neutral-100] Props
│   └── Table
│       ├── Header     Name (320) | Type (flex) | Default (flex)
│       └── Background <prop name> | <type> | <default>
│           … one Background frame per prop
├── Do / Don't (horizontal autolayout, gap 24, width 1128)
│   ├── Do    (card, width 552)
│   └── Don't (card, width 552)
├── Content guidelines (card, width 1128)
└── Accessibility (card, width 1128)
```
