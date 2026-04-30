import { cn } from '../../../lib/cn'

/**
 * @param {{ children?: React.ReactNode, className?: string }} props
 */
function CardRoot({ children, className }) {
  return (
    <div
      className={cn(
        'flex flex-col',
        'bg-[var(--farco-color-surface-base)]',
        'border border-[var(--farco-color-border-subtle)]',
        'rounded-[var(--farco-radius-xl)]',
        'shadow-[var(--farco-shadow-sm)]',
        'overflow-hidden',
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
function CardHeader({ children, className }) {
  return (
    <div
      className={cn(
        'px-[var(--farco-spacing-6)] pt-[var(--farco-spacing-6)] pb-[var(--farco-spacing-4)]',
        'border-b border-[var(--farco-color-border-subtle)]',
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
function CardBody({ children, className }) {
  return (
    <div
      className={cn(
        'flex-1 px-[var(--farco-spacing-6)] py-[var(--farco-spacing-5)]',
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
function CardFooter({ children, className }) {
  return (
    <div
      className={cn(
        'px-[var(--farco-spacing-6)] pt-[var(--farco-spacing-4)] pb-[var(--farco-spacing-6)]',
        'border-t border-[var(--farco-color-border-subtle)]',
        className
      )}
    >
      {children}
    </div>
  )
}

// Attach sub-components
CardRoot.Header = CardHeader
CardRoot.Body = CardBody
CardRoot.Footer = CardFooter

export const Card = CardRoot
export default Card
