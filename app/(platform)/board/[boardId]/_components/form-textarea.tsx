'use client'

import { forwardRef, type KeyboardEventHandler } from 'react'
import { useFormStatus } from 'react-dom'
import { string } from 'zod'
import FormErrors from '~/components/form/form-errors'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import { cn } from '~/lib/utils'

type FormTextareaProps = {
  id: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, Array<string> | undefined>
  className?: string
  onBlur?: () => void
  onClick?: () => void
  onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> | undefined
  defaultValue?: string
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    {
      id,
      label,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onKeyDown,
      defaultValue,
    },
    ref
  ) => {
    const { pending } = useFormStatus()

    return (
      <div className="space-y-2 w-full">
        <div className="space-y-1 w-full">
          {label ? (
            <Label
              htmlFor="id"
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <Textarea
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onClick={onClick}
            ref={ref}
            required={required}
            placeholder={placeholder}
            name={id}
            id={id}
            disabled={pending || disabled}
            className={cn(
              'resize-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 outline-none shadow-sm',
              className
            )}
            aria-describedby={`${id}-error`}
            defaultValue={defaultValue}
          />
          <FormErrors id={id} errors={errors} />
        </div>
      </div>
    )
  }
)

FormTextarea.displayName = 'FormTextarea'

// Path: app/(platform)/board/[boardId]/_components/form-textarea.tsx
// Created at: 08:40:12 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
