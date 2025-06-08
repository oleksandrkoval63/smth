'use client'

import Link from 'next/link';
import { useEffect } from "react"
import { useDispatch,  } from "react-redux"
import { AppDispatch,  } from "./redux/store"
import fetchProducts from "./api/fetchProducts"
import { setProducts } from "./redux/productSlice"

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
     useEffect(() => {
        const fetchedProducts = async () => {
           const result = await fetchProducts()
           if(result){
              dispatch(setProducts(result))
           }
        }
        fetchedProducts()
     }, [dispatch])
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Ласкаво просимо до нашого магазину!</h1>
      <div className="text-center">
        <Link href="/products" className="btn btn-primary">
          Переглянути каталог
        </Link>
      </div>
    </div>
  );
}
