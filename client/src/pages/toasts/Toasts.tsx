import { useAppDispatch } from "../../app/hooks";
import { CustomToast, ToastType } from "../../models/Toasts";
import { remove, show, showMultiple } from "../../components/toast/toast-slice";

export const Toasts = () => {
  const dispatch = useAppDispatch();

  const showToastHandler = (message: string, type: ToastType) => {
    const newToast: CustomToast = {
      id: Math.random(),
      message,
      type
    };
    dispatch(show(newToast))
    setTimeout(() => {
      dispatch(remove(newToast.id))
    }, 5 * 1000);
  }

  return (
    <div className="container">
      <h1 className="text-center">Toasts</h1>
      <div className="row mt-2">
        <div className="col-12 col-md-6 col-lg-3 mb-2">
          <button
            onClick={() => showToastHandler("A success message", "success")}
            className="mx-2 w-100 btn btn-success"
          >
            Show Success Toast
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-2">
          <button
            onClick={() => showToastHandler("A failure message", "error")}
            className="mx-2 w-100 btn btn-danger"
          >
            Show Error Toast
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-2">
          <button
            onClick={() => showToastHandler("An info message", "info")}
            className="mx-2 w-100 btn btn-secondary"
          >
            Show Info Toast
          </button>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-2">
          <button
            onClick={() => dispatch(showMultiple())}
            className="mx-2 w-100 btn btn-info"
          >
            Show 50 Toasts
          </button>
        </div>
      </div>
    </div>
  );
};
