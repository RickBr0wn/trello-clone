'use client'

import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons'
import {
  type ElementRef,
  forwardRef,
  type KeyboardEventHandler,
  useRef,
} from 'react'
import { Button } from '~/components/ui/button'
import { FormTextarea } from './form-textarea'
import FormSubmit from '~/components/form/form-submit'
import { useParams } from 'next/navigation'
import { useAction } from '~/hooks/use-action'
import { createCard } from '~/actions/create-card'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import { useToast } from '~/components/ui/use-toast'
import FormErrors from '~/components/form/form-errors'

type CardFormProps = {
  listId: string
  isEditing: boolean
  enableEditing: () => void
  disableEditing: () => void
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    const params = useParams()
    const formRef = useRef<ElementRef<'form'>>(null)

    const { toast } = useToast()

    const { execute, fieldErrors } = useAction(createCard, {
      onSuccess: data => {
        toast({
          title: 'Success',
          description: `The card entitled '${data.title}' has been created.`,
          variant: 'outline',
        })
        formRef.current?.reset()
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

    useOnClickOutside(formRef, disableEditing)
    useEventListener('keydown', onKeyDown)

    const onTextareaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        formRef.current?.requestSubmit()
      }
    }

    const onSubmit = (formData: FormData) => {
      const title = formData.get('title') as string
      const listId = formData.get('listId') as string
      const boardId = params.boardId as string

      execute({ title, listId, boardId })
    }

    if (isEditing) {
      return (
        <form
          className="m-1 py-0.5 px-1 space-y-4"
          ref={formRef}
          action={onSubmit}
        >
          <FormTextarea
            id="title"
            onKeyDown={onTextareaKeyDown}
            ref={ref}
            placeholder="Enter a title for this card.."
          />
          <input
            hidden
            id="listId"
            name="listId"
            value={listId}
            onChange={() => {}}
          />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add Card</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <Cross2Icon className="h-5 w-5" />
            </Button>
            <FormErrors id={listId} errors={fieldErrors} />
          </div>
        </form>
      )
    }

    return (
      <div className="p-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          variant="ghost"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    )
  }
)

CardForm.displayName = 'CardForm'

// Path: app/(platform)/board/[boardId]/_components/card-form.tsx
// Created at: 00:27:21 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
