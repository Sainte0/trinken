import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import Logo from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trinken - Delivery de Bebidas',
  description: 'Delivery de bebidas en Córdoba Capital',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className={`${inter.className} bg-gradient-to-br from-black via-neutral-950 to-red-950/90 min-h-screen flex flex-col overflow-x-hidden`}>
        <CartProvider>
          <Logo />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
} 