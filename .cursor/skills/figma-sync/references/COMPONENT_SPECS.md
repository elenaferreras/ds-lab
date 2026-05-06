# Component Specs — Figma Sync Reference

This file is loaded on demand by the `figma-sync` skill. It contains:

1. The full `--farco-*` token → Figma mapping table
2. Per-component Figma layer guides for all 6 components
3. Token sync reference — Variable types, modes, Effect Style format, Text Style matrix

---

## 1. Token → Figma Mapping

The design token system uses three Figma Variable collections. Components may **only** reference `Semantic` Variables — never `Global` or `Primitives` directly.

### Collection: Global (single `Default` mode — invariant values)

| Figma Variable name | Type | Value |
|---|---|---|
| `size/0` | FLOAT | 0 |
| `size/1` | FLOAT | 4 |
| `size/2` | FLOAT | 8 |
| `size/3` | FLOAT | 12 |
| `size/4` | FLOAT | 16 |
| `size/5` | FLOAT | 20 |
| `size/6` | FLOAT | 24 |
| `size/7` | FLOAT | 28 |
| `size/8` | FLOAT | 32 |
| `size/9` | FLOAT | 36 |
| `size/10` | FLOAT | 40 |
| `size/11` | FLOAT | 44 |
| `size/12` | FLOAT | 48 |
| `size/14` | FLOAT | 56 |
| `size/16` | FLOAT | 64 |
| `size/20` | FLOAT | 80 |
| `size/24` | FLOAT | 96 |
| `size/30` | FLOAT | 120 |
| `font/size-xs` | FLOAT | 12 |
| `font/size-sm` | FLOAT | 14 |
| `font/size-md` | FLOAT | 16 |
| `font/size-lg` | FLOAT | 20 |
| `font/size-xl` | FLOAT | 24 |
| `font/weight-regular` | FLOAT | 400 |
| `font/weight-medium` | FLOAT | 500 |
| `font/weight-bold` | FLOAT | 700 |
| `font/line-height-tight` | FLOAT | 1.2 |
| `font/line-height-base` | FLOAT | 1.5 |
| `font/line-height-relaxed` | FLOAT | 1.75 |
| `font/letter-spacing-tight` | STRING | `-0.01em` |
| `font/letter-spacing-base` | STRING | `0.01em` |
| `radius/none` | FLOAT | 0 |
| `radius/sm` | FLOAT | 4 |
| `radius/md` | FLOAT | 6 |
| `radius/lg` | FLOAT | 8 |
| `radius/xl` | FLOAT | 12 |
| `radius/full` | FLOAT | 9999 |
| `opacity/disabled` | FLOAT | 0.4 |
| `color/black` | COLOR | `#000000` |
| `color/white` | COLOR | `#ffffff` |
| `color/success-50` | COLOR | (light tint of success) |
| `color/success-100` | COLOR | … |
| `color/success-500` | COLOR | `#52c41a` |
| `color/success-700` | COLOR | … |
| `color/warning-50` | COLOR | … |
| `color/warning-500` | COLOR | `#faad14` |
| `color/warning-700` | COLOR | … |
| `color/danger-50` | COLOR | … |
| `color/danger-500` | COLOR | `#ff4d4f` |
| `color/danger-700` | COLOR | … |
| `color/info-50` | COLOR | … |
| `color/info-500` | COLOR | … |
| `color/info-700` | COLOR | … |

> Actual resolved values for feedback palettes come from the CSS source files. Add or remove stops as needed; the table above shows the minimum required stops referenced by Semantic.

---

### Collection: Primitives — Palette group (modes: `Farco` | `White Label`)

These are raw brand palette values. Components must never reference these directly.

