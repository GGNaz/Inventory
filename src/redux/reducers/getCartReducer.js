import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'getCart',
    initialState: {
        getCart: []
    },
    reducers: {
      getCartChange: (state, action) =>{
        state.getCart = action.payload;
      },
    }
  });
  
export  const { getCartChange } = cartSlice.actions;
export default cartSlice.reducer;
