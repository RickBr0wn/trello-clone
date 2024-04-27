import { z } from 'zod'
import { CreateList } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { List } from '@prisma/client'

export type CreateListInputType = z.infer<typeof CreateList>
export type CreateListOutputType = ActionState<CreateListInputType, List>

// Path: actions/create-list/types.ts
// Created at: 16:52:08 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
