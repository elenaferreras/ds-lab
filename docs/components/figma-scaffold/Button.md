# Button — Figma Documentation scaffold (paste-ready)

Copy each block into the matching card on the Button Documentation frame. Source of truth: [../Button.md](../Button.md).

---

## Do

- Use sentence case in source copy; the component renders labels uppercase via styles.
- Keep labels short: one to three words when possible.
- Use iconLeft for add or create and iconRight for continue or forward when it aids scanning.
- Set loading on the button that was clicked, not on unrelated buttons.
- Provide aria-label for every icon-only button (e.g. "Close dialog", "Add item").
- Pass type="submit" via props when the button submits a form (default type is button).

---

## Don't

- Do not place two primary buttons in the same action group.
- Do not pair primary and danger on the same row without clear hierarchy; destructive commit should be obvious, usually with Cancel.
- Do not use ghost as the only CTA on an empty state or onboarding step.
- Do not use disabled to mean in-progress — use loading.
- Do not set both iconLeft and iconRight without a visible label.
- Do not rely on icon color alone for destructive meaning — use intent danger.
- Do not use Button for static status — use Badge or text.

---

## Content guidelines

- Labels are verbs or verb phrases: "Save", "Delete project", "Continue".
- Avoid vague labels: "OK", "Click here", or bare "Submit" (prefer "Send message", "Place order").
- Danger actions: label the outcome ("Delete account") when "Delete" alone is ambiguous.
- Icon-only: aria-label describes the action ("Close dialog"), not the icon ("X").
- Practical max length ~24 characters; the component uses whitespace-nowrap — do not use multi-line labels.

---

## Accessibility

- Renders a native button unless asChild merges into another focusable element.
- Focus ring on keyboard focus only (focus-visible).
- loading sets aria-busy="true"; consider a page-level live region for long operations.
- disabled removes the control from interaction; use loading for in-progress work.
- Icon-only: required aria-label or aria-labelledby from the consumer.
- Minimum height 32px (sm); prefer md (40px) for primary touch targets on mobile.
