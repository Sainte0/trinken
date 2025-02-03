export default function Features() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Delivery Express */}
          <div className="bg-black/50 p-6 rounded-xl border border-neutral-800 hover:border-red-900 transition-colors">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Delivery Express</h3>
            <p className="text-neutral-400 text-sm">
              Entrega en 30-45 minutos. Bebidas frías y listas para disfrutar.
            </p>
          </div>

          {/* Horario Extendido */}
          <div className="bg-black/50 p-6 rounded-xl border border-neutral-800 hover:border-red-900 transition-colors">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Horario Extendido</h3>
            <p className="text-neutral-400 text-sm">
              Abierto hasta las 3 AM los fines de semana. Siempre listos cuando nos necesites.
            </p>
          </div>

          {/* Productos Premium */}
          <div className="bg-black/50 p-6 rounded-xl border border-neutral-800 hover:border-red-900 transition-colors">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Productos Premium</h3>
            <p className="text-neutral-400 text-sm">
              Garantía de autenticidad en todas nuestras bebidas. Calidad asegurada.
            </p>
          </div>

          {/* Atención Personalizada */}
          <div className="bg-black/50 p-6 rounded-xl border border-neutral-800 hover:border-red-900 transition-colors">
            <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Soporte 24/7</h3>
            <p className="text-neutral-400 text-sm">
              Atención personalizada todos los días. Estamos para ayudarte.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#productos"
            className="inline-flex items-center gap-2 bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('productos')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Ver Catálogo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
} 