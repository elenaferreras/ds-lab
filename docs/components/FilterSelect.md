---
component: FilterSelect
status: draft
source: src/components/ui/filter-select/filter-select.jsx
storybook: Components/FilterSelect
tags: [dashboard, filter, select]
documentation:
  demoComponent: FilterSelect
  sections:
    variants: false
    dangerVariants: false
    sizes: false
    compositionPatterns: false
    relatedComponents: false
  statesDescription: Default and disabled filter select examples.
  states:
    - props:
        placeholder: Filter
    - props:
        placeholder: Filter
        disabled: true
  colorTokens:
    - token: --ds-color-background-surface-subtle
      role: Pill trigger background
      sample: background
    - token: --ds-color-background-surface-overlay
      role: Popover panel background
      sample: background
    - token: --ds-color-border-action-focus
      role: Focus ring
      sample: ring
---

# FilterSelect

## Overview

FilterSelect is a pill-shaped single-select control for choosing a filter dimension in dashboards (e.g. Funnel, Channel, Region).

## When to use

- Use alongside `DateRangePicker` for dashboard toolbar filtering.
- Use when the user picks one option from a short list of filter categories.

## Props and behavior

| Prop | Behavior |
|---|---|
| `value` | Currently selected option value |
| `onValueChange` | Called when the user picks an option |
| `options` | Array of `{ value, label }` |
| `icon` | Optional left icon (default: filter sliders) |
| `placeholder` | Shown when no option matches `value` |
| `disabled` | Non-interactive; also auto-disabled when `options` is empty |

## Do

- Provide stable `value` strings that match `options`.
- Keep option lists concise (under ~10 items).

## Don't

- Do not use for multi-select — this component is single-select only.
- Do not pass an empty `options` array expecting interaction.

## Content guidelines

- Option labels: nouns or short phrases ("Funnel", "Channel", "Region").
- Placeholder: describe the control ("Filter") when no selection exists.

## Accessibility

- Trigger exposes `aria-expanded`, `aria-haspopup`, and a descriptive `aria-label`.
- Options list supports Arrow Up/Down, Home, End, and Enter.
- Selected option is indicated visually and via `aria-selected`.
