---
name: figma-sync
description: Sync code changes to Figma and create new Figma pages for components that only exist in code, using the Figma Desktop MCP. Use when a design token or component visual property has changed in code, or when a new component exists in src/components/ui/ but has no Figma page yet.
disable-model-invocation: false
---

# figma-sync

Keeps the DS-Lab Figma file in sync with the codebase. Handles two scenarios:

- **Workflow A** — A component already exists in Figma but its visual properties changed in code
- **Workflow B** — A component exists in `src/components/ui/` but has no corresponding Figma page yet

---

## Prerequisites

- Figma Desktop app must be running with the local MCP server active at `http://127.0.0.1:3845/mcp`
- Figma file: `https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components`
- Token source of truth: `src/tokens/themes/farco.css` (default theme)
- Component implementations: `src/components/ui/<name>/<name>.jsx`
- Node ID registry: `FIGMA_RULES.md` §8

Before doing anything else, load `references/COMPONENT_SPECS.md` — it contains the full token-to-Figma mapping table and per-component property guides needed for both workflows.

---

## Step 0 — Triage (always run first)

1. List all folder names inside `src/components/ui/` — this is the canonical component list
2. Call the Figma MCP to enumerate all pages in the DS-Lab-Components file
3. For each component folder, check whether a page with a matching name (PascalCase) exists in Figma:
   - Page exists → queue for **Workflow A**
   - No page found → queue for **Workflow B**
4. Report the triage result before proceeding: list which components go to which workflow

Run triage even if the user specifies a single component — other out-of-sync components may exist.

---

## Workflow A — Sync changes to an existing Figma component

Run this for each component that already has a Figma page.

### A1. Identify what changed

Read the component's JSX file and `src/tokens/themes/farco.css`. Identify every visual property that differs from what is currently in Figma:
- Fill colors (background, text, border)
- Border radius
- Spacing (height, padding, gap)
- Typography (font size, weight, line height, letter spacing)
- Shadow
- Opacity
- Any `color-mix()` derived values — resolve these to their approximate computed color

### A2. Map tokens to Figma values

Using the token-to-Figma mapping table in `references/COMPONENT_SPECS.md`:
- Translate each changed `--farco-*` CSS variable to its Figma style or variable name
- For `color-mix()` values, compute the resulting color and apply it as a direct fill — note in your report that it is a derived value

### A3. Locate the Figma nodes

Using the component's known node ID from `FIGMA_RULES.md` §8:
- Call `get_design_context` to inspect the component's current layers
- Match each changed property to the specific Figma layer(s) responsible for it
- Use the per-component Figma layer guide in `references/COMPONENT_SPECS.md` to navigate the layer structure

### A4. Apply the updates

For each changed property, call the appropriate Figma Desktop MCP tool to push the new value. Update all affected layers — variants, sizes, and states as needed.

### A5. Update FIGMA_RULES.md

If a token's raw value changed in `src/tokens/themes/farco.css` (e.g. `--farco-color-primary` went from `#000000` to a new hex), update that value in the token table in `FIGMA_RULES.md` §2.

### A6. Report

List every Figma node updated and every token that changed. Flag any MCP call that failed with the exact node, property, and error — do not skip failures silently.

---

## Workflow B — Create a new Figma page for a code-only component

Run this for each component that has no Figma page yet.

### B1. Read the component spec

Read `src/components/ui/<name>/<name>.jsx` thoroughly. Extract:
- All variants, sizes, and states (from the `const` arrays and logic at the top of the file)
- Every `--farco-*` token reference used
- Interactive states: hover, active, focus, disabled, loading (if applicable)
- Layout: flex direction, alignment, spacing tokens for height, padding, and gap
- Typography: font size, weight, letter spacing, line height tokens used
- Border radius token used
- Shadow token used (if any)
- Opacity token used (if any)

### B2. Resolve all token values

For every `--farco-*` token found in the JSX, look up its resolved value in `src/tokens/themes/farco.css`. For `color-mix()` expressions, compute the resulting color manually.

### B3. Create the Figma page

Use the Figma Desktop MCP to create a new page in DS-Lab-Components. Name it exactly after the component's PascalCase export name (e.g. `Button`, `Select`, `Checkbox`).

### B4. Scaffold component frames

On the new page, create one frame per variant × size × state combination. Follow these layout conventions consistent with existing components in the file:
- Arrange frames in a grid: variants along the X axis, sizes along the Y axis
- Label each frame clearly (e.g. `Button / Primary / MD / Default`)
- Apply all visual properties using the resolved token values from B2: fills, strokes, typography, spacing, border radii, shadows, opacity
- Include all interactive states as separate frames or variants within the Figma component

### B5. Record the new node ID

After the page is created:
1. Call `get_design_context` on the new page to retrieve its node ID
2. Append a new row to the node ID table in `FIGMA_RULES.md` §8:

```markdown
| <ComponentName> | `<node-id>` |
```

### B6. Report

List the new page URL, its node ID, and all frames created. Flag any MCP call that failed.

---

## Rules and constraints

- **Never hardcode hex values** — always trace through the `--farco-*` token system. The only exception is `color-mix()` derived values, which must be noted as computed in the report.
- **Never modify nodes outside DS-Lab-Components** — do not touch any other Figma file.
- **Always run Step 0 triage first** — even for a single targeted component.
- **For Workflow B**, new pages must use the same grid/frame conventions as existing component pages in the file. Call `get_design_context` on an existing component page first to observe the layout pattern.
- **On any MCP failure**, report the error with the exact node ID and property — do not silently skip or partially apply changes.
- **Update FIGMA_RULES.md** as part of the sync — it is the source of truth for node IDs and token values, and must stay accurate after every run.
