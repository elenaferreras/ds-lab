# Modal — Figma Documentation scaffold (paste-ready)

Copy each block into the matching card on the Modal Documentation frame. Source of truth: [../Modal.md](../Modal.md).

---

## Do

- Keep the title outcome-based and specific ("Delete project", "Edit profile").
- Use a short description only when the title alone is ambiguous.
- Keep one primary action in the footer when actions are present.
- Use `secondary` for Cancel and `primary` for the commit action.
- Use the icon-only close button with an aria-label ("Close dialog") in consuming code.

---

## Don't

- Do not stack multiple modals.
- Do not use Modal for transient notifications — use Toast.
- Do not omit the title; dialogs require a clear accessible name.
- Do not overload a single modal with an entire multi-step flow.

---

## Content guidelines

- Title: task or outcome ("Invite member", "Delete account").
- Description: one sentence of context or consequence when needed.
- Actions: clear verb labels ("Save", "Cancel", "Delete"); avoid vague "OK".

---

## Accessibility

- Ensure the dialog has a title (maps to `Dialog.Title`).
- Use `Dialog.Description` when additional context is helpful.
- Close control should remain keyboard reachable and labeled (aria-label on icon-only button).
- Avoid moving focus outside the modal while it is open; rely on the dialog focus trap.

