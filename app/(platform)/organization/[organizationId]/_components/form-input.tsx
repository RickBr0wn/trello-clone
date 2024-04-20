'use client'

import { useFormStatus } from 'react-dom'
import { Input } from '~/components/ui/input'

type FormInputProps = { errors?: { title?: Array<string> } }

export default function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus()

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a Board title"
        disabled={pending}
      />
      <div>
        {errors?.title ? (
          <div>
            {errors.title.map((error: string) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form-input.tsx
// Created at: 11:54:40 - 20/04/2024
// Language: Typescript
// Framework: React/Next.js
