'use client'
import { useState, useEffect, useCallback } from 'react'

type FilterProps = {
  onFilterChange: (filters: {
    categories: string[];
    subcategories: string[];
    search: string;
    priceRange: { min: number; max: number };
    sort: string;
  }) => void;
  maxPrice: number;
}

export default function Filter({ onFilterChange, maxPrice }: FilterProps) {
  const [filters, setFilters] = useState({
    categories: {
      'con-alcohol': false,
      'sin-alcohol': false,
      'combos': false
    },
    subcategories: {
      vodka: false,
      whisky: false,
      cerveza: false,
      vino: false,
      gaseosas: false,
      jugos: false,
      agua: false,
      energizantes: false,
      combo: false
    },
    sort: 'default', // 'default', 'price-asc', 'price-desc', 'name'
    search: '',
    priceRange: {
      min: 0,
      max: maxPrice
    }
  })

  const updateParentFilters = useCallback(() => {
    const activeCategories = Object.entries(filters.categories)
      .filter(([_, isChecked]) => isChecked)
      .map(([category]) => category)

    const activeSubcategories = Object.entries(filters.subcategories)
      .filter(([_, isChecked]) => isChecked)
      .map(([subcategory]) => subcategory)

    onFilterChange({
      categories: activeCategories.length ? activeCategories : ['all'],
      subcategories: activeSubcategories,
      search: filters.search,
      priceRange: filters.priceRange,
      sort: filters.sort
    })
  }, [filters, onFilterChange])

  useEffect(() => {
    updateParentFilters()
  }, [updateParentFilters])

  const handleCategoryChange = (category: keyof typeof filters.categories) => {
    setFilters(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [category]: !prev.categories[category]
      }
    }))
  }

  const handleSubcategoryChange = (subcategory: keyof typeof filters.subcategories) => {
    setFilters(prev => ({
      ...prev,
      subcategories: {
        ...prev.subcategories,
        [subcategory]: !prev.subcategories[subcategory]
      }
    }))
  }

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = Number(value) || 0
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: numValue
      }
    }))
  }

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      search: value
    }))
  }

  const handleSortChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      sort: value
    }))
  }

  const handleResetFilters = () => {
    setFilters({
      categories: {
        'con-alcohol': false,
        'sin-alcohol': false,
        'combos': false
      },
      subcategories: {
        vodka: false,
        whisky: false,
        cerveza: false,
        vino: false,
        gaseosas: false,
        jugos: false,
        agua: false,
        energizantes: false,
        combo: false
      },
      sort: 'default',
      search: '',
      priceRange: {
        min: 0,
        max: maxPrice
      }
    })
  }

  return (
    <div className="w-full lg:w-64 bg-black text-neutral-300 p-4 rounded-lg border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4 text-red-800">FILTROS</h2>
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar bebidas..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-200 focus:border-red-800 focus:outline-none"
        />
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-red-800">Ordenar por</h3>
        <select
          value={filters.sort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-200 focus:border-red-800 focus:outline-none"
        >
          <option value="default">Relevancia</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
          <option value="name">Nombre</option>
        </select>
      </div>

      {/* Main Categories */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-red-800">Categorías Principales</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="con-alcohol"
              checked={filters.categories['con-alcohol']}
              onChange={() => handleCategoryChange('con-alcohol')}
              className="mr-2"
            />
            <label htmlFor="con-alcohol">Con Alcohol</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sin-alcohol"
              checked={filters.categories['sin-alcohol']}
              onChange={() => handleCategoryChange('sin-alcohol')}
              className="mr-2"
            />
            <label htmlFor="sin-alcohol">Sin Alcohol</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="combos"
              checked={filters.categories['combos']}
              onChange={() => handleCategoryChange('combos')}
              className="mr-2"
            />
            <label htmlFor="combos">Combos</label>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-red-800">Tipo de Bebida</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vodka"
              checked={filters.subcategories.vodka}
              onChange={() => handleSubcategoryChange('vodka')}
              className="mr-2"
            />
            <label htmlFor="vodka">Vodka</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="whisky"
              checked={filters.subcategories.whisky}
              onChange={() => handleSubcategoryChange('whisky')}
              className="mr-2"
            />
            <label htmlFor="whisky">Whisky</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cerveza"
              checked={filters.subcategories.cerveza}
              onChange={() => handleSubcategoryChange('cerveza')}
              className="mr-2"
            />
            <label htmlFor="cerveza">Cerveza</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vino"
              checked={filters.subcategories.vino}
              onChange={() => handleSubcategoryChange('vino')}
              className="mr-2"
            />
            <label htmlFor="vino">Vino</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="gaseosas"
              checked={filters.subcategories.gaseosas}
              onChange={() => handleSubcategoryChange('gaseosas')}
              className="mr-2"
            />
            <label htmlFor="gaseosas">Gaseosas</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="jugos"
              checked={filters.subcategories.jugos}
              onChange={() => handleSubcategoryChange('jugos')}
              className="mr-2"
            />
            <label htmlFor="jugos">Jugos</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agua"
              checked={filters.subcategories.agua}
              onChange={() => handleSubcategoryChange('agua')}
              className="mr-2"
            />
            <label htmlFor="agua">Agua</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="energizantes"
              checked={filters.subcategories.energizantes}
              onChange={() => handleSubcategoryChange('energizantes')}
              className="mr-2"
            />
            <label htmlFor="energizantes">Energizantes</label>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold mb-2 text-red-800">Rango de Precio</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Mín"
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="w-full p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-200 focus:border-red-800 focus:outline-none"
            />
            <input
              type="number"
              placeholder="Máx"
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="w-full p-2 rounded border border-neutral-700 bg-neutral-800 text-neutral-200 focus:border-red-800 focus:outline-none"
            />
          </div>
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={filters.priceRange.max}
            onChange={(e) => handlePriceChange('max', e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={() => handleResetFilters()}
        className="w-full mt-6 bg-neutral-800 text-neutral-200 py-2 rounded hover:bg-neutral-700 transition-colors"
      >
        Limpiar Filtros
      </button>
    </div>
  )
} 