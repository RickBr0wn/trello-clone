'use client'

import { type List } from '@prisma/client'
import { Cross2Icon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { type ElementRef, useRef } from 'react'
import { copyList } from '~/actions/copy-list'
import { deleteList } from '~/actions/delete-list'
import FormSubmit from '~/components/form/form-submit'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Separator } from '~/components/ui/separator'
import { useToast } from '~/components/ui/use-toast'
import { useAction } from '~/hooks/use-action'

type ListOptionsProps = {
  data: List
  onAddCard: () => void
}

export default function ListOptions({ data, onAddCard }: ListOptionsProps) {
  const closeRef = useRef<ElementRef<'button'>>(null)
  const { toast } = useToast()

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: data => {
      toast({
        title: 'Success',
        description: `List ${data.title} deleted.`,
        variant: 'outline',
      })
      closeRef.current?.click()
    },
    onError: error => {
      toast({
        title: 'Error',
        description: error,
        variant: 'outline',
      })
    },
  })

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: data => {
      toast({
        title: 'Success',
        description: `List ${data.title} copied.`,
        variant: 'outline',
      })
      closeRef.current?.click()
    },
    onError: error => {
      toast({
        title: 'Error',
        description: error,
        variant: 'outline',
      })
    },
  })

  const onDelete = (formData: FormData) => {
    const id = formData.get('id') as string
    const boardId = formData.get('boardId') as string

    executeDelete({ id, boardId })
  }

  const onCopy = (formData: FormData) => {
    const id = formData.get('id') as string
    const boardId = formData.get('boardId') as string

    executeCopy({ id, boardId })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="ghost">
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-400 pb-4">
          List Actions
        </div>
        <PopoverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-400"
            variant="ghost"
            ref={closeRef}
          >
            <Cross2Icon className="w-4 h-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant="ghost"
        >
          Add New Card
        </Button>
        <form action={onCopy}>
          <input hidden name="id" id="id" value={data.id} onChange={() => {}} />
          <input
            hidden
            name="boardId"
            id="boardId"
            value={data.boardId}
            onChange={() => {}}
          />
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          >
            Copy this List
          </FormSubmit>
        </form>
        <Separator />
        <form action={onDelete}>
          <input hidden name="id" id="id" value={data.id} onChange={() => {}} />
          <input
            hidden
            name="boardId"
            id="boardId"
            value={data.boardId}
            onChange={() => {}}
          />
          <FormSubmit
            variant="ghost"
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          >
            Delete this List
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-options.tsx
// Created at: 23:17:14 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
