import { cn } from '../../../lib/cn'

const VARIANTS = /** @type {const} */ (['primary', 'secondary', 'ghost'])
const INTENTS = /** @type {const} */ (['regular', 'danger'])

function getVariantClasses(variant, intent) {
  const isDanger = intent === 'danger'

  // We generate subtle interactive states using CSS tokens + color-mix()
  // so the component automatically adapts to theme changes.
  const subtleFrom = (cssVar) =>
    `enabled:hover:bg-[color-mix(in_oklab,var(${cssVar})_10%,transparent)]`
  const pressedFrom = (cssVar) =>
    `enabled:active:bg-[color-mix(in_oklab,var(${cssVar})_88%,var(--farco-color-neutral-100))]`

  if (variant === 'primary') {
    return isDanger
      ? {
          base: 'bg-[var(--farco-color-danger)] text-[var(--farco-color-neutral-0)] border-[var(--farco-color-danger)]',
          hover: 'enabled:hover:bg-[color-mix(in_oklab,var(--farco-color-danger)_92%,var(--farco-color-neutral-100))] enabled:hover:border-[color-mix(in_oklab,var(--farco-color-danger)_92%,var(--farco-color-neutral-100))]',
          active: 'enabled:active:bg-[color-mix(in_oklab,var(--farco-color-danger)_84%,var(--farco-color-neutral-100))] enabled:active:border-[color-mix(in_oklab,var(--farco-color-danger)_84%,var(--farco-color-neutral-100))] enabled:active:scale-[0.98]',
        }
      : {
          base: 'bg-[var(--farco-color-primary)] text-[var(--farco-color-neutral-0)] border-[var(--farco-color-primary)]',
          hover: 'enabled:hover:bg-[var(--farco-color-primary-hover)] enabled:hover:border-[var(--farco-color-primary-hover)]',
          active: 'enabled:active:bg-[var(--farco-color-primary-active)] enabled:active:border-[var(--farco-color-primary-active)] enabled:active:scale-[0.98]',
        }
  }

  if (variant === 'secondary') {
    return isDanger
      ? {
          base: 'bg-transparent text-[var(--farco-color-danger)] border-[var(--farco-color-danger)]',
          hover: cn(
            subtleFrom('--farco-color-danger'),
            'enabled:hover:border-[var(--farco-color-danger)]'
          ),
          active: cn(
            pressedFrom('--farco-color-danger'),
            'enabled:active:text-[var(--farco-color-neutral-0)] enabled:active:border-[var(--farco-color-danger)] enabled:active:scale-[0.98]'
          ),
        }
      : {
          base: 'bg-transparent text-[var(--farco-color-neutral-100)] border-[var(--farco-color-border)]',
          hover: cn(subtleFrom('--farco-color-border'), 'enabled:hover:border-[var(--farco-color-border)]'),
          active: cn(pressedFrom('--farco-color-border'), 'enabled:active:border-[var(--farco-color-border)] enabled:active:scale-[0.98]'),
        }
  }

  // ghost
  return isDanger
    ? {
        base: 'bg-transparent text-[var(--farco-color-danger)] border-transparent',
        hover: cn(subtleFrom('--farco-color-danger'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--farco-color-danger'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
      }
    : {
        base: 'bg-transparent text-[var(--farco-color-neutral-100)] border-transparent',
        hover: cn(subtleFrom('--farco-color-border'), 'enabled:hover:border-transparent'),
        active: cn(pressedFrom('--farco-color-border'), 'enabled:active:border-transparent enabled:active:scale-[0.98]'),
      }
}

export function Button({
  children = 'Label',
  variant = 'primary',
  intent = 'regular',
  disabled = false,
  loading = false,
  className,
  onClick,
  ...props
}) {
  const resolvedVariant = VARIANTS.includes(variant) ? variant : 'primary'
  const resolvedIntent = INTENTS.includes(intent) ? intent : 'regular'
  const v = getVariantClasses(resolvedVariant, resolvedIntent)

  const isDisabled = disabled
  const isLoading = loading
  const isInteractive = !isDisabled && !isLoading

  const base = cn(
    // layout
    'inline-flex items-center justify-center rounded-full border select-none transition-[transform,background-color,border-color,color] duration-150',
    // typography
    'font-[var(--farco-font-family-base)] font-normal uppercase tracking-[var(--farco-letter-spacing-base)] leading-none',
    // focus
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--farco-color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--farco-color-bg-base)]',
    // disabled
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    // loading (distinct from disabled)
    isLoading && 'opacity-70 cursor-wait pointer-events-none',
    // size (single default for now)
    'h-[var(--farco-spacing-10)] px-[var(--farco-spacing-6)] text-[var(--farco-font-size-md)] gap-[var(--farco-spacing-2)]',
    v.base,
    isInteractive && v.hover,
    isInteractive && v.active,
    className
  )

  const elementProps = {
    type: 'button',
    disabled: isDisabled,
    'aria-busy': isLoading ? true : undefined,
  }

  return (
    <button
      className={base}
      onClick={!isInteractive ? undefined : onClick}
      {...elementProps}
      {...props}
    >
      {loading && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          style={{ animation: 'spin 0.8s linear infinite' }}
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
      )}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  )
}

export default Button

