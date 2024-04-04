import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { HIDE_TOAST } from "../../Redux/actions/actionTypes";

const Toast = () => {
  const { showToast, toastText } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch({ type: HIDE_TOAST });
  };

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        closeToast();
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  if (showToast) {
    return (
      <div className="toast toast-center font-mono">
        <div className="alert bg-violet-300 text-black flex items-center border-0 p-1">
          <span className="flex-1 pl-2">{toastText}</span>
          <div
            className="hover:cursor-pointer rounded-full hover:bg-neutral hover:text-white p-2"
            onClick={() => closeToast()}
          >
            <RxCross1 />
          </div>
        </div>
      </div>
    );
  }
};

export default Toast;
