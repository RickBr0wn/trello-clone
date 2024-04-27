'use server'

import { auth } from '@clerk/nextjs'
import { type CreateBoardInputType, type CreateBoardReturnType } from './types'
import { db } from '~/lib/db'
import { revalidatePath } from 'next/cache'
import { CreateBoard } from './schema'
import { createSafeAction } from '~/lib/create-safe-action'

const handler = async (
  data: CreateBoardInputType
): Promise<CreateBoardReturnType> => {
  const { userId, orgId } = auth()

  if (!userId || !orgId) {
    return { error: 'Unauthorized.' }
  }

  const { title, image } = data

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split('|')

  console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUserName,
  })

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageLinkHTML ||
    !imageUserName
  ) {
    return { error: 'Missing fields. Failed to create board.' }
  }

  let board

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName,
      },
    })
  } catch (error) {
    return { error: 'Falied to create board.' }
  }

  revalidatePath(`/board/${board.id}`)

  return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)

// Path: actions/create-board/index.ts
// Created at: 09:34:51 - 21/04/2024
// Language: Typescript
// Framework: React/Next.js
