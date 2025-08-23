import { useMemo } from "react";
import {useDispatch, useSelector } from "react-redux"

import {  AppDispatch, RootState } from "../redux/store"
import ProductCard from './ProductCard';
import Filter from './Filter'
import CatalogHeader from "./CatalogHeader";
import { SortKey, sortProducts } from "../utils/sortProducts";
import { Product } from "../redux/productSlice";
import { addProductCart } from "../redux/cartSlice";


export default function ProductsList() {
  const dispatch = useDispatch<AppDispatch>()

   const products = useSelector<RootState, Product[]>((state) => state.products.products)
   const filters = useSelector((state: RootState) => state.filters.currentFilter)
   const sorting = useSelector((state: RootState) => state.sorts)
   const searchResult = useSelector((state: RootState) => state.search.query)

   const handleDispatchProduct = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const cardProduct = products.filter((p) => p.id === id)
    dispatch(addProductCart(cardProduct[0]))
   }

   const categories = Array.from(new Set(products.map(p => p.category)));
   const filteredProducts = products.filter((product) => {
    const matchCategory = filters.category ? filters.category === product.category : true;
    const matchPrice = filters.price ? filters.price >= product.price : true;
    const matchStock = filters.isChecked ? filters.isChecked === product.inStock : true;
    const matchSearch = searchResult ? product.title.toLowerCase().includes(searchResult.toLowerCase()) : true;
    return matchPrice && matchCategory && matchStock && matchSearch;
   })

   const sorted = useMemo(() => sortProducts(filteredProducts, sorting.sorting as SortKey), [filteredProducts, sorting]) 

  return (
    <section className="container  mx-auto grid min-h-screen grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-[350px_1fr]">
      <aside className="sticky top-0 self-start rounded-lg bg-gray-900 p-6 shadow-lg text-white">
        <Filter categories={categories} />
      </aside>

      <div className="flex flex-col gap-8">
        <header className="sticky top-0 z-30 w-full  bg-gray-900 p-6 shadow-lg">
          <CatalogHeader count={filteredProducts.length} />
        </header>

        <div className={sorting.view === 'grid' ? 'grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3' : 'flex flex-col gap-2'}>
          {sorted.map((p) => (<ProductCard key={p.id} {...p} view={sorting.view} onClick={handleDispatchProduct}/>))}
        </div>
      </div>
    </section>



  );
}
