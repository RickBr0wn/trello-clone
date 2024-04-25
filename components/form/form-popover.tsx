'use client'

import { Cross1Icon } from '@radix-ui/react-icons'
import { type ElementRef, type ReactNode, useRef } from 'react'
import { createBoard } from '~/actions/create-board'
import { FormInput } from '~/components/form/form-input'
import FormSubmit from '~/components/form/form-submit'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { useToast } from '~/components/ui/use-toast'
import { useAction } from '~/hooks/use-action'
import FormPicker from './form-picker'
import { useRouter } from 'next/navigation'

type FormPopverProps = {
  children: ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

export default function FormPopover({
  children,
  side,
  align,
  sideOffset,
}: FormPopverProps) {
  const { toast } = useToast()
  const router = useRouter()
  const closeRef = useRef<ElementRef<'button'>>(null)

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: data => {
      toast({
        title: 'Success',
        description: 'Board created.',
        variant: 'outline',
      })
      closeRef.current?.click()
      router.push(`/board/${data.id}`)
    },
    onError: error => {
      toast({
        title: 'Error',
        description: `Board did not create. Error: ${error}`,
        variant: 'outline',
      })
    },
  })

  const onSubmitAction = (formData: FormData) => {
    const title = formData.get('title') as string
    const image = formData.get('image') as string

    execute({ title, image })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 p-3 bg-neutral-600"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-300">
          Create board
        </div>
        <PopoverClose asChild ref={closeRef}>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-2 right-2"
          >
            <Cross1Icon className="h-2 w-4" />
          </Button>
        </PopoverClose>
        <form className="space-y-2" action={onSubmitAction}>
          <div>
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board Title"
              type="text"
              errors={fieldErrors}
            />
          </div>
          <FormSubmit className="w-full">CREATE NEW BOARD</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/form-popover.tsx
// Created at: 09:55:28 - 24/04/2024
// Language: Typescript
// Framework: React/Next.js
