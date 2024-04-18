import { create } from 'zustand'

type MobileSideBarStore = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useMobileSideBar = create<MobileSideBarStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

// Path: hooks/use-mobile-sidebar.ts
// Created at: 14:43:26 - 18/04/2024
// Language: Typescript
// Framework: React/Next.js
