import { cn } from '../../../lib/cn'
import { CloseOutlined } from '../icons'

const VARIANTS = /** @type {const} */ (['default', 'success', 'warning', 'danger', 'accent'])
const SIZES = /** @type {const} */ (['sm', 'md'])

const VARIANT_CLASSES = {
  default: 'bg-[var(--farco-color-surface-subtle)] text-[var(--farco-color-text-secondary)] border-[var(--farco-color-border-subtle)]',
  success: [
    'bg-[color-mix(in_oklab,var(--farco-color-feedback-success)_12%,transparent)]',
    'text-[color-mix(in_oklab,var(--farco-color-feedback-success)_80%,var(--farco-color-text-primary))]',
    'border-[color-mix(in_oklab,var(--farco-color-feedback-success)_30%,transparent)]',
  ].join(' '),
  warning: [
    'bg-[color-mix(in_oklab,var(--farco-color-feedback-warning)_12%,transparent)]',
    'text-[color-mix(in_oklab,var(--farco-color-feedback-warning)_80%,var(--farco-color-text-primary))]',
    'border-[color-mix(in_oklab,var(--farco-color-feedback-warning)_30%,transparent)]',
  ].join(' '),
  danger: [
    'bg-[color-mix(in_oklab,var(--farco-color-feedback-danger)_10%,transparent)]',
    'text-[var(--farco-color-feedback-danger)]',
    'border-[color-mix(in_oklab,var(--farco-color-feedback-danger)_30%,transparent)]',
  ].join(' '),
  accent: [
    'bg-[color-mix(in_oklab,var(--farco-color-action-secondary)_40%,transparent)]',
    'text-[var(--farco-color-text-primary)]',
    'border-[color-mix(in_oklab,var(--farco-color-action-secondary)_60%,transparent)]',
  ].join(' '),
}

const SIZE_CLASSES = {
  sm: 'h-[var(--farco-spacing-5)] px-[var(--farco-spacing-2)] text-[var(--farco-font-size-xs)] gap-[6px]',
  md: 'h-[var(--farco-spacing-6)] px-[var(--farco-spacing-3)] text-[var(--farco-font-size-sm)] gap-[var(--farco-spacing-1)]',
}

/**
 * @param {{
 *   children?: React.ReactNode
 *   variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent'
 *   size?: 'sm' | 'md'
 *   onDismiss?: () => void
 *   className?: string
 * }} props
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  onDismiss,
  className,
}) {
  const resolvedVariant = VARIANTS.includes(variant) ? variant : 'default'
  const resolvedSize = SIZES.includes(size) ? size : 'md'

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full border font-[var(--farco-font-family-base)] font-medium leading-none select-none whitespace-nowrap',
        'tracking-[var(--farco-letter-spacing-base)] uppercase',
        SIZE_CLASSES[resolvedSize],
        VARIANT_CLASSES[resolvedVariant],
        className
      )}
    >
      {children}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            'inline-flex items-center justify-center rounded-full transition-opacity duration-100',
            'hover:opacity-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current',
            'ml-[2px] -mr-[2px]',
            resolvedSize === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'
          )}
        >
          <CloseOutlined
            width={resolvedSize === 'sm' ? 10 : 12}
            height={resolvedSize === 'sm' ? 10 : 12}
          />
        </button>
      )}
    </span>
  )
}

export default Badge
