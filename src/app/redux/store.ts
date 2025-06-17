import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productSlice'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'

export const store = configureStore({
   reducer: {
      products: productsReducer,
      filters: filterReducer,
      sorts: sortReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;