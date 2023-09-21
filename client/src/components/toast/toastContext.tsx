import { createContext, ReactNode, useState } from "react";
import { ToastType, CustomToast } from "./Toasts";

type ToastContextType = {
  toasts: CustomToast[];
  showToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
  showMultipleToasts: () => void;
};

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  showToast: () => { },
  removeToast: () => { },
  showMultipleToasts: () => { },
});

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<CustomToast[]>([]);

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

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showMultipleToasts = () => {
    for (let i = 0; i < 50; i++) {
      showToast(`Toast #${i + 1}`, 'success');
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast, showMultipleToasts }}>
      {children}
    </ToastContext.Provider>
  );
};
