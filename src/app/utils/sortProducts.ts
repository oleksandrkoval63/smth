import { Product } from "../redux/productSlice";

export type SortKey =
  | 'cheap-first'  
  | 'exp-first'    
  | 'az'           
  | 'za'
  | 'hits'
  | 'new'
  | 'default';

export function sortProducts(products: Product[], key: SortKey): Product[]{

   const copy = [...products]

   switch (key) {
      case 'cheap-first':
         return copy.sort((a,b) => a.price - b.price);
      case 'exp-first':
         return copy.sort((a,b) => b.price - a.price);
      case 'az':
         return copy.sort((a,b) => a.title.localeCompare(b.title, 'eu', {sensitivity: 'base'}))
      case 'za':
         return copy.sort((a,b) => b.title.localeCompare(a.title, 'eu', {sensitivity: 'base'}))
      case 'hits':
         return copy.sort((a, b) =>
         (b.status === 'hits' ? 1 : 0) - (a.status === 'hits' ? 1 : 0)
         );
      case 'new':
         return copy.sort((a, b) =>
         (b.status === 'new' ? 1 : 0) - (a.status === 'new' ? 1 : 0)
         );
      default:
         return copy;
   }
}