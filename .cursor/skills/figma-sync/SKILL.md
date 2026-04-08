---
name: figma-sync
description: Sync design tokens and component changes from code to Figma using the Figma Desktop MCP. Use when a CSS token value changed, a new token was added, a component visual property changed, or a new component exists in src/components/ui/ but has no Figma page yet. Always reorders Figma pages alphabetically as a final step.
disable-model-invocation: false
---

# figma-sync

Keeps the DS-Lab Figma file in sync with the codebase. Handles three scenarios:

- **Workflow T** — Design tokens changed or were added in CSS — sync to Figma Variables, Effect Styles, and Text Styles
- **Workflow A** — A component already exists in Figma but its visual properties changed in code
- **Workflow B** — A component exists in `src/components/ui/` but has no corresponding Figma page yet

---

## Prerequisites

- Figma Desktop app must be running with the local MCP server active at `http://127.0.0.1:3845/mcp`
- Figma file: `https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components`
- Token source of truth: `src/tokens/themes/farco.css` (Farco theme) and `src/tokens/themes/white-label.css` (White Label theme)
- Component implementations: `src/components/ui/<name>/<name>.jsx`
- Node ID registry: `FIGMA_RULES.md` §8

Before doing anything else, load `references/COMPONENT_SPECS.md` — it contains the full token-to-Figma mapping table, the token sync reference, and per-component property guides needed for all workflows.

---

## Step 0 — Triage and execution order

Execute in strict order. Do not begin Phase 2 until Phase 1 is fully complete.

### Phase 1 — Tokens (must finish first)

1. Read `src/tokens/themes/farco.css` and `src/tokens/themes/white-label.css`. Compare every `--farco-*` token against the `DS-Lab Tokens` Variable collection in Figma, and against existing Effect Styles and Text Styles.
2. If any token is new or has a changed value → **run Workflow T to completion now**, before proceeding.
3. Once Workflow T is done (or if no token changes were found), move to Phase 2.

Tokens must be fully synced before components are touched — component layers will be bound to these Variables.

### Phase 2 — Components (only after Phase 1 is complete)

1. List all folder names inside `src/components/ui/`. Call the Figma MCP to enumerate all pages in DS-Lab-Components.
2. For each component folder, check whether a page with a matching name (PascalCase) exists in Figma:
   - Folder is `icons` → **Workflow I** (regardless of whether an `Icons` page exists — Workflow I handles both create and update)
   - Page exists → **Workflow A**
   - No page found → **Workflow B**
3. Report which components go to which workflow, then execute them.

### Phase 3 — Page order (runs after all component workflows are complete)

1. Retrieve the current page list and order from the Figma MCP
2. Build the set of **known component pages** — the PascalCase page names that correspond to folders in `src/components/ui/` plus `Icons`. These are the only pages this skill manages.
3. Identify any **unmanaged pages** — pages present in the file that are not in the known component set. Their positions must not change.
4. Sort the known component pages case-insensitively A→Z to produce the desired component order.
5. Re-sequence only the known component pages into sorted order while leaving all unmanaged pages in their current absolute positions. If the known pages are already in sorted order relative to each other → skip.
6. Apply the updated order using the Figma MCP's page reorder API.
7. Include the final page order in the run report, marking which pages were reordered and which were left untouched.

Run both phases even if the user specifies a single component or token — other out-of-sync items may exist.

---

## Workflow T — Sync design tokens to Figma

Refer to `references/COMPONENT_SPECS.md` §3 for the full token → Figma destination table, Variable types, mode matrix, shadow effect format, and text style matrix.

### T0. Locate or create the Variable collection

- Call the Figma MCP to check if a Variable collection named `DS-Lab Tokens` exists in the file
- If it does not exist → create it with two modes: `Farco` and `White Label`
- If it exists but is missing a mode → add the missing mode before proceeding

### T1. Parse both theme files

