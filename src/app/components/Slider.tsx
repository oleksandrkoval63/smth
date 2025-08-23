'use client'

import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { Product } from '../redux/productSlice';
import { addProductCart } from '../redux/cartSlice';

type similarCategory = {
   category: string | undefined
}

export default function Slider({category}: similarCategory) {
  const dispatch = useDispatch<AppDispatch>()

   const products = useSelector<RootState, Product[]>((state) => state.products.products)
   const filteredSimilar = products.filter((product) => product.category === category)

   const handleDispatchProduct = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
       e.preventDefault()
       const cardProduct = products.filter((p) => p.id === id)
       dispatch(addProductCart(cardProduct[0]))
      }
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Navigation]}
        navigation={true}
      >
         {filteredSimilar.length ? filteredSimilar.map((product) => 
            <SwiperSlide key={product.id}>
               <ProductCard id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  category={product.category}
                  sizes={product.sizes}
                  inStock={product.inStock}
                  discount={product.discount}
                  onClick={handleDispatchProduct}
               />
            </SwiperSlide>
         ): 'Products not founded'}
      </Swiper>
    </div>
  );
}
