import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../../lib/cn'

const VARIANTS = /** @type {const} */ (['primary', 'secondary', 'ghost'])
const INTENTS = /** @type {const} */ (['regular', 'danger'])
const SIZES = /** @type {const} */ (['sm', 'md', 'lg'])

const SIZE_CLASSES = {
  sm: 'h-[var(--farco-spacing-8)] px-[var(--farco-spacing-3)] text-[var(--farco-font-size-sm)] gap-[var(--farco-spacing-1)]',
  md: 'h-[var(--farco-spacing-10)] px-[var(--farco-spacing-6)] text-[var(--farco-font-size-md)] gap-[var(--farco-spacing-2)]',
  lg: 'h-[var(--farco-spacing-12)] px-[var(--farco-spacing-8)] text-[var(--farco-font-size-md)] gap-[var(--farco-spacing-2)]',
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
    `enabled:active:bg-[color-mix(in_oklab,var(${cssVar})_88%,var(--farco-color-text-primary))]`

  if (variant === 'primary') {
    return isDanger
      ? {
          base: 'bg-[var(--farco-color-feedback-danger)] text-[var(--farco-color-text-on-action)] border-[var(--farco-color-feedback-danger)]',
          hover: 'enabled:hover:bg-[color-mix(in_oklab,var(--farco-color-feedback-danger)_92%,var(--farco-color-text-primary))] enabled:hover:border-[color-mix(in_oklab,var(--farco-color-feedback-danger)_92%,var(--farco-color-text-primary))]',
          active: 'enabled:active:bg-[color-mix(in_oklab,var(--farco-color-feedback-danger)_84%,var(--farco-color-text-primary))] enabled:active:border-[color-mix(in_oklab,var(--farco-color-feedback-danger)_84%,var(--farco-color-text-primary))] enabled:active:scale-[0.98]',
        }
      : {
          base: 'bg-[var(--farco-color-action-primary)] text-[var(--farco-color-text-on-action)] border-[var(--farco-color-action-primary)]',
          hover: 'enabled:hover:bg-[var(--farco-color-action-primary-hover)] enabled:hover:border-[var(--farco-color-action-primary-hover)]',
          active: 'enabled:active:bg-[var(--farco-color-action-primary-pressed)] enabled:active:border-[var(--farco-color-action-primary-pressed)] enabled:active:scale-[0.98]',
        }
  }

  if (variant === 'secondary') {
    return isDanger
      ? {
          base: 'bg-transparent text-[var(--farco-color-feedback-danger)] border-[var(--farco-color-feedback-danger)]',
          hover: cn(
            subtleFrom('--farco-color-feedback-danger'),
            'enabled:hover:border-[var(--farco-color-feedback-danger)]'
          ),
          active: cn(
            pressedFrom('--farco-color-feedback-danger'),
            'enabled:active:text-[var(--farco-color-text-on-action)] enabled:active:border-[var(--farco-color-feedback-danger)] enabled:active:scale-[0.98]'
          ),
        }
      : {
          base: 'bg-transparent text-[var(--farco-color-text-primary)] border-[var(--farco-color-border)]',
          hover: cn(subtleFrom('--farco-color-border'), 'enabled:hover:border-[var(--farco-color-border)]'),
          active: cn(pressedFrom('--farco-color-border'), 'enabled:active:border-[var(--farco-color-border)] enabled:active:scale-[0.98]'),
        }
  }

  // ghost
  return isDanger
    ? {
        base: 'bg-transparent text-[var(--farco-color-feedback-danger)] border-transparent',
        hover: cn(subtleFrom('--farco-color-feedback-danger'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--farco-color-feedback-danger'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
      }
    : {
        base: 'bg-transparent text-[var(--farco-color-text-primary)] border-transparent',
        hover: cn(subtleFrom('--farco-color-border'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--farco-color-border'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
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
    'font-[var(--farco-font-family-base)] font-normal uppercase tracking-[var(--farco-letter-spacing-base)] leading-none',
    // focus
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--farco-color-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--farco-color-surface-base)]',
    // disabled
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    // loading (distinct from disabled)
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
