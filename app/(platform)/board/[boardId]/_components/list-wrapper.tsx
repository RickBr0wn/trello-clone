import { type ReactNode } from 'react'

type ListWrapperProps = { children: ReactNode }

export default function ListWrapper({ children }: ListWrapperProps) {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>
}

// Path: app/(platform)/board/[boardId]/_components/list-wrapper.tsx
// Created at: 15:22:52 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
