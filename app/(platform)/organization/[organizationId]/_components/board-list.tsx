import { PersonIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import Hint from './hint'
import FormPopover from '~/components/form/form-popover'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { db } from '~/lib/db'
import Link from 'next/link'
import { Skeleton } from '~/components/ui/skeleton'

export default async function BoardList() {
  const { orgId } = auth()

  if (!orgId) return redirect('/select-org')

  const boards = await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-400">
        <PersonIcon className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map(board => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover side="right" sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-[180px] bg-neutral-500 rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm text-center">create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={`Free Workspaces can have up to 5 open boards. For unlimited boards, please upgrade this workspace.`}
            >
              <QuestionMarkCircledIcon className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  )
}

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/board-list.tsx
// Created at: 22:42:42 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
