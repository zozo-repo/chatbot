import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lkctc',
  description: 'lkctc site with ai assisted chatbot',
  generator: 'kashish mourya',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
