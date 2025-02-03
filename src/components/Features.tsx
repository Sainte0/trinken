export default function Features() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 my-12">
      <div className="flex-1 mx-4 bg-white p-6 rounded-2xl shadow-lg text-center">
        <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">RÁPIDO</h3>
        <p className="text-gray-600">Entrega el mismo día para pedidos antes de las 18:00</p>
      </div>

      <div className="flex-1 mx-4 bg-white p-6 rounded-2xl shadow-lg text-center">
        <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">SEGURO</h3>
        <p className="text-gray-600">Calidad y autenticidad 100% garantizadas</p>
      </div>

      <div className="flex-1 mx-4 bg-white p-6 rounded-2xl shadow-lg text-center">
        <div className="bg-red-950 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">MÉTODOS DE PAGO</h3>
        <p className="text-gray-600">Transferencia bancaria o efectivo</p>
      </div>
    </div>
  )
} 