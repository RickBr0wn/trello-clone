import { z } from 'zod'

export const DeleteBoard = z.object({
  id: z.string(),
})

// Path: actions/delete-board/schema.ts
// Created at: 11:58:20 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