| Figma Variable name | Farco mode | White Label mode |
|---|---|---|
| `neutral/50` | `#fafafa` | `#fafafa` |
| `neutral/100` | `#f5f5f5` | `#f5f5f5` |
| `neutral/200` | `#e8e8e8` | `#e8e8e8` |
| `neutral/300` | `#d9d9d9` | `#d9d9d9` |
| `neutral/400` | `#bfbfbf` | `#bfbfbf` |
| `neutral/500` | `#8c8c8c` | `#8c8c8c` |
| `neutral/600` | `#595959` | `#595959` |
| `neutral/700` | `#434343` | `#434343` |
| `neutral/800` | `#262626` | `#262626` |
| `neutral/900` | `#1f1f1f` | `#1f1f1f` |
| `neutral/950` | `#000000` | `#000000` |
| `primary/50` | `#f5f5f5` | `#e6f4ff` |
| `primary/100` | `#e8e8e8` | `#bae0ff` |
| `primary/200` | `#d9d9d9` | `#91caff` |
| `primary/300` | `#bfbfbf` | `#69b1ff` |
| `primary/400` | `#8c8c8c` | `#4096ff` |
| `primary/500` | `#595959` | `#1677ff` |
| `primary/600` | `#434343` | `#0958d9` |
| `primary/700` | `#333333` | `#003eb3` |
| `primary/800` | `#1a1a1a` | `#002c8c` |
| `primary/900` | `#0d0d0d` | `#001d6c` |
| `primary/950` | `#000000` | `#001152` |
| `secondary/50` | `#f9ffe8` | `#f0f5ff` |
| `secondary/100` | `#f0ffd4` | `#d6e4ff` |
| `secondary/200` | `#dffcb0` | `#adc6ff` |
| `secondary/300` | `#c9f29f` | `#85a5ff` |
| `secondary/400` | `#a8e870` | `#597ef7` |
| `secondary/500` | `#82d43b` | `#2f54eb` |
| `secondary/600` | `#60be1a` | `#1d39c4` |
| `secondary/700` | `#45a00e` | `#10239e` |
| `secondary/800` | `#2f7b07` | `#061178` |
| `secondary/900` | `#1d5700` | `#030852` |
| `secondary/950` | `#0d3600` | `#020636` |

> Exact hex values must be verified against the CSS source files. The table above is reference only.

---

### Collection: Primitives — Resolved bridge group (modes: `Farco` | `White Label`)

Eight alias Variables that bridge the two brands where different palette stops must be used. Both modes alias other Variables — no raw hex values.

| Figma Variable name | Farco mode (alias) | White Label mode (alias) |
|---|---|---|
| `resolved/action-primary-light` | `Primitives/primary/950` | `Primitives/primary/500` |
| `resolved/action-primary-hover-light` | `Primitives/primary/800` | `Primitives/primary/400` |
| `resolved/action-primary-pressed-light` | `Primitives/primary/700` | `Primitives/primary/600` |
| `resolved/action-primary-focus-light` | `Primitives/primary/950` | `Primitives/primary/500` |
| `resolved/border-light` | `Primitives/neutral/950` | `Primitives/neutral/300` |
| `resolved/border-strong-light` | `Global/color/black` | `Primitives/neutral/500` |
| `resolved/border-focus-light` | `Primitives/primary/950` | `Primitives/primary/500` |
| `resolved/text-on-action-dark` | `Global/color/black` | `Global/color/white` |

---

### Collection: Semantic — Color group (modes: `Light` | `Dark`)

All component layers must bind to these Variables. Each mode value is an alias.

| Figma Variable name | Light mode (alias) | Dark mode (alias) |
|---|---|---|
| `color/action/primary` | `Primitives/resolved/action-primary-light` | `Primitives/primary/400` |
| `color/action/primary-hover` | `Primitives/resolved/action-primary-hover-light` | `Primitives/primary/300` |
| `color/action/primary-pressed` | `Primitives/resolved/action-primary-pressed-light` | `Primitives/primary/200` |
| `color/action/primary-focus` | `Primitives/resolved/action-primary-focus-light` | `Primitives/primary/400` |
| `color/action/primary-disabled` | `Primitives/neutral/300` | `Primitives/neutral/700` |
| `color/action/secondary` | `Primitives/secondary/300` | `Primitives/secondary/600` |
| `color/action/secondary-hover` | `Primitives/secondary/200` | `Primitives/secondary/500` |
| `color/action/secondary-pressed` | `Primitives/secondary/100` | `Primitives/secondary/400` |
| `color/action/secondary-focus` | `Primitives/secondary/300` | `Primitives/secondary/600` |
| `color/action/secondary-disabled` | `Primitives/neutral/300` | `Primitives/neutral/700` |
| `color/action/destructive` | `Global/color/danger-500` | `Global/color/danger-500` |
| `color/action/destructive-hover` | `Global/color/danger-700` | `Global/color/danger-700` |
| `color/action/destructive-pressed` | `Global/color/danger-700` | `Global/color/danger-700` |
| `color/action/destructive-focus` | `Global/color/danger-500` | `Global/color/danger-500` |
| `color/action/destructive-disabled` | `Primitives/neutral/300` | `Primitives/neutral/700` |
| `color/surface/base` | `Global/color/white` | `Primitives/neutral/950` |
| `color/surface/subtle` | `Primitives/neutral/100` | `Primitives/neutral/900` |
| `color/surface/raised` | `Global/color/white` | `Primitives/neutral/800` |
| `color/surface/overlay` | `Primitives/neutral/100` | `Primitives/neutral/800` |
| `color/text/primary` | `Primitives/neutral/950` | `Global/color/white` |
| `color/text/secondary` | `Primitives/neutral/600` | `Primitives/neutral/400` |
| `color/text/disabled` | `Primitives/neutral/400` | `Primitives/neutral/600` |
| `color/text/inverse` | `Global/color/white` | `Primitives/neutral/950` |
| `color/text/on-action` | `Global/color/white` | `Primitives/resolved/text-on-action-dark` |
| `color/border` | `Primitives/resolved/border-light` | `Primitives/neutral/600` |
| `color/border/subtle` | `Primitives/neutral/200` | `Primitives/neutral/700` |
| `color/border/strong` | `Primitives/resolved/border-strong-light` | `Global/color/white` |
| `color/border/focus` | `Primitives/resolved/border-focus-light` | `Primitives/primary/400` |
| `color/feedback/success` | `Global/color/success-500` | `Global/color/success-500` |
| `color/feedback/success-subtle` | `Global/color/success-50` | `Global/color/success-50` |
| `color/feedback/success-emphasis` | `Global/color/success-700` | `Global/color/success-700` |
| `color/feedback/warning` | `Global/color/warning-500` | `Global/color/warning-500` |
| `color/feedback/warning-subtle` | `Global/color/warning-50` | `Global/color/warning-50` |
| `color/feedback/warning-emphasis` | `Global/color/warning-700` | `Global/color/warning-700` |
| `color/feedback/danger` | `Global/color/danger-500` | `Global/color/danger-500` |
| `color/feedback/danger-subtle` | `Global/color/danger-50` | `Global/color/danger-50` |
| `color/feedback/danger-emphasis` | `Global/color/danger-700` | `Global/color/danger-700` |
| `color/feedback/info` | `Global/color/info-500` | `Global/color/info-500` |
| `color/feedback/info-subtle` | `Global/color/info-50` | `Global/color/info-50` |
| `color/feedback/info-emphasis` | `Global/color/info-700` | `Global/color/info-700` |

