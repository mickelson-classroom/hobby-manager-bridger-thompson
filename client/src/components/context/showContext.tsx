import { FC, ReactNode, createContext, useState, useEffect } from "react";
import { Show } from "../../models/Show";

export type ShowContextType = {
  shows: Show[];
  saveShow: (show: Show) => void;
  removeShow: (id: number) => void;
  updateShow: (updatedShow: Show) => void;
};

export const ShowContext = createContext<ShowContextType>({
  shows: [],
  saveShow: () => { },
  removeShow: () => { },
  updateShow: () => { }
});

export const ShowProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const savedShows = localStorage.getItem("shows");
    console.log(savedShows)
    if (savedShows) {
      setShows(JSON.parse(savedShows));
    }
  }, []);

  const saveShow = (show: Show) => {
    const newShow: Show = {
      id: Math.random(),
      title: show.title,
      season: show.season,
      episodes: show.episodes,
      rating: show.rating,
    };
    const combinedShows = [...shows, newShow]
    setShows(combinedShows);
    localStorage.setItem("shows", JSON.stringify(combinedShows));
  };

  const updateShow = (updatedShow: Show) => {
    const showIndex = shows.findIndex((show) => show.id === updatedShow.id);

    if (showIndex !== -1) {
      const updatedShows = [...shows];
      updatedShows[showIndex] = updatedShow;
      setShows(updatedShows);
      localStorage.setItem("shows", JSON.stringify(updatedShows));
    }
  };

  const removeShow = (id: number) => {
    const remainingShows = shows.filter(s => s.id !== id)
    setShows(remainingShows)
    localStorage.setItem("shows", JSON.stringify(remainingShows))
  }

  return (
    <ShowContext.Provider value={{ shows, saveShow, removeShow, updateShow }}>
      {children}
    </ShowContext.Provider>
  );
};
