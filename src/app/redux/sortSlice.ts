import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortKey } from "../utils/sortProducts";


interface SortState {
   sorting: SortKey,
   view: string,
}

const initialState: SortState = {
   sorting: 'default',
   view: 'grid'
}

const sortSlice = createSlice({
   name: 'sorts',
   initialState,
   reducers: {
      setSort(state, action: PayloadAction<SortKey>) {
         state.sorting = action.payload
      },
      setViewState(state, action: PayloadAction<string>){
         state.view = action.payload
      }
   }
})

export const { setSort, setViewState } = sortSlice.actions;
export default sortSlice.reducer;