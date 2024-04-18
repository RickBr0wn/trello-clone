import { ClerkProvider as _ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'

type ClerkProviderProps = {
  children: ReactNode
  theme: string
}
export default function ClerkProvider({ children, theme }: ClerkProviderProps) {
  return (
    <_ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
      }}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </_ClerkProvider>
  )
}
// Path: components/toolkit-components/clerk-provider.tsx
// Created at: 15:51:12 - 18/04/2024
// Language: Typescript
// Framework: React/Next.js
