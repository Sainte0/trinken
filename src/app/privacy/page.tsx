export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidad</h1>
      <div className="bg-black p-6 rounded-lg text-neutral-300">
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Recopilación de Información</h2>
          <p>
            Solo recolectamos información necesaria para procesar tu pedido y mejorar tu experiencia de compra.
            Esto incluye: nombre, dirección de envío, número de teléfono y correo electrónico.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-red-800 mb-3">Uso de la Información</h2>
          <p>
            Tu información se utiliza exclusivamente para:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Procesar y entregar tu pedido</li>
            <li>Comunicarnos contigo sobre tu pedido</li>
            <li>Mejorar nuestro servicio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-red-800 mb-3">Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información personal.
            No compartimos tus datos con terceros sin tu consentimiento.
          </p>
        </section>
      </div>
    </div>
  )
} 