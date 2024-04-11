import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function Home() {
  const { userId } = auth()

  return (
    <main className="flex flex-col justify-center mt-24">
      <h1 className="text-5xl font-bold text-center">Marketing Page</h1>
      {userId ? null : (
        <div className="flex gap-2 mt-12 w-[250px] mx-auto">
          <Link href="/sign-in" className="w-full">
            <Button className="w-full uppercase">Log In</Button>
          </Link>
        </div>
      )}
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
