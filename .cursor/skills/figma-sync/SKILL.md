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
- Phosphor Icons library file (read-only reference): `https://www.figma.com/design/DgCvciYAzYDi5jNMyt14t2/DS-Lab--Phosphor-Icons`
- Token source of truth: `src/tokens/brand/farco.css` (Farco brand primitives) and `src/tokens/brand/neutral.css` (White Label brand primitives), plus `src/tokens/theme/light.css` and `src/tokens/theme/dark.css` (semantic layer, shared across brands)
- Component implementations: `src/components/ui/<name>/<name>.jsx`
- Node ID registry: `FIGMA_RULES.md` §8
- Local font access: the Figma plugin runtime must be able to load `Overused Grotesk` (e.g. `figma.listAvailableFontsAsync()` should include it). If it is missing in the plugin runtime, any workflow that creates instances or updates text layers may fail with `unloaded font "Overused Grotesk Regular"`; fix local font access in Figma Desktop (or use a font the plugin runtime can load) before retrying.

Before doing anything else, load `references/COMPONENT_SPECS.md` — it contains the full token-to-Figma mapping table, the token sync reference, and per-component property guides needed for all workflows.

---

## Step 0 — Triage and execution order

Execute in strict order. Do not begin Phase 2 until Phase 1 is fully complete.

### Phase 1 — Tokens (must finish first)

1. Read `src/tokens/themes/farco.css` and `src/tokens/themes/white-label.css` (or the pre-split files in `src/tokens/temp/` if needed). Compare every token against the three Variable collections (`Global`, `Primitives`, `Semantic`) in Figma, and against existing Effect Styles and Text Styles.
2. If any token is new or has a changed value, **or** if a legacy `DS-Lab Tokens` collection still exists in the Figma file → **run Workflow T to completion now**, before proceeding.
3. Once Workflow T is done (or if no token changes were found and no legacy collection exists), move to Phase 2.

Tokens must be fully synced before components are touched — component layers will be bound to these Variables.

### Phase 2 — Components (only after Phase 1 is complete)

1. List all folder names inside `src/components/ui/`. Call the Figma MCP to enumerate all pages in DS-Lab-Components.
2. For each component folder, check whether a page with a matching name (PascalCase) exists in Figma:
   - Page exists → **Workflow A**, then immediately **Workflow D**
   - No page found → **Workflow B**, then immediately **Workflow D**
3. Report which components go to which workflow, then execute them.

### Phase 3 — Page order (runs after all component workflows are complete)

1. Retrieve the current page list and order from the Figma MCP
2. Build the set of **known component pages** — the PascalCase page names that correspond to folders in `src/components/ui/`. These are the only pages this skill manages. Any other pages in the Figma file (e.g. `Icons`) are unmanaged and must not be touched.
3. Identify any **unmanaged pages** — pages present in the file that are not in the known component set. Their positions must not change.
4. Sort the known component pages case-insensitively A→Z to produce the desired component order.
5. Re-sequence only the known component pages into sorted order while leaving all unmanaged pages in their current absolute positions. If the known pages are already in sorted order relative to each other → skip.
6. Apply the updated order using the Figma MCP's page reorder API.
7. Include the final page order in the run report, marking which pages were reordered and which were left untouched.

Run both phases even if the user specifies a single component or token — other out-of-sync items may exist.

---

## Workflow T — Sync design tokens to Figma

Refer to `references/COMPONENT_SPECS.md` §3 for the full collection/mode architecture, Variable type map, bridge variable table, Semantic color alias table, shadow effect format, and text style matrix.

### T0. Delete the legacy collection and clean up malformed variables

- Call the Figma MCP to check if a Variable collection named `DS-Lab Tokens` exists in the file
- If it exists → delete it entirely before proceeding. All existing Variable bindings on component layers will break; they will be rebound in Phase 2 (Workflows A/B/I).
- If it does not exist → proceed to the cleanup step below.

**Primitives collection cleanup — remove incorrectly named variables:**
- Call the Figma MCP to list all variables in the `Primitives` collection.
- The only valid top-level groups in `Primitives` are `light/` and `dark/`. Any variable whose name does not start with `light/` or `dark/` is malformed (e.g. flat names like `neutral/50`, or a `resolved/` group from a previous run). Delete every such variable before proceeding to T4.
- After cleanup, proceed to T1.

### T1. Create three Variable collections

Create the following collections. If a collection already exists with the correct name and modes → skip creation and proceed to populate it.