- Read `src/tokens/themes/farco.css` → extract all `--farco-*` name/value pairs
- Read `src/tokens/themes/white-label.css` → extract all `--farco-*` name/value pairs
- For each token, build a record: `{ name, farcoValue, whiteLabelValue, sameAcrossThemes: bool }`

### T2. Sync Variables (colors, spacing, radius, opacity, font numerics)

For each token that maps to a Figma Variable (see §3 of the reference for which tokens map to `COLOR` vs `FLOAT`):

- Derive the Figma Variable name using the `category/token-name` convention (e.g. `color/primary`, `spacing/4`, `radius/md`, `opacity/disabled`, `font/size-sm`)
- Check if the Variable already exists in `DS-Lab Tokens`:
  - **Exists, both mode values match** → skip
  - **Exists, one or both mode values differ** → update only the changed mode value(s)
  - **Does not exist** → create the Variable with the correct type, set values for both `Farco` and `White Label` modes
- For tokens that are identical across both themes, set the same value on both modes
- For tokens that differ (primarily `color/primary`, `color/primary-hover`, `color/primary-active`, `color/accent`, `color/border`), set the Farco value on the `Farco` mode and the White Label value on the `White Label` mode

### T3. Sync Effect Styles (shadows)

For each `--farco-shadow-*` token (see §3 of the reference for the parsed DROP_SHADOW format):

- Check if an Effect Style named `shadow/sm`, `shadow/md`, or `shadow/lg` already exists:
  - **Exists, values match** → skip
  - **Exists, values differ** → update the effect (offset, blur, spread, color, opacity)
  - **Does not exist** → create the Effect Style with a DROP_SHADOW effect
- Shadows are identical across both themes — no mode handling needed

### T4. Sync Text Styles (typography)

For each entry in the Text Style matrix in §3 of the reference:

- Check if a Text Style with that name already exists:
  - **Exists, properties match** → skip
  - **Exists, properties differ** → update font family, size, weight, line height, letter spacing
  - **Does not exist** → create the Text Style
- Typography tokens are identical across both themes — no mode handling needed

### T5. Update FIGMA_RULES.md

If any token's raw value changed in either theme CSS file, update the corresponding value in the token table in `FIGMA_RULES.md` §2.

### T6. Report

List every Variable, Effect Style, and Text Style that was created, updated, or skipped. Flag any MCP call that failed with the exact token name and error — do not skip failures silently.

---

## Workflow I — Sync icons to Figma

Run this when the folder being synced is `src/components/ui/icons/`. Icons are treated as a separate workflow from regular components — they have no token-driven variants or states, but they must be proper scalable Figma components so other components can nest them as instances.

Refer to `references/COMPONENT_SPECS.md` §5 for the SVG layer breakdown, constraint rules, and nested-instance requirements for each icon.

### I0. Triage the Icons page

- Call the Figma MCP to check if a page named `Icons` exists in DS-Lab-Components
- **Page exists** → enumerate all components currently on it. Compare against the `.jsx` files in `src/components/ui/icons/` (exclude `index.js` and any `*.stories.jsx` files). For each icon:
  - Present in Figma and unchanged → skip
  - Present in Figma but SVG paths differ from source → update the vector layers (step I2)
  - Missing from Figma → create it (step I2)
- **Page does not exist** → create it now, then create all 6 icon components from scratch (step I2)

### I1. Parse icon sources

For each `.jsx` file in `src/components/ui/icons/` (skip `index.js` and `*.stories.jsx`):
- Read the file and extract the SVG structure: viewBox, all child elements (`<path>`, `<circle>`, `<ellipse>`, `<g>`, `<clipPath>`), and their attributes (`d`, `stroke`, `fill`, `strokeWidth`, `strokeLinecap`, `strokeLinejoin`, `opacity`, `cx`, `cy`, `r`, `fillRule`, `clipRule`)
- Build a record: `{ name, viewBox, layers: [...] }`

### I2. Create or update icon components

For each icon that needs creating or updating:

