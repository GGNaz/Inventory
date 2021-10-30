import { createSlice } from "@reduxjs/toolkit";


export const menuSlice = createSlice({
    name: 'getMenu',
    initialState: {
        getMenu: []
    },
    reducers: {
      getMenuChange: (state, action) =>{
        state.getMenu = action.payload;
      },
    }
  });
  


export  const { getMenuChange } = menuSlice.actions;
export default menuSlice.reducer;
