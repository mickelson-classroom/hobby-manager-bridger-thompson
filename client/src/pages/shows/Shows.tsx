import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShowContext } from "../../components/context/showContext"
import { AddShow } from "./AddShow"


export const Shows = () => {
  const { shows } = useContext(ShowContext)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Shows:</h1>
        </div>
        <div className="col-auto">
          <AddShow />
        </div>
      </div>
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
        <Link to={`show/999`}
          className="col-12 col-md-6 col-lg-4 col-xl-3 my-1 text-decoration-none">
          <div className="card">
            <div className="card-body">
              <div className="card-title fs-4">Throw Error</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
