import { Tooltip, TooltipProvider } from '../tooltip'
import { cn } from '../../../lib/cn'

const ICON_SIZE = 20

/**
 * @param {{ children?: React.ReactNode, className?: string, 'aria-label'?: string }} props
 */
function SideNavRoot({ children, className, 'aria-label': ariaLabel = 'Side navigation' }) {
  return (
    <TooltipProvider>
      <nav
        aria-label={ariaLabel}
        className={cn(
          'flex h-full min-h-0 w-[var(--ds-spacing-48)] shrink-0 flex-col items-center',
          'rounded-l-[var(--ds-radius-lg)] border-y border-l border-[var(--ds-color-border-surface-default)]',
          'bg-[var(--ds-color-background-surface-subtle)]',
          'py-[var(--ds-spacing-16)]',
          className
        )}
      >
        {children}
      </nav>
    </TooltipProvider>
  )
}

/**
 * @param {{ children?: React.ReactNode, className?: string }} props
 */
function SideNavLogo({ children, className }) {
  return (
    <div
      className={cn(
        'mb-[var(--ds-spacing-16)] flex shrink-0 items-center justify-center',
        'text-[var(--ds-color-foreground-text-primary)]',
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * @param {{ children?: React.ReactNode, className?: string }} props
 */
function SideNavSection({ children, className }) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[var(--ds-spacing-8)]',
        className
      )}
    >
      {children}
    </div>
  )
}

function SideNavSpacer() {
  return <div className="min-h-[var(--ds-spacing-16)] flex-1" aria-hidden="true" />
}

/**
 * @param {{
 *   label: string
 *   icon: React.ReactNode
 *   active?: boolean
 *   href?: string
 *   onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
 *   disabled?: boolean
 *   className?: string
 * }} props
 */
function SideNavItem({
  label,
  icon,
  active = false,
  href,
  onClick,
  disabled = false,
  className,
}) {
  const itemClasses = cn(
    'inline-flex items-center justify-center rounded-full border-0 p-0',
    'h-[var(--ds-spacing-40)] w-[var(--ds-spacing-40)] shrink-0',
    'transition-[background-color,color,transform] duration-[var(--ds-base-duration-normal)] ease-[var(--ds-base-easing-default)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-border-action-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-color-background-surface-subtle)]',
    active
      ? 'bg-[var(--ds-color-background-action-primary)] text-[var(--ds-color-foreground-action-on-primary)]'
      : 'bg-transparent text-[var(--ds-color-foreground-text-primary)] enabled:hover:bg-[color-mix(in_oklab,var(--ds-color-border-surface-strong)_10%,transparent)]',
    disabled && 'pointer-events-none opacity-40',
    className
  )

  const iconNode = (
    <span
      className="inline-flex items-center justify-center [&_svg]:shrink-0"
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      aria-hidden="true"
    >
      {icon}
    </span>
  )

  const trigger = href ? (
    <a
      href={disabled ? undefined : href}
      className={itemClasses}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
    >
      {iconNode}
    </a>
  ) : (
    <button
      type="button"
      className={itemClasses}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      disabled={disabled}
      onClick={onClick}
    >
      {iconNode}
    </button>
  )

  return (
    <Tooltip content={label} side="right">
      {trigger}
    </Tooltip>
  )
}

SideNavRoot.Logo = SideNavLogo
SideNavRoot.Section = SideNavSection
SideNavRoot.Spacer = SideNavSpacer
SideNavRoot.Item = SideNavItem

export const SideNav = SideNavRoot
export default SideNav
