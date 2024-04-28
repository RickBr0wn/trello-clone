import { z } from 'zod'
import { CreateCard } from './schema'
import { ActionState } from '~/lib/create-safe-action'
import { Card } from '@prisma/client'

export type CreateCardInputType = z.infer<typeof CreateCard>
export type CreateCardOutputType = ActionState<CreateCardInputType, Card>

// Path: actions/create-card/types.ts
// Created at: 09:36:33 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
