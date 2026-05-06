import { XIcon } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'
import { Button } from '../button'

const VARIANTS = /** @type {const} */ (['default', 'success', 'warning', 'danger', 'accent'])
const SIZES = /** @type {const} */ (['sm', 'md'])

const VARIANT_CLASSES = {
  default: 'bg-[var(--farco-color-surface-subtle)] text-[var(--farco-color-text-secondary)] border-[var(--farco-color-border-subtle)]',
  success: 'bg-[var(--farco-color-feedback-success-bg)] text-[var(--farco-color-feedback-success-emphasis)] border-[var(--farco-color-feedback-success-border)]',
  warning: 'bg-[var(--farco-color-feedback-warning-bg)] text-[var(--farco-color-feedback-warning-emphasis)] border-[var(--farco-color-feedback-warning-border)]',
  danger:  'bg-[var(--farco-color-feedback-danger-bg)] text-[var(--farco-color-feedback-danger)] border-[var(--farco-color-feedback-danger-border)]',
  accent:  'bg-[var(--farco-color-action-secondary-bg)] text-[var(--farco-color-text-primary)] border-[var(--farco-color-action-secondary-border)]',
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
        <Button
          variant="ghost"
          size="sm"
          iconLeft={<XIcon size={resolvedSize === 'sm' ? 10 : 12} weight="regular" />}
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            'ml-[2px] -mr-[2px]',
            resolvedSize === 'sm'
              ? 'w-[var(--farco-spacing-4)] h-[var(--farco-spacing-4)]'
              : 'w-[var(--farco-spacing-5)] h-[var(--farco-spacing-5)]'
          )}
        >
          {null}
          
        </Button>
      )}
    </span>
  )
}

export default Badge