| Collection name | Modes |
|---|---|
| `Global` | `Default` (single mode) |
| `Primitives` | `Farco`, `White Label` |
| `Semantic` | `Light`, `Dark` |

### T2. Parse all four theme CSS files

- Read `src/tokens/brand/farco.css` → extract all `[data-brand="farco"]` primitive color scales (light + dark for primary, secondary, neutral) and brand-specific radius/font tokens
- Read `src/tokens/brand/neutral.css` → extract all `[data-brand="neutral"]` primitive color scales (light + dark) and brand-specific radius/font tokens
- Read `src/tokens/theme/light.css` → extract all `[data-mode="light"]` semantic token values (these are `var()` aliases — resolve them against the brand primitives for each brand mode)
- Read `src/tokens/theme/dark.css` → extract all `[data-mode="dark"]` semantic token overrides
- The token architecture uses four CSS files: brand primitives are split per brand (`farco.css`, `neutral.css`), semantic aliases are shared across brands (`light.css`, `dark.css`). There are no per-theme monolithic files.
- For each variable, determine which Figma collection it belongs to and its resolved value per relevant mode

### T3. Populate Global collection (single `Default` mode)

For each Global variable listed in §3 — sizes (`size/0`–`size/30`), font numerics (`font/size-*`, `font/weight-*`, `font/line-height-*`, `font/letter-spacing-*`), radii (`radius/*`), `opacity/disabled`, `color/black`, `color/white`:

- **Exists with correct value** → skip
- **Exists with wrong value** → update
- **Missing** → create with the correct type (`COLOR`, `FLOAT`, or `STRING`) and value

**Global color cleanup:** The Global collection must contain only `color/black` and `color/white`. If any `color/success-*`, `color/warning-*`, `color/danger-*`, `color/info-*`, or legacy flat `color/feedback/*` variables exist in Global from a previous sync run, delete them now. Feedback colors are raw hex values stored directly in the Semantic collection — they do not belong in Global.

### T4. Populate Primitives collection — palette and feedback groups

For each variable listed in §3 under the Primitives palette and feedback groups (`light/neutral/*`, `light/primary/*`, `light/secondary/*`, `light/feedback/*`, and the corresponding `dark/*` counterparts):

- **Variable naming:** names must use the `light/` or `dark/` prefix exactly as shown in §3 — e.g. `light/neutral/50`, `dark/feedback/error-500`. Do NOT create flat names without a mode prefix.
- **Do NOT create new groups or subgroups beyond this structure.** The only valid top-level groups in `Primitives` are `light/` and `dark/`. Any variable whose name does not start with one of these prefixes is wrong.
- **Before creating any variable**, call the Figma MCP to list all existing variables in the Primitives collection. Match by exact name. If a variable already exists → update its mode values. If it does not exist → create it. Never create a duplicate.
- For `light/*` variables: set the `Farco` mode value to the raw hex from `src/tokens/brand/farco.css` (light scale), and `White Label` mode to the raw hex from `src/tokens/brand/neutral.css` (light scale)
- For `dark/*` variables: set the `Farco` mode value to the raw hex from `src/tokens/brand/farco.css` (dark scale), and `White Label` mode to the raw hex from `src/tokens/brand/neutral.css` (dark scale)
- Apply the same skip/update/create logic as T3

### T5. Repair and populate Semantic collection — color group

**This step must always re-validate and repair every alias, even for variables that already exist.**

For each Semantic color Variable listed in §3:

- Type: `COLOR`
- All mode values are **aliases** — pointing to `Primitives/light/*`, `Primitives/dark/*`, `Global/color/white`, or `Global/color/black`. No raw hex values. No `Global/color/danger-*` or other feedback aliases — those now live in `Primitives/light/feedback/*` and `Primitives/dark/feedback/*`.
- There is no `resolved` bridge group — do not create one, and do not reference `Primitives/resolved/*` paths.
- **Any legacy `color/feedback/*` flat variables** (e.g. `color/feedback/success`, `color/feedback/danger-subtle`) that existed from a previous sync run must be deleted and replaced with the correct `color/background/feedback-*`, `color/foreground/feedback-*`, and `color/border/feedback-*` variables per §3.
- For every variable in §3, **always check the current alias target** for each mode:
  - **Alias target matches §3** → skip
  - **Alias target is wrong, points to a non-existent variable, or is a raw hex value instead of an alias** → update the alias to the correct target from §3. This includes any variable previously linked to a deleted `Global/color/danger-*`, `Global/color/success-*`, `Global/color/warning-*`, or `Global/color/info-*` variable — re-link it to the correct `Primitives/light/feedback/*` or `Primitives/dark/feedback/*` variable.
  - **Variable does not exist** → create it with the correct alias
