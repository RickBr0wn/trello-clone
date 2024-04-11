import { currentUser, UserButton } from '@clerk/nextjs'
import { DarkModeToggle } from './dark-mode-toggle'
import GithubButton from './github-button'

export default async function NavBar() {
  const user = await currentUser()

  return (
    <nav className="flex justify-end items-center p-2">
      {/* puesdo logo **/}
      {/* {user ? (
        <div className="font-bold">
          {user?.firstName + ' ' + user?.lastName || ''}
        </div>
      ) : (
        <div />
      )} */}

      <div className="flex gap-1">
        <GithubButton />
        <DarkModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Language: Typescript
// Framework: React/Next.js
