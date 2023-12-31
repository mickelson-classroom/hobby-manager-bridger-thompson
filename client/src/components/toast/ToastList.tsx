import classes from "./ToastList.module.scss";
import Toast from "./Toast";
import { useRef } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { remove } from "./toast-slice";

const ToastList = () => {
  const toasts = useAppSelector((state) => state.toasts.toasts);
  const dispatch = useAppDispatch();
  const listRef = useRef(null);

  useEffect(() => {
    const handleScrolling = (el: any) => {
      el?.scrollTo(0, el.scrollHeight);
    };
    handleScrolling(listRef.current);
  }, [toasts]);

  const handleClick = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {toasts.length > 0 && (
        <div
          className={`${classes.toastList} ${classes.toastListTopRight} position-fixed overflow-x-hidden overflow-auto w-100 top-0 end-0 p-3`}
          aria-live="assertive"
          ref={listRef}
        >
          {toasts.map((toast, index) => (
            <div className={classes.toast} key={index}>
              <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={() => handleClick(toast.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ToastList;
