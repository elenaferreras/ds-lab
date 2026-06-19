import { ResponsiveContainer } from 'recharts'
import { cn } from '../../../lib/cn'

/**
 * Responsive wrapper for Recharts. Parent must receive an explicit height.
 *
 * @param {{
 *   children: React.ReactElement
 *   className?: string
 *   height?: number | string
 *   width?: number | string
 * }} props
 */
export function ChartContainer({
  children,
  className,
  height = 300,
  width = '100%',
  ...props
}) {
  return (
    <div
      className={cn(
        'w-full text-[var(--ds-color-foreground-text-primary)]',
        '[&_.recharts-cartesian-axis-tick_text]:fill-[var(--ds-color-foreground-text-secondary)]',
        '[&_.recharts-legend-item-text]:!text-[var(--ds-color-foreground-text-secondary)]',
        className
      )}
      style={{ width, height }}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}
