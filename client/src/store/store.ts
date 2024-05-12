import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/auth";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
    ),
});

export default store;
