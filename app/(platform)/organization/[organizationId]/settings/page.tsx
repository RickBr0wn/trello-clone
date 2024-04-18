import { OrganizationProfile } from '@clerk/nextjs'

export default function SettingsPage() {
  return (
    <div className="w-full mx-auto">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: { boxShadow: 'none', width: '100%' },
            card: {
              width: '100%',
            },
          },
        }}
      />
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/settings/page.tsx
// Created at: 15:39:52 - 18/04/2024
// Language: Typescript
// Framework: React/Next.js
