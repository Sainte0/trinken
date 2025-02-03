'use client'
import { useState, useEffect } from 'react'

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const hasVerified = localStorage.getItem('ageVerified')
    if (!hasVerified) {
      setShowModal(true)
    }
  }, [])

  const handleVerify = (isOver18: boolean) => {
    if (isOver18) {
      localStorage.setItem('ageVerified', 'true')
      setShowModal(false)
    } else {
      window.location.href = 'https://www.google.com'
    }
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 p-8 rounded-lg max-w-md w-full border border-neutral-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Verificación de Edad</h2>
        <p className="text-neutral-300 text-center mb-8">
          Debes ser mayor de 18 años para acceder a este sitio.
          ¿Confirmas que eres mayor de edad?
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleVerify(false)}
            className="flex-1 py-3 px-4 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
          >
            No, soy menor
          </button>
          <button
            onClick={() => handleVerify(true)}
            className="flex-1 py-3 px-4 bg-red-900 text-white rounded hover:bg-red-800 transition-colors"
          >
            Sí, soy mayor
          </button>
        </div>
      </div>
    </div>
  )
} 