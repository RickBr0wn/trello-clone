'use server'

import { revalidatePath } from 'next/cache'
import { db } from '~/lib/db'

export async function deleteBoard(id: string) {
  const deleteBoard = await db.board.delete({ where: { id } })

  //   {
  //   deleteBoard: {
  //     id: 'fe96a562-edb0-46fe-9dfa-d4375a63e763',
  //     title: 'board title #4'
  //   }
  // }
  // console.log({ deleteBoard })

  revalidatePath('/organization/org_2f63lFP45qJuJ7JtXSkNA8MgAM4')
}

// Path: actions/delete-board.ts
// Created at: 22:28:07 - 19/04/2024
// Language: Typescript
// Framework: React/Next.js
