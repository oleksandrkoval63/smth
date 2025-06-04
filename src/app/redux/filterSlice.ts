import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Filter {
   price?: number,
   category?: string;
}

interface FilterState {
   currentFilter: Filter,
}

const initialState: FilterState = {
   currentFilter: {}
}

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setFilter(state, action: PayloadAction<Filter>) {
         state.currentFilter = action.payload
      },
      resetFilter(state){
         state.currentFilter = {}
      }
   }
})

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;