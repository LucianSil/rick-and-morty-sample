import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import wishlistReducer from "./wishlist";

export default configureStore({
  reducer: {
    root: combineReducers({
      auth: authReducer,
      wishlist: wishlistReducer,
    }),
  },
});
