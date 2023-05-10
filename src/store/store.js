import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import wishlistReducer from "./wishlistSlice"

const store = configureStore({
    reducer: {
        root: combineReducers({
            auth: authReducer,
            wishlist: wishlistReducer
        })
    }
})

export default store