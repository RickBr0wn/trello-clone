import { z } from 'zod'

export const CopyList = z.object({
  id: z.string(),
  boardId: z.string(),
})

// Path: actions/copy-list/schema.ts
// Created at: 00:05:12 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
