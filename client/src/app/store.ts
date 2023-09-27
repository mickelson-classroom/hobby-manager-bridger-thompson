import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../components/toast/toast-slice"
import showReducer from "../pages/shows/show-slice"


export const store = configureStore({
  reducer: {
    toasts: toastReducer,
    shows: showReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;