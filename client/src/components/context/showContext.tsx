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
  saveShow: () => {},
  removeShow: () => {},
  updateShow: () => {},
});

const getStoredShows = () => {
  const savedShowsString = localStorage.getItem("shows") ?? "[]";
  return JSON.parse(savedShowsString);
};

const storeShows = (shows: Show[]) => {
  localStorage.setItem("shows", JSON.stringify(shows));
};

export const ShowProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [shows, setShows] = useState<Show[]>(getStoredShows());

  useEffect(() => {
    const handler = setTimeout(() => {
      storeShows(shows);
    }, 500);

    return () => clearTimeout(handler);
  }, [shows]);

  const saveShow = (show: Show) => {
    const newShow: Show = {
      id: Math.random(),
      title: show.title,
      season: show.season,
      episodes: show.episodes,
      rating: show.rating,
    };
    const combinedShows = [...shows, newShow];
    setShows(combinedShows);
  };

  const updateShow = (updatedShow: Show) => {
    setShows((oldShows) => [
      updatedShow,
      ...oldShows.filter((b) => b.id !== updatedShow.id),
    ]);
  };

  const removeShow = (id: number) => {
    const remainingShows = shows.filter((s) => s.id !== id);
    setShows(remainingShows);
  };

  return (
    <ShowContext.Provider value={{ shows, saveShow, removeShow, updateShow }}>
      {children}
    </ShowContext.Provider>
  );
};
