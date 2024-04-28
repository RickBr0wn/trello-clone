'use client'

import { List } from '@prisma/client'
import { ElementRef, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { updateList } from '~/actions/update-list'
import { FormInput } from '~/components/form/form-input'
import { useToast } from '~/components/ui/use-toast'
import { useAction } from '~/hooks/use-action'
import ListOptions from './list-options'

type ListHeaderProps = {
  data: List
  onAddCard: () => void
}

export default function ListHeader({ data, onAddCard }: ListHeaderProps) {
  const [title, setTitle] = useState<string>(data.title)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const formRef = useRef<ElementRef<'form'>>(null)
  const inputRef = useRef<ElementRef<'input'>>(null)

  const { toast } = useToast()

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.select()
    })
  }

  const disableEditing = () => setIsEditing(false)

  const { execute, isLoading } = useAction(updateList, {
    onSuccess: data => {
      toast({ title: 'Success', description: `Renamed to ${data.title}` })
      setTitle(data.title)
      disableEditing()
    },
    onError: error => {
      toast({ title: 'Error', description: error })
    },
  })

  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    const id = formData.get('id') as string
    const boardId = formData.get('boardId') as string

    if (title === data.title) return disableEditing()

    execute({ title, id, boardId })
  }

  const onBlur = () => {
    formRef.current?.requestSubmit()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      formRef.current?.requestSubmit()
    }
  }

  useEventListener('keydown', onKeyDown)

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
      {isEditing ? (
        <form className="flex-1 px-[2px]" ref={formRef} action={handleSubmit}>
          <input hidden id="id" name="id" value={data.id} onChange={() => {}} />
          <input
            hidden
            id="boardId"
            name="boardId"
            value={data.boardId}
            onChange={() => {}}
          />
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id="title"
            placeholder="Enter list title.."
            defaultValue={title}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
          />
          <button type="submit" hidden />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
        >
          {title}
        </div>
      )}
      <ListOptions data={data} onAddCard={onAddCard} />
    </div>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-header.tsx
// Created at: 17:58:16 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
