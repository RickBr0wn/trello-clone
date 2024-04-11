import { ReactNode } from 'react'

type AuthenticationComponentsLayoutProps = {
  children: ReactNode
}
export default function Layout({
  children,
}: AuthenticationComponentsLayoutProps) {
  return (
    <div className="mt-12 w-full flex justify-center items-center">
      {children}
    </div>
  )
}

// Path: app/(auth)/layout.tsx
// Created at: 14:15:48 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
