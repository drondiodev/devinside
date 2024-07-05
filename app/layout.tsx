import type { Metadata } from 'next'

import { fontSans } from '@/lib/fonts'
import cn from '@/lib/utils'

import Footer from '@/components/footer'
import Header from '@/components/header'

import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/constants/index'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME}`,
    template: `%s - ${`${APP_NAME}`}`,
  },
  description: `${APP_DESCRIPTION}`,
  // metadataBase: new URL(`${APP_URL}`),
  authors: [
    {
      name: 'drondiodev',
      url: 'https://github.com/drondiodev',
    },
  ],
  creator: 'drondiodev',
  icons: { icon: '/favicon.ico?v=1' },
  // manifest: `${`${APP_URL}`}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased scroll-smooth',
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
