---
component: Input
status: draft
source: src/components/ui/input/input.jsx
storybook: Components/Input
figma_page: Input
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [form, text]
documentation:
  demoComponent: Input
  sections:
    variants: false
    dangerVariants: false
    sizes: false
    compositionPatterns: false
    relatedComponents: false
  statesDescription: Default, validation error, and disabled field examples.
  states:
    - props:
        label: Email
        placeholder: you@example.com
    - props:
        label: Email
        placeholder: you@example.com
        error: Invalid email address
    - props:
        label: Email
        placeholder: you@example.com
        disabled: true
  colorTokens:
    - token: --ds-color-border-surface-default
      role: Default border
      sample: border
    - token: --ds-color-border-action-focus
      role: Focus ring
      sample: ring
    - token: --ds-color-background-feedback-error-emphasis
      role: Error text and border
      sample: text
---

# Input

## Overview

Input is a labeled text field with optional helper text and error messaging.

## When to use

- Use for single-line text entry in forms.
- Pair `label` with every field; use `error` for validation feedback.

## Variants

Single visual style; state is conveyed through border, helper, and error text.

## Props and behavior

| Prop | Behavior |
|---|---|
| `label` | Associated `<label>` via generated or passed `id` |
| `helperText` | Shown below when no `error` |
| `error` | Replaces helper; error styling on field |
| `disabled` | Non-interactive, reduced opacity |

## Do

- Always provide a visible label.
- Describe errors in plain language.

## Don't

- Do not use placeholder as the only label.
- Do not show helper and error at the same time.

## Content guidelines

- Labels: short nouns ("Email", "Password").
- Errors: what went wrong and how to fix it.

## Accessibility

- Label is programmatically linked via `htmlFor` / `id`.
- Error text is exposed below the field for screen readers.

## Related components

- **Button** — form actions alongside inputs.
