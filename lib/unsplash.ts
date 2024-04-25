import { createApi } from 'unsplash-js'

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
  fetch: fetch,
})

// Path: lib/unsplash.ts
// Created at: 17:19:59 - 24/04/2024
// Language: Typescript
// Framework: React/Next.js
