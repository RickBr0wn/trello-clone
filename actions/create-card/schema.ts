import { z } from 'zod'

export const CreateCard = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(3, {
      message: 'Title is too short.',
    }),
  boardId: z.string(),
  listId: z.string(),
})

// Path: actions/create-card/schema.ts
// Created at: 09:34:43 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
