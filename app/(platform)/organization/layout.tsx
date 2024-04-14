import { type ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function OrganizationLayout({ children }: LayoutProps) {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        {/* Sidebar **/}
        <div className="w-64 shrink-0 hidden md:block"></div>
      </div>
      {children}
    </main>
  )
}

// Path: app/(platform)/layout.tsx
// Created at: 13:31:52 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
