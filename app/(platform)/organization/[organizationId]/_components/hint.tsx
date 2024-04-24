import { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip'

type HintProps = {
  children: ReactNode
  description?: string
  side?: 'left' | 'right' | 'top' | 'bottom'
  sideOffset?: number
}
export default function Hint({
  children,
  description,
  side = 'bottom',
  sideOffset = 0,
}: HintProps) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        sideOffset={sideOffset}
        side={side}
        className="text-xs max-w-[200px] break-words"
      >
        {description}
      </TooltipContent>
    </Tooltip>
  )
}

// Path: app/(platform)/organization/[organizationId]/_components/hint.tsx
// Created at: 22:59:53 - 23/04/2024
// Language: Typescript
// Framework: React/Next.js
