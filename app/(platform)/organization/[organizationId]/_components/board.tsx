import { deleteBoard } from '~/actions/delete-board'
import { Button } from '~/components/ui/button'
import FormDelete from './form-delete'

type BoardProps = { id: string; title: string }

export default function Board({ id, title }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id)

  return (
    <form
      action={deleteBoardWithId}
      key={id}
      className="flex items-center gap-x-2"
    >
      <p>{title}</p>
      <FormDelete />
    </form>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/board.tsx
// Created at: 22:22:00 - 19/04/2024
// Language: Typescript
// Framework: React/Next.js
