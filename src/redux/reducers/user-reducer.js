import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:1,
        email: 'Nazer',
        password: 'Somera'
    },
    reducers:{
        firstNameChange: (state, action) =>{
            state.email = action.payload;
        },
        lastNameChange: (state, action) => {
            state.password = action.payload;
        }
    }
});
export const { firstNameChange, lastNameChange } = userSlice.actions;
export default userSlice.reducer;