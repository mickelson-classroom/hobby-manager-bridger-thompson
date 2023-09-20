import { FC, ReactNode, createContext, useState } from "react"
import { Show, ShowContextType } from "../models/Show"

export const ShowContext = createContext<ShowContextType | null>(null)

export const ShowProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shows, setShows] = useState<Show[]>([
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
  ])
  console.log("loaded shows")

  const saveShow = (show: Show) => {
    const newShow: Show = {
      id: Math.random(),
      title: show.title,
      season: show.season,
      episodes: show.episodes,
      rating: show.rating
    }
    setShows([...shows, newShow])
  }

  return (
    <ShowContext.Provider value={{ shows, saveShow }}>
      {children}
    </ShowContext.Provider>
  )
}
