import React from "react";
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
} from "./Icons";
import { ToastType } from "./Toasts";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const iconMap = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
  };

  const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast my-1 show toast-${type}`} role="alert">
      <div className="toast-body">
        <div className="row">
          {toastIcon && (
            <div className="col-auto">
              <div className="me-2">{toastIcon}</div>
            </div>
          )}
          <div className="col my-auto">
            <div>{message}</div>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
