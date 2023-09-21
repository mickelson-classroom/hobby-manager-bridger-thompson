import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShowContext } from "../../components/context/showContext";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export const ShowDetails = () => {
  const { id } = useParams<RouteParams>();
  const { shows } = useContext(ShowContext);
  const show = shows.find(s => s.id === Number(id))

  if (!show) throw new Error("Unable to find show")
  return (
    <div className="container">
      <h1>{show.title}</h1>
      <div>Season: {show.season}</div>
      <div>Rating: {show.rating}</div>
      <div>
        <div>Episodes:</div>
        {show.episodes.map((e) =>
          <div>{e.title}</div>
        )}
      </div>
    </div>
  )
}
