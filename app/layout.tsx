import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '~/lib/utils'
import { ThemeProvider } from '~/components/toolkit-components/theme-provider'
import ScreenSizeIndicator from '~/components/toolkit-components/screen-size-indicator'
import NavBar from '~/components/toolkit-components/nav-bar'
import { Toaster } from '~/components/ui/toaster'
import { TooltipProvider } from '~/components/ui/tooltip'
import { ClerkProvider } from '@clerk/nextjs'
import { siteConfig } from '~/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('min-h-screen font-sans antialiased', inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <TooltipProvider>
              {/* <ScreenSizeIndicator /> */}
              <NavBar />
              <div>{children}</div>
              <Toaster />
            </TooltipProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

// Path: app/layout.tsx
// Language: Typescript
// Framework: React/Next.js
