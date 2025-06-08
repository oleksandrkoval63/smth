'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import fetchSingleProduct from '../../api/fetchSingleProduct'
import Slider from "@/app/components/Slider";
import Image from "next/image";

type SizeOption = {
  size: string,
  available: boolean;
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  sizes: SizeOption[],
  discount: number,
  inStock: boolean;
};



export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const [active, setActive] = useState<string>('')
  const disabledSizeBtn = 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
  const activeSizeBtn = 'border-gray-900 !bg-blue-600 text-white'
  const normalSizeBtn = 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 cursor-pointer'
   const {id} = useParams()
    useEffect(() => {
      const fetchedData = async () => {
        if(id){
          const result = await fetchSingleProduct(Number(id))
          setProduct(result)
        }
      }
      if(id){
        fetchedData()
      }
    }, [id])

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-center space-x-8">
        <div className="w-full lg:w-1/2">
          <Image width={350} height={450} src={product?.image || "/public/next.svg"} alt={product?.title || "product title"}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-semibold text-white-800">{product?.title}</h1>
          <p className="text-xl text-white-500 mt-4">{product?.category}</p>
          <div className="flex gap-[10px] mt-5">
            {product?.sizes.length ? product.sizes.map(({size, available}) => 
              <button
                key={size}
                type="button"
                disabled={!available}
                onClick={() => available && setActive(size)}
                className={`p-2 ${available ? normalSizeBtn : disabledSizeBtn} ${
                  active === size && available ? activeSizeBtn : ''
                } ${product.sizes.length === 1 ? activeSizeBtn : disabledSizeBtn}`}
              >
                {size}
              </button>
            ) : 
            'Not one size was founded'
            }
          </div>
          <p className="text-white-700 mt-6">{product?.description}</p>

          <div className="mt-8 flex items-center justify-between">
            {product?.discount ? (
              <div className='flex gap-[15px] mt-auto'>
                <p className="text-gray-600 font-bold text-xl line-through">${product?.price.toFixed(2)}</p>
                <p className="text-yellow-600 font-bold text-xl">${(product?.price - (product?.price * (product?.discount / 100))).toFixed(2)}</p>
              </div>
            ) : (
              <p className="text-white-600 font-bold text-xl mt-auto">${product?.price.toFixed(2)}</p>
            )}
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-white-800">Вам также может понравиться</h2>
          <Slider category={product?.category}/>
      </div>
    </div>
  );
}
