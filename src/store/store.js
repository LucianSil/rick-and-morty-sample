import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import authReducer, { loginMiddleware } from "./authSlice"
import wishlistReducer from "./wishlistSlice"

// define our reducers
const rootReducers = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer
})

// persist configuration
const persistConfig = {
    key: "rootStore",
    storage,
    blacklist: ["wishlist"]
}

// persist reducer (midddleware)
const persistedReducer = persistReducer(persistConfig, rootReducers)

// store config
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loginMiddleware, logger])
})

export default store