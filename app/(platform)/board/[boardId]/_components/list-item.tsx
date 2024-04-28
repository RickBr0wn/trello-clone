'use client'

import ListHeader from './list-header'
import { ElementRef, useRef, useState } from 'react'
import { CardForm } from './card-form'
import { cn } from '~/lib/utils'
import { ListWithCards } from '~/types'
import CardItem from './card-item'

type ListItemProps = { index: number; data: ListWithCards }

export default function ListItem({ index, data }: ListItemProps) {
  const textareaRef = useRef<ElementRef<'textarea'>>(null)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const disableEditing = () => setIsEditing(false)

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      textareaRef.current?.focus()
    })
  }

  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] text-background shadow-md pb-2">
        <ListHeader onAddCard={enableEditing} data={data} />
        <ol
          className={cn(
            'mx-1 px-1 py-0.5 flex flex-col gap-y-2',
            data.cards.length > 0 ? 'mt-2' : 'mt-0'
          )}
        >
          {data.cards.map((card, index) => (
            <CardItem index={index} key={card.id} data={card} />
          ))}
        </ol>
        <CardForm
          listId={data.id}
          ref={textareaRef}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-item.tsx
// Created at: 17:50:21 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
