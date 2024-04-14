import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from './ui/button'

export default function HomeButton() {
  return (
    <Link href="/">
      <Button variant="outline" size="icon">
        <HomeIcon className="w-5 h-5" />
      </Button>
    </Link>
  )
}

// Path: components/home-button.tsx
// Created at: 17:29:48 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
