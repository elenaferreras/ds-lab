import { useState, useId } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'

const ICON_SIZE = 16

/**
 * InputPassword — a specialised password field built on the same visual
 * foundation as Input.  Adds a visibility toggle icon button on the trailing
 * edge, always rendered inside the input box.
 *
 * @param {{
 *   label?: string
 *   placeholder?: string
 *   helperText?: string
 *   error?: string
 *   disabled?: boolean
 *   id?: string
 *   className?: string
 *   inputClassName?: string
 *   footer?: React.ReactNode
 *   value?: string
 *   onChange?: React.ChangeEventHandler<HTMLInputElement>
 *   defaultVisible?: boolean
 *   visible?: boolean
 *   onVisibleChange?: (visible: boolean) => void
 * }} props
 */
export function InputPassword({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  id: externalId,
  className,
  inputClassName,
  footer,
  defaultVisible = false,
  visible,
  onVisibleChange,
  ...props
}) {
  const generatedId = useId()
  const id = externalId ?? generatedId
  const hasError = Boolean(error)
  const bottomText = error || helperText

  const isControlled = visible !== undefined
  const [internalVisible, setInternalVisible] = useState(defaultVisible)
  const isVisible = isControlled ? visible : internalVisible

  function handleToggle() {
    if (disabled) return
    const next = !isVisible
    if (!isControlled) setInternalVisible(next)
    onVisibleChange?.(next)
  }

  return (
    <div className={cn('flex flex-col gap-[var(--ds-spacing-4)]', className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'text-[var(--ds-font-size-sm)] font-medium font-[var(--ds-font-family-body)] leading-none',
            disabled
              ? 'opacity-40 cursor-not-allowed'
              : 'text-[var(--ds-color-foreground-text-primary)]'
          )}
        >
          {label}
        </label>
      )}

      {/* Single bordered shell — toggle lives inside trailing edge */}
      <div
        className={cn(
          'flex w-full items-center gap-[var(--ds-spacing-4)]',
          'h-[var(--ds-spacing-40)] rounded-[var(--ds-radius-md)] border',
          'bg-[var(--ds-color-background-surface-page)]',
          'pr-[var(--ds-spacing-8)]',
          'transition-[border-color,box-shadow] duration-150',
          !hasError && 'border-[var(--ds-color-border-surface-default)]',
          !hasError &&
            'focus-within:border-[var(--ds-color-border-action-focus)] focus-within:ring-2 focus-within:ring-[var(--ds-color-border-action-focus)] focus-within:ring-offset-0',
          hasError && 'border-[var(--ds-color-border-input-error)]',
          hasError &&
            'focus-within:border-[var(--ds-color-border-input-error)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--ds-color-border-input-error)_30%,transparent)] focus-within:ring-offset-0',
          disabled && 'opacity-40 cursor-not-allowed bg-[var(--ds-color-background-surface-subtle)]'
        )}
      >
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={hasError ? true : undefined}
          aria-describedby={bottomText ? `${id}-helper` : undefined}
          className={cn(
            'min-w-0 flex-1 border-0 bg-transparent py-0 pl-[var(--ds-spacing-16)] pr-0 shadow-none outline-none',
            'text-[var(--ds-font-size-sm)] font-[var(--ds-font-family-body)] leading-none',
            'text-[var(--ds-color-foreground-text-primary)]',
            'placeholder:text-[var(--ds-color-foreground-text-disabled)]',
            'disabled:cursor-not-allowed',
            inputClassName
          )}
          {...props}
        />

        <button
          type="button"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            'inline-flex shrink-0 items-center justify-center',
            'h-[var(--ds-spacing-32)] w-[var(--ds-spacing-32)]',
            'rounded-[var(--ds-radius-sm)]',
            'border-0 bg-transparent p-0',
            'text-[var(--ds-color-foreground-text-secondary)]',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-border-action-focus)] focus-visible:ring-offset-0',
            !disabled && 'hover:text-[var(--ds-color-foreground-text-primary)]',
            'disabled:cursor-not-allowed disabled:pointer-events-none'
          )}
        >
          {isVisible ? (
            <EyeSlash size={ICON_SIZE} weight="regular" aria-hidden="true" />
          ) : (
            <Eye size={ICON_SIZE} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      {footer}

      {bottomText && (
        <span
          id={`${id}-helper`}
          className={cn(
            'text-[var(--ds-font-size-xs)] font-[var(--ds-font-family-body)] leading-tight',
            hasError
              ? 'text-[var(--ds-color-background-feedback-error-emphasis)]'
              : 'text-[var(--ds-color-foreground-text-secondary)]'
          )}
        >
          {bottomText}
        </span>
      )}
    </div>
  )
}

export default InputPassword
