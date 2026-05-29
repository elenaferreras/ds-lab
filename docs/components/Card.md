---
component: Card
status: draft
source: src/components/ui/card/card.jsx
storybook: Components/Card
figma_page: Card
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [layout, surface]
documentation:
  custom: true
---

# Card

## Overview

Card is a compound surface: `Card`, `Card.Header`, `Card.Body`, and `Card.Footer` for grouped content with consistent border, radius, and shadow.

## When to use

- Group related content in dashboards, settings, and lists.
- Use `Card.Footer` for action rows (often with Button).

## Variants

Single surface style; hierarchy comes from header/body/footer structure.

## Props and behavior

| Part | Behavior |
|---|---|
| `Card` | Root container with page background, border, radius, shadow |
| `Card.Header` | Title area padding |
| `Card.Body` | Main content |
| `Card.Footer` | Actions or meta, top border optional via styles |

## Composition patterns

| Pattern | Layout |
|---|---|
| `settings-card` | Header title + body form + footer actions end-aligned |
| `metric-card` | Header label + body metric + optional footer link |

## Do

- One primary action in `Card.Footer` when actions are present.
- Keep header titles concise.

## Don't

- Do not nest Cards deeply without clear hierarchy.
- Do not put long forms without sectioning in a single Card.Body.

## Content guidelines

- Header: section name ("Notifications").
- Footer actions: verb labels consistent with Button guidelines.

## Accessibility

- Use heading elements inside `Card.Header` when the card is a named region.
- Footer actions remain native buttons or links.

## Related components

- **Button** — primary/secondary actions in footers.
