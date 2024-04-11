import { type ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>
}

// Path: app/(platform)/layout.tsx
// Created at: 13:31:52 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