- Do not skip existing variables without inspecting their current alias targets. A variable that exists with a broken alias is treated the same as a variable with a wrong value — it must be updated.

### T6. Populate Semantic collection — structural group

For each structural Variable listed in §3 (`spacing/*`, `radius/*`, `font/*`, `opacity/disabled`):

- Type: `FLOAT` (or `STRING` for letter-spacing)
- Both `Light` and `Dark` modes use the **identical alias** to the corresponding `Global` Variable
- Set both modes to alias the matching `Global` Variable
- Apply the same skip/update/create logic

### T7. Sync Effect Styles (shadows)

For each `shadow/sm`, `shadow/md`, `shadow/lg` entry listed in §3:

- **Exists, values match** → skip
- **Exists, values differ** → update the effect (offset, blur, spread, color, opacity)
- **Does not exist** → create the Effect Style with a DROP_SHADOW effect
- Shadows are theme-invariant — no mode handling needed

### T8. Sync Text Styles (typography)

For each entry in the §3 Text Style matrix:

- **Exists, all properties match** → skip
- **Exists, properties differ** → update font family, size, weight, line height, letter spacing
- **Does not exist** → create the Text Style
- Typography is theme-invariant — no mode handling needed

### T9. Update FIGMA_RULES.md

If any token's raw value changed in either theme CSS file, update the corresponding value in the token table in `FIGMA_RULES.md` §2.

### T10. Report

List every Variable created, updated, or skipped across all three collections (`Global`, `Primitives`, `Semantic`). List every Effect Style and Text Style created, updated, or skipped. Flag any MCP call that failed with the exact token name and error — do not skip failures silently.

---

## Workflow I — Wire Phosphor icon instances in consuming components

Run this as a **sub-procedure** called from within Workflow A or Workflow B whenever a component has icon slots that need wiring (Button, Badge, Toast). It is not a top-level workflow triggered by a folder scan — the `icons` folder no longer exists in `src/components/ui/`.

Refer to `references/COMPONENT_SPECS.md` §5 for the icon mapping table and nested-instance requirements.

### I0. Triage icon requirements

- Icons come from `@phosphor-icons/react` and must be represented in Figma as **instances of the Phosphor Icons library** (not DS-Lab-owned vector components).
- The `Icons` page in the Figma file is unmanaged — leave it untouched. Do not create, modify, or delete it.
- Confirm the library `DS Lab: Phosphor Icons` is subscribed to the DS-Lab-Components file:
  - If present → proceed to I1
  - If missing → add the library, then proceed

### I1. Build the required icon set from code

- Scan `src/components/ui/**/*.jsx` for `from '@phosphor-icons/react'` imports and usages.
- Build a unique list of required icons as records: `{ codeName, phosphorName, weightPolicy }`.
- Apply the default mapping rules unless explicitly overridden in `COMPONENT_SPECS.md`:
  - `XIcon` → `X` (UI chrome, default weight: `regular`)
  - `CheckCircleIcon` → `CheckCircle` (status, default weight: `fill`)
  - `WarningIcon` → `Warning` (status, default weight: `fill`)
  - `XCircleIcon` → `XCircle` (status, default weight: `fill`)
  - `PlusIcon` → `Plus` (UI chrome, default weight: `regular`)
  - `ArrowRightIcon` → `ArrowRight` (UI chrome, default weight: `regular`)

### I2. Resolve Phosphor component keys

- For each required icon record, resolve the corresponding Phosphor library asset:
  - Use `search_design_system` scoped to the `DS Lab: Phosphor Icons` library key.
  - Prefer `assetType: component_set` results.
  - Record `componentKey` for each icon.
- If any icon cannot be found by exact name, retry with common normalizations:
  - Strip a trailing `Icon` suffix
  - Try both `XIcon` and `X`
- Persist the resolved mapping in `FIGMA_RULES.md` (Workflow I4).

### I3. Wire nested instances in consuming components

After all required icon component keys are resolved, check each consuming component listed in `COMPONENT_SPECS.md`:

