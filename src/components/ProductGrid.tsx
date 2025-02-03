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

export default function ProductGrid({ filters }: { filters: Filters }) {
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
      switch (filters.sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="bg-black p-4 rounded-lg shadow-lg border border-neutral-800 hover:border-red-900 transition-colors flex flex-col">
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-neutral-200 mb-2 line-clamp-2">{product.title}</h3>
              {product.description && (
                <p className="text-neutral-400 text-sm mb-2 flex-1 line-clamp-2">{product.description}</p>
              )}
              <div className="mt-auto">
                <p className="text-amber-500 font-semibold text-lg mb-3">
                  ARS ${product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-900 text-white font-semibold py-3 rounded hover:bg-red-800 transition-colors"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
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