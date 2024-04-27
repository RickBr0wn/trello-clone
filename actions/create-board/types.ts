import { z } from 'zod'
import { CreateBoard } from './schema'
import { type ActionState } from '~/lib/create-safe-action'
import { type Board } from '@prisma/client'

export type CreateBoardInputType = z.infer<typeof CreateBoard>
export type CreateBoardReturnType = ActionState<CreateBoardInputType, Board>

// Path: actions/create-board/types.ts
// Created at: 09:31:07 - 21/04/2024
// Language: Typescript
// Framework: React/Next.js
