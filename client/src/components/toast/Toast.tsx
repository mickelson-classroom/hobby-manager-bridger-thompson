import "./Toast.css";
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
  CloseIcon
} from "./Icons"
import { ToastType } from "./Toasts";

const Toast = ({ message, type, onClose }: { message: string, type: ToastType, onClose: () => void }) => {
  const iconMap = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
  };

  const toastIcon = iconMap[type] || null;
  return (
    <div className={`toast show toast--${type}`} role="alert">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p className="my-auto">{message}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <CloseIcon />
        </span>
      </button>
    </div>
  )
}

export default Toast;