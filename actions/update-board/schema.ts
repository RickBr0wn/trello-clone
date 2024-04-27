import { z } from 'zod'

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(3, {
      message: 'Title is too short.',
    }),
  id: z.string(),
})

// Path: actions/update-board/schema.ts
// Created at: 00:30:29 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