- Use `get_design_context` on the consuming component's page (node IDs from `FIGMA_RULES.md` §8)
- For each icon slot in the consuming component, check whether it is already a live instance of the icon component:
  - **Already a live instance pointing to the correct Phosphor library component (by component key)** → proceed to override check below
  - **Raw vector or wrong instance** → replace it with an instance of the correct Phosphor library component (import the component set by key if needed; do not recreate vectors)
- After confirming the slot is a live instance, apply instance-level Variable overrides as specified by `COMPONENT_SPECS.md` for that component/slot. Do not detach instances.
- Always enforce the Phosphor icon variant property `Format = Outline` on every nested icon instance. Never use `Stroke`.
- Enforce slot-to-icon rewiring (authoritative mapping):
  - **Button icon slots:** left slot must be Phosphor `Plus`, right slot must be Phosphor `ArrowRight`
  - **Badge dismiss:** must be Phosphor `X`
  - **Toast status icons:** `success` → Phosphor `CheckCircle`, `warning` → Phosphor `Warning`, `danger` → Phosphor `XCircle`
- Enforce Button icon constraints (must match code + library policy):
  - `Icon Left` / `Icon Right` must always be **instances from the Phosphor library** (never raw vectors, never local SVG components).
  - Phosphor instance properties must be enforced:
    - `Format = Outline` (never `Stroke`)
    - `Weight = Regular` for Button chrome icons (Plus, ArrowRight)
  - If a Button icon slot contains a non-Phosphor instance, replace it with the correct Phosphor instance and reapply the paint variable override for that variant/intent.
- Enforce Toast close-button structure (must match code):
  - The Toast component’s `CloseButton` must contain a **nested `Button` instance** configured as `variant=ghost`, `size=sm`, `Has Icon Left=true`, `Icon Left = X (Phosphor)`, and no visible label.
  - The close icon colour must inherit the Toast text colour (`color/text/primary` for all variants).
- If the plugin runtime cannot load the project font (commonly `Overused Grotesk`) and instance creation fails, do **not** attempt to script around it (it will keep failing). Apply the close-button structure **manually in Figma UI** (place a Button instance and set its properties), then re-run `figma-sync` to apply Variable bindings and Phosphor instance overrides.
- Apply this to all variant frames in the consuming component that contain that icon slot

---

## Workflow Y — Typography audit (global enforcement)

Run this once after all Phase 2 component workflows have completed.

### Y1. Allowed Text Styles

- Enumerate local Text Styles in the DS-Lab-Components file.
- The only allowed styles are the named `text/*` styles from `references/COMPONENT_SPECS.md` §3.

### Y2. Audit and enforce

- For every DS-Lab component set/component (including all variants), enumerate all descendant `TEXT` nodes.
- Every `TEXT` node must be bound to a named Text Style from the allowed set.
- If a `TEXT` node is unstyled, uses `Inter`, or has raw font properties not matching a named style → bind it to the closest matching named style by size + weight (see §3 matrix).
- Do not leave any `TEXT` node with `fontName.family` containing quotes or fallbacks (e.g. `"'Overused Grotesk', sans-serif"`). It must resolve to `Overused Grotesk`.

### Y3. Report

- List each text node updated (node ID, old style/font, new Text Style).
- List any node that could not be updated due to font loading errors, with the exact error.

### I4. Record icon references

After resolving component keys, update `FIGMA_RULES.md` §8 with a Phosphor icon reference table storing `{ libraryName, libraryKey, componentKey }` per icon name. The Phosphor icon component keys already recorded in §8 are authoritative — only update if a key has changed.

### I5. Report

List every icon resolved (name → componentKey), every consuming component where an icon slot was wired to a live instance, and every Variable override applied. Flag any MCP call that failed with the exact node ID/componentKey and error — do not skip failures silently.

---

## Workflow A — Sync changes to an existing Figma component

Run this for each component that already has a Figma page.

### A1. Identify what changed

Read the component's JSX file. For each visual property used (fill, border, radius, spacing, typography, shadow, opacity), identify which `--farco-*` token drives it. Then check the current value of that token in `src/tokens/themes/farco.css` against what is currently applied in Figma.

Do not work with raw hex values — work with token names. The question to answer for each property is: "which `Semantic` Variable should this layer be bound to, and is it currently bound to the right one with the right value?"

