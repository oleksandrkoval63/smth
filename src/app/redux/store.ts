import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
   reducer: {
      products: productsReducer,
      filters: filterReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;