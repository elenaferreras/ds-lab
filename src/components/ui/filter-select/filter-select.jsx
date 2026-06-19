import { useCallback, useEffect, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { CheckIcon, FadersHorizontalIcon } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'
import { ControlPillTrigger } from '../shared/control-pill-trigger'
import { Button } from '../button'

const POPOVER_CONTENT_CLASSES = cn(
  'z-50 min-w-[180px] outline-none',
  'rounded-[var(--ds-radius-lg)] border border-[var(--ds-color-border-surface-default)]',
  'bg-[var(--ds-color-background-surface-overlay)]',
  'shadow-[var(--ds-shadow-md)]',
  'py-[var(--ds-spacing-8)] pr-[var(--ds-spacing-8)] pl-0'
)

/**
 * @param {{
 *   value: string
 *   onValueChange: (value: string) => void
 *   options: { value: string, label: string }[]
 *   icon?: React.ReactNode
 *   placeholder?: string
 *   disabled?: boolean
 *   className?: string
 * }} props
 */
export function FilterSelect({
  value,
  onValueChange,
  options = [],
  icon = <FadersHorizontalIcon size={16} weight="regular" />,
  placeholder = 'Filter',
  disabled = false,
  className,
}) {
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const optionRefs = useRef(/** @type {(HTMLButtonElement | null)[]} */ ([]))

  const isEmpty = options.length === 0
  const isDisabled = disabled || isEmpty
  const selectedOption = options.find((option) => option.value === value)
  const displayValue = selectedOption?.label ?? placeholder

  const handleSelect = useCallback(
    (nextValue) => {
      onValueChange(nextValue)
      setOpen(false)
    },
    [onValueChange]
  )

  useEffect(() => {
    if (!open) {
      setFocusedIndex(-1)
      return
    }

    const selectedIndex = options.findIndex((option) => option.value === value)
    setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
  }, [open, options, value])

  useEffect(() => {
    if (open && focusedIndex >= 0) {
      optionRefs.current[focusedIndex]?.focus()
    }
  }, [open, focusedIndex])

  function handleKeyDown(event) {
    if (!open || options.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setFocusedIndex((current) => (current + 1) % options.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setFocusedIndex((current) => (current - 1 + options.length) % options.length)
    } else if (event.key === 'Enter' && focusedIndex >= 0) {
      event.preventDefault()
      handleSelect(options[focusedIndex].value)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setFocusedIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setFocusedIndex(options.length - 1)
    }
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild disabled={isDisabled}>
        <ControlPillTrigger
          icon={icon}
          displayValue={displayValue}
          disabled={isDisabled}
          open={open}
          ariaLabel={`Filter: ${displayValue}`}
          className={className}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className={POPOVER_CONTENT_CLASSES}
          sideOffset={8}
          align="end"
          onKeyDown={handleKeyDown}
        >
          <ul
            className="m-0 flex w-full list-none flex-col gap-[var(--ds-spacing-8)] p-0"
            role="listbox"
            aria-label="Filter options"
          >
            {options.map((option, index) => {
              const isSelected = option.value === value
              const isFocused = index === focusedIndex

              return (
                <li
                  key={option.value}
                  className="w-full"
                  ref={(node) => {
                    optionRefs.current[index] = node?.querySelector('button') ?? null
                  }}
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={isFocused ? 0 : -1}
                    className="w-full justify-between normal-case tracking-normal"
                    iconRight={
                      isSelected ? (
                        <CheckIcon size={14} weight="bold" aria-hidden="true" />
                      ) : undefined
                    }
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setFocusedIndex(index)}
                  >
                    {option.label}
                  </Button>
                </li>
              )
            })}
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default FilterSelect
