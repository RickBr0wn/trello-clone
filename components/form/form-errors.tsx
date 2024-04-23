import { CrossCircledIcon } from '@radix-ui/react-icons'

type FormErrorsProps = {
  id: string
  errors?: Record<string, Array<string> | undefined>
}

export default function FormErrors({ id, errors }: FormErrorsProps) {
  if (!errors) return null

  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      className="mt-2 text-xs text-red-500"
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm"
        >
          <CrossCircledIcon className="h-4 w-4 mr-2" />
          {error}
        </div>
      ))}
    </div>
  )
}

// Path: components/form/form-errors.tsx
// Created at: 11:25:28 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
