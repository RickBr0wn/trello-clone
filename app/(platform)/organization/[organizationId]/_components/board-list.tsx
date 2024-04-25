import { PersonIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import Hint from './hint'
import FormPopover from '~/components/form/form-popover'

export default function BoardList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-400">
        <PersonIcon className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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

// Path: app/(platform)/organization/[organizationId]/_components/board-list.tsx
// Created at: 22:42:42 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
