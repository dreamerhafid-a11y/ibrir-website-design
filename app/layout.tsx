import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'IbrirMed Promotion — Promoteur & constructeur immobilier à Oran',
  description:
    'IbrirMed Promotion (SARL Ibrir Med), promoteur et constructeur immobilier à Oran. Appartements, duplex et locaux : Résidence Les Jardins d'Acil, Résidence Ibrir à Bir El Djir, Les Terrasses d’Aïn El Turk.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-ibrir.jpg',
    apple: '/images/logo-ibrir.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1478ff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${archivo.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
