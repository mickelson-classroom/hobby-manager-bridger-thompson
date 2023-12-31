import { useParams } from "react-router-dom";
import { AddShow } from "./AddShow";
import { useAppSelector } from "../../app/hooks";
import { Comments } from "./Comments/Comments";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export const ShowDetails = () => {
  const { id } = useParams<RouteParams>();


  const shows = useAppSelector((state) => state.shows.shows)
  const show = shows.find((s) => s.id === Number(id));

  if (!show) throw new Error("Unable to find show");
  return (
    <div className="container">
      <div className="card">
        <div className="row">
          {show.imageUri && (
            <div className="col-md-auto col-12">
              <img src={show.imageUri}
                alt="show"
                className="img-fluid rounded-start"
                style={{ maxHeight: "30ex" }} />
            </div>
          )}
          <div className="col">
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <h1>{show.title}</h1>
                  </div>
                  <div className="col-auto">
                    <AddShow show={show} />
                  </div>
                </div>
              </div>
              <div className="card-text">Season: {show.season}</div>
              <div className="card-text">Rating: {show.rating}</div>
              <div className="card-text">Genre: {show.genre}</div>
              <div className="card-text">
                <div>Episodes:</div>
                {show.episodes.map((e) => (
                  <div>{e.title}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments showId={show.id} />
    </div>
  );
};
