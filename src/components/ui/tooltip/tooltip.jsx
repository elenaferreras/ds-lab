import * as RadixTooltip from '@radix-ui/react-tooltip'
import { cn } from '../../../lib/cn'

const SIDES = /** @type {const} */ (['top', 'right', 'bottom', 'left'])

const CONTENT_CLASSES = cn(
  'z-50 rounded-[var(--ds-radius-sm)] px-[var(--ds-spacing-8)] py-[var(--ds-spacing-4)]',
  'bg-[var(--ds-color-foreground-text-primary)]',
  'type-sm-regular [color:var(--ds-color-foreground-text-inverse)]',
  'shadow-[var(--ds-shadow-md)]',
  'transition-opacity duration-[var(--ds-base-duration-normal)] ease-[var(--ds-base-easing-default)]',
  'data-[state=closed]:opacity-0 data-[state=delayed-open]:opacity-100 data-[state=instant-open]:opacity-100'
)

const ARROW_CLASS = 'fill-[var(--ds-color-foreground-text-primary)]'

/**
 * Wraps a subtree that contains one or more `Tooltip` triggers.
 * Mount once per page or layout region (e.g. around `SideNav`).
 *
 * @param {{ children?: React.ReactNode, delayDuration?: number }} props
 */
export function TooltipProvider({ children, delayDuration = 200 }) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      {children}
    </RadixTooltip.Provider>
  )
}

/**
 * @param {{
 *   children: React.ReactElement
 *   content: React.ReactNode
 *   side?: 'top' | 'right' | 'bottom' | 'left'
 *   sideOffset?: number
 *   className?: string
 * }} props
 */
export function Tooltip({
  children,
  content,
  side = 'top',
  sideOffset = 8,
  className,
}) {
  const resolvedSide = SIDES.includes(side) ? side : 'top'

  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={resolvedSide}
          sideOffset={sideOffset}
          className={cn(CONTENT_CLASSES, className)}
        >
          {content}
          <RadixTooltip.Arrow className={ARROW_CLASS} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}

export default Tooltip
