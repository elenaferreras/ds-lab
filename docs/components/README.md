# Component guidelines

Human-authored usage documentation for each UI component. One file per component, aligned with Figma Documentation frames and intended for screen generation, Notion import, and design review.

## Index

| Component | Status | Source | Storybook |
|---|---|---|---|
| [Avatar](./Avatar.md) | draft | `src/components/ui/avatar/avatar.jsx` | `Components/Avatar` → **Documentation** |
| [Badge](./Badge.md) | draft | `src/components/ui/badge/badge.jsx` | `Components/Badge` → **Documentation** |
| [Button](./Button.md) | draft | `src/components/ui/button/button.jsx` | `Components/Button` → **Documentation** |
| [Card](./Card.md) | draft | `src/components/ui/card/card.jsx` | `Components/Card` → **Documentation** |
| [Input](./Input.md) | draft | `src/components/ui/input/input.jsx` | `Components/Input` → **Documentation** |
| [Toast](./Toast.md) | draft | `src/components/ui/toast/toast.jsx` | `Components/Toast` → **Documentation** |

## File location

```
docs/components/<PascalCaseName>.md
```

Name matches the Figma page and React export (e.g. `Button`, `Badge`).

## Template

Each guideline file uses YAML frontmatter and fixed H2 sections in this order:

1. Overview
2. When to use
3. Variants
4. Props and behavior
5. Composition patterns (optional in prose; Button documents patterns here)
6. Do
7. Don't
8. Content guidelines
9. Accessibility
10. Related components

### Frontmatter (metadata)

```yaml
---
component: ComponentName
status: draft          # draft | review | stable
source: src/components/ui/<name>/<name>.jsx
storybook: Components/ComponentName
figma_page: ComponentName
figma_file: https://www.figma.com/design/...
tags: []
---
```

### Frontmatter (`documentation` — Storybook visuals)

Live Documentation story visuals are driven by the `documentation` block in the same file. No per-component `*.documentation.jsx` file is required.

```yaml
documentation:
  demoComponent: Button          # key in COMPONENT_REGISTRY
  custom: false                  # true → prose only unless customVisuals in story
  variantDescription: "..."      # optional DocSection lead
  variants:
    - label: Save
      props: { variant: primary }
  dangerVariants:                # Button only (omit or disable section)
    - label: Delete
      props: { variant: primary, intent: danger }
  sizes:
    - label: Small
      props: { size: sm }
  states:
    - label: Disabled
      props: { disabled: true }
  compositionPatterns:           # Button
    - id: form-footer
      buttons:
        - { label: Cancel, variant: secondary }
        - { label: Save, variant: primary }
  colorTokens:
    - token: --ds-color-...
      role: Description
      sample: background         # background | text | border | ring
  related:                       # Storybook-only previews
    - name: Badge
      description: "..."
      previewType: badge-dismiss   # RELATED_PREVIEW_REGISTRY key
  sections:                      # toggle middle sections (default all true)
    dangerVariants: false
    compositionPatterns: false
    relatedComponents: false
```

**Icon keys** (toolbar patterns): `pencil-simple`, `copy`, `trash`, `plus` — see `src/storybook/documentation/iconRegistry.js`.

**Related preview types:** `badge-dismiss`, `toast-close`, `text-link` — see `relatedPreviewRegistry.jsx`.

Compound or provider components (`Toast`, `Card`) may set `custom: true` and pass `customVisuals` from the story file (see `toast.stories.jsx`, `card.stories.jsx`).

### What goes here vs elsewhere

| Topic | Guidelines (`docs/components/`) | Machine specs |
|---|---|---|
| When to use, do/don't, copy, a11y | Yes | No |
| Dimensions, token bindings, Figma layers | Link only | `COMPONENT_SPECS.md` |
| Props tables for MCP/codegen | Link only | `FIGMA_RULES.md` |
| Live doc visuals | `documentation` frontmatter | `createDocumentationStory()` |

Do not duplicate dimension or color matrices in guideline prose when they are already in frontmatter `colorTokens`.

## Storybook

Each component adds one line to its stories file:

```js
import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import buttonGuidelines from '../../../../docs/components/Button.md?raw'

export const Documentation = createDocumentationStory({ guidelines: buttonGuidelines })
```

Layout (`src/storybook/ComponentDocumentation.jsx`):

1. **Top** — Overview, When to use, Variants, Props and behavior  
2. **Middle** — Live visuals from `documentation` frontmatter (or `customVisuals`)  
3. **Bottom** — Do, Don't, Content guidelines, Accessibility  
4. **Related** — Preview cards when `documentation.related` is set  

Wrap Figma-only notes in `<!-- storybook-hide -->` … `<!-- /storybook-hide -->` so they stay in the file for MCP/Figma but never render in Storybook.

## Scaffold CLI

```bash
node scripts/scaffold-component-docs.js Badge
```

Creates `docs/components/Badge.md` and appends a Documentation story import when the stories file exists.

## Adding a new component

1. Run the scaffold script or copy structure from [Button.md](./Button.md).
2. Fill prose sections and `documentation` frontmatter.
3. Add a row to the index table above.
4. Paste **Do**, **Don't**, **Content guidelines**, and **Accessibility** into Figma Documentation scaffold cards. Paste-ready copies: [figma-scaffold/](./figma-scaffold/).

## Figma scaffold exports

Short copies of the four human-authored sections for pasting into Figma Documentation cards.

| Component | Export |
|---|---|
| Button | [figma-scaffold/Button.md](./figma-scaffold/Button.md) |

`figma-sync` Workflow D reads `docs/components/<Name>.md` on first scaffold (see `.cursor/skills/figma-sync/SKILL.md` § Workflow D4).
