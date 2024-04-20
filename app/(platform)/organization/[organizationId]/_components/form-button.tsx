import { useFormStatus } from 'react-dom'
import { Button } from '~/components/ui/button'

export default function FormButton() {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} type="submit">
      submit
    </Button>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form-button.tsx
// Created at: 12:08:12 - 20/04/2024
// Language: Typescript
// Framework: React/Next.js
