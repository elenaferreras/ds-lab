---
component: DateRangePicker
status: draft
source: src/components/ui/date-range-picker/date-range-picker.jsx
storybook: Components/DateRangePicker
tags: [dashboard, filter, date]
documentation:
  demoComponent: DateRangePicker
  sections:
    variants: false
    dangerVariants: false
    sizes: false
    compositionPatterns: false
    relatedComponents: false
  statesDescription: Default and disabled date range picker examples.
  states:
    - props:
        label: Date
    - props:
        label: Date
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

# DateRangePicker

## Overview

DateRangePicker is a pill-shaped control for selecting a date range in dashboards and analytics views. It supports preset ranges and a custom from/to picker.

## When to use

- Use at the top of dashboards to filter data by time period.
- Pair with `FilterSelect` for combined date + dimension filtering.

## Props and behavior

| Prop | Behavior |
|---|---|
| `value` | Controlled range `{ from: Date, to: Date }` |
| `onChange` | Called when a preset or custom range is applied |
| `label` | Small label above the formatted range (default: "Date") |
| `presets` | Optional override of default preset list |
| `locale` | Locale for date formatting (default: browser locale) |
| `minDate` / `maxDate` | Bounds for custom range validation |
| `disabled` | Non-interactive trigger |

## Do

- Keep the parent state as the source of truth for the selected range.
- Use presets for common dashboard periods (today, last 7 days, etc.).

## Don't

- Do not mutate `value` inside the component — always use `onChange`.
- Do not use without a controlled `value` and `onChange`.

## Content guidelines

- Preset labels: short and scannable ("Last 7 days", "This month").
- Custom range section: clear "From" / "To" field labels.

## Accessibility

- Trigger exposes `aria-expanded`, `aria-haspopup`, and a descriptive `aria-label`.
- Popover closes on Escape; preset and Apply actions are keyboard reachable.
