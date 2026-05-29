---
component: Toast
status: draft
source: src/components/ui/toast/toast.jsx
storybook: Components/Toast
figma_page: Toast
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [feedback, notification]
documentation:
  custom: true
  sections:
    variants: false
    dangerVariants: false
    sizes: false
    states: false
    compositionPatterns: false
    colorTokens: false
  related:
    - name: Button
      description: Close control is a nested Button (ghost, sm, icon-only).
      previewType: toast-close
---

# Toast

## Overview

Toast shows brief, non-blocking feedback after an action. Wrap the app with `ToastProvider` and trigger via `useToast()`.

## When to use

- Confirm success, warn, or report failure after an action.
- Do **not** use for critical errors that block work — use inline error or dialog.

## Variants

| Variant | Purpose |
|---|---|
| `default` | Neutral confirmation |
| `success` | Completed action |
| `warning` | Caution |
| `danger` | Failure or destructive outcome |

## Props and behavior

| API | Behavior |
|---|---|
| `toast({ title, description?, variant?, duration? })` | Queues a toast; auto-dismiss by `duration` (default 4000ms) |
| Close control | Ghost `sm` icon-only Button |

## Do

- Keep title under ~6 words; description optional and short.
- One toast per distinct outcome — avoid stacking duplicates.

## Don't

- Do not use Toast for form validation — use Input `error`.
- Do not require Toast for critical safety messaging.

## Content guidelines

- Title: outcome ("Changes saved").
- Description: optional detail one line max.

## Accessibility

- Toasts use `role="status"`; ensure page does not rely on toast alone for critical info.
- Close button needs `aria-label` ("Close notification").

## Related components

- **Button** — close control on each toast.
