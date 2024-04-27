'use server'

import { createSafeAction } from '~/lib/create-safe-action'
import { UpdateList } from './schema'
import { UpdateListInputType } from './types'
import { auth } from '@clerk/nextjs'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'

const handler = async (data: UpdateListInputType) => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) return { error: 'Unauthorized.' }

  const { title, id, boardId } = data

  let list

  try {
    list = await db.list.update({
      where: { id, boardId, board: { orgId } },
      data: { title },
    })
  } catch (error) {
    return { error: 'Failed to update list title.' }
  }

  revalidatePath(`/board/${id}`)

  return { data: list }
}

export const updateList = createSafeAction(UpdateList, handler)

// Path: actions/update-list/index.ts
// Created at: 18:52:21 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
