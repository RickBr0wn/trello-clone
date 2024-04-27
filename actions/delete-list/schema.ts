import { z } from 'zod'

export const DeleteList = z.object({
  id: z.string(),
  boardId: z.string(),
})

// Path: actions/delete-list/schema.ts
// Created at: 23:47:14 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
