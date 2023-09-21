import classes from "./ToastList.module.scss";
import Toast from "./Toast";
import { useRef } from "react";
import { useEffect } from "react";
import { CustomToast } from "./Toasts";

const ToastList = ({ data, removeToast }: { data: CustomToast[], removeToast: (id: number) => void }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const handleScrolling = (el: any) => {
      el?.scrollTo(0, el.scrollHeight);
    };
    handleScrolling(listRef.current);
  }, [data]);

  return (
    <>
      {data.length > 0 && (
        <div
          className={`${classes.toastList} ${classes.toastListTopRight} position-fixed overflow-x-hidden overflow-auto w-100 top-0 end-0 p-3`}
          aria-live="assertive"
          ref={listRef}
        >
          {data.map((toast) => (
            <div className={classes.toast}>
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ToastList;