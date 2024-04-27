'use server'

import { auth } from '@clerk/nextjs'
import { type CreateListInputType, type CreateListOutputType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '~/lib/create-safe-action'
import { CreateList } from './schema'

const handler = async (
  data: CreateListInputType
): Promise<CreateListOutputType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { title, boardId } = data

  let list

  try {
    const board = await db.board.findUnique({ where: { id: boardId, orgId } })

    if (!board) return { error: 'Board not found.' }

    const lastList = await db.list.findFirst({
      where: { boardId },
      orderBy: { order: 'desc' },
      select: { order: true },
    })

    const order = lastList ? lastList.order + 1 : 1

    list = await db.list.create({ data: { title, boardId, order } })
  } catch (error) {
    return { error: 'Failed to create new board.' }
  }

  revalidatePath(`/board/${boardId}`)

  return { data: list }
}

export const createList = createSafeAction(CreateList, handler)

// Path: actions/create-list/index.ts
// Created at: 16:53:30 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
