import { z } from 'zod'

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: 'Title is required.',
      invalid_type_error: 'Title must be a string.',
    })
    .min(3, { message: 'Title is too short.' }),
  image: z.string({
    required_error: 'Image is required.',
    invalid_type_error: 'Image must be a string.',
  }),
})

// Path: actions/create-board/schema.ts
// Created at: 09:26:34 - 21/04/2024
// Language: Typescript
// Framework: React/Next.js
