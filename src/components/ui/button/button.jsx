import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../../lib/cn'

const VARIANTS = /** @type {const} */ (['primary', 'secondary', 'ghost'])
const INTENTS = /** @type {const} */ (['regular', 'danger'])
const SIZES = /** @type {const} */ (['sm', 'md', 'lg'])

const SIZE_CLASSES = {
  sm: 'h-[var(--ds-spacing-32)] px-[var(--ds-spacing-12)] text-[var(--ds-font-size-sm)] gap-[var(--ds-spacing-4)]',
  md: 'h-[var(--ds-spacing-40)] px-[var(--ds-spacing-24)] text-[var(--ds-font-size-md)] gap-[var(--ds-spacing-8)]',
  lg: 'h-[var(--ds-spacing-48)] px-[var(--ds-spacing-32)] text-[var(--ds-font-size-md)] gap-[var(--ds-spacing-8)]',
}

const ICON_SIZE = {
  sm: 14,
  md: 16,
  lg: 18,
}

function getVariantClasses(variant, intent) {
  const isDanger = intent === 'danger'

  const subtleFrom = (cssVar) =>
    `enabled:hover:bg-[color-mix(in_oklab,var(${cssVar})_10%,transparent)]`
  const pressedFrom = (cssVar) =>
    `enabled:active:bg-[color-mix(in_oklab,var(${cssVar})_88%,var(--ds-color-foreground-text-primary))]`

  if (variant === 'primary') {
    return isDanger
      ? {
          base: 'bg-[var(--ds-color-background-feedback-error-emphasis)] text-[var(--ds-color-foreground-action-on-primary)] border-[var(--ds-color-background-feedback-error-emphasis)]',
          hover: 'enabled:hover:bg-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_92%,var(--ds-color-foreground-text-primary))] enabled:hover:border-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_92%,var(--ds-color-foreground-text-primary))]',
          active: 'enabled:active:bg-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_84%,var(--ds-color-foreground-text-primary))] enabled:active:border-[color-mix(in_oklab,var(--ds-color-background-feedback-error-emphasis)_84%,var(--ds-color-foreground-text-primary))] enabled:active:scale-[0.98]',
        }
      : {
          base: 'bg-[var(--ds-color-background-action-primary)] text-[var(--ds-color-foreground-action-on-primary)] border-[var(--ds-color-background-action-primary)]',
          hover: 'enabled:hover:bg-[var(--ds-color-background-action-primary-hover)] enabled:hover:border-[var(--ds-color-background-action-primary-hover)]',
          active: 'enabled:active:bg-[var(--ds-color-background-action-primary-pressed)] enabled:active:border-[var(--ds-color-background-action-primary-pressed)] enabled:active:scale-[0.98]',
        }
  }

  if (variant === 'secondary') {
    return isDanger
      ? {
          base: 'bg-transparent text-[var(--ds-color-background-feedback-error-emphasis)] border-[var(--ds-color-background-feedback-error-emphasis)]',
          hover: cn(
            subtleFrom('--ds-color-background-feedback-error-emphasis'),
            'enabled:hover:border-[var(--ds-color-background-feedback-error-emphasis)]'
          ),
          active: cn(
            pressedFrom('--ds-color-background-feedback-error-emphasis'),
            'enabled:active:text-[var(--ds-color-foreground-action-on-primary)] enabled:active:border-[var(--ds-color-background-feedback-error-emphasis)] enabled:active:scale-[0.98]'
          ),
        }
      : {
          base: 'bg-transparent text-[var(--ds-color-foreground-text-primary)] border-[var(--ds-color-border-surface-strong)]',
          hover: cn(subtleFrom('--ds-color-border-surface-strong'), 'enabled:hover:border-[var(--ds-color-border-surface-strong)]'),
          active: cn(pressedFrom('--ds-color-border-surface-strong'), 'enabled:active:border-[var(--ds-color-border-surface-strong)] enabled:active:scale-[0.98]'),
        }
  }

  // ghost
  return isDanger
    ? {
        base: 'bg-transparent text-[var(--ds-color-background-feedback-error-emphasis)] border-transparent',
        hover: cn(subtleFrom('--ds-color-background-feedback-error-emphasis'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--ds-color-background-feedback-error-emphasis'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
      }
    : {
        base: 'bg-transparent text-[var(--ds-color-foreground-text-primary)] border-transparent',
        hover: cn(subtleFrom('--ds-color-border-surface-strong'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--ds-color-border-surface-strong'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
      }
}

/**
 * @param {{
 *   children?: React.ReactNode
 *   variant?: 'primary' | 'secondary' | 'ghost'
 *   intent?: 'regular' | 'danger'
 *   size?: 'sm' | 'md' | 'lg'
 *   disabled?: boolean
 *   loading?: boolean
 *   iconLeft?: React.ReactNode
 *   iconRight?: React.ReactNode
 *   asChild?: boolean
 *   className?: string
 *   onClick?: React.MouseEventHandler<HTMLButtonElement>
 * }} props
 */
export function Button({
  children = 'Label',
  variant = 'primary',
  intent = 'regular',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  asChild = false,
  className,
  onClick,
  ...props
}) {
  const resolvedVariant = VARIANTS.includes(variant) ? variant : 'primary'
  const resolvedIntent = INTENTS.includes(intent) ? intent : 'regular'
  const resolvedSize = SIZES.includes(size) ? size : 'md'
  const v = getVariantClasses(resolvedVariant, resolvedIntent)
  const iconPx = ICON_SIZE[resolvedSize]

  const isDisabled = disabled
  const isLoading = loading
  const isInteractive = !isDisabled && !isLoading

  const base = cn(
    // layout
    'inline-flex items-center justify-center rounded-full border select-none transition-[transform,background-color,border-color,color] duration-150',
    // typography
    'font-[var(--ds-font-family-body)] font-normal uppercase tracking-[var(--ds-base-letter-spacing-wide)] leading-none',
    // focus
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-border-action-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-color-background-surface-page)]',
    // disabled
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    // loading
    isLoading && 'opacity-70 cursor-wait pointer-events-none',
    // size
    SIZE_CLASSES[resolvedSize],
    v.base,
    isInteractive && v.hover,
    isInteractive && v.active,
    className
  )

  const spinner = (
    <svg
      width={iconPx}
      height={iconPx}
      viewBox="0 0 16 16"
      style={{ animation: 'spin 0.8s linear infinite', flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="25"
        strokeDashoffset="0"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M8 2 A6 6 0 0 1 14 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )

  const iconWrapper = (node) =>
    node ? (
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{ width: iconPx, height: iconPx }}
        aria-hidden="true"
      >
        {node}
      </span>
    ) : null

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={base}
      onClick={!isInteractive ? undefined : onClick}
      type={asChild ? undefined : 'button'}
      disabled={isDisabled}
      aria-busy={isLoading ? true : undefined}
      {...props}
    >
      {isLoading ? spinner : iconWrapper(iconLeft)}
      {children != null && children !== '' && (
        <span className="whitespace-nowrap">{children}</span>
      )}
      {!isLoading && iconWrapper(iconRight)}
    </Comp>
  )
}

export default Button