1. **Root frame:** 14×14, named after the icon (e.g. `ArrowRightOutlined`). Set constraints to **Scale** on both horizontal and vertical axes.
2. **Vector layers:** translate each SVG child element to a Figma vector node using the layer names and attributes from `COMPONENT_SPECS.md` §5. Preserve `opacity`, `strokeWidth`, `strokeLinecap`, `strokeLinejoin`, and `fillRule` exactly.
3. **Color binding:** bind every `stroke` and `fill` color on every layer to the `DS-Lab Tokens` Variable **`color/neutral-100`**. Do not set raw hex values.
4. **Clip masks:** if the SVG uses a `<clipPath>` (e.g. `ArrowRightOutlined`), apply the clip mask rectangle to the root frame.
5. **Layout:** arrange all icon components in a single row on the `Icons` page, spaced 40px apart. Place a text label below each frame showing the component name.

### I3. Wire nested instances in consuming components

After all icon components exist on the `Icons` page, check each consuming component listed in `COMPONENT_SPECS.md` §5:

- Use `get_design_context` on the consuming component's page (node IDs from `FIGMA_RULES.md` §8)
- For each icon slot in the consuming component, check whether it is already a live instance of the icon component:
  - **Already a live instance pointing to the correct icon component** → proceed to color override check below
  - **Raw vector or wrong instance** → replace it with an instance of the correct icon component from the `Icons` page
- After confirming the slot is a live instance, **override the fill/stroke Variable on the instance's vector layers** to the Variable specified in the `Fill Variable override` column of the nested instances table in `COMPONENT_SPECS.md` §5. Use the Figma MCP's instance override API — do not detach the instance. If the override already matches the correct Variable, skip it.
- Apply this to all variant frames in the consuming component that contain that icon slot

### I4. Record node IDs

After creating or updating icon components:
1. Call `get_design_context` on each new or updated icon component to retrieve its node ID
2. Add or update rows in `FIGMA_RULES.md` §8:

```markdown
| Icons / ArrowRightOutlined | `<node-id>` |
| Icons / CheckCircleOutlined | `<node-id>` |
| Icons / CloseOutlined | `<node-id>` |
| Icons / PlusOutlined | `<node-id>` |
| Icons / WarningOutlined | `<node-id>` |
| Icons / XCircleOutlined | `<node-id>` |
```

### I5. Report

List every icon component created or updated, the node ID recorded, every consuming component where an icon slot was wired to a live instance, and every fill Variable override applied. Flag any MCP call that failed with the exact node ID and error — do not skip failures silently.

---

## Workflow A — Sync changes to an existing Figma component

Run this for each component that already has a Figma page.

### A1. Identify what changed

Read the component's JSX file. For each visual property used (fill, border, radius, spacing, typography, shadow, opacity), identify which `--farco-*` token drives it. Then check the current value of that token in `src/tokens/themes/farco.css` against what is currently applied in Figma.

Do not work with raw hex values — work with token names. The question to answer for each property is: "which `DS-Lab Tokens` Variable should this layer be bound to, and is it currently bound to the right one with the right value?"

Also audit the component's Figma component properties against the property table in `references/COMPONENT_SPECS.md` §4:
- Retrieve the current properties defined on the component set using the Figma MCP
- Compare them against the §4 table for this component
- Any property in §4 that is missing from the Figma component set must be added as part of this sync run — treat missing properties as changes to apply, using the same type, options, and default value specified in §4
- When adding a missing `BOOLEAN` property: after creating it, also apply the full boolean setup — set any required fills on the controlled layer first (e.g. image fills), then set the layer's visibility to match the boolean's default value, and wire the property to the layer. Do not create the property in isolation.
- When adding a missing `TEXT` property: check whether the binding target layer exists in the component. If it does not exist (as is the case for accessibility annotation layers such as `Alt`), first create the layer — a text node named after the prop in title case, `visibility: true` with **`opacity: 0`**, font `font/family-base`, size `font/size-sm`, color `color/neutral-60` — then bind the property to it. Use opacity 0, not `visibility: false` — Figma requires the layer to be in the visible layer tree to accept a component property binding.
- Any property that already exists with the correct type and default → skip it (do not recreate or overwrite)

