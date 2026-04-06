import { createContext, useCallback, useContext, useState } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { cn } from '../../../lib/cn'
import {
  CheckCircleOutlined,
  WarningOutlined,
  XCircleOutlined,
  CloseOutlined,
} from '../../Icons'

// ─── Variant styles ──────────────────────────────────────────────────────────

const VARIANTS = /** @type {const} */ (['default', 'success', 'warning', 'danger'])

const VARIANT_CLASSES = {
  default: 'bg-[var(--farco-color-neutral-100)] text-[var(--farco-color-neutral-0)] border-[var(--farco-color-neutral-80)]',
  success: [
    'bg-[color-mix(in_oklab,var(--farco-color-success)_12%,var(--farco-color-bg-base))]',
    'text-[var(--farco-color-neutral-100)]',
    'border-[color-mix(in_oklab,var(--farco-color-success)_40%,transparent)]',
  ].join(' '),
  warning: [
    'bg-[color-mix(in_oklab,var(--farco-color-warning)_12%,var(--farco-color-bg-base))]',
    'text-[var(--farco-color-neutral-100)]',
    'border-[color-mix(in_oklab,var(--farco-color-warning)_40%,transparent)]',
  ].join(' '),
  danger: [
    'bg-[color-mix(in_oklab,var(--farco-color-danger)_10%,var(--farco-color-bg-base))]',
    'text-[var(--farco-color-neutral-100)]',
    'border-[color-mix(in_oklab,var(--farco-color-danger)_35%,transparent)]',
  ].join(' '),
}

const ICON_MAP = {
  default: null,
  success: <CheckCircleOutlined width="16" height="16" />,
  warning: <WarningOutlined width="16" height="16" />,
  danger: <XCircleOutlined width="16" height="16" />,
}

// ─── Close icon ──────────────────────────────────────────────────────────────

function CloseIcon() {
  return <CloseOutlined width="14" height="14" />
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

        {/* Viewport: fixed bottom-right */}
        <RadixToast.Viewport
          className={cn(
            'fixed bottom-0 right-0 z-50',
            'flex flex-col gap-[var(--farco-spacing-2)] p-[var(--farco-spacing-6)]',
            'w-full max-w-[420px]',
            'outline-none',
            '[--viewport-padding:var(--farco-spacing-6)]'
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
  const icon = ICON_MAP[resolvedVariant]
  const isPermanent = duration === Infinity

  return (
    <RadixToast.Root
      defaultOpen
      duration={isPermanent ? Infinity : duration}
      onOpenChange={onOpenChange}
      className={cn(
        // layout
        'relative flex items-start gap-[var(--farco-spacing-3)]',
        'w-full rounded-[var(--farco-radius-lg)] border px-[var(--farco-spacing-4)] py-[var(--farco-spacing-3)]',
        'shadow-[var(--farco-shadow-md)]',
        'font-[var(--farco-font-family-base)]',
        // open animation
        'data-[state=open]:[animation:toast-slide-in_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards]',
        // close animation
        'data-[state=closed]:[animation:toast-fade-out_0.2s_ease_forwards]',
        // swipe
        'data-[swipe=move]:[transform:translateX(var(--radix-toast-swipe-move-x))]',
        'data-[swipe=cancel]:[transform:translateX(0)] data-[swipe=cancel]:[transition:transform_200ms_ease]',
        'data-[swipe=end]:[animation:toast-swipe-out_0.2s_ease_forwards]',
        VARIANT_CLASSES[resolvedVariant]
      )}
    >
      {/* Icon */}
      {icon && (
        <span className="mt-[1px] shrink-0 opacity-80">{icon}</span>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <RadixToast.Title
          className="text-[var(--farco-font-size-sm)] font-medium leading-snug"
        >
          {title}
        </RadixToast.Title>
        {description && (
          <RadixToast.Description
            className="mt-[2px] text-[var(--farco-font-size-xs)] opacity-70 leading-snug"
          >
            {description}
          </RadixToast.Description>
        )}
      </div>

      {/* Close button */}
      <RadixToast.Close
        aria-label="Close notification"
        className={cn(
          'shrink-0 mt-[1px] p-[2px] rounded-[var(--farco-radius-sm)]',
          'opacity-50 hover:opacity-100 transition-opacity duration-100',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current'
        )}
      >
        <CloseIcon />
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
