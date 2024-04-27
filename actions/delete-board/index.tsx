'use server'

import { auth } from '@clerk/nextjs'
import { type DeleteBoardOutputType, type DeleteBoardInputType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '~/lib/create-safe-action'
import { DeleteBoard } from './schema'
import { redirect } from 'next/navigation'

const handler = async (
  data: DeleteBoardInputType
): Promise<DeleteBoardOutputType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { id } = data

  let board

  try {
    board = await db.board.delete({ where: { id, orgId } })
  } catch (error) {
    return { error: 'Failed to delete board.' }
  }

  revalidatePath(`/organization/${orgId}`)
  redirect(`/organization/${orgId}`)
}

export const deleteBoard = createSafeAction(DeleteBoard, handler)

// Path: actions/delete-board/index.tsx
// Created at: 12:02:49 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
