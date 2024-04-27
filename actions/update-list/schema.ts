import { z } from 'zod'

export const UpdateList = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(3, {
      message: 'Title is too short.',
    }),
  id: z.string(),
  boardId: z.string(),
})

// Path: actions/update-list/schema.ts
// Created at: 18:50:25 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
