'use client'
import ProductsList from "../components/ProductsList"

export default function Products(){
   return(
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-center mb-8">Catalog of goods</h1>
         <ProductsList/>
      </div>
   )
}