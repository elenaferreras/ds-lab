---
component: Avatar
status: draft
source: src/components/ui/avatar/avatar.jsx
storybook: Components/Avatar
figma_page: Avatar
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: [identity, profile]
documentation:
  demoComponent: Avatar
  sections:
    dangerVariants: false
    compositionPatterns: false
    states: false
    relatedComponents: false
  variantDescription: Size scale for identity display in lists, headers, and comments.
  variants:
    - props: { size: sm, fallback: AB }
    - props: { size: md, fallback: CD }
    - props: { size: lg, fallback: EF }
    - props: { size: xl, fallback: GH }
  colorTokens:
    - token: --ds-color-background-surface-subtle
      role: Fallback background
      sample: background
---

# Avatar

## Overview

Avatar shows a user or entity image with initials fallback when the image fails or is missing.

## When to use

- Use in profiles, comment threads, member lists, and account menus.
- Provide `fallback` initials when `src` may be absent.

## Variants

| Size | Typical use |
|---|---|
| `sm` | Dense lists, inline meta |
| `md` | Default row avatar |
| `lg` | Profile headers |
| `xl` | Profile hero or settings |

## Props and behavior

| Prop | Behavior |
|---|---|
| `src` / `alt` | Image when available |
| `fallback` | Initials shown when image unavailable |
| `size` | Controls dimensions and type scale |

## Do

- Use meaningful `alt` when the image conveys identity.
- Keep fallback to one or two characters.

## Don't

- Do not use Avatar alone as a button — wrap in a focusable control if clickable.

## Content guidelines

- Fallback initials: first + last initial when possible.

## Accessibility

- Image `alt` should name the person or entity.
- Decorative avatars in repeating lists may use empty `alt` if name appears adjacent.

## Related components

- None documented yet.
