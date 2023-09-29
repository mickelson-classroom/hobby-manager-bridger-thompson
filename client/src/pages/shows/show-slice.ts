import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Show } from "../../models/Show";


interface ShowState {
  shows: Show[];
}

const getStoredShows = () => {
  const savedShowsString = localStorage.getItem("shows");
  if (!savedShowsString) {
    const shows = [
      {
        id: 1,
        title: "Breaking Bad",
        season: 5,
        episodes: [],
        rating: 9.5,
        genre: "Other"
      },
      {
        id: 2,
        title: "Stranger Things",
        season: 4,
        episodes: [],
        rating: 8.7,
        genre: "Other"
      },
      {
        id: 3,
        title: "Game of Thrones",
        season: 8,
        episodes: [],
        rating: 9.3,
        genre: "Other"
      },
      {
        id: 4,
        title: "The Crown",
        season: 5,
        episodes: [],
        rating: 8.7,
        genre: "Other"
      },
      {
        id: 5,
        title: "Friends",
        season: 10,
        episodes: [],
        rating: 8.5,
        genre: "Other"
      },
    ];
    storeShows(shows)
    return shows
  }
  return JSON.parse(savedShowsString);
};

const storeShows = (shows: Show[]) => {
  localStorage.setItem("shows", JSON.stringify(shows));
};

const initialState: ShowState = {
  shows: getStoredShows()
}

const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    saveShow(state, action: PayloadAction<Show>) {
      state.shows.push(action.payload)
      storeShows(state.shows)
    },
    removeShow(state, action: PayloadAction<number>) {
      state.shows = state.shows.filter(s => s.id !== action.payload)
      storeShows(state.shows)
    },
    updateShow(state, action: PayloadAction<Show>) {
      state.shows = [action.payload, ...state.shows.filter(s => s.id !== action.payload.id)]
      storeShows(state.shows)
    }
  }
})

export const { saveShow, removeShow, updateShow } = showSlice.actions
export default showSlice.reducer