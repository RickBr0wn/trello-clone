import { Board } from '@prisma/client'
import BoardTitleForm from './board-title-form'
import BoardOptions from './board-options'

type BoardNavbarProps = {
  data: Board
}

export default async function BoardNavbar({ data }: BoardNavbarProps) {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-[52px] flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  )
}

// Path: app/(platform)/board/[boardId]/_components/board-navbar.tsx
// Created at: 23:52:07 - 26/04/2024
// Language: Typescript
// Framework: React/Next.js
