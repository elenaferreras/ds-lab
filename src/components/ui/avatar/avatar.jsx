import * as RadixAvatar from '@radix-ui/react-avatar'
import { cn } from '../../../lib/cn'

const SIZES = /** @type {const} */ (['sm', 'md', 'lg', 'xl'])

const SIZE_CLASSES = {
  sm: 'w-6 h-6 text-[10px]',
  md: 'w-8 h-8 text-[12px]',
  lg: 'w-10 h-10 text-[14px]',
  xl: 'w-12 h-12 text-[16px]',
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
        'bg-[var(--farco-color-neutral-20)]',
        SIZE_CLASSES[resolvedSize],
        className
      )}
    >
      {/* Actual image */}
      <RadixAvatar.Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />

      {/* Skeleton pulse shown immediately while image is loading */}
      <RadixAvatar.Fallback
        delayMs={0}
        className={cn(
          'absolute inset-0 rounded-full',
          'bg-[var(--farco-color-neutral-20)] animate-pulse',
        )}
      />

      {/* Initials / icon fallback shown after image fails (with a small delay to avoid flash) */}
      {fallback && (
        <RadixAvatar.Fallback
          delayMs={300}
          className={cn(
            'absolute inset-0 flex items-center justify-center rounded-full',
            'bg-[var(--farco-color-neutral-20)] text-[var(--farco-color-neutral-60)]',
            'font-[var(--farco-font-family-base)] font-medium uppercase tracking-wide leading-none',
          )}
        >
          {fallback}
        </RadixAvatar.Fallback>
      )}
    </RadixAvatar.Root>
  )
}

export default Avatar
