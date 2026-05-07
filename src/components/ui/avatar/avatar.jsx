import * as RadixAvatar from '@radix-ui/react-avatar'
import { cn } from '../../../lib/cn'

const SIZES = /** @type {const} */ (['sm', 'md', 'lg', 'xl'])

const SIZE_CLASSES = {
  sm: 'w-[var(--ds-spacing-24)] h-[var(--ds-spacing-24)] text-[10px]',
  md: 'w-[var(--ds-spacing-32)] h-[var(--ds-spacing-32)] text-[12px]',
  lg: 'w-[var(--ds-spacing-40)] h-[var(--ds-spacing-40)] text-[14px]',
  xl: 'w-[var(--ds-spacing-48)] h-[var(--ds-spacing-48)] text-[16px]',
}

/**
 * @param {{
 *   src?: string
 *   alt?: string
 *   fallback?: string
 *   size?: 'sm' | 'md' | 'lg' | 'xl'
 *   className?: string
 * }} props
 */
export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  className,
}) {
  const resolvedSize = SIZES.includes(size) ? size : 'md'

  return (
    <RadixAvatar.Root
      className={cn(
        'relative inline-flex items-center justify-center rounded-full overflow-hidden select-none shrink-0',
        'bg-[var(--ds-color-background-surface-subtle)]',
        SIZE_CLASSES[resolvedSize],
        className
      )}
    >
      <RadixAvatar.Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />

      {/* Skeleton pulse while image loads */}
      <RadixAvatar.Fallback
        delayMs={0}
        className={cn(
          'absolute inset-0 rounded-full',
          'bg-[var(--ds-color-background-surface-subtle)] animate-pulse',
        )}
      />

      {/* Initials fallback after image fails */}
      {fallback && (
        <RadixAvatar.Fallback
          delayMs={300}
          className={cn(
            'absolute inset-0 flex items-center justify-center rounded-full',
            'bg-[var(--ds-color-background-surface-subtle)] text-[var(--ds-color-foreground-text-secondary)]',
            'font-[var(--ds-font-family-body)] font-medium uppercase tracking-wide leading-none',
          )}
        >
          {fallback}
        </RadixAvatar.Fallback>
      )}
    </RadixAvatar.Root>
  )
}

export default Avatar
