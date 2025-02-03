import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function Footer() {
  return (
    <>
      <footer className="bg-black border-t border-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4 font-['Oswald']">TRINKEN</h3>
              <p className="text-neutral-400">
                Delivery de bebidas en Córdoba Capital
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 font-['Oswald']">Links</h3>
              <div className="space-y-2">
                <Link href="/terms" className="block text-neutral-400 hover:text-white">
                  Términos y Condiciones
                </Link>
                <Link href="/privacy" className="block text-neutral-400 hover:text-white">
                  Política de Privacidad
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 font-['Oswald']">Contacto</h3>
              <div className="space-y-2 text-neutral-400">
                <p>Córdoba Capital, Argentina</p>
                <p>Lunes a Domingo 24/7</p>
                <a 
                  href="tel:+5493513099164" 
                  className="block hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +54 9 351 3341366
                  </span>
                </a>
                <a 
                  href="https://www.instagram.com/trinken.arg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @trinken.arg
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400">
            <p>© {new Date().getFullYear()} Trinken. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </>
  )
} 