---

### Collection: Semantic — Structural group (modes: `Light` | `Dark`)

Both modes use the **identical alias** to the corresponding `Global` Variable — structural values do not change between light and dark.

| Figma Variable name | Alias (both modes) |
|---|---|
| `spacing/0` | `Global/size/0` |
| `spacing/1` | `Global/size/1` |
| `spacing/2` | `Global/size/2` |
| `spacing/3` | `Global/size/3` |
| `spacing/4` | `Global/size/4` |
| `spacing/5` | `Global/size/5` |
| `spacing/6` | `Global/size/6` |
| `spacing/7` | `Global/size/7` |
| `spacing/8` | `Global/size/8` |
| `spacing/9` | `Global/size/9` |
| `spacing/10` | `Global/size/10` |
| `spacing/11` | `Global/size/11` |
| `spacing/12` | `Global/size/12` |
| `spacing/14` | `Global/size/14` |
| `spacing/16` | `Global/size/16` |
| `spacing/20` | `Global/size/20` |
| `spacing/24` | `Global/size/24` |
| `spacing/30` | `Global/size/30` |
| `radius/none` | `Global/radius/none` |
| `radius/sm` | `Global/radius/sm` |
| `radius/md` | `Global/radius/md` |
| `radius/lg` | `Global/radius/lg` |
| `radius/xl` | `Global/radius/xl` |
| `radius/full` | `Global/radius/full` |
| `font/size-xs` | `Global/font/size-xs` |
| `font/size-sm` | `Global/font/size-sm` |
| `font/size-md` | `Global/font/size-md` |
| `font/size-lg` | `Global/font/size-lg` |
| `font/size-xl` | `Global/font/size-xl` |
| `font/weight-regular` | `Global/font/weight-regular` |
| `font/weight-medium` | `Global/font/weight-medium` |
| `font/weight-bold` | `Global/font/weight-bold` |
| `font/line-height-tight` | `Global/font/line-height-tight` |
| `font/line-height-base` | `Global/font/line-height-base` |
| `font/line-height-relaxed` | `Global/font/line-height-relaxed` |
| `font/letter-spacing-tight` | `Global/font/letter-spacing-tight` |
| `font/letter-spacing-base` | `Global/font/letter-spacing-base` |
| `opacity/disabled` | `Global/opacity/disabled` |

---

### Effect Styles (theme-invariant)

| Style name | Shadow |
|---|---|
| `shadow/sm` | DROP_SHADOW, x: 0, y: 1, blur: 2, spread: 0, #000000 @ 5% |
| `shadow/md` | DROP_SHADOW, x: 0, y: 4, blur: 8, spread: 0, #000000 @ 10% |
| `shadow/lg` | DROP_SHADOW, x: 0, y: 8, blur: 24, spread: 0, #000000 @ 12% |

---

### Text Styles (theme-invariant)

