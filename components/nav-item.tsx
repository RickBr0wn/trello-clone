'use client'

import { cn } from '~/lib/utils'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import Image from 'next/image'
import {
  ActivityLogIcon,
  CardStackPlusIcon,
  GearIcon,
  LayoutIcon,
} from '@radix-ui/react-icons'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

export type Organization = {
  id: string
  slug: string
  imageUrl: string
  name: string
}

type NavItemProps = {
  isActive: boolean
  isExpanded: boolean
  organization: Organization
  onExpand: (id: string) => void
}

type NavItemRoutes = {
  label: string
  icon: ReactNode
  href: string
}

export default function NavItem({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) {
  const routes: Array<NavItemRoutes> = [
    {
      label: 'Boards',
      icon: <LayoutIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity',
      icon: <ActivityLogIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: 'Settings',
      icon: <GearIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: 'Billing',
      icon: <CardStackPlusIcon className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ]

  const router = useRouter()
  const path = usePathname()

  const onClick = (href: string) => router.push(href)

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={organization.imageUrl}
              alt="organization"
              className="rounded-sm object-cover"
              priority
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map(route => (
          <Button
            key={route.href}
            size="sm"
            onClick={() => onClick(route.href)}
            className={cn(
              'w-full font-normal justify-start pl-10 mb-1',
              path === route.href && 'bg-sky-500/10 text-sky-700'
            )}
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

// Path: components/nav-item.tsx
// Created at: 18:05:02 - 14/04/2024
// Language: Typescript
// Framework: React/Next.js
