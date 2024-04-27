'use client'

import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons'
import ListWrapper from './list-wrapper'
import { type ElementRef, useRef, useState } from 'react'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import { FormInput } from '~/components/form/form-input'
import { useParams, useRouter } from 'next/navigation'
import FormSubmit from '~/components/form/form-submit'
import { Button } from '~/components/ui/button'
import { useAction } from '~/hooks/use-action'
import { createList } from '~/actions/create-list'
import { useToast } from '~/components/ui/use-toast'

export default function ListForm() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const inputRef = useRef<ElementRef<'input'>>(null)
  const formRef = useRef<ElementRef<'form'>>(null)

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
    })
  }

  const disableEditing = () => setIsEditing(false)

  const { execute, fieldErrors } = useAction(createList, {
    onSuccess: data => {
      toast({
        title: 'Success',
        description: `List ${data.title} has been created.`,
        variant: 'outline',
      })
      disableEditing()
      router.refresh()
    },
    onError: error => {
      toast({ title: 'Error', description: error, variant: 'outline' })
    },
  })

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      disableEditing()
    }
  }

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    const boardId = formData.get('boardId') as string

    execute({ title, boardId })
  }

  useEventListener('keydown', onKeyDown)
  useOnClickOutside(formRef, disableEditing)

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormInput
            id="title"
            errors={fieldErrors}
            ref={inputRef}
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input text-background focus:border-input transition"
            placeholder="Enter list title.."
          />
          <input hidden value={params.boardId} name="boardId" />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add List</FormSubmit>
            <Button
              onClick={disableEditing}
              size="sm"
              variant="ghost"
              className="text-background hover:text-white"
            >
              <Cross2Icon className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className="w-full rounded-md text-background bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-xs"
      >
        <PlusIcon className="mr-2 w-4 h-4" />
        Add a list
      </button>
    </ListWrapper>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-form.tsx
// Created at: 15:22:10 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
