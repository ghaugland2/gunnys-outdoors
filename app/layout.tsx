import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Gunny's Outdoors",
  description: 'Professional e-commerce website for custom fishing rods and outdoor gear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