| Style name | Font size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `text/xs-regular` | 12px | 400 | 1.5 | 0.01em |
| `text/sm-regular` | 14px | 400 | 1.5 | 0.01em |
| `text/sm-medium` | 14px | 500 | 1.5 | 0.01em |
| `text/md-regular` | 16px | 400 | 1.5 | 0.01em |
| `text/md-medium` | 16px | 500 | 1.5 | 0.01em |
| `text/lg-regular` | 20px | 400 | 1.5 | 0.01em |
| `text/xl-regular` | 24px | 400 | 1.5 | 0.01em |
| `text/display-lg` | 56px | 700 | 80px | -2.24px |

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
| `primary` | `regular` | `color/action/primary` (#000) | `color/text/inverse` (#fff) | `color/action/primary` (#000) |
| `primary` | `danger` | `color/action/destructive` (#ff4d4f) | `color/text/inverse` (#fff) | `color/action/destructive` (#ff4d4f) |
| `secondary` | `regular` | transparent | `color/text/primary` (#000) | `color/border` (#000) |
| `secondary` | `danger` | transparent | `color/action/destructive` (#ff4d4f) | `color/action/destructive` (#ff4d4f) |
| `ghost` | `regular` | transparent | `color/text/primary` (#000) | transparent |
| `ghost` | `danger` | transparent | `color/action/destructive` (#ff4d4f) | transparent |

**Shared styling:**
- Border radius: `radius/full` (9999px) — full pill shape
- Border width: 1px on all variants (transparent border on ghost)
- Font: bind `Label` to Text Style `text/sm-regular` (sm) or `text/md-regular` (md/lg). Apply `uppercase` and `font/letter-spacing-base` as layer-level decoration overrides — do not set raw font properties.
- Focus ring: 2px, `color/action/secondary` (#c9f29f), 2px offset
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
| `default` | `color/surface/subtle` (#f5f5f5) | `color/text/primary` (#262626, Farco neutral/800) | `color/border/subtle` (#e8e8e8) |
| `success` | `color/feedback/success` 12% tint | `color/feedback/success` 80% darkened | `color/feedback/success` 30% tint |
| `warning` | `color/feedback/warning` 12% tint | `color/feedback/warning` 80% darkened | `color/feedback/warning` 30% tint |
| `danger` | `color/feedback/danger` 10% tint | `color/feedback/danger` (#ff4d4f) | `color/feedback/danger` 30% tint |
| `accent` | `color/action/secondary` 40% tint | `color/text/primary` (#000) | `color/action/secondary` 60% tint |

**Shared styling:**
- Border radius: `radius/full` (9999px)
- Border width: 1px
- Font: bind `Label` to Text Style `text/xs-regular` (sm) or `text/sm-medium` (md). Apply `uppercase` and `font/letter-spacing-base` as layer-level decoration overrides — do not set raw font properties. Note: sm has no `text/xs-medium` style; use `text/xs-regular` with a medium-weight layer override.

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
- `Root` — circle frame, `radius/full`, `color/border/subtle` background fill, **`clip content: true`** (essential — without this the image overflows the circle). The `Root` frame itself must also have `radius/full` applied so clipping is circular.
  - `Image` — fills full frame (width and height 100% of `Root`), `radius/full`, image fill using `public/avatar-default.png` (upload via Figma MCP image upload API to receive an image hash, then set fill as `{ type: IMAGE, imageRef: <hash>, scaleMode: FILL }`). **Visible only when `src = true`; hidden when `src = false`.**
  - `Skeleton` — absolute fill, `color/border/subtle`, `radius/full`, shown during load. Hidden when `src = true`.
  - `Fallback` — absolute fill, `color/border/subtle` bg, `color/text/secondary` text, initials centered, `radius/full`. Visible when `src = false`; hidden when `src = true`. Bind to Text Style `text/xs-regular` (sm: 10px override) or `text/sm-regular` (md/lg/xl — apply size override where no exact style match exists).
  - `Alt` — text node, `visibility: true`, **`opacity: 0`**, bind to Text Style `text/sm-regular`, color `color/text/secondary`, positioned inside the frame. Opacity 0 (not `visibility: false`) is mandatory — Figma requires the layer to be in the visible layer tree to accept a component property binding. A hidden layer cannot be bound.

**Figma layers to update when a token changes:**
- `color/border/subtle` change → update `Root` bg, `Skeleton` fill, `Fallback` bg across all size frames
- `color/text/secondary` change → update `Fallback` text fill and `Alt` annotation layer color across all size frames
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
- Root border: 1px, `color/border/subtle` (#e8e8e8)
- Root border radius: `radius/xl` (12px)
- Root shadow: `shadow/sm`
- Root background: `color/surface/base` (#ffffff)
- Section dividers: 1px border, `color/border/subtle`, between Header/Body and Body/Footer

**Figma layers to update when a token changes:**
- `color/border/subtle` change → update root border stroke and all section divider strokes
- `color/surface/base` change → update root background fill
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
| Default | `color/border/subtle` (#d9d9d9, neutral/300) | `color/surface/base` (#fff) | none |
| Focus | `color/action/primary` (#000) | `color/surface/base` (#fff) | 2px `color/action/secondary` (#c9f29f) |
| Error | `color/feedback/danger` (#ff4d4f) | `color/surface/base` (#fff) | none |
| Error+Focus | `color/feedback/danger` (#ff4d4f) | `color/surface/base` (#fff) | 2px `color/feedback/danger` 30% tint |
| Disabled | `color/border/subtle` (#d9d9d9) | `color/surface/subtle` (#f5f5f5) | none |

**Typography:**
- Input text: bind to Text Style `text/sm-regular`; colour `color/text/primary`
- Placeholder text: bind to Text Style `text/sm-regular`; colour `color/text/disabled` (#bfbfbf)
- Label: bind to Text Style `text/sm-medium`; colour `color/text/primary`
- Helper text: bind to Text Style `text/xs-regular`; colour `color/text/secondary` (#8c8c8c)
- Error text: bind to Text Style `text/xs-regular`; colour `color/feedback/danger` (#ff4d4f)

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
| `default` | `color/surface/overlay` | `color/text/inverse` | `color/border` | none |
| `success` | `color/feedback/success` 12% tint over `color/surface/base` | `color/text/primary` (#000) | `color/feedback/success` 40% tint | `CheckCircle` (Phosphor), `color/feedback/success` |
| `warning` | `color/feedback/warning` 12% tint over `color/surface/base` | `color/text/primary` (#000) | `color/feedback/warning` 40% tint | `Warning` (Phosphor), `color/feedback/warning` |
| `danger` | `color/feedback/danger` 10% tint over `color/surface/base` | `color/text/primary` (#000) | `color/feedback/danger` 35% tint | `XCircle` (Phosphor), `color/feedback/danger` |

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
- Title: bind to Text Style `text/sm-medium`
- Description: bind to Text Style `text/xs-regular`; apply 70% opacity as a layer-level override
- Close button icon: 14px

**Close button (must match code):**
- The `CloseButton` area in the Toast component must contain a **nested `Button` instance** (not an empty frame).
- Button props (as in code): `variant="ghost"`, `size="sm"`, `iconLeft = X` (Phosphor, `weight="regular"`, `Format = Outline`), and **no label text** (code renders `{null}` as children).
- Close icon colour should inherit the Toast text colour:
  - `Variant=default` → `color/text/inverse`
  - `Variant=success|warning|danger` → `color/text/primary`

**Figma layers to update when a token changes:**
- Variant background token → update `Background` fill on all affected variant frames
- Variant border token → update `Border` stroke on all affected variant frames
- `color/text/inverse` or `color/text/primary` → update text fill on `default` variant frames
- `shadow/md` change → update drop shadow effect on all Toast variant frames
- `radius/lg` change → update corner radius on all Toast variant frames
- Spacing token change → update padding and gap values on affected frames

---

## 3. Token Sync Reference

### Variable Collections

| Collection | Modes | Purpose |
|---|---|---|
| `Global` | `Default` (1 mode) | Invariant raw values — sizes, font numerics, radii, opacity, feedback palettes, black, white |
| `Primitives` | `Farco`, `White Label` | Per-brand palette scales + 8 resolved bridge aliases |
| `Semantic` | `Light`, `Dark` | Alias layer — the only collection components bind to |

---

### Variable Type Map

| Layer | Variables | Type |
|---|---|---|
| Global — sizes | `size/0`–`size/30` | `FLOAT` |
| Global — font numerics | `font/size-*`, `font/weight-*`, `font/line-height-*` | `FLOAT` |
| Global — letter spacing | `font/letter-spacing-tight`, `font/letter-spacing-base` | `STRING` (keep `em` unit) |
| Global — radii | `radius/none`–`radius/full` (`radius/full` = 9999) | `FLOAT` |
| Global — opacity | `opacity/disabled` | `FLOAT` |
| Global — colors | `color/black`, `color/white`, `color/success-*`, `color/warning-*`, `color/danger-*`, `color/info-*` | `COLOR` |
| Primitives — palette | `neutral/*`, `primary/*`, `secondary/*` (raw hex per mode) | `COLOR` |
| Primitives — resolved | `resolved/*` (alias to Primitives/Global per mode) | `COLOR` |
| Semantic — color | `color/action/*`, `color/surface/*`, `color/text/*`, `color/border/*`, `color/feedback/*` (alias) | `COLOR` |
| Semantic — structural | `spacing/*`, `radius/*`, `font/*`, `opacity/disabled` (alias to Global) | `FLOAT` / `STRING` |
| Font family | `--farco-font-family-base` | → `Primitives/font/family-base` (STRING, modes: Farco / White Label); Text Styles bind font family to this Variable |
| Shadows | `shadow/sm`, `shadow/md`, `shadow/lg` | → Effect Styles only, not Variables |

---

### Resolved Bridge Variables — Why They Exist

Eight Variables live in `Primitives/resolved/` to handle cases where the two brands require **different palette stops** for the same semantic meaning. Instead of duplicating the branching logic into every Semantic variable, Semantic aliases the bridge Variable once, and the bridge handles the per-brand resolution.

| Bridge Variable | Farco resolves to | White Label resolves to |
|---|---|---|
| `resolved/action-primary-light` | `primary/950` (#000) | `primary/500` (#1677ff) |
| `resolved/action-primary-hover-light` | `primary/800` (#1a1a1a) | `primary/400` (#4096ff) |
| `resolved/action-primary-pressed-light` | `primary/700` (#333333) | `primary/600` (#0958d9) |
| `resolved/action-primary-focus-light` | `primary/950` (#000) | `primary/500` (#1677ff) |
| `resolved/border-light` | `neutral/950` (#000) | `neutral/300` (#d9d9d9) |
| `resolved/border-strong-light` | `Global/color/black` | `neutral/500` (#8c8c8c) |
| `resolved/border-focus-light` | `primary/950` (#000) | `primary/500` (#1677ff) |
| `resolved/text-on-action-dark` | `Global/color/black` | `Global/color/white` |

The last bridge variable (`text-on-action-dark`) handles a dark-mode mismatch: Farco's primary is black in dark mode (text on it must be white → actually inverted — black text reads on white backgrounds; confirm against CSS), White Label's primary is blue (text on it is white).

---

### Effect Styles — Shadow Format

Shadows are theme-invariant.

| Style name | Figma DROP_SHADOW effect |
|---|---|
| `shadow/sm` | x: 0, y: 1, blur: 2, spread: 0, color: #000000, opacity: 0.05 |
| `shadow/md` | x: 0, y: 4, blur: 8, spread: 0, color: #000000, opacity: 0.10 |
| `shadow/lg` | x: 0, y: 8, blur: 24, spread: 0, color: #000000, opacity: 0.12 |

---

### Text Styles — Matrix

All use font family `Overused Grotesk`. Default line height `1.5`, default letter spacing `0.01em` unless overridden. Text Styles are theme-invariant. When creating or updating, always set all five properties — never partial updates.

| Style name | Font size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| `text/xs-regular` | 12px | 400 | 1.5 | 0.01em |
| `text/sm-regular` | 14px | 400 | 1.5 | 0.01em |
| `text/sm-medium` | 14px | 500 | 1.5 | 0.01em |
| `text/md-regular` | 16px | 400 | 1.5 | 0.01em |
| `text/md-medium` | 16px | 500 | 1.5 | 0.01em |
| `text/lg-regular` | 20px | 400 | 1.5 | 0.01em |
| `text/xl-regular` | 24px | 400 | 1.5 | 0.01em |
| `text/display-lg` | 56px | 700 | 80px (≈1.43) | -2.24px (-0.04em) |

---

## 4. Figma Component Properties

### Property type rules

Every code prop maps to one of four Figma component property types:

| Figma property type | Use when the code prop is... |
|---|---|
| `VARIANT` | An enum — a fixed set of named string options |
| `BOOLEAN` | A `boolean` (`true` / `false`), or a function prop whose presence/absence toggles visible UI |
| `TEXT` | A free `string` — user-supplied content like labels, placeholder text, or initials |
| `TEXT` (hidden annotation) | An accessibility string prop (`alt`, `aria-label`, `title`, etc.) with no visual representation. Create a `TEXT` property bound to an **opacity-0 annotation layer** named after the prop in title case (e.g. `Alt`, `Aria Label`). The layer is a text node, `visibility: true` with **`opacity: 0`**, bound to Text Style `text/sm-regular`, color `color/text/secondary`. Use opacity 0, not `visibility: false` — Figma requires the layer to be in the visible layer tree to accept a component property binding. It appears in the properties panel and designers can author the value there; it is invisible on the canvas. |
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
| `Icon Left` | `INSTANCE_SWAP` | — | `Plus` (Phosphor) |
| `Has Icon Right` | `BOOLEAN` | — | `false` |
| `Icon Right` | `INSTANCE_SWAP` | — | `ArrowRight` (Phosphor) |
| `Label` | `TEXT` | — | `"Label"` |

**Visual rules per boolean state:**
- `Disabled = true` → apply `opacity/disabled` (0.4) to the entire component, set `pointer-events: none`
- `Loading = true` → opacity 0.7, replace `Icon Left` slot with the spinner instance, hide `Icon Right`
- `Disabled` and `Loading` are mutually exclusive — when `Loading = true`, `Disabled` is ignored
- `Has Icon Left = false` → hide the `Icon Left` slot layer entirely; `Has Icon Left = true` → show it, defaulting to the `Plus` (Phosphor) instance
- `Has Icon Right = false` → hide the `Icon Right` slot layer entirely; `Has Icon Right = true` → show it, defaulting to the `ArrowRight` (Phosphor) instance

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
- `Dismissible = true` → show the × (`X`, Phosphor) button at the end of the badge
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
- `Disabled = true` → apply `opacity/disabled` (0.4) to the entire component; input background switches to `color/surface/subtle`; label and helper text also dimmed
- `Has Error = true` → border switches to `color/feedback/danger`; `Error Text` layer is shown in place of `Helper Text`; `Has Error = false` → show `Helper Text` layer instead
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
- When `Variant` is `success`, `warning`, or `danger`, show the corresponding icon layer (`CheckCircle`, `Warning`, `XCircle` respectively — all Phosphor)
- `Description` being empty should hide the description text layer in the Figma component

---

## 5. Icons

### Overview

**Code source of truth:** `@phosphor-icons/react`
**Figma source of truth:** the subscribed library `DS Lab: Phosphor Icons` (icons are used as **instances** inside DS-Lab components)

**Important:** The DS-Lab `Icons` page (if present) is not a source-of-truth for icon components anymore. Do not create or maintain DS-Lab-owned icon components from SVGs.

---

### Mapping table (code → Phosphor library)

Use this mapping in `figma-sync` Workflow I when wiring nested icon instances in consuming components.

| Code import name | Phosphor component set name | Default weight policy |
|---|---|---|
| `XIcon` | `X` | `regular` (UI chrome) |
| `CheckCircleIcon` | `CheckCircle` | `fill` (status icon) |
| `WarningIcon` | `Warning` | `fill` (status icon) |
| `XCircleIcon` | `XCircle` | `fill` (status icon) |
| `PlusIcon` | `Plus` | `regular` (UI chrome) |
| `ArrowRightIcon` | `ArrowRight` | `regular` (UI chrome) |

---

### Instance rules (constraints + color)

- Icon layers inside DS-Lab components must be **instances** of the Phosphor library component set (not detached).
- **Format must always be `Outline`** (never `Stroke`). When placing an icon instance, set the Phosphor component property `Format = Outline`.
- Instances must be sized by the consuming component:
  - Button icon sizes: `sm` 14px, `md` 16px, `lg` 18px
  - Toast icon size: 16px
  - Badge dismiss icon size: 10px (`sm`) / 12px (`md`)
- Icon colour should be driven by the consuming component’s text colour unless an explicit override is required (see nested instances table below).
- Button icon weights must match code defaults:
  - Button chrome icons (`Plus`, `ArrowRight`, `X`) use `Weight = Regular`
  - Status icons (Toast) use `Weight = Fill`

---

### Nested instances in consuming components

When a UI component uses an icon as a child, that icon slot must be represented as a **nested instance** of the Phosphor icon component set — not a raw vector copy. Use the Phosphor icon references in `FIGMA_RULES.md` to import the correct component set by key.

After placing the instance, apply Variable overrides only when needed to match the component’s semantic color rules. Do not detach instances.

| Consuming component | Icon used | Where | Fill Variable override |
|---|---|---|---|
| `Button` (primary, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/text/inverse` |
| `Button` (primary, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/text/inverse` |
| `Button` (secondary, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/text/primary` |
| `Button` (secondary, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/action/destructive` |
| `Button` (ghost, regular) | any icon | `Icon Left` / `Icon Right` slots | `color/text/primary` |
| `Button` (ghost, danger) | any icon | `Icon Left` / `Icon Right` slots | `color/action/destructive` |
| `Badge` | `XIcon` | dismiss × button layer | same Variable as the badge's text color for that variant (see §2 Badge color matrix) |
| `Toast` (success) | `CheckCircleIcon` | icon layer | `color/feedback/success` |
| `Toast` (warning) | `WarningIcon` | icon layer | `color/feedback/warning` |
| `Toast` (danger) | `XCircleIcon` | icon layer | `color/feedback/danger` |
| `Toast` (all variants) | `XIcon` | close button (`Button` nested instance `iconLeft`) | `default` → `color/text/inverse`, otherwise → `color/text/primary` |

After wiring icon instances, verify that each consuming component has the icon slot wired to a live instance (not a detached vector) and that any required Variable override is correctly set on the instance. If the slot is a raw vector, replace it with an instance and apply the override.

---

## 6. Documentation Templates

This section defines the layout, content, and typography for the `Documentation` frame that Workflow D creates on each component page.

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
| Fill | `color/surface/base` |
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
| Summary title (component name) | `text/display-lg` | `color/text/primary` |
| Variants / Props section heading | `text/xl-regular` | `color/text/primary` |
| Overview heading | `text/md-medium` | `color/text/primary` |
| Overview body | `text/md-regular` | `color/text/primary` |
| Table header row cells | `text/md-medium` | `color/text/primary` |
| Table data row cells | `text/md-regular` | `color/text/primary` |
| Card label (`Do`, `Don't`, `Content guidelines`, `Accessibility`) | `text/sm-medium` | `color/text/primary` |
| Card placeholder body | `text/sm-regular` | `color/text/disabled` |

All text layers must be bound to the named Text Style — do not set raw font properties.

---

### `summary` sub-section

Auto-generated. Vertical autolayout frame named `summary`.

| Property | Value |
|---|---|
| Layout | `VERTICAL`, gap 48, width 1128 (fill container), hug contents vertically |
| Padding | 0 |

Children, in order:

1. **Title** — text layer named `Title`. Content: the component's PascalCase name (e.g. `Avatar`, `Button`). Text Style `text/display-lg`. Colour bound to `color/text/primary`. Width: hug contents (auto).
2. **Overview** — vertical autolayout frame named `Overview`. Gap 16. Width fixed 480. Padding 0.
   - Heading text layer named `Overview`. Content: literal string `Overview`. Text Style `text/md-medium`. Colour `color/text/primary`.
   - Body text layer named after the body string. Content: the 1–2 sentence description from the component's entry in §2 of this file. Text Style `text/md-regular`. Colour `color/text/primary`. Width: fill container (480px).

---

### `Variants` and `Props` sub-section (table layout)

Both sub-sections share the same structural spec.

Outer frame: vertical autolayout, width 1128 (fill container), gap 16 between heading and table.

**Heading** — text layer whose content is literally `Variants` or `Props`. Text Style `text/xl-regular`. Colour `color/text/primary`.

**Table** — vertical autolayout frame named `Table`. Width 1128 (fill container). Gap 0 (rows stack flush; data rows carry their own bottom border). No padding. No fill.

The table's children are one **Header** row followed by N **Background** (data) rows.

**Header row** (frame named `Header`):

| Property | Value |
|---|---|
| Layout | `HORIZONTAL`, gap 40, width fill (1128) |
| Padding | `32` left/right, `16` top/bottom |
| Fill | `color/surface/subtle` |
| Border | None |
| Corner radius | 0 |

Header row cells are text layers placed directly in the header row (not wrapped in `div` frames):

- First cell: text layer named `Name`, content `Name`, width **fixed 320px**.
- Remaining cells: text layers, width **fill (`flex: 1`)**. Content matches the column label — Variants uses `Purpose`; Props uses `Type` and `Default` (two cells).

All header cells use Text Style `text/md-medium`, colour `color/text/primary`.

**Data rows** (each row is a frame named `Background`):

| Property | Value |
|---|---|
| Layout | `HORIZONTAL`, gap 40, width fill (1128) |
| Padding | `32` left/right, `16` top/bottom |
| Fill | `color/surface/base` |
| Border | 1px bottom, colour `color/text/disabled` |
| Corner radius | 4 |

Each data row wraps its cells in inner autolayout frames named `div` (vertical autolayout, items-start, justify-center, gap 0, no padding, no fill):

- First `div`: width **fixed 320px**. Contains one text layer with the row's `Name` value.
- Remaining `div`s: width **fill (`flex: 1`)**. Each contains one text layer with the corresponding column value.

All data-row text layers use Text Style `text/md-regular`, colour `color/text/primary`.

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
| Fill | `color/surface/subtle` |
| Corner radius | `radius/lg` (8) |
| Border | None |

Each card contains exactly two text layers:

- **Label** — Text Style `text/sm-medium`, colour `color/text/primary`, content per the Placeholder strings table below.
- **Body** — Text Style `text/sm-regular`, colour `color/text/disabled`, content per the Placeholder strings table below. Width: fill container.

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
│   ├── [text/display-lg, color/text/primary] <ComponentName>
│   └── Overview (vertical autolayout, gap 16, width 480)
│       ├── [text/md-medium, color/text/primary] Overview
│       └── [text/md-regular, color/text/primary] <1–2 sentence description from §2>
├── <component set>                          (relocated; not cloned)
├── Variants (vertical autolayout, gap 16, width 1128)
│   ├── [text/xl-regular, color/text/primary] Variants
│   └── Table
│       ├── Header    (bg color/surface/subtle)      Name (320) | Purpose (flex)
│       └── Background (bg color/surface/base, border-b color/text/disabled, radius 4)
│                      <variant name> | <purpose>
│           … one Background frame per variant
├── Props (vertical autolayout, gap 16, width 1128)
│   ├── [text/xl-regular, color/text/primary] Props
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
