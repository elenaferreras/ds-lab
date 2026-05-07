import { cn } from '../../../lib/cn'

/**
 * @param {{ children?: React.ReactNode, className?: string }} props
 */
function CardRoot({ children, className }) {
  return (
    <div
      className={cn(
        'flex flex-col',
        'bg-[var(--ds-color-background-surface-page)]',
        'border border-[var(--ds-color-border-surface-default)]',
        'rounded-[var(--ds-radius-lg)]',
        'shadow-sm',
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
        'px-[var(--ds-spacing-24)] pt-[var(--ds-spacing-24)] pb-[var(--ds-spacing-16)]',
        'border-b border-[var(--ds-color-border-surface-default)]',
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
        'flex-1 px-[var(--ds-spacing-24)] py-[var(--ds-spacing-20)]',
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
        'px-[var(--ds-spacing-24)] pt-[var(--ds-spacing-16)] pb-[var(--ds-spacing-24)]',
        'border-t border-[var(--ds-color-border-surface-default)]',
        className
      )}
    >
      {children}
    </div>
  )
}

CardRoot.Header = CardHeader
CardRoot.Body = CardBody
CardRoot.Footer = CardFooter

export const Card = CardRoot
export default Card
