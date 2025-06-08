// components/ProductFilters.tsx
import React, { useState } from 'react';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { resetFilter, setFilter } from '../redux/filterSlice';

type FitlerProps = {
   categories: string[];
}

type filterState = {
  category?: string,
  price?: number
}

export default function ProductFilters({categories} : FitlerProps) {
   const dispatch = useDispatch<AppDispatch>()
   const [filter, setFilters] = useState<filterState>({category: '', price: 0})

   const handleChangeCategory = (category:string): void => {
      setFilters((prevState:filterState) => ({...prevState, category:category}))
   }
   const handleChangePrice = (price:number): void => {
      setFilters((prevState:filterState) => ({...prevState, price:price}))
   }
   const handleResetFilters = () => {
    dispatch(resetFilter())
    setFilters((prevState:filterState) => ({...prevState, category: '', price: 0}))
   }
  return (
    <section className="p-4 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Фільтри товарів</h2>

      <div className="mb-6">
        <label htmlFor="category" className="block mb-2 font-medium">
          Категорія
        </label>
        <select
          id="category"
          name="category"
          className="w-full border bg-gray-900 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filter.category ? filter.category : 'all'}
          onChange={(e) => handleChangeCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          {categories ? categories.map((category, i) => <option key={i} value={category}>{category}</option>) : <option disabled>No categories found</option>}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="price" className="block mb-2 font-medium">
          Максимальна ціна
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={filter.price}
          placeholder="Введіть ціну"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={0}
          onChange={(e) => handleChangePrice(parseInt(e.target.value))}
        />
      </div>

      <button
        type="button"
        className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors mb-2.5"
        onClick={() => dispatch(setFilter({category:filter.category, price:filter.price}))}
      >
        Застосувати
      </button>
      <button
        type="button"
        className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors "
        onClick={() => handleResetFilters()}
      >
        Очистити фільтрацію
      </button>
    </section>
  );
}
