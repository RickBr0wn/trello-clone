import { z } from 'zod'

export const CreateList = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(3, {
      message: 'Title is too short.',
    }),
  boardId: z.string(),
})

// Path: actions/create-list/schema.ts
// Created at: 16:51:35 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
