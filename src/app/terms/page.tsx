export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Términos y Condiciones</h1>
      <div className="bg-black p-6 rounded-lg text-neutral-300">
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Edad Mínima</h2>
          <p>
            Debes ser mayor de 18 años para realizar compras en nuestra tienda.
            Nos reservamos el derecho de verificar tu edad al momento de la entrega.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Pedidos y Entregas</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Servicio exclusivo de delivery en Córdoba Capital</li>
            <li>Tiempo estimado de entrega: 30-45 minutos</li>
            <li>Pedido mínimo: $5000</li>
            <li>Las bebidas se entregan frías y listas para consumir</li>
            <li>Verificación de edad obligatoria al momento de la entrega</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Pagos</h2>
          <p>
            Aceptamos transferencias bancarias y efectivo contra entrega.
            Los precios pueden cambiar sin previo aviso.
          </p>
        </section>
      </div>
    </div>
  )
} 