Also audit every **text layer** in the component for Text Style compliance:
- Every text layer must be bound to a named Text Style from the §3 matrix (e.g. `text/sm-regular`, `text/md-medium`). Raw font properties set directly on a layer — family, size, weight, line height, letter spacing — are a violation equivalent to an unbound Variable.
- A text layer using any font other than `Overused Grotesk` (e.g. `Inter`, `Roboto`, system fonts) is a sync violation regardless of other properties.
- Per-component Text Style assignments are listed in `references/COMPONENT_SPECS.md` §2. Any text layer not bound to its specified Text Style must be treated as a change to apply in A4.

Also audit the component's Figma component properties against the property table in `references/COMPONENT_SPECS.md` §4:
- Retrieve the current properties defined on the component set using the Figma MCP
- Compare them against the §4 table for this component
- Any property in §4 that is missing from the Figma component set must be added as part of this sync run — treat missing properties as changes to apply, using the same type, options, and default value specified in §4
- If a property exists but is **not referenced by any layer** (i.e. the component property appears in the right panel but does nothing), it is a sync violation. Wire it immediately:
  - For `BOOLEAN` properties: bind to the target layer’s `visible` reference (or to the appropriate variant dimension if the state is represented as variants).
  - For `INSTANCE_SWAP` properties: bind to the slot instance’s `mainComponent` reference.
  - For `TEXT` properties: bind to the target text layer’s `characters` reference.
- When adding a missing `BOOLEAN` property: after creating it, also apply the full boolean setup — set any required fills on the controlled layer first (e.g. image fills), then set the layer's visibility to match the boolean's default value, and wire the property to the layer. Do not create the property in isolation.
- When adding a missing `TEXT` property: check whether the binding target layer exists in the component. If it does not exist (as is the case for accessibility annotation layers such as `Alt`), first create the layer — a text node named after the prop in title case, `visibility: true` with **`opacity: 0`**, font `font/family-base`, size `font/size-sm`, color `color/text/secondary` — then bind the property to it. Use opacity 0, not `visibility: false` — Figma requires the layer to be in the visible layer tree to accept a component property binding.
- Any property that already exists with the correct type and default → skip it (do not recreate or overwrite)

### A2. Map tokens to Figma Variables

Using `references/COMPONENT_SPECS.md` §1 and the per-component layer guide:
- For each changed or unbound property, identify the corresponding `Semantic` Variable name (e.g. `color/action/primary`, `spacing/6`, `radius/full`)
- For `color-mix()` derived values (tinted backgrounds, hover states), no Variable exists — these are the only exception. Compute the resulting color from the token values and note in the report that it is a derived value with no Variable binding

### A3. Locate the Figma nodes

Using the component's known node ID from `FIGMA_RULES.md` §8:
- Call `get_design_context` to inspect the component's current layers
- Match each property to the specific layer(s) responsible for it using the per-component layer guide in `references/COMPONENT_SPECS.md` §2

### A4. Apply the updates

For each changed property:
- **Bind the layer to the corresponding `Semantic` Variable** — do not set raw hex, px, or numeric values directly. Use the Figma MCP's variable binding API to attach the layer property to the Variable by name
- **Bind every text layer to its named Text Style** — use the Figma MCP's text style binding API. Do not set font family, size, weight, line height, or letter spacing as raw values. Text Style assignments are listed in `references/COMPONENT_SPECS.md` §2. After binding, if the component applies `uppercase` or other text decorations, set those as layer-level overrides on top of the bound style (text decoration overrides are valid; font property overrides are not).
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
- Bind every fill, stroke, spacing, and radius value to the corresponding `Semantic` Variable — do not use raw values. Flag any `color-mix()` derived fills in the B6 report.
- **Bind every text layer to its named Text Style** from the §3 matrix — do not set raw font properties. Text Style assignments are specified in `references/COMPONENT_SPECS.md` §2. Apply uppercase and other text decorations as layer-level overrides after binding the style.
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

## Workflow D — Add or update Documentation frame on a component page

Run this after Workflow A or Workflow B completes for a component. Skip for the `Icons` page.

Refer to `references/COMPONENT_SPECS.md` §6 for the full layout spec, sub-section definitions, typography, placeholder strings, and auto-generated content format. The canonical reference mockup lives at Figma node `134:2082`.

