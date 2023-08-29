import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Co Working Sphere Check Out',
  description: 'Purchase Subscription for Co Working Sphere',
  keywords: 'Co Working Sphere, Co Working Sphere Check Out, Co Working Sphere Subscription',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-indigo-50/20"}>{children}</body>
    </html>
  )
}
