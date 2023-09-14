import { useParams } from "react-router-dom";
import { GetShow } from "../components/showHooks";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export const ShowDetails = () => {
  const { id } = useParams<RouteParams>();
  const show = GetShow(id ? Number(id) : undefined)

  if (!show) return (
    <div>Unable to find show.</div>
  )
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
