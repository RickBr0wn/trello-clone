import { auth } from '@clerk/nextjs'

export default function OrganizationIdPage() {
  const { userId, orgId } = auth()

  return <h1>Org#: {orgId}</h1>
}

// Path: app/(platform)/organization/[organizationId]/page.tsx
// Created at: 15:57:32 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
