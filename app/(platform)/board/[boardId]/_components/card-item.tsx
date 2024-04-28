import { Card } from '@prisma/client'

type CardItemProps = {
  index: number
  data: Card
}

export default function CardItem({ index, data }: CardItemProps) {
  return (
    <div
      role="button"
      className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
    >
      {data.title}
    </div>
  )
}

// Path: app/(platform)/board/[boardId]/_components/card-item.tsx
// Created at: 10:10:05 - 28/04/2024
// Language: Typescript
// Framework: React/Next.js
