import { FC, useContext, useEffect } from "react";
import { ToastContext } from "./context/toastContext";
import ToastList from "./toast/ToastList";

export const ToastError: FC<{
  error: Error;
}> = ({ error }) => {
  const { showToast } = useContext(ToastContext);
  useEffect(() => {
    showToast(`Error: ${error.message}`, "error");
  }, [error, showToast]);

  return <ToastList />;
};
