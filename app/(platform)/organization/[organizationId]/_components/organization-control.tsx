'use client'

import { useOrganizationList } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function OrganizationControl() {
  const params = useParams()

  const { setActive } = useOrganizationList()

  useEffect(() => {
    if (!setActive) return

    setActive({
      organization: params.organizationId as string,
    })
  }, [setActive, params.organizationId])

  return null
}

// Path: app/(platform)/organization/[organizationId]/_components/organization-control.tsx
// Created at: 16:55:57 - 14/04/2024
// Language: Typescript
// Framework: React/Next.js
