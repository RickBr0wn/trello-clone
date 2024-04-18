'use client'

import { type ReactNode } from 'react'

import { useTheme } from 'next-themes'
import ClerkProvider from './clerk-provider'
import { TooltipProvider } from '../ui/tooltip'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider theme={resolvedTheme as string}>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  )
}

// Path: components/toolkit-components/providers.tsx
// Created at: 15:54:44 - 18/04/2024
// Language: Typescript
// Framework: React/Next.js
