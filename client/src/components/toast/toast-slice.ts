import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CustomToast } from "../../models/Toasts";


interface ToastState {
  toasts: CustomToast[];
}

const initialState: ToastState = {
  toasts: []
}

const toastSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    show(state, action: PayloadAction<CustomToast>) {
      state.toasts.push(action.payload)
    },
    remove(state, action: PayloadAction<number>) {
      state.toasts = state.toasts.filter(t => t.id !== action.payload)
    },
    showMultiple(state) {
      for (let i = 0; i < 50; i++) {
        const newToast: CustomToast = {
          id: Date.now(),
          message: `Toast #${i + 1}`,
          type: 'success'
        }
        state.toasts.push(newToast)
      }
    }
  }
})

export const { show, remove, showMultiple } = toastSlice.actions
export default toastSlice.reducer;