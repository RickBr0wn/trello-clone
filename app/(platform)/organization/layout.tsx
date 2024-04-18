import { type ReactNode } from 'react'
import Sidebar from '~/components/sidebar'

type OrganizationLayoutLayoutProps = {
  children: ReactNode
}

export default function OrganizationLayout({
  children,
}: OrganizationLayoutLayoutProps) {
  return (
    <main className="pt-20 min-h-screen md:pt-24 px-4">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}

// Path: app/(platform)/layout.tsx
// Created at: 13:31:52 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
