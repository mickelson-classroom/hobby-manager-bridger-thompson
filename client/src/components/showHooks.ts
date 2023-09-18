import { Show } from "../models/Show";


export function GetShows() {
  const shows: Show[] = [
    {
      id: 1,
      title: "Blue Bloods",
      season: 1,
      episodes: [],
      rating: 8
    },
    {
      id: 2,
      title: "House",
      season: 1,
      episodes: [],
      rating: 9
    },
    {
      id: 3,
      title: "The Last Kingdom",
      season: 1,
      episodes: [],
      rating: 8.5
    }
  ]
  return shows
}

export function GetShow(id: number) {
  const shows = GetShows()
  return shows.find(s => s.id === id)
}