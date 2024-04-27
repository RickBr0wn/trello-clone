import { z } from 'zod'
import { DeleteList } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { List } from '@prisma/client'

export type DeleteListInputType = z.infer<typeof DeleteList>
export type DeleteListOutputType = ActionState<DeleteListInputType, List>

// Path: actions/delete-list/types.ts
// Created at: 23:46:40 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
