import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext'
import AgeVerification from '@/components/AgeVerification'
import WhatsAppButton from '@/components/WhatsAppButton'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tienda de Bebidas",
  description: "Tu tienda favorita de bebidas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-900`}>
        <CartProvider>
          <AgeVerification />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
