'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '~/components/ui/button'

export default function FormDelete() {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit" variant="destructive" size="sm">
      delete
    </Button>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form-delete.tsx
// Created at: 12:11:53 - 20/04/2024
// Language: Typescript
// Framework: React/Next.js
