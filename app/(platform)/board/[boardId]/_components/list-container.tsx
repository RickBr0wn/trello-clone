'use client'

import { ListWithCards } from '~/types'
import ListForm from './list-form'

type ListContainerProps = { boardId: string; data: Array<ListWithCards> }

export default function ListContainer({ boardId, data }: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-container.tsx
// Created at: 15:13:41 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
