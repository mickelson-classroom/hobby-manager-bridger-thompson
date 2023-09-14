import { Link } from "react-router-dom"
import { GetShows } from "../components/showHooks"


export const Shows = () => {
  const shows = GetShows()
  return (
    <div className="container">
      <h1>Shows:</h1>
      <ul className="list-group">
        {shows.map((s) =>
          <Link to={`show/${s.id}`}>
            <li className="list-group-item list-group-item-action text-reset">{s.title}</li>
          </Link>
        )}
      </ul>
    </div>
  )
}

