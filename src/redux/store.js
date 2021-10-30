import { configureStore } from "@reduxjs/toolkit";
import getMenuReducer from "./reducers/getMenuReducer";
import getuserReducer from "./reducers/getuserReducer";

export default configureStore({
  reducer: {
    getMenu: getMenuReducer,
    getUser: getuserReducer,
  }
});
