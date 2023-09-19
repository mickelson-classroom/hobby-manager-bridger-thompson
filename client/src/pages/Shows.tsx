import { Link } from "react-router-dom"
import { GetShows } from "../components/showHooks"


export const Shows = () => {
  const shows = GetShows()
  return (
    <div className="container">
      <h1>Shows:</h1>
      <div className="row">
        {shows.map((s) =>
          <Link to={`show/${s.id}`}
            key={s.id}
            className="col-12 col-md-6 col-lg-4 col-xl-3 my-1 text-decoration-none">
            <div className="card">
              <div className="card-body">
                <div className="card-title fs-4">{s.title}</div>
                <div className="card-text">Season {s.season}</div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

