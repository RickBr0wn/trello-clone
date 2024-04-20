'use client'

import { useFormState } from 'react-dom'
import { create, State } from '~/actions/create-board'
import FormInput from './form-input'
import FormButton from './form-button'

export default function Form() {
  const errorHandlingInitialState: State = { errors: {}, message: null }
  const [state, dispatch] = useFormState(create, errorHandlingInitialState)

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form.tsx
// Created at: 11:06:28 - 20/04/2024
// Language: Typescript
// Framework: React/Next.js
