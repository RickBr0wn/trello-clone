import { type ReactNode } from 'react'
import OrganizationControl from './_components/organization-control'

type OrganizationIdLayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: OrganizationIdLayoutProps) {
  return (
    <div className="">
      <OrganizationControl />
      {children}
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/layout.tsx
// Created at: 16:53:27 - 14/04/2024
// Language: Typescript
// Framework: React/Next.js
