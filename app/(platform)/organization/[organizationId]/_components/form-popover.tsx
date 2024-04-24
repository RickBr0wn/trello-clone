'use client'

import { Cross1Icon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
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

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: data => {
      console.log(data)
      toast({
        title: 'Success',
        description: 'Board created.',
      })
    },
    onError: error => {
      console.log(error)
    },
  })

  const onSubmitAction = (formData: FormData) => {
    execute({ title: formData.get('title') as string })
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
        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-2 right-2"
          >
            <Cross1Icon className="h-2 w-4" />
          </Button>
        </PopoverClose>
        <form className="space-y-2" action={onSubmitAction}>
          <div>
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
