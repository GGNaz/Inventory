import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'getUser',
    initialState: {
        getUser: []
    },
    reducers: {
      getUserChange: (state, action) =>{
        state.getUser = action.payload;
      },
    }
  });
  


export  const { getUserChange } = userSlice.actions;
export default userSlice.reducer;