The Documentation frame's children, in order, are: `summary` → the component set itself (relocated into the frame) → `Variants` → `Props` → `Do / Don't` → `Content guidelines` → `Accessibility`.

### D0. Locate the Documentation frame and detect legacy layout

- Call `get_design_context` on the component's page to find all top-level frames
- Check whether a **frame named `Documentation`** already exists on the page:
  - **Exists and already matches the current spec** (contains a `summary` child with a `text/display-lg` title + `Overview` subframe, and the component set is a child of this frame) → proceed to D1
  - **Exists but uses the legacy layout** (standalone `Overview` sub-section, no `summary` wrapper, or the component set still lives as a sibling above the frame rather than inside it) → treat as a **first-run migration**: delete the legacy `Documentation` frame entirely, then build a fresh one per D3/D4/D5. Preserve the component-set node so its node ID stays stable (do not delete `3:38`, `7:22`, `8:14`, `10:2`, `11:27`, `12:25`, etc.) — it will be reparented into the new frame in D5.
  - **Does not exist** → skip to D3 (create from scratch)

> `Documentation` is a regular autolayout frame, not a Figma Section. If a Figma Section named `Documentation` exists from a previous run, treat it as legacy and replace it with an autolayout frame per the migration path above.

### D1. Audit existing children

For a `Documentation` frame that already matches the current spec, enumerate its children to determine which are present. For each child found:

- **`summary`, `Variants`, or `Props`** → auto-generated. Proceed to D2 to check whether the content needs updating.
- **The component set** (e.g. `8:14` for Avatar, looked up via `FIGMA_RULES.md` §8) → verify it is a child of the Documentation frame at the correct autolayout index (immediately after `summary`). If it sits outside the frame or at the wrong index, queue a reparent operation for D5.
- **`Do / Don't`, `Content guidelines`, or `Accessibility`** → human-authored. Mark as "do not touch" for this run. Do not read, compare, rewrite, or reorder them under any circumstances.
- **Sub-section absent** → note it as missing; it will be created in D3/D4.

### D2. Update auto-generated children if content changed

For each auto-generated child that already exists (`summary`, `Variants`, `Props`):

- **`summary`:** compare the Title text layer's content against the component's PascalCase name. Compare the Overview body against the description in `COMPONENT_SPECS.md` §2. If both match → skip. If either differs → rewrite only the mismatched layer's content, keeping the Text Style binding intact.
- **`Variants`:** compare the Figma Table's Background rows against the §2 Variants table for this component. If rows and content match exactly → skip. If they differ → rewrite the Background rows to match §2 (preserve the Header row; only touch data rows).
- **`Props`:** compare the Figma Table's Background rows against the §4 property table for this component. If they match → skip. If they differ → rewrite the Background rows to match §4.

Only update the specific child that changed. Do not recreate the entire Documentation frame.

### D3. Create missing auto-generated children

For each auto-generated child that is missing from the Documentation frame (or when creating the frame from scratch). All layer fills, strokes, paddings, radii, and text colours must be bound to the matching `Semantic` Variable; all text layers must be bound to the named Text Style. No raw hex or pixel values.

1. **`summary`:** vertical autolayout frame, gap 48, width 1128. Children:
   - **Title** text layer — Text Style `text/display-lg`, colour `color/text/primary`, content = component PascalCase name.
   - **Overview** vertical autolayout frame — gap 16, width 480. Children: an `Overview` heading (Text Style `text/md-medium`, colour `color/text/primary`) and a body text layer (Text Style `text/md-regular`, colour `color/text/primary`, content = §2 description, width fill).
2. **`Variants`:** vertical autolayout frame, gap 16, width 1128. Children:
   - Heading text `Variants` — Text Style `text/xl-regular`, colour `color/text/primary`.
   - `Table` frame — vertical autolayout, gap 0, width fill. One `Header` row (fill `color/surface/subtle`, padding 32/16, gap 40; cells Text Style `text/md-medium`, colour `color/text/primary`; `Name` column fixed 320, `Purpose` column fill) followed by one `Background` row per variant (fill `color/surface/base`, border-bottom 1px `color/text/disabled`, corner radius 4, padding 32/16, gap 40; inner `div` wrappers; cells Text Style `text/md-regular`, colour `color/text/primary`). Populate rows from the §2 Variants table.
3. **`Props`:** same structure as `Variants` but with three columns. Header cells `Name` (fixed 320), `Type` (fill), `Default` (fill). Populate Background rows from the §4 property table — use `Figma property name` as Name, `Property type` as Type, `Default` as Default. Name the header text layers exactly `Name`, `Type`, `Default` (the reference mockup has them mis-named `Purpose`; do not replicate that).

