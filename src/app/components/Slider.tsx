'use client'

import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { Product } from '../redux/productSlice';

type similarCategory = {
   category: string | undefined
}

export default function Slider({category}: similarCategory) {
   const products = useSelector<RootState, Product[]>((state) => state.products.products)
   const filteredSimilar = products.filter((product) => product.category === category)

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
               />
            </SwiperSlide>
         ): 'Products not founded'}
      </Swiper>
    </div>
  );
}
