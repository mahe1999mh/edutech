import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAdmin: false,
        isLogin: false,
        token: null
    },
    reducers: {
        adminAction(state) {
            state.isAdmin = true
        },
        loginAction(state) {
            state.isLogin = true
        },
        setToken(state, action) {
            state.token = action.payload.token;
        }
    }
})

export const { adminAction, loginAction, setToken } = authSlice.actions;
export default authSlice.reducer;