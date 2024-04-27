import { currentUser, OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { DarkModeToggle } from './dark-mode-toggle'
import GithubButton from './github-button'
import HomeButton from '../home-button'
import { Button } from '../ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import MobileSidebar from '../mobile-sidebar'
import FormPopover from '../form/form-popover'

export default async function NavBar() {
  const user = await currentUser()

  return (
    <nav className="flex items-center p-2 fixed w-full z-10 bg-background">
      <MobileSidebar />
      <div className="flex gap-1 w-full justify-between">
        {user && (
          <div className="flex items-center">
            <FormPopover>
              <Button variant="outline" className="block md:hidden">
                <PlusIcon />
              </Button>
            </FormPopover>
            <FormPopover align="start" side="bottom" sideOffset={18}>
              <Button variant="outline" className="hidden md:block uppercase">
                Create
              </Button>
            </FormPopover>
          </div>
        )}
        <div className="flex items-center">
          {/* <HomeButton /> */}
          <GithubButton />
          <DarkModeToggle />
        </div>
        <div className="flex">
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
      </div>
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Language: Typescript
// Framework: React/Next.js
