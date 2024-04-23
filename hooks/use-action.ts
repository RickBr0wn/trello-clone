import { useCallback, useState } from 'react'
import { ActionState, FieldErrors } from '~/lib/create-safe-action'

export type Action<T_Input, T_Output> = (
  data: T_Input
) => Promise<ActionState<T_Input, T_Output>>

type UseActionOptions<T_Output> = {
  onSuccess?: (data: T_Output) => void
  onError?: (error: string) => void
  onComplete?: () => void
}

export const useAction = <T_Input, T_Output>(
  action: Action<T_Input, T_Output>,
  options: UseActionOptions<T_Output> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<T_Input> | undefined
  >(undefined)
  const [error, setError] = useState<string | undefined>(undefined)
  const [data, setData] = useState<T_Output | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const execute = useCallback(
    async (input: T_Input) => {
      setIsLoading(true)

      try {
        const result = await action(input)

        if (!result) {
          return
        }

        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors)
        }

        if (result.error) {
          setError(result.error)
          options.onError?.(result.error)
        }

        if (result.data) {
          setData(result.data)
          options.onSuccess?.(result.data)
        }
      } finally {
        setIsLoading(false)
        options.onComplete?.()
      }
    },
    [action, options]
  )

  return { execute, fieldErrors, error, data, isLoading }
}

// Path: hooks/use-action.ts
// Created at: 09:55:15 - 21/04/2024
// Language: Typescript
// Framework: React/Next.js
