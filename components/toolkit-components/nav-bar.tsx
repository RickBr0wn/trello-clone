import { DarkModeToggle } from './dark-mode-toggle'
import GithubButton from './github-button'

export default function NavBar() {
  return (
    <nav className="flex justify-end p-2 gap-2">
      <GithubButton />
      <DarkModeToggle />
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Language: Typescript
// Framework: React/Next.js
