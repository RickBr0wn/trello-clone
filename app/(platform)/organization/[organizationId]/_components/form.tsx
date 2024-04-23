'use client'

import FormInput from './form-input'
import FormButton from './form-button'
import { useAction } from '~/hooks/use-action'
import { createBoard } from '~/actions/create-board'

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: data => console.log('SUCCESS: ', data),
    onError: error => console.log('ERROR: ', error),
  })

  const onSubmit = (formData: FormData) =>
    execute({ title: formData.get('title') as string })

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput />
      </div>
      <FormButton />
    </form>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form.tsx
// Created at: 11:06:28 - 20/04/2024
// Language: Typescript
// Framework: React/Next.js
