import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'
import { Button } from '../button'

const SIZES = /** @type {const} */ (['sm', 'md', 'lg'])

const SIZE_CLASSES = {
  sm: 'w-[calc(var(--ds-spacing-80)*4)] max-w-[calc(100vw-var(--ds-spacing-48))]',
  md: 'w-[calc(var(--ds-spacing-80)*6)] max-w-[calc(100vw-var(--ds-spacing-48))]',
  lg: 'w-[calc(var(--ds-spacing-80)*7)] max-w-[calc(100vw-var(--ds-spacing-48))]',
}

const OVERLAY_CLASSES = cn(
  'fixed inset-0 z-50',
  'bg-[color-mix(in_oklab,var(--ds-color-foreground-text-primary)_50%,transparent)]',
  'transition-opacity duration-[var(--ds-base-duration-normal)] ease-[var(--ds-base-easing-default)]',
  'data-[state=open]:opacity-100 data-[state=closed]:opacity-0'
)

const CONTENT_CLASSES = cn(
  'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
  'flex flex-col',
  'bg-[var(--ds-color-background-surface-overlay)]',
  'border border-[var(--ds-color-border-surface-default)]',
  'rounded-[var(--ds-radius-lg)]',
  'shadow-[var(--ds-shadow-lg)]',
  'outline-none',
  'transition-opacity duration-[var(--ds-base-duration-normal)] ease-[var(--ds-base-easing-default)]',
  'data-[state=open]:opacity-100 data-[state=closed]:opacity-0'
)

/**
 * @param {{
 *   open: boolean
 *   onClose?: () => void
 *   size?: 'sm' | 'md' | 'lg'
 *   title: string
 *   description?: string
 *   children?: React.ReactNode
 *   className?: string
 * }} props
 */
export function Modal({
  open,
  onClose,
  size = 'md',
  title,
  description,
  children,
  className,
}) {
  const resolvedSize = SIZES.includes(size) ? size : 'md'

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose?.()
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={OVERLAY_CLASSES} />
        <Dialog.Content
          className={cn(CONTENT_CLASSES, SIZE_CLASSES[resolvedSize], className)}
        >
          <div
            className={cn(
              'flex items-start justify-between gap-[var(--ds-spacing-16)]',
              'px-[var(--ds-spacing-24)] pt-[var(--ds-spacing-24)] pb-[var(--ds-spacing-16)]'
            )}
          >
            <div className="min-w-0 flex-1">
              <Dialog.Title
                className={cn(
                  'm-0 font-medium font-[var(--ds-font-family-body)]',
                  'text-[var(--ds-font-size-md)] text-[var(--ds-color-foreground-text-primary)]',
                  'leading-[var(--ds-base-line-height-tight)]'
                )}
              >
                {title}
              </Dialog.Title>
              {description ? (
                <Dialog.Description
                  className={cn(
                    'm-0 mt-[var(--ds-spacing-4)]',
                    'font-[var(--ds-font-family-body)]',
                    'text-[var(--ds-font-size-sm)] text-[var(--ds-color-foreground-text-secondary)]',
                    'leading-[var(--ds-base-line-height-base)]'
                  )}
                >
                  {description}
                </Dialog.Description>
              ) : null}
            </div>
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="sm"
                iconLeft={<XIcon />}
                aria-label="Close dialog"
              >
                {null}
              </Button>
            </Dialog.Close>
          </div>
          {children ? (
            <div
              className={cn(
                'flex flex-col gap-[var(--ds-spacing-16)]',
                'px-[var(--ds-spacing-24)] pb-[var(--ds-spacing-24)]'
              )}
            >
              {children}
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