Verify the `text/display-lg` Text Style exists in the file before creating `summary`. If missing, create it per the §3 Text Style matrix (Overused Grotesk, 700, 56px, line height 80px, letter spacing -2.24px) before the Title layer is bound to it.

### D4. Scaffold missing human-authored cards

For each human-authored card that does not yet exist (`Do / Don't`, `Content guidelines`, `Accessibility`). All three share the same card style — see `COMPONENT_SPECS.md` §6.

- Each card: vertical autolayout, gap 12, padding 24, fill `color/surface/subtle`, corner radius `radius/lg`. Label text layer uses Text Style `text/sm-medium` + colour `color/text/primary`; body uses `text/sm-regular` + colour `color/text/disabled`.
- **`Do / Don't`:** a horizontal autolayout wrapper (gap 24, width 1128) containing two fixed-width-552 cards named `Do` and `Don't`.
- **`Content guidelines`:** single card, width fill (1128).
- **`Accessibility`:** single card, width fill (1128).
- Use the exact placeholder strings from §6.
- **This is the only time the skill touches these children.** If they already exist — even with unchanged placeholder text — do not recreate, reorder, or modify them.

### D5. Assemble, reparent the component set, and position the Documentation frame

- If creating the Documentation frame from scratch (or after a legacy-layout migration in D0): create it as a **vertical autolayout frame** (`layout: VERTICAL`, `itemSpacing: 48`, `paddingTop/Right/Bottom/Left: 48`, content width 1128). Position it below the component grid on the page (120px gap). Do not create a Figma Section.
- **Append children in this exact order:** `summary` → the component set (see below) → `Variants` → `Props` → `Do / Don't` → `Content guidelines` → `Accessibility`.
- **Reparent the component set** (e.g. `8:14`, `3:38`) from its page-level position into the Documentation frame at autolayout index 1 (between `summary` and `Variants`). Use the Figma MCP's reparent/move API — do **not** clone the component set or create an instance of it. The node ID must stay stable so all existing instances elsewhere in the file continue to resolve.
- When adding only missing children to an existing compliant Documentation frame: append them at the correct autolayout index — autolayout handles vertical spacing automatically. Do not reorder children that already exist.

### D6. Record the Documentation frame node ID

After creating or first locating the Documentation frame:
1. Call `get_design_context` to retrieve its node ID if not already known.
2. Add or update a row in `FIGMA_RULES.md` §8:

```markdown
| <ComponentName> / Documentation | `<node-id>` |
```

If a legacy Documentation frame was deleted during migration in D0, remove its stale node ID from §8 before writing the new one.

### D7. Report

For each component Workflow D ran on, list:
- Whether a legacy-layout migration was performed (old frame deleted, new frame built) or the existing frame was updated in place.
- Which children were created, updated, or skipped — and why (content match, human-authored, newly created, or already compliant).
- Whether the component set was reparented into the Documentation frame (and from where).
- The node ID recorded for the Documentation frame.
- Any MCP call that failed with the exact node ID and error — do not skip failures silently.

---

- **Work with Variable bindings, not raw values** — component layer properties must be bound to `Semantic` Variables. The only exception is `color-mix()` derived fills, which must be flagged in the report.
- **Text layers must use named Text Styles, not raw font properties** — every text layer in every component must be bound to a Text Style from the §3 matrix (`text/xs-regular`, `text/sm-regular`, `text/sm-medium`, etc.). Setting font family, size, weight, line height, or letter spacing directly on a layer is prohibited. A layer using any font other than `Overused Grotesk` (e.g. `Inter`) is a sync violation and must be corrected. Per-component Text Style assignments are in `COMPONENT_SPECS.md` §2.
- **Never modify nodes outside DS-Lab-Components** — do not touch any other Figma file. The Phosphor Icons library file may be queried/read (via library search) to resolve icon component keys, but must never be modified.
- **Always execute in order: Phase 1 (tokens) → Phase 2 (components)** — never start a component workflow before Workflow T is complete.
- **For Workflow B**, new pages must use the same grid/frame conventions as existing component pages in the file. Call `get_design_context` on an existing component page first to observe the layout pattern.
- **On any MCP failure**, report the error with the exact node ID, variable name, or style name and the error message — do not silently skip or partially apply changes.
- **Update FIGMA_RULES.md** as part of every sync run — it is the source of truth for node IDs and token values, and must stay accurate after every run.
