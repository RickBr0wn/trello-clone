'use client'

import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { useLocalStorage } from 'usehooks-ts'
import { Skeleton } from './ui/skeleton'
import { Button } from './ui/button'
import Link from 'next/link'
import { PlusIcon } from '@radix-ui/react-icons'
import { Accordion } from './ui/accordion'
import NavItem, { Organization } from './nav-item'

type SidebarProps = {
  storageKey?: string
}

export default function Sidebar({
  storageKey = 't-sidebar-state',
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  )

  const { organization: activeOrganization, isLoaded: isLoadedOrganization } =
    useOrganization()

  const { userMemberships, isLoaded: isLoadedOrganizationList } =
    useOrganizationList({ userMemberships: { infinite: true } })

  const defaultAccordianValue: Array<string> = Object.keys(expanded).reduce(
    (acc: Array<string>, key: string) => {
      if (expanded[key]) {
        acc.push(key)
      }
      return acc
    },
    []
  )

  const onExpand = (id: string) => {
    setExpanded(curr => ({ ...curr, [id]: !expanded[id] }))
  }

  if (
    !isLoadedOrganization ||
    !isLoadedOrganizationList ||
    userMemberships.isLoading
  ) {
    return (
      <>
        <Skeleton />
      </>
    )
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>

        <Button variant="ghost" asChild size="icon" className="ml-auto">
          <Link href="/select-org">
            <PlusIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div>
        <Accordion
          type="multiple"
          defaultValue={defaultAccordianValue}
          className="space-y-2"
        >
          {userMemberships.data.map(({ organization }) => (
            <NavItem
              key={organization.id}
              isActive={activeOrganization?.id === organization.id}
              isExpanded={expanded[organization.id]}
              organization={organization as Organization}
              onExpand={onExpand}
            />
          ))}
        </Accordion>
      </div>
    </>
  )
}

// Path: components/sidebar.tsx
// Created at: 17:08:20 - 14/04/2024
// Language: Typescript
// Framework: React/Next.js
