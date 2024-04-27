'use server'

import { auth } from '@clerk/nextjs'
import { type DeleteListOutputType, type DeleteListInputType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '~/lib/create-safe-action'
import { DeleteList } from './schema'

const handler = async (
  data: DeleteListInputType
): Promise<DeleteListOutputType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { id, boardId } = data

  let list

  try {
    list = await db.list.delete({ where: { id, boardId, board: { orgId } } })
  } catch (error) {
    return { error: 'Failed to delete list.' }
  }

  revalidatePath(`/board/${boardId}`)
  return { data: list }
}

export const deleteList = createSafeAction(DeleteList, handler)

// Path: actions/delete-list/index.tsx
// Created at: 23:50:08 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
