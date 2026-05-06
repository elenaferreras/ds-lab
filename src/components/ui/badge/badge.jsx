import { cn } from '../../../lib/cn'
import { Button } from '../button'

const VARIANTS = /** @type {const} */ (['default', 'success', 'warning', 'danger', 'accent'])
const SIZES = /** @type {const} */ (['sm', 'md'])

const VARIANT_CLASSES = {
  default: 'bg-[var(--ds-color-background-surface-subtle)] text-[var(--ds-color-foreground-text-secondary)] border-[var(--ds-color-border-surface-default)]',
  success: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-success-emphasis)_12%,transparent)]',
    'text-[color-mix(in_oklab,var(--ds-color-background-feedback-success-emphasis)_80%,var(--ds-color-foreground-text-primary))]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-success-emphasis)_30%,transparent)]',
  ].join(' '),
  warning: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-warning-emphasis)_12%,transparent)]',
    'text-[color-mix(in_oklab,var(--ds-color-background-feedback-warning-emphasis)_80%,var(--ds-color-foreground-text-primary))]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-warning-emphasis)_30%,transparent)]',
  ].join(' '),
  danger: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_10%,transparent)]',
    'text-[var(--ds-color-background-feedback-error-emphasis)]',
    'border-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_30%,transparent)]',
  ].join(' '),
  accent: [
    'bg-[color-mix(in_oklab,var(--ds-color-background-action-secondary-hover)_40%,transparent)]',
    'text-[var(--ds-color-foreground-text-primary)]',
    'border-[color-mix(in_oklab,var(--ds-color-background-action-secondary-hover)_60%,transparent)]',
  ].join(' '),
}

const SIZE_CLASSES = {
  sm: 'h-[var(--ds-spacing-20)] px-[var(--ds-spacing-8)] text-[var(--ds-font-size-xs)] gap-[6px]',
  md: 'h-[var(--ds-spacing-24)] px-[var(--ds-spacing-12)] text-[var(--ds-font-size-sm)] gap-[var(--ds-spacing-4)]',
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
        'inline-flex items-center justify-center rounded-full border font-[var(--ds-font-family-body)] font-medium leading-none select-none whitespace-nowrap',
        'tracking-[var(--ds-base-letter-spacing-wide)] uppercase',
        SIZE_CLASSES[resolvedSize],
        VARIANT_CLASSES[resolvedVariant],
        className
      )}
    >
      {children}
      {onDismiss && (
        <Button
          variant="ghost"
          size="sm"
          iconLeft={
            <svg
              width={resolvedSize === 'sm' ? 10 : 12}
              height={resolvedSize === 'sm' ? 10 : 12}
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M2 2l8 8M10 2l-8 8" />
            </svg>
          }
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            'ml-[2px] -mr-[2px]',
            resolvedSize === 'sm'
              ? 'w-[var(--ds-spacing-16)] h-[var(--ds-spacing-16)]'
              : 'w-[var(--ds-spacing-20)] h-[var(--ds-spacing-20)]'
          )}
        >
          {null}
        </Button>
      )}
    </span>
  )
}

export default Badge
