'use client'

import { useOrganization } from '@clerk/nextjs'
import { IdCardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { Skeleton } from '~/components/ui/skeleton'

export default function Info() {
  const { organization, isLoaded } = useOrganization()

  if (!isLoaded) return <Info.Skeleton />

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md object-cover"
          priority
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <IdCardIcon className="h-3 w-3 mr-1" />
          Free Tier
        </div>
      </div>
    </div>
  )
}

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]" />
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/info.tsx
// Created at: 12:04:07 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
