import { z } from 'zod'
import { DeleteBoard } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { Board } from '@prisma/client'

export type DeleteBoardInputType = z.infer<typeof DeleteBoard>
export type DeleteBoardOutputType = ActionState<DeleteBoardInputType, Board>

// Path: actions/delete-board/types.ts
// Created at: 11:59:31 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
