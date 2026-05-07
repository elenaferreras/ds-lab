import { createContext, useCallback, useContext, useState } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { cn } from '../../../lib/cn'
import { Button } from '../button'

// ─── Variant styles ──────────────────────────────────────────────────────────

const VARIANTS = /** @type {const} */ (['default', 'success', 'warning', 'danger'])

const VARIANT_CLASSES = {
  default: 'bg-[var(--ds-color-background-surface-overlay)] text-[var(--ds-color-foreground-text-inverse)] border-[var(--ds-color-border-surface-strong)]',
  success: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-success-emphasis)_12%,var(--ds-color-background-surface-page))]',
    'text-[var(--ds-color-foreground-text-primary)]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-success-emphasis)_40%,transparent)]',
  ].join(' '),
  warning: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-warning-emphasis)_12%,var(--ds-color-background-surface-page))]',
    'text-[var(--ds-color-foreground-text-primary)]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-warning-emphasis)_40%,transparent)]',
  ].join(' '),
  danger: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_10%,var(--ds-color-background-surface-page))]',
    'text-[var(--ds-color-foreground-text-primary)]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_35%,transparent)]',
  ].join(' '),
}

const ICON_MAP = {
  default: null,
  success: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm3.28 5.28a.75.75 0 0 0-1.06-1.06L7 8.44 5.78 7.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.75-3.75Z" clipRule="evenodd" />
    </svg>
  ),
  warning: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575L6.457 1.047ZM8 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 5Zm1 7.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
    </svg>
  ),
  danger: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" clipRule="evenodd" />
    </svg>
  ),
}

// ─── Context ─────────────────────────────────────────────────────────────────

/** @typedef {{ id: string, title: string, description?: string, variant?: string, duration?: number }} ToastItem */

const ToastContext = createContext(null)

// ─── ToastProvider ───────────────────────────────────────────────────────────

/**
 * Wrap your app (or Storybook decorator) with this to enable toasts.
 * @param {{ children: React.ReactNode }} props
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState(/** @type {ToastItem[]} */ ([]))

  const toast = useCallback(
    /** @param {{ title: string, description?: string, variant?: string, duration?: number }} options */
    ({ title, description, variant = 'default', duration = 4000 }) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`
      setToasts((prev) => [...prev, { id, title, description, variant, duration }])
    },
    []
  )

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}

        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} onOpenChange={(open) => { if (!open) dismiss(t.id) }} />
        ))}

        <RadixToast.Viewport
          className={cn(
            'fixed bottom-0 right-0 z-50',
            'flex flex-col gap-[var(--ds-spacing-8)] p-[var(--ds-spacing-24)]',
            'w-full max-w-[420px]',
            'outline-none',
            '[--viewport-padding:var(--ds-spacing-24)]'
          )}
        />
      </RadixToast.Provider>
    </ToastContext.Provider>
  )
}

// ─── ToastItem (internal) ────────────────────────────────────────────────────

/**
 * @param {ToastItem & { onOpenChange: (open: boolean) => void }} props
 */
function ToastItem({ id, title, description, variant = 'default', duration = 4000, onOpenChange }) {
  const resolvedVariant = VARIANTS.includes(variant) ? variant : 'default'
  const IconComponent = ICON_MAP[resolvedVariant]
  const isPermanent = duration === Infinity

  return (
    <RadixToast.Root
      defaultOpen
      duration={isPermanent ? Infinity : duration}
      onOpenChange={onOpenChange}
      className={cn(
        'relative flex items-start gap-[var(--ds-spacing-12)]',
        'w-full rounded-[var(--ds-radius-lg)] border px-[var(--ds-spacing-16)] py-[var(--ds-spacing-12)]',
        'shadow-md',
        'font-[var(--ds-font-family-body)]',
        'data-[state=open]:[animation:toast-slide-in_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards]',
        'data-[state=closed]:[animation:toast-fade-out_0.2s_ease_forwards]',
        'data-[swipe=move]:[transform:translateX(var(--radix-toast-swipe-move-x))]',
        'data-[swipe=cancel]:[transform:translateX(0)] data-[swipe=cancel]:[transition:transform_200ms_ease]',
        'data-[swipe=end]:[animation:toast-swipe-out_0.2s_ease_forwards]',
        VARIANT_CLASSES[resolvedVariant]
      )}
    >
      {IconComponent && (
        <span className="mt-[1px] shrink-0 text-inherit">
          <IconComponent />
        </span>
      )}

      <div className="flex-1 min-w-0">
        <RadixToast.Title
          className="text-[var(--ds-font-size-sm)] font-medium leading-snug"
        >
          {title}
        </RadixToast.Title>
        {description && (
          <RadixToast.Description
            className="mt-[2px] text-[var(--ds-font-size-xs)] opacity-70 leading-snug"
          >
            {description}
          </RadixToast.Description>
        )}
      </div>

      <RadixToast.Close asChild aria-label="Close notification">
        <Button
          variant="ghost"
          size="sm"
          iconLeft={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          }
          className="shrink-0"
        >
          {null}
        </Button>
      </RadixToast.Close>
    </RadixToast.Root>
  )
}

// ─── useToast ────────────────────────────────────────────────────────────────

/**
 * Returns `{ toast }` — call `toast({ title, description, variant, duration })` to fire a toast.
 * Must be used inside `<ToastProvider>`.
 */
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>')
  return ctx
}
