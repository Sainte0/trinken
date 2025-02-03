'use client'
import { useCart } from '@/context/CartContext'
import { useState, useEffect } from 'react'

type ShippingInfo = {
  name: string;
  address: string;
  phone: string;
  notes: string;
}

export default function Cart() {
  const { items, updateQuantity, removeFromCart } = useCart()
  const [showForm, setShowForm] = useState(false)
  const [isCartVisible, setIsCartVisible] = useState(true)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    phone: '',
    notes: ''
  })
  
  // Add/remove cart-open class to body when cart visibility changes
  useEffect(() => {
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
      if (isCartVisible) {
        whatsappButton.classList.add('hidden');
      } else {
        whatsappButton.classList.remove('hidden');
      }
    }
  }, [isCartVisible]);

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleProceedToForm = () => {
    if (items.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    setShowForm(true);
  }

  const handleSubmitOrder = () => {
    // Check if all required fields are filled
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.phone) {
      alert('Por favor complete todos los campos obligatorios (*)');
      return;
    }

    try {
      // Prepare order details
      const orderItems = items
        .map(item => `${item.quantity}x ${item.product.title} (ARS $${item.product.price.toLocaleString()})`)
        .join('\n')
      
      // Get active promotions based on total
      let activePromotions: string[] = [];
      if (total >= 100000) {
        activePromotions = ['Envío gratis', '1 Bolsa de hielo de 4kg', '10 Vasos de plástico'];
      } else if (total >= 75000) {
        activePromotions = ['Envío gratis', '1 Bolsa de hielo de 4kg'];
      } else if (total >= 50000) {
        activePromotions = ['1 Bolsa de hielo de 4kg gratis'];
      }

      // Add promotions to message if any are active
      const promotionsMessage = activePromotions.length > 0 
        ? `\n\nPromociones Aplicadas:\n${activePromotions.map(promo => `✓ ${promo}`).join('\n')}`
        : '';
      
      const shippingDetails = `
Datos de Envío:
Nombre: ${shippingInfo.name}
Dirección: ${shippingInfo.address}
Teléfono: ${shippingInfo.phone}
Notas: ${shippingInfo.notes}`

      const totalMessage = `\n\nTotal: ARS $${total.toLocaleString()}`
      
      const message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${orderItems}${totalMessage}${promotionsMessage}\n${shippingDetails}`
      
      // Double encode to handle special characters better
      const whatsappMessage = encodeURIComponent(message).replace(/%20/g, ' ')

      // Make sure the message is not empty and properly encoded
      if (!whatsappMessage || whatsappMessage.trim() === '') {
        throw new Error('Error al preparar el mensaje');
      }

      // Create the WhatsApp URL
      const whatsappUrl = `https://wa.me/5493513341366?text=${whatsappMessage}`

      // Show loading state to user
      const loadingMessage = document.createElement('div')
      loadingMessage.style.position = 'fixed'
      loadingMessage.style.top = '50%'
      loadingMessage.style.left = '50%'
      loadingMessage.style.transform = 'translate(-50%, -50%)'
      loadingMessage.style.background = 'rgba(0, 0, 0, 0.8)'
      loadingMessage.style.color = 'white'
      loadingMessage.style.padding = '1rem'
      loadingMessage.style.borderRadius = '0.5rem'
      loadingMessage.style.zIndex = '9999'
      loadingMessage.textContent = 'Preparando mensaje...'
      document.body.appendChild(loadingMessage)

      // Open WhatsApp with a longer delay to ensure message is ready
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        setShowForm(false)
        setIsCartVisible(false)
        document.body.removeChild(loadingMessage)
      }, 500)

    } catch (error) {
      alert('Hubo un error al procesar tu pedido. Por favor intenta nuevamente.')
      console.error('Checkout error:', error)
    }
  }

  const isFormValid = shippingInfo.name && shippingInfo.address && shippingInfo.phone

  return (
    <div className="lg:relative">
      {/* Mobile Cart Toggle Button - Always visible */}
      <button 
        onClick={() => setIsCartVisible(!isCartVisible)}
        className="fixed bottom-4 left-4 z-[60] lg:hidden bg-red-900 text-white p-3 rounded-full shadow-lg hover:bg-red-800 transition-colors"
      >
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {items.length}
            </span>
          )}
        </div>
      </button>

      {/* Cart Container */}
      <div className={`fixed bottom-0 left-0 right-0 lg:relative lg:w-64 bg-black text-neutral-300 p-4 rounded-lg border border-neutral-800 z-50 transition-transform duration-300 ease-in-out ${!isCartVisible ? 'translate-y-full lg:translate-y-0' : 'translate-y-0'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-red-800">CARRITO</h2>
          <button 
            onClick={() => setIsCartVisible(false)}
            className="lg:hidden text-neutral-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {items.length === 0 ? (
          <p className="text-neutral-400">Tu carrito está vacío</p>
        ) : (
          <div className="space-y-4 max-h-[30vh] md:max-h-[40vh] lg:max-h-[70vh] overflow-y-auto pr-2">
            {items.map(item => (
              <div key={item.product.id} className="flex flex-col gap-1 border-b border-neutral-800 pb-2">
                <h3 className="font-semibold text-neutral-200 text-sm lg:text-base">{item.product.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2 py-0.5 lg:py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm lg:text-base">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2 py-0.5 lg:py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-400 text-sm lg:text-base"
                  >
                    Eliminar
                  </button>
                </div>
                <p className="text-amber-500 text-sm lg:text-base">
                  ARS ${(item.product.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
            
            <div className="border-t border-neutral-800 pt-4 mt-4 sticky bottom-0 bg-black">
              <p className="font-bold text-amber-500">
                Total: ARS ${total.toLocaleString()}
              </p>
            </div>

            {!showForm ? (
              <button 
                onClick={handleProceedToForm}
                className="w-full bg-red-900 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-red-800"
              >
                Proceder al Pago
              </button>
            ) : (
              <div className="space-y-3 mt-4">
                <h3 className="font-bold text-red-800">Información de Envío</h3>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre Completo *"
                    value={shippingInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded border border-neutral-800 bg-neutral-900 text-neutral-200 focus:border-red-800 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Dirección de Entrega *"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded border border-neutral-800 bg-neutral-900 text-neutral-200 focus:border-red-800 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Número de Teléfono *"
                    value={shippingInfo.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded border border-neutral-800 bg-neutral-900 text-neutral-200 focus:border-red-800 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="notes"
                    placeholder="Notas Adicionales"
                    value={shippingInfo.notes}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded border border-neutral-800 bg-neutral-900 text-neutral-200 focus:border-red-800 focus:outline-none"
                    rows={2}
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-neutral-700 text-neutral-200 py-2 rounded-lg hover:bg-neutral-600"
                  >
                    Volver
                  </button>
                  <button 
                    onClick={handleSubmitOrder}
                    disabled={!isFormValid}
                    className="flex-1 bg-red-900 text-white font-semibold py-2 rounded-lg hover:bg-red-800 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed"
                  >
                    Enviar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 