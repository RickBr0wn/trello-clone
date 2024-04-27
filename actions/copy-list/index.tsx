'use server'

import { auth } from '@clerk/nextjs'
import { type CopyListOutputType, type CopyListInputType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '~/lib/create-safe-action'
import { CopyList } from './schema'
import { orderBy } from 'lodash'

const handler = async (
  data: CopyListInputType
): Promise<CopyListOutputType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { id, boardId } = data

  let list

  try {
    const listToCopy = await db.list.findUnique({
      where: { id, boardId, board: { orgId } },
      include: { cards: true },
    })

    if (!listToCopy) return { error: 'Unable to copy. List not found.' }

    const lastList = await db.list.findFirst({
      where: { boardId },
      orderBy: { order: 'desc' },
      select: { order: true },
    })

    const newOrder = lastList ? lastList.order + 1 : 1

    list = await db.list.create({
      data: {
        boardId: listToCopy.boardId,
        title: `${listToCopy.title} - copy`,
        order: newOrder,
        cards: {
          createMany: {
            data: listToCopy.cards.map(card => ({
              title: card.title,
              description: card.description,
              order: card.order,
            })),
          },
        },
      },
      include: { cards: true },
    })
  } catch (error) {
    return { error: 'Failed to copy list.' }
  }

  revalidatePath(`/board/${boardId}`)
  return { data: list }
}

export const copyList = createSafeAction(CopyList, handler)

// Path: actions/delete-list/index.tsx
// Created at: 23:50:08 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
