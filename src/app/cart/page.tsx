'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { CartItem, decQty, deleteProductCard, incQty } from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>()

   const cart = useSelector<RootState, CartItem[]>((state) => state.cart.cart ?? [])
   const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
   

  return (
    <section className="container mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-400">
          Your cart is empty.&nbsp;
          <Link href="/products" className="text-blue-500 hover:underline">
            Return to Catalog
          </Link>
        </p>
      )}

      {cart.length > 0 && (
        <>
          <ul className="divide-y divide-gray-800">
            {cart.map((it) => (
              <li key={it.id} className="flex items-center gap-4 py-6">
                <Image
                  width={100}
                  height={100}
                  src={it.image}
                  alt={it.title}
                  className="h-20 w-20 shrink-0 rounded object-cover"
                />

                <div className="grow">
                  <h3 className="line-clamp-2 text-sm font-semibold text-gray-100">
                    {it.title}
                  </h3>

                  <p className="mt-1 text-sm text-yellow-500">
                    ${it.discount ? (it.price - (it.price * (it.discount / 100))).toFixed(2) : it.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 z-5 event-pointer"
                    onClick={() => dispatch(decQty(it.id))}
                  >
                    −
                  </button>

                  <span className="min-w-[2ch] text-center">{it.qty}</span>

                  <button
                    type="button"
                    className="h-8 w-8 rounded bg-gray-700 text-gray-200 hover:bg-gray-600 event-pointer"
                    onClick={() => dispatch(incQty(it.id))}
                  >
                    +
                  </button>
                </div>

                <p className="w-20 shrink-0 text-right text-sm font-semibold text-gray-100">
                  ${it.discount ? (it.qty * (it.price - it.price * (it.discount / 100))).toFixed(2) : it.price.toFixed(2)}
                </p>

                <button
                  type="button"
                  className="ml-4 text-gray-400 hover:text-red-500"
                  title="Delete"
                  onClick={() => dispatch(deleteProductCard(it.id))}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          {/* підсумок */}
          <div className="mt-8 flex flex-col items-end gap-4">
            <p className="text-lg font-semibold text-gray-100">
              In summary:&nbsp;
              <span className="text-yellow-500">${subtotal.toFixed(2)}</span>
            </p>

            <Link
              href="/checkout"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Go to payment
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
