import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';

import productsReducer from './productSlice'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'
import searchReducer from './searchSlice'
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
   products: productsReducer,
   filters: filterReducer,
   sorts: sortReducer,
   search: searchReducer,
   cart: cartReducer,
})

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['products', 'cart']
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;