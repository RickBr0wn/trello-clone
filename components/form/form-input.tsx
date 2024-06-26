'use client'

import { forwardRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import FormErrors from './form-errors'

type FormInputProps = {
  id: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  errors?: Record<string, Array<string> | undefined>
  className?: string
  defaultValue?: string
  onBlur?: () => void
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = '',
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus()

    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <div>
              <Label
                htmlFor="id"
                className="font-xs font-semibold text-neutral-400"
              >
                {label}
              </Label>
            </div>
          ) : null}
          <Input
            onBlur={onBlur}
            defaultValue={defaultValue}
            required={required}
            ref={ref}
            name={id}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={pending || disabled}
            className={cn('text-sm px-2 py-1 h-7', className)}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'
// Path: components/form/form-input.tsx
// Created at: 10:48:29 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
