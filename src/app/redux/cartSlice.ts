import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

export interface CartItem extends Product{
   qty: number;
}

interface CartState {
   cart: CartItem[];
}

const initialState: CartState = {
   cart: [],
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProductCart(state, {payload}: PayloadAction<Product>){
         const existing = state.cart.find((i) => i.id === payload.id)
         if(existing){
            existing.qty += 1
         }else{
            state.cart.push({...payload, qty:1})
         }
      },
      deleteProductCard(state, {payload} : PayloadAction<number>){
         state.cart = state.cart.filter((item) => item.id !== payload)
      },
      incQty(state, {payload}: PayloadAction<number>){
         const item = state.cart.find((i) => i.id === payload)
         if(item) item.qty += 1
      },
      decQty(state, {payload}: PayloadAction<number>){
         const item = state.cart.find((i) => i.id === payload)
         if(item && item.qty > 1) item.qty -= 1
      },
      clearCart(state){
         state.cart = []
      }
   }
})

export const {addProductCart, incQty, decQty, clearCart, deleteProductCard} = cartSlice.actions;
export default cartSlice.reducer;