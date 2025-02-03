export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Preguntas Frecuentes</h1>
      <div className="bg-black p-6 rounded-lg text-neutral-300 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Cuál es el tiempo de entrega?</h2>
          <p>Realizamos entregas todos los días en los siguientes horarios:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Lunes a Jueves: 10:00am - 1:00am</li>
            <li>Viernes y Sábados: 4:00pm - 3:00am</li>
            <li>Domingos: 10:00am - 1:00am</li>
          </ul>
          <p className="mt-2">El tiempo estimado de entrega es de 30-45 minutos según la zona.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Cuáles son los métodos de pago?</h2>
          <p>Aceptamos transferencia bancaria y efectivo contra entrega.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Tienen pedido mínimo?</h2>
          <p>Sí, el pedido mínimo es de $5000.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Los productos son originales?</h2>
          <p>Sí, garantizamos 100% la autenticidad de todos nuestros productos.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Cuál es la zona de entrega?</h2>
          <p>Actualmente realizamos entregas en toda Córdoba Capital.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">¿Tienen local físico?</h2>
          <p>No, somos un servicio exclusivo de delivery. Operamos únicamente a través de nuestra plataforma online y WhatsApp para brindarte la mejor experiencia de compra desde la comodidad de tu hogar.</p>
        </div>
      </div>
    </div>
  )
} 