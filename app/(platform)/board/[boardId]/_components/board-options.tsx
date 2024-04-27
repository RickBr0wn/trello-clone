'use client'

import { Cross2Icon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { deleteBoard } from '~/actions/delete-board'
import { Button } from '~/components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { useToast } from '~/components/ui/use-toast'
import { useAction } from '~/hooks/use-action'

type BoardOptionsProps = { id: string }

export default function BoardOptions({ id }: BoardOptionsProps) {
  const { toast } = useToast()

  const { execute, isLoading } = useAction(deleteBoard, {
    onError: error => {
      toast({
        title: 'Error',
        description: `Failed deleting board #${id}`,
      })
    },
  })

  const onDelete = () => execute({ id })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center pb-4">
          Board Actions
        </div>
        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto p2 absolute top-2 right-2"
          >
            <Cross2Icon className="w-4 h-4" />
          </Button>
        </PopoverClose>
        <Button
          variant="ghost"
          disabled={isLoading}
          onClick={onDelete}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm text-red-500 hover:text-red-500"
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  )
}

// Path: app/(platform)/board/[boardId]/_components/board-options.tsx
// Created at: 11:42:36 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
