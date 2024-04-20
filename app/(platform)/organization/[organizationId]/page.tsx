import { db } from '~/lib/db'
import Board from './_components/board'
import Form from './_components/form'

export default async function OrganizationIdPage() {
  const boards = await db.board.findMany()

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map(board => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/page.tsx
// Created at: 15:57:32 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
