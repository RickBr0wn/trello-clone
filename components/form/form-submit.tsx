'use client'

import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '~/components/ui/button'

type FormSubmitProps = {
  children: ReactNode
  disabled?: boolean
  className?: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
}

export default function FormSubmit({
  children,
  disabled,
  className,
  variant,
}: FormSubmitProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      variant={variant}
      size="sm"
      disabled={pending || disabled}
      type="submit"
    >
      {children}
    </Button>
  )
}

// Path: components/form/form-submit.tsx
// Created at: 11:47:19 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
