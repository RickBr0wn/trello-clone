'use server'

import { db } from '~/lib/db'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export type State = {
  errors?: {
    title?: Array<string>
  }
  message?: string | null
  title?: Array<string> | undefined
}

const CreateBoard = z.object({
  title: z.string().min(3, { message: 'Minimum of 3 characters required.' }),
})

export async function createBoard(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  })

  if (!validatedFields.success)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields',
    }

  const { title } = validatedFields.data

  try {
    const createBoard = await db.board.create({ data: { title } })
    // {
    //   createBoard: {
    //     id: '4fe45324-94fa-48f5-9c2a-d21247dba70f',
    //     title: 'board title #1'
    //   }
    // }
    // console.log({ createBoard })
  } catch (error) {
    return { message: 'Database error' }
  }

  revalidatePath('/organization/org_2f63lFP45qJuJ7JtXSkNA8MgAM4')
  redirect('/organization/org_2f63lFP45qJuJ7JtXSkNA8MgAM4')
}

// Path: actions/create-board/create-board.ts
// Created at: 19:24:17 - 22/04/2024
// Language: Typescript
// Framework: React/Next.js
