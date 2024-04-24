import { Separator } from '~/components/ui/separator'
import Info from './_components/info'
import BoardList from './_components/board-list'

export default async function OrganizationIdPage() {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator id="test_id" className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  )
}

// Path: app/(platform)/organization/[organizationId]/page.tsx
// Created at: 15:57:32 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
