import { z } from 'zod'
import { UpdateBoard } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { Board } from '@prisma/client'

export type UpdateBoardInputType = z.infer<typeof UpdateBoard>
export type UpdateBoardOutputType = ActionState<UpdateBoardInputType, Board>
