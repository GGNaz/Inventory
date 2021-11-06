import { createSlice } from "@reduxjs/toolkit";


export const logsSlice = createSlice({
    name: 'getLogs',
    initialState: {
        getLogs: []
    },
    reducers: {
      getLogsChange: (state, action) =>{
        state.getLogs = action.payload;
      },
    }
  });
  
export  const { getLogsChange } = logsSlice.actions;
export default logsSlice.reducer;
