import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '~/lib/db'
import ListContainer from './_components/list-container'

type BoardIdPageProps = { params: { boardId: string } }

export default async function BoardIdPage({ params }: BoardIdPageProps) {
  const { orgId } = auth()

  if (!orgId) return redirect('/select-org')

  const lists = await db.list.findMany({
    where: { boardId: params.boardId, board: { orgId } },
    include: { cards: { orderBy: { order: 'asc' } } },
    orderBy: { order: 'asc' },
  })

  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer boardId={params.boardId} data={lists} />
    </div>
  )
}

// Path: app/(platform)/board/[boardId]/page.tsx
// Created at: 23:26:59 - 26/04/2024
// Language: Typescript
// Framework: React/Next.js
