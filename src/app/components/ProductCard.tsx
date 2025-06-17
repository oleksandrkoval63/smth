import Image from 'next/image'
import Link from 'next/link';

type ProductCardProps = {
  id:number,
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  sizes: [],
  discount: number;
  inStock: boolean;
  view?: string;
};

export default function ProductCard({id, title, price, image, description, category, inStock, discount, view }: ProductCardProps) {
  

  return (
    <Link href={`/products/${id}`} className={`relative flex ${view === 'grid' ? 'w-[350px] flex-col' : 'w-full'} overflow-hidden rounded-lg border shadow transition-shadow duration-300 hover:shadow-lg ${!inStock && 'pointer-events-none'}`}>
      {!inStock && (
        <span className="absolute inset-0 z-10 bg-gray-400/30 backdrop-blur-sm" />
      )}
      <Image width={view === 'grid' ? 350 : 150} height={view === 'grid' ? 450 : 150} src={image} alt={title} className={`${view === 'grid' ? 'w-full' : ''} h-48 object-cover`} />
      <div className="p-4 flex flex-col flex-1">
        <span className={`${inStock ? 'text-green-600' : 'text-red-600'}`}>{inStock ? 'available' : 'unavailable' }</span>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="font-semibold text-lg mb-2">{category}</p>
        <p className='mb-2'>{description}</p>
        {discount ? (
          <div className='flex gap-[15px] mt-auto'>
            <p className="text-gray-600 font-bold text-xl line-through">${price.toFixed(2)}</p>
            <p className="text-yellow-600 font-bold text-xl">${(price - (price * (discount / 100))).toFixed(2)}</p>
          </div>
        ) : (
          <p className="text-white-600 font-bold text-xl mt-auto">${price.toFixed(2)}</p>
        )}
        
      </div>
    </Link>
  );
}
