import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

// Path: lib/db.ts
// Created at: 21:53:45 - 19/04/2024
// Language: Typescript
// Framework: React/Next.js
