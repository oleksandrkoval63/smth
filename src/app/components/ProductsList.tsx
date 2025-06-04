import {useSelector } from "react-redux"
import {  RootState } from "../redux/store"
import ProductCard from './ProductCard';
import Filter from './Filter'


export default function ProductsList() {
   const products = useSelector((state: RootState) => state.products.products)
   const filters = useSelector((state: RootState) => state.filters.currentFilter)
   const categories = Array.from(new Set(products.map(p => p.category)));
   const filteredProducts = products.filter((product) => {
    const matchCategory = filters.category ? filters.category === product.category : true;
    const matchPrice = filters.price ? filters.price >= product.price : true;
    return matchPrice && matchCategory
   })
  return (
    <section className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 min-h-screen">
  <div className="bg-gray-900 rounded-lg shadow-lg p-6 sticky top-24 self-start text-white">
    <Filter categories={categories}/>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredProducts ? (
      filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          category={product.category}
        />
      ))
    ) : (
      <p className="text-center text-gray-400 text-lg col-span-full">
        No products found
      </p>
    )}
  </div>
</section>

  );
}
