import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";

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
        },
        logout: (state, action) => {

        }
    }
})

// create a listener(will listen for a action invoke) middleware
const authMiddleware = createListenerMiddleware()

const { login } = authSlice.actions

authMiddleware.startListening({
    // action to listen
    predicate: (action, currentState, previousState) => {

        // action.type === "auth/login" || action.type === "auth/logout"

        // return true when the listener should run
    },
    actionCreator: login,
    // function to be invoked then
    effect: (action) => {
        console.log("middleware", action)
        // side effects: state manipulation, analytics, other api calls eg: getProfile
    }
})

// export our middleware
export const { middleware: loginMiddleware } = authMiddleware
// export our actions (types)
export { login }
// export our slice reducer
export default authSlice.reducer