'use server'

import { auth } from '@clerk/nextjs'
import { type UpdateBoardOutputType, type UpdateBoardInputType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '~/lib/create-safe-action'
import { UpdateBoard } from './schema'

const handler = async (
  data: UpdateBoardInputType
): Promise<UpdateBoardOutputType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { title, id } = data

  let board

  try {
    board = await db.board.update({ where: { id, orgId }, data: { title } })
  } catch (error) {
    return { error: 'Failed to update board.' }
  }

  revalidatePath(`/board/${id}`)

  return { data: board }
}

export const updateBoard = createSafeAction(UpdateBoard, handler)

// Path: actions/update-board/index.ts
// Created at: 00:35:01 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
