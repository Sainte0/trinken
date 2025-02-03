'use client'
import { useState, useCallback } from 'react'
import Logo from '@/components/Logo'
import Banner from '@/components/Banner'
import ProductGrid from '@/components/ProductGrid'
import Filter from '@/components/Filter'
import Cart from '@/components/Cart'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { products } from '@/data/products'

type Filters = {
  categories: string[];
  subcategories: string[];
  search: string;
  priceRange: { min: number; max: number };
  sort: string;
}

export default function Home() {
  const maxPrice = Math.max(...products.map(p => p.price))
  const [currentFilters, setCurrentFilters] = useState<Filters>({
    categories: ['all'],
    subcategories: [],
    search: '',
    priceRange: { min: 0, max: maxPrice },
    sort: 'default'
  })
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = useCallback((newFilters: Filters) => {
    setCurrentFilters(newFilters)
  }, [])

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4">
        <Logo />
        <Banner />
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="w-full bg-black text-white p-3 rounded-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Filtros
            </button>
          </div>
          {showFilters && (
            <div className="lg:hidden">
              <Filter maxPrice={maxPrice} onFilterChange={handleFilterChange} />
            </div>
          )}
          <div className="hidden lg:block">
            <Filter maxPrice={maxPrice} onFilterChange={handleFilterChange} />
          </div>
          <ProductGrid filters={currentFilters} />
          <Cart />
        </div>
        <Features />
        <Footer />
      </div>
    </main>
  )
}
