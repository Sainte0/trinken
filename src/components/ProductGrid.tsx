'use client'
import { products } from '@/data/products'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'

type Filters = {
  categories: string[];
  subcategories: string[];
  search: string;
  priceRange: { min: number; max: number };
  sort: string;
}

export default function ProductGrid({ filters, isLoading = false }: { filters: Filters, isLoading?: boolean }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const { addToCart } = useCart()

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = filters.categories.includes('all') || 
        filters.categories.includes(product.category)
      
      const matchesSubcategory = filters.subcategories.length === 0 || 
        filters.subcategories.includes(product.subcategory)
      
      const matchesSearch = product.title
        .toLowerCase()
        .includes(filters.search.toLowerCase())
      
      const matchesPrice = product.price >= filters.priceRange.min && 
        product.price <= filters.priceRange.max

      return matchesCategory && matchesSubcategory && matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (a.stock === 0 && b.stock > 0) return 1
      if (a.stock > 0 && b.stock === 0) return -1
      
      switch (filters.sort) {
        case 'price-asc': return a.price - b.price
        case 'price-desc': return b.price - a.price
        case 'name': return a.title.localeCompare(b.title)
        default: return 0
      }
    })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  return (
    <div className="flex-1" id="productos">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {isLoading ? (
          // Skeleton loading UI
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-black p-4 rounded-lg shadow-lg border border-neutral-800 flex flex-col">
              <div className="relative aspect-square mb-4 bg-neutral-800 animate-pulse rounded-lg"></div>
              <div className="flex-1 flex flex-col">
                <div className="h-6 bg-neutral-800 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-neutral-800 rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-8 bg-neutral-800 rounded animate-pulse mb-3"></div>
                <div className="h-12 bg-neutral-800 rounded animate-pulse"></div>
              </div>
            </div>
          ))
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-neutral-300 mb-2">No se encontraron productos</h3>
            <p className="text-neutral-400 text-center">Intenta ajustar los filtros de búsqueda</p>
          </div>
        ) : (
          paginatedProducts.map((product) => (
            <div key={product.id} className="bg-black p-4 rounded-lg shadow-lg border border-neutral-800 hover:border-red-900 transition-colors flex flex-col relative">
              {product.stock === 0 && (
                <div className="absolute top-2 right-2 bg-red-900 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  Sin Stock
                </div>
              )}
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={`object-cover rounded-lg ${product.stock === 0 ? 'opacity-50' : ''}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-neutral-200 mb-2 line-clamp-2">{product.title}</h3>
                {product.description && (
                  <p className="text-neutral-400 text-sm mb-2 flex-1 line-clamp-2">{product.description}</p>
                )}
                {product.items && (
                  <div className="mb-3 flex-1">
                    <p className="text-sm font-semibold text-neutral-300 mb-2">Incluye:</p>
                    <ul className="space-y-1">
                      {product.items.map((item, index) => (
                        <li key={index} className="text-neutral-400 text-sm flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto">
                  <p className="text-amber-500 font-semibold text-lg mb-3">
                    ARS ${product.price.toLocaleString()}
                  </p>
                  {product.stock > 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-red-900 text-white font-semibold py-3 rounded hover:bg-red-800 transition-colors"
                    >
                      Agregar al Carrito
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-neutral-700 text-neutral-400 font-semibold py-3 rounded cursor-not-allowed"
                    >
                      Sin Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 disabled:opacity-50 hover:bg-neutral-700"
          >
            Anterior
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1 
                  ? 'bg-red-900 text-white' 
                  : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 disabled:opacity-50 hover:bg-neutral-700"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
} 