import { type ReactNode } from 'react'

type MarketingLayoutProps = {
  children: ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <>{children}</>
}

// Path: app/(marketing)/layout.tsx
// Created at: 12:16:49 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
