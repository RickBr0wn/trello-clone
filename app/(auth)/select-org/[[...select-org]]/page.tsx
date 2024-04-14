import { OrganizationList } from '@clerk/nextjs'

export default function SelectOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={'/organization/:id'}
      afterCreateOrganizationUrl={'/organization/:id'}
    />
  )
}

// Path: app/(auth)/select-org/[[...select-org]]/page.tsx
// Created at: 15:50:28 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
