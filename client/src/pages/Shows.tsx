import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ShowContext } from "./ShowProvider"
import { ShowContextType } from "../models/Show"
import { AddShow } from "./AddShow"
import { ToastType, CustomToast } from "../components/toast/Toasts"
import ToastList from "../components/toast/ToastList"


export const Shows = () => {
  const [toasts, setToasts] = useState<CustomToast[]>([]);
  const position = "top-right"
  const { shows } = useContext(ShowContext) as ShowContextType

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = (message: string, type: ToastType) => {
    const toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      removeToast(toast.id);
    }, 5 * 1000);
  };

  const showMultipleToasts = () => {
    for (let i = 0; i < 50; i++) {
      showToast(`Toast #${i + 1}`, 'success');
    }
  };

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
        <ToastList data={toasts} position={position as ToastType} removeToast={removeToast} />
      </div>
    </div>
  )
}
