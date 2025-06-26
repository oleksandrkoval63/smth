import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchState {
   query: string;
}

const initialState: SearchState = {
   query: ''
}

const searchSlice = createSlice({
   name: 'searchs',
   initialState,
   reducers: {
      setSearch(state, action: PayloadAction<string>){
         state.query = action.payload
      }
   }
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;