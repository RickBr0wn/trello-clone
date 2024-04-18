'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMobileSideBar } from '~/hooks/use-mobile-sidebar'
import { Button } from './ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Sheet, SheetContent } from './ui/sheet'
import Sidebar from './sidebar'

export default function MobileSidebar() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const isOpen = useMobileSideBar(state => state.isOpen)
  const onOpen = useMobileSideBar(state => state.onOpen)
  const onClose = useMobileSideBar(state => state.onClose)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!isMounted) return null

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden"
        variant="ghost"
        size="sm"
      >
        <HamburgerMenuIcon className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  )
}

// Path: components/mobile-sidebar.tsx
// Created at: 14:52:41 - 18/04/2024
// Language: Typescript
// Framework: React/Next.js
