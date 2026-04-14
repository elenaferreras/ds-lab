# Storybook Story Guidelines

Reference this file whenever creating or updating a component story in this repo.

---

## 1. File & Folder Structure

Every UI component lives in its own folder. The story file is always colocated with the component.

```
src/components/ui/<name>/
├── <name>.jsx            # Component implementation
├── <name>.stories.jsx    # Stories
└── index.js              # Named re-export
```

- Folder and file names are **lowercase** (e.g. `button/`, `button.stories.jsx`)
- The `index.js` re-exports the named component: `export { Button } from './button'`
- The story title follows the pattern `'Components/<PascalCaseName>'`

---

## 2. Story Anatomy

Every story file must have a **default export** (the meta object) and one or more **named exports** (the stories).

### Default export (meta)

```jsx
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual hierarchy of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}
```

**Rules:**
- `title` — always `'Components/<Name>'`
- `component` — always set to the primary component being documented
- `tags: ['autodocs']` — always present; this generates the Docs page automatically
- `argTypes` — define a `control` type and `description` for **every prop** the component accepts

### Control types by prop kind

| Prop type | `control` value |
|---|---|
| String enum (variant, size, intent) | `'select'` |
| Boolean | `'boolean'` |
| Free text | `'text'` |
| Number | `'number'` |

---

## 3. Playground Story

`Playground` must always be the **first named export**. It is the interactive sandbox for the component.

```jsx
export const Playground = {
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}
```

**Rules:**
- Use `args` — never `render` — so Storybook Controls work out of the box
- Provide a sensible default value for every key prop
- No layout wrappers (`div`, `flex`, etc.) — the Playground should render the bare component

---

## 4. Required Story Set

The minimum set of stories depends on what props the component exposes.

| Component has... | Required story |
|---|---|
| Always | `Playground` |
| `variant` prop | `Variants` |
| `size` prop | `Sizes` |
| `disabled` and/or `loading` | `States` |
| `intent="danger"` or similar semantic split | A dedicated intent story (e.g. `Danger`) |
| Icon slots | `WithIcons` |

Additional stories are encouraged when they communicate a meaningful usage pattern (e.g. `RichContent`, `IconOnly`). Each story should demonstrate one clear idea.

### Story layout pattern

When a story shows multiple variants side by side, wrap them in a flex row:

```jsx
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}
```

---

## 5. Compound Component Stories

For components that use a compound pattern (e.g. `Card` with `Card.Header`, `Card.Body`, `Card.Footer`):

- Always use `render:` — `args` do not work for compound components
- Wrap the component in a `div` with a fixed width so it doesn't stretch full-width in the canvas

```jsx
export const Playground = {
  render: () => (
    <div style={{ width: 360 }}>
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Body>Body content</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </div>
  ),
}
```

- Import sibling components (e.g. `Button`, `Badge`) directly from their folder when building realistic story content

---

## 6. Display Names

Story export names are PascalCase and map to the sidebar label automatically.

Use the `name` property when the export name would be unclear or when a human-readable label with special characters is needed:

```jsx
// Export name cannot contain spaces or dashes — use name: for the label
export const SizesSecondary = {
  name: 'Sizes – Secondary',
  render: () => (...),
}

export const WithFallback = {
  name: 'Fallback (no image)',
  render: () => (...),
}
```

Only add `name` when the auto-generated label from the export name is genuinely worse. Do not use `name` just for casing.

---

## 7. What NOT to Do

**Do not use TypeScript.** The project is plain JavaScript (`.jsx`). No type annotations in story files.

```jsx
// Wrong
const meta: Meta<typeof Button> = { ... }

// Correct
export default { title: 'Components/Button', component: Button, ... }
```

**Do not hardcode pixel values for spacing or color in inline styles.** Always reference `--farco-*` design tokens.

```jsx
// Wrong
<p style={{ fontSize: '14px', color: '#888' }}>Text</p>

// Correct
<p style={{ fontSize: 'var(--farco-font-size-sm)', color: 'var(--farco-color-neutral-50)' }}>Text</p>
```

**Do not omit `argTypes` descriptions.** Every prop listed in `argTypes` must have a `description` string.

**Do not omit `tags: ['autodocs']`.** Without it, no Docs page is generated for the component.

**Do not use Tailwind utility classes inside story `render` functions.** Tailwind is used inside component implementations only. Story layout wrappers use inline styles.

```jsx
// Wrong
<div className="flex gap-3 items-center">...</div>

// Correct
<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>...</div>
```

**Do not make `Playground` use `render`.** If the component supports args-driven rendering, `Playground` must use `args` so Controls are interactive.
