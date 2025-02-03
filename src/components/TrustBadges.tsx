export default function TrustBadges() {
  return (
    <div className="bg-black py-8 px-4 rounded-lg mb-8">
      <h3 className="text-2xl text-center text-white mb-8">¿Por qué elegirnos?</h3>
      <div className="grid grid-cols-4 gap-6">
        <div className="text-center">
          <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h4 className="text-white font-semibold mb-2">Compra Segura</h4>
          <p className="text-neutral-400 text-sm">Tus datos siempre protegidos</p>
        </div>

        <div className="text-center">
          <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 className="text-white font-semibold mb-2">Productos Originales</h4>
          <p className="text-neutral-400 text-sm">100% autenticidad garantizada</p>
        </div>

        <div className="text-center">
          <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h4 className="text-white font-semibold mb-2">+1000 Clientes</h4>
          <p className="text-neutral-400 text-sm">Confían en nosotros</p>
        </div>

        <div className="text-center">
          <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h4 className="text-white font-semibold mb-2">Soporte 24/7</h4>
          <p className="text-neutral-400 text-sm">Atención personalizada</p>
        </div>
      </div>
    </div>
  )
} 