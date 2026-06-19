import { useEffect, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'
import {
  DEFAULT_DATE_PRESETS,
  formatDateRange,
  fromInputDateValue,
  getPresetRange,
  toInputDateValue,
  validateDateRange,
} from '../../../lib/date-range'
import { ControlPillTrigger } from '../shared/control-pill-trigger'
import { Button } from '../button'

const POPOVER_CONTENT_CLASSES = cn(
  'z-50 outline-none',
  'rounded-[var(--ds-radius-lg)] border border-[var(--ds-color-border-surface-default)]',
  'bg-[var(--ds-color-background-surface-overlay)]',
  'shadow-[var(--ds-shadow-md)]',
  'py-[var(--ds-spacing-16)] pr-[var(--ds-spacing-16)] pl-0'
)

const DATE_INPUT_CLASSES = cn(
  'w-full h-[var(--ds-spacing-40)] rounded-[var(--ds-radius-md)] border px-[var(--ds-spacing-12)]',
  'bg-[var(--ds-color-background-surface-page)] text-[var(--ds-color-foreground-text-primary)]',
  'text-[var(--ds-font-size-sm)] font-[var(--ds-font-family-body)] leading-none',
  'border-[var(--ds-color-border-surface-default)]',
  'transition-[border-color,box-shadow] duration-150 outline-none',
  'focus:border-[var(--ds-color-border-action-focus)] focus:ring-2 focus:ring-[var(--ds-color-border-action-focus)] focus:ring-offset-0'
)

/**
 * @param {{
 *   label?: string
 *   value: { from: Date, to: Date }
 *   onChange: (range: { from: Date, to: Date }) => void
 *   presets?: { id: string, label: string }[]
 *   locale?: string
 *   minDate?: Date
 *   maxDate?: Date
 *   disabled?: boolean
 *   className?: string
 * }} props
 */
export function DateRangePicker({
  label = 'Date',
  value,
  onChange,
  presets = DEFAULT_DATE_PRESETS,
  locale = typeof navigator !== 'undefined' ? navigator.language : 'es-ES',
  minDate,
  maxDate,
  disabled = false,
  className,
}) {
  const [open, setOpen] = useState(false)
  const [draftFrom, setDraftFrom] = useState('')
  const [draftTo, setDraftTo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (open) {
      setDraftFrom(toInputDateValue(value.from))
      setDraftTo(toInputDateValue(value.to))
      setError('')
    }
  }, [open, value.from, value.to])

  const formattedRange = formatDateRange(value.from, value.to, locale)

  function handlePresetSelect(presetId) {
    const range = getPresetRange(presetId)
    onChange(range)
    setOpen(false)
  }

  function handleApplyCustom() {
    const from = fromInputDateValue(draftFrom)
    const to = fromInputDateValue(draftTo)

    if (!from || !to) {
      setError('Select both start and end dates.')
      return
    }

    const result = validateDateRange(from, to, { minDate, maxDate })
    if (!result.valid) {
      setError(result.error ?? 'Invalid date range.')
      return
    }

    onChange({ from: result.from, to: result.to })
    setOpen(false)
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild disabled={disabled}>
        <ControlPillTrigger
          icon={<CalendarBlankIcon size={16} weight="regular" />}
          label={label}
          value={formattedRange}
          disabled={disabled}
          open={open}
          ariaLabel={`${label}: ${formattedRange}`}
          className={className}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className={POPOVER_CONTENT_CLASSES}
          sideOffset={8}
          align="end"
        >
          <div className="flex flex-col gap-[var(--ds-spacing-16)] sm:flex-row sm:gap-[var(--ds-spacing-24)]">
            <div className="flex w-full min-w-[180px] flex-col gap-[var(--ds-spacing-8)]">
              <span className="text-[var(--ds-font-size-xs)] font-medium text-[var(--ds-color-foreground-text-secondary)]">
                Presets
              </span>
              <ul className="m-0 flex w-full list-none flex-col gap-[var(--ds-spacing-8)] p-0">
                {presets.map((preset) => (
                  <li key={preset.id} className="w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-start normal-case tracking-normal"
                      onClick={() => handlePresetSelect(preset.id)}
                    >
                      {preset.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden w-px shrink-0 bg-[var(--ds-color-border-surface-default)] sm:block" />

            <div className="flex min-w-[200px] flex-col gap-[var(--ds-spacing-12)]">
              <span className="text-[var(--ds-font-size-xs)] font-medium text-[var(--ds-color-foreground-text-secondary)]">
                Custom range
              </span>

              <div className="flex flex-col gap-[var(--ds-spacing-8)]">
                <label className="flex flex-col gap-[var(--ds-spacing-4)]">
                  <span className="text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-text-secondary)]">
                    From
                  </span>
                  <input
                    type="date"
                    value={draftFrom}
                    min={minDate ? toInputDateValue(minDate) : undefined}
                    max={maxDate ? toInputDateValue(maxDate) : undefined}
                    onChange={(event) => {
                      setDraftFrom(event.target.value)
                      setError('')
                    }}
                    className={DATE_INPUT_CLASSES}
                  />
                </label>

                <label className="flex flex-col gap-[var(--ds-spacing-4)]">
                  <span className="text-[var(--ds-font-size-xs)] text-[var(--ds-color-foreground-text-secondary)]">
                    To
                  </span>
                  <input
                    type="date"
                    value={draftTo}
                    min={minDate ? toInputDateValue(minDate) : undefined}
                    max={maxDate ? toInputDateValue(maxDate) : undefined}
                    onChange={(event) => {
                      setDraftTo(event.target.value)
                      setError('')
                    }}
                    className={DATE_INPUT_CLASSES}
                  />
                </label>
              </div>

              {error && (
                <span className="text-[var(--ds-font-size-xs)] text-[var(--ds-color-background-feedback-error-emphasis)]">
                  {error}
                </span>
              )}

              <Button size="sm" className="w-full" onClick={handleApplyCustom}>
                Apply
              </Button>
            </div>
          </div>

          <Popover.Arrow className="fill-[var(--ds-color-background-surface-overlay)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default DateRangePicker
