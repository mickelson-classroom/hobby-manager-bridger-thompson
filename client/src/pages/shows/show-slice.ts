import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Show } from "../../models/Show";


interface ShowState {
  shows: Show[];
}

const initialState: ShowState = {
  shows: []
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    saveShow(state, action: PayloadAction<Show>) {
      state.shows.push(action.payload)
    },
    removeShow(state, action: PayloadAction<number>) {
      state.shows = state.shows.filter(s => s.id !== action.payload)
    },
    updateShow(state, action: PayloadAction<Show>) {
      state.shows = [action.payload, ...state.shows.filter(s => s.id !== action.payload.id)]
    }
  }
})