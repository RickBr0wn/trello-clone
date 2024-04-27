import { auth } from '@clerk/nextjs'
import { notFound, redirect } from 'next/navigation'
import { type ReactNode } from 'react'
import { db } from '~/lib/db'
import BoardNavbar from './_components/board-navbar'

type BoardIdLayoutProps = {
  children: ReactNode
  params: { boardId: string }
}

export async function generateMetadata({
  params,
}: {
  params: { boardId: string }
}) {
  const { orgId } = auth()

  if (!orgId) return { title: 'Board' }

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  })

  return { title: board?.title || 'Board' }
}

export default async function BoardIdLayout({
  children,
  params,
}: BoardIdLayoutProps) {
  const { orgId } = auth()

  if (!orgId) return redirect('/select-org')

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  })

  if (!board) return notFound()

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center pt-28"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/20" />
      <main className="relative h-full">{children}</main>
    </div>
  )
}

// Path: app/(platform)/board/[boardId]/layout.tsx
// Created at: 23:28:17 - 26/04/2024
// Language: Typescript
// Framework: React/Next.js
