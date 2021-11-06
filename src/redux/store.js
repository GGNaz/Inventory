import { configureStore } from "@reduxjs/toolkit";
import getCartReducer from "./reducers/getCartReducer";
import getMenuReducer from "./reducers/getMenuReducer";
import getuserReducer from "./reducers/getuserReducer";
import getLogsReducer from "./reducers/getLogsReducer";
export default configureStore({
  reducer: {
    getMenu: getMenuReducer,
    getUser: getuserReducer,
    getCart: getCartReducer,
    getLogs: getLogsReducer,
  }
});
