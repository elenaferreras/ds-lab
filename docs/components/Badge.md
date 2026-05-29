---
component: Badge
status: draft
source: src/components/ui/badge/badge.jsx
storybook: Components/Badge
figma_page: Badge
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [status, feedback]
documentation:
  demoComponent: Badge
  sections:
    dangerVariants: false
    compositionPatterns: false
    relatedComponents: false
  variantDescription: Semantic status colors for labels, counts, and filters.
  variants:
    - label: Default
      props: { variant: default }
    - label: Success
      props: { variant: success }
    - label: Warning
      props: { variant: warning }
    - label: Danger
      props: { variant: danger }
    - label: Accent
      props: { variant: accent }
  sizesDescription: Default md. Use sm in dense tables and toolbars.
  sizes:
    - label: Small
      props: { size: sm }
    - label: Medium
      props: { size: md }
  states:
    - label: Dismissible
      props: { variant: default }
      dismissible: true
  colorTokens:
    - token: --ds-color-background-surface-subtle
      role: Default fill
      sample: background
    - token: --ds-color-foreground-text-secondary
      role: Default text
      sample: text
    - token: --ds-color-background-feedback-success-emphasis
      role: Success mix source
      sample: background
    - token: --ds-color-background-feedback-warning-emphasis
      role: Warning mix source
      sample: background
    - token: --ds-color-background-feedback-error-emphasis
      role: Danger text and mix source
      sample: background
---

# Badge

## Overview

Badge displays a compact status label. Variants communicate semantic meaning (`default`, `success`, `warning`, `danger`, `accent`). Optional dismiss control nests a ghost icon-only Button.

## When to use

- Use for **status**, **category**, or **count** labels that are not interactive actions.
- Use `onDismiss` when the user can remove a filter or tag.
- Do **not** use Badge as a primary call to action — use Button.

## Variants

| Variant | Purpose |
|---|---|
| `default` | Neutral metadata |
| `success` | Positive or completed state |
| `warning` | Caution or attention needed |
| `danger` | Error or destructive context |
| `accent` | Brand-accent emphasis |

## Props and behavior

| Prop | Behavior |
|---|---|
| `children` | Label text |
| `variant` | Invalid values fall back to `default` |
| `size` | `sm` or `md` |
| `onDismiss` | Renders dismiss Button (`ghost`, `sm`, icon-only) |

## Do

- Keep labels short (one or two words).
- Use dismiss only when removal is a real action.

## Don't

- Do not use Badge for navigation or form submission.
- Do not stack many dismissible badges without clear purpose.

## Content guidelines

- Prefer nouns or short phrases: "Active", "Pending", "3 items".
- Dismiss `aria-label` is provided by the nested Button ("Dismiss").

## Accessibility

- Badge is static text unless dismissible; dismiss control must be keyboard reachable.
- Do not rely on color alone — label text carries meaning.

## Related components

- **Button** — nested for dismiss control.
