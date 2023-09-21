import "./ToastList.css";
import Toast from "./Toast";
import { useRef } from "react";
import { useEffect } from "react";
import { CustomToast, ToastType } from "./Toasts";

const ToastList = ({ data, position, removeToast }: { data: CustomToast[], position: ToastType, removeToast: (id: number) => void }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const handleScrolling = (el: any) => {
      const isTopPosition = ["top-left", "top-right"].includes(position);
      if (isTopPosition) {
        el?.scrollTo(0, el.scrollHeight);
      } else {
        el?.scrollTo(0, 0);
      }
    };
    handleScrolling(listRef.current);
  }, [position, data]);

  const sortedData = position.includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    <>
      {sortedData.length > 0 && (
        <div
          className={`toast-list toast-list--${position}`}
          aria-live="assertive"
          ref={listRef}
        >
          {sortedData.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ToastList;