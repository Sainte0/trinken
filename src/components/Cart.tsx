'use client'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'

type ShippingInfo = {
  name: string;
  address: string;
  phone: string;
  notes: string;
}

export default function Cart() {
  const { items, updateQuantity, removeFromCart } = useCart()
  const [showForm, setShowForm] = useState(false)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    phone: '',
    notes: ''
  })
  
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckout = () => {
    if (items.length === 0) return

    const orderItems = items
      .map(item => `${item.quantity}x ${item.product.title} ($${item.product.price})`)
      .join('\n')
    
    const shippingDetails = `
Shipping Details:
Name: ${shippingInfo.name}
Address: ${shippingInfo.address}
Phone: ${shippingInfo.phone}
Notes: ${shippingInfo.notes}`

    const totalMessage = `\n\nTotal: $${total.toFixed(2)}`
    
    const whatsappMessage = encodeURIComponent(`Hello! I would like to order:\n\n${orderItems}${totalMessage}\n${shippingDetails}`)
    window.open(`https://wa.me/5493513341366?text=${whatsappMessage}`, '_blank')
    setShowForm(false)
  }

  const isFormValid = shippingInfo.name && shippingInfo.address && shippingInfo.phone

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:relative lg:w-64 bg-black text-neutral-300 p-4 rounded-lg border border-neutral-800 z-40">
      <h2 className="text-xl font-semibold mb-4 text-red-800">CARRITO</h2>
      
      {items.length === 0 ? (
        <p className="text-neutral-400">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="flex flex-col gap-2 border-b border-neutral-800 pb-2">
              <h3 className="font-semibold text-neutral-200">{item.product.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  Eliminar
                </button>
              </div>
              <p className="text-amber-500">
                ARS ${(item.product.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
          
          <div className="border-t border-neutral-800 pt-4 mt-4">
            <p className="font-bold text-amber-500">
              Total: ARS ${total.toLocaleString()}
            </p>
          </div>

          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
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
                  onClick={handleCheckout}
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
  )
} 