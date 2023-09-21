import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShowContext } from "./ShowProvider"
import { ShowContextType } from "../models/Show"
import { AddShow } from "./AddShow"
import ToastList from "../components/toast/ToastList"
import { ToastContext } from "../components/toast/toastContext"


export const Shows = () => {
  const { toasts, showToast, removeToast, showMultipleToasts } = useContext(ToastContext);
  const { shows } = useContext(ShowContext) as ShowContextType

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
        <div className="row mt-2">
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <button onClick={() => showToast("A success message", "success")}
              className="mx-2 w-100 btn btn-success">
              Show Success Toast
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <button onClick={() => showToast("A failure message", "error")}
              className="mx-2 w-100 btn btn-danger">
              Show Error Toast
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <button onClick={() => showToast("An info message", "info")}
              className="mx-2 w-100 btn btn-secondary">
              Show Info Toast
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <button onClick={() => showMultipleToasts()}
              className="mx-2 w-100 btn btn-info">
              Show 50 Toasts
            </button>
          </div>
        </div>
        <ToastList data={toasts} removeToast={removeToast} />
      </div>
    </div>
  )
}
