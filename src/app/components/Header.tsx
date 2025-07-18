import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'><h1 className="text-2xl font-bold">My Shop</h1></Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href='/' className="hover:text-yellow-400">Головна</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400">Каталог</Link></li>
            <li><a href="#" className="hover:text-yellow-400">Контакти</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
