import { forwardRef } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'

/**
 * Internal pill-shaped trigger shared by DateRangePicker and FilterSelect.
 *
 * @param {{
 *   icon: React.ReactNode
 *   label?: string
 *   value?: string
 *   displayValue?: string
 *   disabled?: boolean
 *   open?: boolean
 *   ariaLabel?: string
 *   className?: string
 *   onClick?: React.MouseEventHandler<HTMLButtonElement>
 * }} props
 */
export const ControlPillTrigger = forwardRef(function ControlPillTrigger(
  {
    icon,
    label,
    value,
    displayValue,
    disabled = false,
    open = false,
    ariaLabel,
    className,
    onClick,
    ...props
  },
  ref
) {
  const isTwoLine = Boolean(label && (value ?? displayValue))
  const singleLineText = displayValue ?? value ?? label ?? ''

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-[var(--ds-spacing-8)]',
        'rounded-full border-0',
        'bg-[var(--ds-color-background-surface-subtle)]',
        'py-[var(--ds-spacing-4)] pl-[var(--ds-spacing-4)] pr-[var(--ds-spacing-8)]',
        'font-[var(--ds-font-family-body)] text-left',
        'transition-opacity duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-border-action-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-color-background-surface-page)]',
        disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
        !disabled && 'cursor-pointer',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-flex shrink-0 items-center justify-center',
          'h-[var(--ds-spacing-32)] w-[var(--ds-spacing-32)] rounded-full',
          'bg-[color-mix(in_oklab,var(--ds-color-foreground-text-primary)_8%,var(--ds-color-background-surface-subtle))]',
          'text-[var(--ds-color-foreground-text-primary)]'
        )}
        aria-hidden="true"
      >
        {icon}
      </span>

      {isTwoLine ? (
        <span className="flex min-w-0 flex-col gap-[var(--ds-spacing-4)] py-[var(--ds-spacing-4)]">
          <span className="text-[var(--ds-font-size-xs)] leading-none text-[var(--ds-color-foreground-text-secondary)]">
            {label}
          </span>
          <span className="truncate text-[var(--ds-font-size-sm)] leading-none text-[var(--ds-color-foreground-text-primary)]">
            {value}
          </span>
        </span>
      ) : (
        <span className="min-w-0 truncate py-[var(--ds-spacing-8)] text-[var(--ds-font-size-sm)] leading-none text-[var(--ds-color-foreground-text-primary)]">
          {singleLineText}
        </span>
      )}

      <span
        className={cn(
          'inline-flex shrink-0 items-center justify-center',
          'h-[var(--ds-spacing-28)] w-[var(--ds-spacing-28)] rounded-full',
          'bg-[var(--ds-color-background-surface-page)]',
          'text-[var(--ds-color-foreground-text-primary)]',
          'shadow-[var(--ds-shadow-sm)]',
          'transition-transform duration-150',
          open && 'rotate-180'
        )}
        aria-hidden="true"
      >
        <CaretDownIcon size={14} weight="regular" />
      </span>
    </button>
  )
})
