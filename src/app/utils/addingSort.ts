import { Product } from "../redux/productSlice";

export interface RebuildProduct extends Product {
   status: 'hits' | 'new';
}

export const addingSort = (products: Product[]): RebuildProduct[] => {
   return products.map((product) => ({...product, status: product.discount ? 'hits' : 'new'}))
} 