import { FC, useContext, useEffect } from "react";
import { ToastContext } from "./context/toastContext";
import ToastList from "./toast/ToastList";

export const ToastError: FC<{
  error: Error;
}> = ({ error }) => {
  const { showToast } = useContext(ToastContext);
  useEffect(() => {
    console.log("error");
    showToast(`Error: ${error.message}`, "error");
  }, [error]);

  return <ToastList />;
};
