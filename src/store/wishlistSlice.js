import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        // action.type : fn = reducer(state, action)
        addToWishlist: (state, action) => {
            console.log(state, action)
        }
    }
})

export const { addToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer    