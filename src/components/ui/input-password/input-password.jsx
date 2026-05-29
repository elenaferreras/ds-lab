import { useState, useId } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { cn } from '../../../lib/cn'

/**
 * InputPassword — a specialised password field built on the same visual
 * foundation as Input.  Adds a visibility toggle button (Eye / EyeSlash)
 * that supports both controlled and uncontrolled state.
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
  // visibility API
  defaultVisible = false,
  visible,
  onVisibleChange,
  ...props
}) {
  const generatedId = useId()
  const id = externalId ?? generatedId
  const hasError = Boolean(error)
  const bottomText = error || helperText

  // ── Visibility state ──────────────────────────────────────────────────────
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
      {/* Label */}
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

      {/* Input row — relative wrapper so the toggle can be absolutely placed */}
      <div className="relative">
        <input
          id={id}
          type={isVisible ? 'text' : 'password'}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={hasError ? true : undefined}
          aria-describedby={bottomText ? `${id}-helper` : undefined}
          className={cn(
            // base layout
            'w-full h-[var(--ds-spacing-40)] rounded-[var(--ds-radius-md)] border',
            'pl-[var(--ds-spacing-16)] pr-[var(--ds-spacing-40)]',
            'bg-[var(--ds-color-background-surface-page)] text-[var(--ds-color-foreground-text-primary)]',
            'text-[var(--ds-font-size-sm)] font-[var(--ds-font-family-body)] leading-none',
            'transition-[border-color,box-shadow] duration-150 outline-none',
            // placeholder
            'placeholder:text-[var(--ds-color-foreground-text-disabled)]',
            // default border
            !hasError && 'border-[var(--ds-color-border-surface-default)]',
            // focus — no error
            !hasError &&
              'focus:border-[var(--ds-color-border-action-focus)] focus:ring-2 focus:ring-[var(--ds-color-border-action-focus)] focus:ring-offset-0',
            // error border + focus ring
            hasError && 'border-[var(--ds-color-border-input-error)]',
            hasError &&
              'focus:border-[var(--ds-color-border-input-error)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ds-color-border-input-error)_30%,transparent)] focus:ring-offset-0',
            // disabled
            'disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--ds-color-background-surface-subtle)]',
            inputClassName
          )}
          {...props}
        />

        {/* Visibility toggle */}
        <button
          type="button"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            // position — flush to the right edge, vertically centred
            'absolute inset-y-0 right-0',
            'flex items-center justify-center',
            'w-[var(--ds-spacing-40)]',
            // shape — match the right-side radius of the input
            'rounded-r-[var(--ds-radius-md)]',
            // colour
            'text-[var(--ds-color-foreground-text-secondary)]',
            'transition-colors duration-150',
            // focus ring
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-border-action-focus)] focus-visible:ring-inset',
            // hover
            !disabled && 'hover:text-[var(--ds-color-foreground-text-primary)]',
            // disabled
            'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none'
          )}
        >
          {isVisible ? (
            <EyeSlash size={16} weight="regular" aria-hidden="true" />
          ) : (
            <Eye size={16} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Helper / error text */}
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
