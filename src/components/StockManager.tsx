'use client'
import { useState, useEffect } from 'react'
import { Product } from '@/types/product'

export default function StockManager() {
  const [loading, setLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [error, setError] = useState('')

  const updateStock = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/stock/update')
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      setLastUpdate(new Date())
    } catch (err) {
      setError('Error al actualizar el stock')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 bg-black rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Control de Stock</h2>
        <button
          onClick={updateStock}
          disabled={loading}
          className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-800 disabled:bg-neutral-700"
        >
          {loading ? 'Actualizando...' : 'Actualizar Stock'}
        </button>
      </div>
      
      {error && (
        <p className="text-red-500 mb-2">{error}</p>
      )}
      
      {lastUpdate && (
        <p className="text-neutral-400 text-sm">
          Última actualización: {lastUpdate.toLocaleString()}
        </p>
      )}
    </div>
  )
} 