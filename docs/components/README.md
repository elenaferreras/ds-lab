# Component guidelines

Human-authored usage documentation for each UI component. One file per component, aligned with Figma Documentation frames and intended for screen generation, Notion import, and design review.

## Index

| Component | Status | Source | Storybook |
|---|---|---|---|
| [Button](./Button.md) | draft | `src/components/ui/button/button.jsx` | `Components/Button` |

_Add a row when a new guideline file is added._

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
5. Composition patterns
6. Do
7. Don't
8. Content guidelines
9. Accessibility
10. Related components
11. Spec reference

### Frontmatter

```yaml
---
component: ComponentName
status: draft          # draft | review | stable
source: src/components/ui/<name>/<name>.jsx
storybook: Components/ComponentName
figma_page: ComponentName
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: []
---
```

### What goes here vs elsewhere

| Topic | Guidelines (`docs/components/`) | Machine specs |
|---|---|---|
| When to use, do/don't, copy, a11y | Yes | No |
| Dimensions, token bindings, Figma layers | Link only | `COMPONENT_SPECS.md` |
| Props tables for MCP/codegen | Link only | `FIGMA_RULES.md` |
| Visual states in canvas | Link only | `*.stories.jsx` |

Do not duplicate dimension or color matrices in guideline files.

## Adding a new component

1. Copy structure from [Button.md](./Button.md).
2. Derive **Props and behavior** from the component source and stories.
3. Add a row to the index table above.
4. Paste **Do**, **Don't**, **Content guidelines**, and **Accessibility** into the Figma Documentation scaffold cards (design-owned after first sync). Paste-ready copies: [figma-scaffold/](./figma-scaffold/).

## Figma scaffold exports

Short copies of the four human-authored sections for pasting into Figma Documentation cards. Regenerate when the parent guideline file changes.

| Component | Export |
|---|---|
| Button | [figma-scaffold/Button.md](./figma-scaffold/Button.md) |

`figma-sync` Workflow D will read `docs/components/<Name>.md` on first scaffold when automated (see `.cursor/skills/figma-sync/SKILL.md` § Workflow D4).
