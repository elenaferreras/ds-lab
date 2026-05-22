---
component: Button
status: draft
source: src/components/ui/button/button.jsx
storybook: Components/Button
figma_page: Button
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [action, form, navigation]
---

# Button

## Overview

Button triggers actions. It expresses visual hierarchy (`primary` → `secondary` → `ghost`) and semantic intent (`regular` vs `danger`). It supports labels, leading and trailing icons, icon-only mode, loading, and disabled states.

## When to use

- Use for **actions** (submit, save, delete, navigate, open).
- Do **not** use for navigation that should read as plain text — prefer text links when the action is low emphasis and inline with copy.
- On any single view or modal, aim for **one `primary` `regular` button** as the main CTA. Additional actions use `secondary` or `ghost`.
- Use `intent="danger"` only for **destructive or irreversible** actions (delete account, remove item). Pair with confirmation patterns when the action is irreversible.

## Variants

| Variant | Purpose |
|---|---|
| `primary` | Single most important action on the screen |
| `secondary` | Supporting action alongside a primary (e.g. Cancel next to Save) |
| `ghost` | Tertiary action, toolbar controls, or dense UI where fill or outline adds noise |
| `danger` (intent) | Destructive actions; works with all three variants |

**Size guidance:** Default to `md`. Use `sm` in compact rows (tables, cards, toasts). Use `lg` for hero or full-width mobile footers sparingly.

## Props and behavior

| Prop | Behavior |
|---|---|
| `children` | Label text. Empty string or `null` with a single icon (or `loading`) → **icon-only** square button. |
| `variant` / `intent` | Invalid values fall back to `primary` / `regular`. |
| `size` | Controls height, padding, font size, icon size (14 / 16 / 18 px), and gap. |
| `iconLeft` / `iconRight` | Icons are decorative (`aria-hidden` on wrapper). Icon-only **must** have an accessible name via `aria-label` on the button (not provided by the component). |
| `loading` | Spinner replaces left icon; label stays visible; opacity 0.7; `pointer-events: none`; `aria-busy="true"`; `onClick` not fired. |
| `disabled` | Opacity 0.4; `pointer-events: none`; native `disabled` on `<button>`. |
| `asChild` | Merges props onto child via Radix `Slot` (e.g. render as `<a>`). Caller must pass a single focusable child. |
| `className` | Appended to root classes (used by nested consumers such as Badge dismiss). |
| `onClick` | Suppressed when `disabled` or `loading`. |
| Hover / active | Only when enabled and not loading. Primary `regular` uses theme action tokens; secondary and ghost use `color-mix` overlays; active applies `scale(0.98)` on all variants. |
| Focus | `focus-visible` ring: 2px `--ds-color-border-action-focus`, 2px offset from `--ds-color-background-surface-page`. |

**Icon-only rules:**

- Square dimensions when: no label AND (`loading` OR exactly one of `iconLeft` / `iconRight`).
- If **both** icons without a label, the button keeps **labeled** horizontal padding (not square). Avoid this in product UI; use a label or a single icon.

**Figma:** When `Icon Only = true`, set **`Has Icon Left = true`** on the instance (with `Icon Only = true`). Icon-only variant frames keep `Icon Left` visible by default; nested uses (Toast close, Badge dismiss) must set both properties.

**Primary icon colour:** `primary` + `regular` icons use the same fill as the label — Theme `color/text/on-primary` (brand-aware). `primary` + `danger` uses `color/text/on-brand`. In code, icons inherit `--ds-color-foreground-action-on-primary` via `currentColor`.

**Nested usage:** Toast close and Badge dismiss use `variant="ghost"`, `size="sm"`, icon-only with `X`. See Related components.

## Composition patterns

Reusable layouts for screens and agents. Formal `pattern_id` blocks may be added later.

| Pattern | Layout | Buttons |
|---|---|---|
| `form-footer` | Horizontal row, end-aligned, gap 12px | `[ghost or secondary: Cancel]` then `[primary: Save]` |
| `destructive-confirm` | Modal footer | `[secondary: Cancel]` then `[primary, danger: Delete]` |
| `toolbar` | Horizontal row, gap 8px | `[ghost, icon-only: action]` repeated |
| `empty-state` | Centered column | `[primary: Main action]` then optional `[ghost: Secondary]` |
| `card-actions` | Row under content | At most one `primary`; additional actions `ghost` `sm` |

**Hierarchy check:** If two buttons sit side by side, at most one uses `variant="primary"`. If both could read as primary, downgrade the less important one to `secondary`.

### Example: destructive confirm

```jsx
import { Button } from '../../components/ui/button'

<footer style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary" intent="danger">Delete account</Button>
</footer>
```

## Do

- Use sentence case in source copy; the component renders labels **uppercase** via styles.
- Keep labels short: one to three words when possible.
- Use `iconLeft` for add or create and `iconRight` for continue or forward when it aids scanning.
- Set `loading` on the button that was clicked, not on unrelated buttons.
- Provide `aria-label` for every icon-only button (e.g. "Close dialog", "Add item").
- Pass `type="submit"` via `...props` when the button submits a form (default `type` is `button`).

## Don't

- Do not place two `primary` buttons in the same action group.
- Do not pair `primary` and `danger` on the same row without clear hierarchy; destructive commit should be obvious, usually with Cancel.
- Do not use `ghost` as the only CTA on an empty state or onboarding step.
- Do not use `disabled` to mean in-progress — use `loading`.
- Do not set both `iconLeft` and `iconRight` without a visible label.
- Do not rely on icon color alone for destructive meaning — use `intent="danger"`.
- Do not use Button for static status — use Badge or text.

## Content guidelines

- Labels are **verbs or verb phrases**: "Save", "Delete project", "Continue".
- Avoid vague labels: "OK", "Click here", or bare "Submit" (prefer "Send message", "Place order").
- Danger actions: label the outcome ("Delete account") when "Delete" alone is ambiguous.
- Icon-only: `aria-label` describes the action ("Close dialog"), not the icon ("X").
- Practical max length ~24 characters; the component uses `whitespace-nowrap` — do not use multi-line labels.

## Accessibility

- Renders a native `<button>` unless `asChild` merges into another focusable element.
- Focus ring on keyboard focus only (`focus-visible`).
- `loading` sets `aria-busy="true"`; consider a page-level live region for long operations.
- `disabled` removes the control from interaction; use `loading` for in-progress work.
- Icon-only: **required** `aria-label` or `aria-labelledby` from the consumer.
- Minimum height 32px (`sm`); prefer `md` (40px) for primary touch targets on mobile.

## Related components

- **Badge** — dismiss control is a nested `Button` (`ghost`, `sm`, icon-only).
- **Toast** — close control is a nested `Button` (`ghost`, `sm`, `X` icon).
- Text links — inline, low-emphasis navigation in copy (not Button).

## Spec reference

- Implementation: [src/components/ui/button/button.jsx](../../src/components/ui/button/button.jsx)
- Figma dimensions and tokens: [.cursor/skills/figma-sync/references/COMPONENT_SPECS.md](../../.cursor/skills/figma-sync/references/COMPONENT_SPECS.md) (§ Button)
- Integration rules: [FIGMA_RULES.md](../../FIGMA_RULES.md) (§ Button)
- Storybook: `Components/Button`
