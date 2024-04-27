import { z } from 'zod'
import { UpdateList } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { List } from '@prisma/client'

export type UpdateListInputType = z.infer<typeof UpdateList>
export type UpdateListOutputType = ActionState<UpdateListInputType, List>

// Path: actions/update-list/types.ts
// Created at: 18:51:29 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
