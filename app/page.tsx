import { Card, CardDescription, CardTitle } from '~/components/ui/card'

export default function Home() {
  return (
    <main>
      <Card className="py-10 px-6">
        <CardTitle className="text-2xl font-bold">shadcn-starter</CardTitle>
        <CardDescription>
          A lightweight starter for Next.JS projects using shadcn-ui
        </CardDescription>
      </Card>
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
