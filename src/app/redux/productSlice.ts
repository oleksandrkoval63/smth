import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   sizes: [];
   discount: number;
   inStock: boolean;
}

interface ProductsState {
   products: Product[];
}

const initialState: ProductsState = {
   products: [],
}

const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setProducts(state, action: PayloadAction<Product[]>){
         state.products = action.payload;
      },
   }
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;