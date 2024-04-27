import { List } from '@prisma/client'
import ListHeader from './list-header'

type ListItemProps = { index: number; data: List }

export default function ListItem({ index, data }: ListItemProps) {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] text-background shadow-md pb-2">
        <ListHeader data={data} />
      </div>
    </li>
  )
}

// Path: app/(platform)/board/[boardId]/_components/list-item.tsx
// Created at: 17:50:21 - 27/04/2024
// Language: Typescript
// Framework: React/Next.js
