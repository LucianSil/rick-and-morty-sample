import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    list: [],
  },
  reducers: {
    addToStore: (state, action) => {
      console.log(state, action);
      state.list.push(action.payload);
    },
  },
});

const { addToStore } = wishlistSlice.actions;

export { addToStore };
export { wishlistSlice };
export default wishlistSlice.reducer;

// state
// action
// reducer
// slice -> combinação de state, action e reducer
// dispatch
// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology
