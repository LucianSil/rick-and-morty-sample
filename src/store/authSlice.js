import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "", token: ""
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // action.type : fn = reducer(state, action)
        login: (state, action) => {
            // console.log(state, action)
            state.name = action.payload.name
            state.token = action.payload.token
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer    