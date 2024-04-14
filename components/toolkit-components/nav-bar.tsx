import { currentUser, OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { DarkModeToggle } from './dark-mode-toggle'
import GithubButton from './github-button'
import HomeButton from '../home-button'

export default async function NavBar() {
  const user = await currentUser()

  return (
    <nav className="flex justify-end items-center p-2">
      <div className="flex gap-1">
        {user && <div></div>}
        <HomeButton />
        <GithubButton />
        <DarkModeToggle />
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: { height: 30, width: 30 } } }}
        />
      </div>
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Language: Typescript
// Framework: React/Next.js
