import { useCart } from '@/context/CartContext'

export default function Promotions() {
  const { total } = useCart()

  const promotions = [
    {
      minAmount: 50000,
      benefits: ['1 Bolsa de hielo de 4kg gratis'],
      active: total >= 50000,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      minAmount: 75000,
      benefits: ['Envío gratis', '1 Bolsa de hielo de 4kg gratis'],
      active: total >= 75000,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      )
    },
    {
      minAmount: 100000,
      benefits: ['Envío gratis', '1 Bolsa de hielo de 4kg', '10 Vasos de plástico'],
      active: total >= 100000,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  ]

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">¡Aprovecha Nuestras Promociones!</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {promotions.map((promo, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
              promo.active 
                ? 'bg-red-950/30 border-red-900/50'
                : 'bg-black/30 border-neutral-800/50'
            } border backdrop-blur-sm hover:scale-[1.02] group`}
          >
            {/* Progress indicator */}
            <div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-800 to-red-500 transition-all duration-500"
              style={{ 
                width: `${Math.min(100, (total / promo.minAmount) * 100)}%`,
                opacity: promo.active ? 1 : 0.3
              }}
            />
            
            <div className="p-6">
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                promo.active ? 'bg-red-500/10 text-red-400' : 'bg-neutral-800/30 text-neutral-500'
              }`}>
                {promo.icon}
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-semibold text-white mb-1">
                  ARS ${promo.minAmount.toLocaleString()}
                </div>
                <div className={`text-sm ${promo.active ? 'text-red-400' : 'text-neutral-400'}`}>
                  {total >= promo.minAmount 
                    ? '¡Promoción desbloqueada!' 
                    : `Faltan $${(promo.minAmount - total).toLocaleString()}`}
                </div>
              </div>

              <ul className="space-y-2">
                {promo.benefits.map((benefit, i) => (
                  <li 
                    key={i}
                    className="flex items-center gap-2 text-sm"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-4 h-4 ${promo.active ? 'text-red-500' : 'text-neutral-600'}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={promo.active ? 'text-white' : 'text-neutral-400'}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 