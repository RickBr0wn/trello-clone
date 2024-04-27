'use client'

import { Board } from '@prisma/client'
import { type ElementRef, useRef, useState } from 'react'
import { updateBoard } from '~/actions/update-board'
import { FormInput } from '~/components/form/form-input'
import { Button } from '~/components/ui/button'
import { useToast } from '~/components/ui/use-toast'
import { useAction } from '~/hooks/use-action'

type BoardTitleFormProps = { data: Board }

export default function BoardTitleForm({ data }: BoardTitleFormProps) {
  const formRef = useRef<ElementRef<'form'>>(null)
  const inputRef = useRef<ElementRef<'input'>>(null)

  const [title, setTitle] = useState<string>(data.title)

  const { toast } = useToast()

  const { execute } = useAction(updateBoard, {
    onSuccess: data => {
      toast({
        title: 'Success',
        description: `Board ${data.title} has been updated.`,
        variant: 'outline',
      })
      setTitle(data.title)
      disableEditing()
    },
    onError: error => {
      toast({
        title: 'Error',
        description: `Board was not edited. Error: ${error}`,
        variant: 'outline',
      })
    },
  })

  const [isEditing, setIsEditing] = useState<boolean>(false)

  const disableEditing = () => {
    setIsEditing(false)
  }

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.select()
    })
  }

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    execute({ title, id: data.id })
  }

  const onBlur = () => formRef.current?.requestSubmit()

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        className="flex items-center gap-x-2"
        ref={formRef}
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    )
  }

  return (
    <Button
      variant="transparent"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
      onClick={enableEditing}
    >
      {title}
    </Button>
  )
}

// Path: app/(platform)/board/[boardId]/_components/board-title-form.tsx
// Created at: 00:06:48 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
