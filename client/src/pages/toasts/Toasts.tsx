import { useContext } from "react";
import { ToastContext } from "../../components/context/toastContext";
import ToastList from "../../components/toast/ToastList";

export const Toasts = () => {
  const { toasts, showToast, removeToast, showMultipleToasts } = useContext(ToastContext);
  return (
    <div>
      <h1 className="text-center">Toasts</h1>
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
  )
}
