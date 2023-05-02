import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});

const { login } = authSlice.actions;
export { login };
export { authSlice };
export default authSlice.reducer;

// state
// action
// reducer
// slice -> combinação de state, action e reducer
// dispatch
// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology
