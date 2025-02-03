export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Sobre Nosotros</h1>
      <div className="bg-black p-6 rounded-lg text-neutral-300">
        <p className="mb-4">
          Somos un servicio de delivery especializado en bebidas en Córdoba, Argentina. Nos dedicamos exclusivamente a la distribución de bebidas de alta calidad directamente a tu puerta.
        </p>
        <p className="mb-4">
          Nuestra misión es brindarte la mejor experiencia de compra online, garantizando:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Productos 100% originales</li>
          <li>Delivery rápido y seguro</li>
          <li>Atención personalizada 24/7</li>
          <li>Bebidas frías y listas para consumir</li>
        </ul>
        <p>
          Trabajamos con las mejores marcas y mantenemos tus bebidas en condiciones óptimas hasta que lleguen a tu puerta.
        </p>
      </div>
    </div>
  )
} 