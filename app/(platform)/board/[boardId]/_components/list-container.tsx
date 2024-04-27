'use client'

import { type ListWithCards } from '~/types'
import ListForm from './list-form'
import { useEffect, useState } from 'react'
import ListItem from './list-item'

type ListContainerProps = { boardId: string; data: Array<ListWithCards> }

export default function ListContainer({ boardId, data }: ListContainerProps) {
  const [orderedData, setOrderedData] = useState<Array<ListWithCards>>(data)

  useEffect(() => {
    setOrderedData(data)
  }, [data])

  return (
    <ol className="flex  gap-x-3 h-full">
      {orderedData.map((list, index) => (
        <ListItem key={list.id} index={index} data={list} />
      ))}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-container.tsx
// Created at: 15:13:41 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
