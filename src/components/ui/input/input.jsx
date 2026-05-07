import { useId } from 'react'
import { cn } from '../../../lib/cn'

/**
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
 * }} props
 */
export function Input({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  id: externalId,
  className,
  inputClassName,
  ...props
}) {
  const generatedId = useId()
  const id = externalId ?? generatedId
  const hasError = Boolean(error)
  const bottomText = error || helperText

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

      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={hasError ? true : undefined}
        aria-describedby={bottomText ? `${id}-helper` : undefined}
        className={cn(
          // base
          'w-full h-[var(--ds-spacing-40)] rounded-[var(--ds-radius-md)] border px-[var(--ds-spacing-16)]',
          'bg-[var(--ds-color-background-surface-page)] text-[var(--ds-color-foreground-text-primary)]',
          'text-[var(--ds-font-size-sm)] font-[var(--ds-font-family-body)] leading-none',
          'transition-[border-color,box-shadow] duration-150 outline-none',
          // placeholder
          'placeholder:text-[var(--ds-color-foreground-text-disabled)]',
          // default border
          !hasError && 'border-[var(--ds-color-border-surface-default)]',
          // focus (no error)
          !hasError && 'focus:border-[var(--ds-color-border-action-focus)] focus:ring-2 focus:ring-[var(--ds-color-border-action-focus)] focus:ring-offset-0',
          // error border + focus
          hasError && 'border-[var(--ds-color-border-input-error)]',
          hasError && 'focus:border-[var(--ds-color-border-input-error)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ds-color-border-input-error)_30%,transparent)] focus:ring-offset-0',
          // disabled
          'disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--ds-color-background-surface-subtle)]',
          inputClassName
        )}
        {...props}
      />

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

export default Input
