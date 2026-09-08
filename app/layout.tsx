import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TIS SARL - Thierry Industrie Saucisses',
  description: 'Transformation agroalimentaire au Cameroun - Saucisses, Intrants, Restaurant et Formation TIS VisionLabs 2035.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192' },
    ],
    apple: { url: '/icon.png', sizes: '180x180' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  )
}