### A2. Map tokens to Figma Variables

Using `references/COMPONENT_SPECS.md` §1 and the per-component layer guide:
- For each changed or unbound property, identify the corresponding `DS-Lab Tokens` Variable name (e.g. `color/primary`, `spacing/6`, `radius/full`)
- For `color-mix()` derived values (tinted backgrounds, hover states), no Variable exists — these are the only exception. Compute the resulting color from the token values and note in the report that it is a derived value with no Variable binding

### A3. Locate the Figma nodes

Using the component's known node ID from `FIGMA_RULES.md` §8:
- Call `get_design_context` to inspect the component's current layers
- Match each property to the specific layer(s) responsible for it using the per-component layer guide in `references/COMPONENT_SPECS.md` §2

### A4. Apply the updates

For each changed property:
- **Bind the layer to the corresponding `DS-Lab Tokens` Variable** — do not set raw hex, px, or numeric values directly. Use the Figma MCP's variable binding API to attach the layer property to the Variable by name
- Apply to all affected layers across variants, sizes, and states
- **Exception:** `color-mix()` derived fills have no Variable — apply the computed color as a raw fill value and flag it in the report as a derived value

### A5. Report

List every Figma layer updated, the Variable it was bound to, and every token that drove the change. Flag any MCP call that failed with the exact node, property, and error — do not skip failures silently. Flag all derived `color-mix()` values separately.

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
- Bind every fill, stroke, spacing, and radius value to the corresponding `DS-Lab Tokens` Variable — do not use raw values. Flag any `color-mix()` derived fills in the B6 report.
- Include all interactive states as separate frames or variants within the Figma component

Once all frames are scaffolded, define Figma component properties on the **component set** (the parent wrapper node, not individual frames) using the property table in `references/COMPONENT_SPECS.md` §4 for this component:

- For each `VARIANT` property: create the property with the listed options and default value; wire it to the corresponding variant dimension so Figma switches frames when the property changes
- For each `BOOLEAN` property: create the property with the listed default value. Then immediately set the controlled layer's visibility to match the default — if the default is `false`, set the layer to hidden right now; if `true`, set it to visible. Wire the property to the layer so toggling it in Figma updates the layer's visibility. If the visual rules for that boolean require a fill or other layer attribute to be pre-set on the hidden layer (e.g. an image fill that must exist before the layer is made visible), apply that fill first before hiding the layer.
- For each `TEXT` property: create the property with the listed default value; bind it to the corresponding text layer so editing the property value updates the layer content
- For each `INSTANCE_SWAP` property (required slot): create the property with the listed default instance; bind it to the corresponding slot layer
- For each optional slot (`BOOLEAN` + `INSTANCE_SWAP` pair): create both properties — the `BOOLEAN` (`Has <SlotName>`, default `false`) wired to the slot layer's visibility, and the `INSTANCE_SWAP` (`<SlotName>`, default: the instance listed in §4) wired to the slot layer's component reference. When the boolean is `false` the slot layer is hidden; when `true` it is visible and showing the default instance

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

- **Work with Variable bindings, not raw values** — component layer properties must be bound to `DS-Lab Tokens` Variables. The only exception is `color-mix()` derived fills, which must be flagged in the report.
- **Never modify nodes outside DS-Lab-Components** — do not touch any other Figma file.
- **Always execute in order: Phase 1 (tokens) → Phase 2 (components)** — never start a component workflow before Workflow T is complete.
- **For Workflow B**, new pages must use the same grid/frame conventions as existing component pages in the file. Call `get_design_context` on an existing component page first to observe the layout pattern.
- **On any MCP failure**, report the error with the exact node ID, variable name, or style name and the error message — do not silently skip or partially apply changes.
- **Update FIGMA_RULES.md** as part of every sync run — it is the source of truth for node IDs and token values, and must stay accurate after every run.
