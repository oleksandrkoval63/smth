import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ProductCard from './ProductCard';


export default function ProductsList() {
   const products = useSelector((state: RootState) => state.products.products)

  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length ? products.map((product) => 
      <ProductCard 
         key={product.id} 
         title={product.title} 
         price={product.price} 
         image={product.image} 
         description={product.description} 
         category={product.category}
      />) 
      : 
      'No one product was founded'}
    </section>
  );
}
