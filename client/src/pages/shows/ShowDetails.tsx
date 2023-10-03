import { useParams } from "react-router-dom";
import { AddShow } from "./AddShow";
import { useAppSelector } from "../../app/hooks";
import { Comments } from "./Comments";
import { Comment } from "../../models/Comment";
import { useState, useEffect } from "react";
import { commentsService } from "./commentsApiService";
import { Spinner } from "../../components/spinner/Spinner";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

export const ShowDetails = () => {
  const { id } = useParams<RouteParams>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    commentsService.getComments().then((v) => {
      setComments(v)
      setIsLoading(false)
    })
  }, []);

  const shows = useAppSelector((state) => state.shows.shows)
  const show = shows.find((s) => s.id === Number(id));

  if (isLoading) return <div className="text-center"><Spinner /></div>
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
              <div className="card-text">
                <Comments comments={comments.filter(c => c.showId === show.id)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
