import { z } from 'zod'
import { CopyList } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { List } from '@prisma/client'

export type CopyListInputType = z.infer<typeof CopyList>
export type CopyListOutputType = ActionState<CopyListInputType, List>

// Path: actions/copy-list/types.ts
// Created at: 00:05:24 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
