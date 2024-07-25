import type { Metadata } from 'next'

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
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className="h-full scroll-smooth text-base antialiased"
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
