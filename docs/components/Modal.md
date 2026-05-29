---
component: Modal
status: draft
source: src/components/ui/modal/modal.jsx
storybook: Components/Modal
figma_page: Modal
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [overlay, dialog, action]
documentation:
  custom: true
  sections:
    variants: false
    dangerVariants: false
    sizes: false
    states: false
    compositionPatterns: false
    colorTokens: true
    relatedComponents: true
  colorTokensDescription: "Overlay scrim, panel surface, border, and elevation tokens for the dialog shell."
  colorTokens:
    - token: --ds-shadow-lg
      role: Panel elevation
      sample: shadow
    - token: --ds-color-background-surface-overlay
      role: Panel background
      sample: background
    - token: --ds-color-border-surface-default
      role: Panel border
      sample: border
  related:
    - name: Button
      description: Footer actions and icon-only close control.
      previewType: toast-close
    - name: Input
      description: Fields inside modal body for short forms.
---

# Modal

## Overview

Modal is a controlled dialog overlay built on `@radix-ui/react-dialog`. The parent sets `open` and handles `onClose` when the user dismisses via the close button, overlay click, or Escape.

## When to use

- Confirm or complete a focused task that blocks the page (delete account, edit profile).
- Collect a short form without navigating away.
- Do **not** use for transient success or error feedback — use Toast.

## Variants

| Size | Width | Use for |
|---|---|---|
| `sm` | 320px (`calc(var(--ds-spacing-80) * 4)`) | Short confirmations, alerts |
| `md` | 480px (`calc(var(--ds-spacing-80) * 6)`) | Default dialogs and forms |
| `lg` | 560px (`calc(var(--ds-spacing-80) * 7)`) | Richer content or multi-field forms |

## Props and behavior

| Prop | Type | Default | Behavior |
|---|---|---|---|
| `open` | `boolean` | — | Required. Controls visibility |
| `onClose` | `() => void` | — | Called when dialog closes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Panel max width |
| `title` | `string` | — | Required. Rendered as accessible dialog title |
| `description` | `string` | — | Optional subtitle below title |
| `children` | `ReactNode` | — | Body content (forms, copy, footer actions) |
| `className` | `string` | — | Extra classes on the content panel |

## Do

- Keep one primary action in the footer when actions are present.
- Use a clear, specific `title` ("Delete project", not "Are you sure?").
- Place destructive confirm + Cancel in the footer with obvious hierarchy.

## Don't

- Do not stack multiple modals.
- Do not use Modal for non-blocking notifications — use Toast.
- Do not omit `title` — it is required for screen readers.

## Content guidelines

- Title: outcome or task name ("Edit profile", "Delete account").
- Description: one sentence of context when the title alone is ambiguous.
- Footer actions: verb labels consistent with Button guidelines ("Save", "Cancel", "Delete").

## Accessibility

- Radix manages focus trap, `aria-modal`, and Escape to dismiss.
- `title` maps to `Dialog.Title`; `description` to `Dialog.Description`.
- Close button uses `aria-label="Close dialog"` (icon-only Button).

## Related components

- **Button** — footer actions and ghost icon-only close in the header.
- **Input** — single-line fields in modal body for short forms.
