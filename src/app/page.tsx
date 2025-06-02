import Link from 'next/link';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Ласкаво просимо до нашого магазину!</h1>
      <div className="text-center">
        <Link href="/products" className="btn btn-primary">
          Переглянути каталог
        </Link>
      </div>
    </div>
  );
}
