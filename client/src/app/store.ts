import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../components/toast/toast-slice"


export const store = configureStore({
  reducer: {
    toasts: toastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;