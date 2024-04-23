import { z } from 'zod'

export type FieldErrors<T> = {
  [K in keyof T]?: Array<string>
}

export type ActionState<T_Input, T_Output> = {
  fieldErrors?: FieldErrors<T_Input>
  error?: string | null
  data?: T_Output
}

export const createSafeAction = <T_Input, T_Output>(
  schema: z.Schema<T_Input>,
  handler: (validatedData: T_Input) => Promise<ActionState<T_Input, T_Output>>
) => {
  return async (data: T_Input): Promise<ActionState<T_Input, T_Output>> => {
    const validationResult = schema.safeParse(data)

    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<T_Input>,
      }
    }

    return handler(validationResult.data)
  }
}

// Path: lib/create-safe-action.ts
// Created at: 09:02:03 - 21/04/2024
// Language: Typescript
// Framework: React/Next.js
