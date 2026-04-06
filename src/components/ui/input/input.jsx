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
    <div className={cn('flex flex-col gap-[var(--farco-spacing-1)]', className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'text-[var(--farco-font-size-sm)] font-medium font-[var(--farco-font-family-base)] leading-none',
            disabled
              ? 'opacity-[var(--farco-opacity-disabled)] cursor-not-allowed'
              : 'text-[var(--farco-color-neutral-100)]'
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
          'w-full h-[var(--farco-spacing-10)] rounded-[var(--farco-radius-md)] border px-[var(--farco-spacing-4)]',
          'bg-[var(--farco-color-bg-base)] text-[var(--farco-color-neutral-100)]',
          'text-[var(--farco-font-size-sm)] font-[var(--farco-font-family-base)] leading-none',
          'transition-[border-color,box-shadow] duration-150 outline-none',
          // placeholder
          'placeholder:text-[var(--farco-color-neutral-40)]',
          // default border
          !hasError && 'border-[var(--farco-color-neutral-30)]',
          // focus (no error)
          !hasError && 'focus:border-[var(--farco-color-primary)] focus:ring-2 focus:ring-[var(--farco-color-accent)] focus:ring-offset-0',
          // error border + focus
          hasError && 'border-[var(--farco-color-danger)]',
          hasError && 'focus:border-[var(--farco-color-danger)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--farco-color-danger)_30%,transparent)] focus:ring-offset-0',
          // disabled
          'disabled:opacity-[var(--farco-opacity-disabled)] disabled:cursor-not-allowed disabled:bg-[var(--farco-color-neutral-10)]',
          inputClassName
        )}
        {...props}
      />

      {bottomText && (
        <span
          id={`${id}-helper`}
          className={cn(
            'text-[var(--farco-font-size-xs)] font-[var(--farco-font-family-base)] leading-tight',
            hasError
              ? 'text-[var(--farco-color-danger)]'
              : 'text-[var(--farco-color-neutral-50)]'
          )}
        >
          {bottomText}
        </span>
      )}
    </div>
  )
}

export default Input
