import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="mt-12 w-full flex justify-center items-center">
      <SignUp />
    </div>
  )
}

// Path: app/(auth)/sign-up/[[...sign-up]]/page.tsx
// Created at: 13:37:04 - 11/04/2024
// Language: Typescript
// Framework: React/Next.js
