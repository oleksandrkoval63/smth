'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { CartItem, clearCart } from '../redux/cartSlice';

export default function MiniCart() {
  const dispatch = useDispatch<AppDispatch>()
   const cart = useSelector<RootState, CartItem[]>((state) => state.cart.cart ?? [])
   const cartLimit = 6;
   const preview = cart.slice(0, cartLimit)
   const itemCount = cart.reduce((sum,currentItem) => sum + currentItem.qty, 0)
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="relative rounded p-2 hover:bg-gray-700/40 transition">
        <svg
          className="h-6 w-6 text-gray-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2A1 1 0 0 0 6.7 20h10.6a1 1 0 0 0 1-.8L20 13M7 13h10M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
         <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
            {cart.length > 0 ? cart.length : 0}
         </span>
      </button>

      {open && (
        <div className="absolute right-0  w-150 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-xl">
          <h3 className="mb-3 text-sm font-semibold text-gray-100">
            My Cart
          </h3>

          <ul className="space-y-3 text-sm">
            {cart.length ? preview.map((p) => (
              <li key={p.id} className={`flex justify-between`}>
                <span className="w-40 truncate">{p.title}</span>
                <span className="shrink-0">
                  x{p.qty} &times; ${p.discount ? (p.price - (p.price * (p.discount / 100))).toFixed(2) : p.price.toFixed(2)}
                </span>
              </li>
            )) : <p className='text-center text-gray-400'>No one product in your cart, please add them</p>}
            {cartLimit < cart.length && (
              <li className="text-right italic text-gray-400">
                … та ще {cart.length - cartLimit} товар(и)
              </li>
            )}
          </ul>
          <div className="mt-3">
            <p className='text-white-100'>In summary: {itemCount}</p>
          <div className="flex justify-between items-center gap-6">
            <Link
               href="/cart"
               className="mt-4 block w-full rounded-md bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
               Cart
            </Link>
            <button onClick={() => dispatch(clearCart())} type='button' className="mt-4 block w-full rounded-md bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 transition">Clear cart</button>
          </div>

          </div>
        </div>
      )}
    </div>
  );
}
