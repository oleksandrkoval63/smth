'use client'
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
  isChecked?: boolean
}

export default function ProductFilters({categories} : FitlerProps) {
   const dispatch = useDispatch<AppDispatch>()
   const [filter, setFilters] = useState<filterState>({category: '', price: 0, isChecked: false})

   const handleChangeCategory = (category:string): void => {
      setFilters((prevState:filterState) => ({...prevState, category:category}))
   }
   const handleChangePrice = (price:number): void => {
      setFilters((prevState:filterState) => ({...prevState, price:price}))
   }
   const handleChangeChecked = (checked: boolean): void => {
    setFilters((prevState: filterState) => ({...prevState, isChecked: checked}))
   }

   const handleResetFilters = () => {
    dispatch(resetFilter())
    setFilters((prevState:filterState) => ({...prevState, category: '', price: 0, isChecked: false}))
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
      <label className="flex cursor-pointer select-none items-center gap-3 mb-5">
        <input
          type="checkbox"
          checked={filter.isChecked}
          onChange={(e) => handleChangeChecked(e.target.checked)}
          className="
            peer h-5 w-5 shrink-0 appearance-none rounded border
            border-gray-400
            checked:border-green-600 checked:bg-green-600
            focus:outline-none focus:ring-2 focus:ring-green-500
          "
        />
        <svg
          className="
            pointer-events-none absolute ml-[2px] hidden h-4 w-4 text-white
            peer-checked:block
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm font-medium text-gray-200">
          Показати лише <span className="text-green-400">доступні</span>
        </span>
      </label>
      <button
        type="button"
        className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors mb-2.5"
        onClick={() => dispatch(setFilter({category:filter.category, price:filter.price, isChecked: filter.isChecked}))}
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
