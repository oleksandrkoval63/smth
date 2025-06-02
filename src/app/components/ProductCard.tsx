import Image from 'next/image'

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default function ProductCard({ title, price, image, description, category }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <Image width={350} height={450} src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="font-semibold text-lg mb-2">{category}</p>
        <p className='mb-2'>{description}</p>
        <p className="text-yellow-600 font-bold text-xl">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
