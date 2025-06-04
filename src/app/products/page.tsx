'use client'
import { useEffect } from "react"
import { useDispatch,  } from "react-redux"
import { AppDispatch,  } from "../redux/store"
import ProductsList from "../components/ProductsList"
import fetchProducts from "../api/fetchProducts"
import { setProducts } from "../redux/productSlice"

export default function Products(){
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
   return(
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-center mb-8">Каталог товарів</h1>
         <ProductsList/>
      </div>
   )
}