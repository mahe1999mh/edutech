import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/auth";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});

export default store;
