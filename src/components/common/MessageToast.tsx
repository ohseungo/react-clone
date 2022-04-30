import { TOAST_MESSAGE_DURATION } from "constants/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { closeToastMessage } from "store/system";
import "./MessageToast.css";

const MessageToast = () => {
  const dispatch = useDispatch();
  const showToast = useSelector((state: RootState) => state.system.showToast);
  const toastMessage = useSelector(
    (state: RootState) => state.system.toastMessage
  );

  const [isFade, setFade] = useState<boolean>(false);
  useEffect(() => {
    if (showToast && !isFade) {
      setTimeout(() => {
        setFade(true);
      }, TOAST_MESSAGE_DURATION);
    }
  }, [showToast, isFade]);

  const handleTransitionEnd = () => {
    dispatch(closeToastMessage());
    setFade(false);
  };
  return (
    <div id="toaster">
      {showToast && (
        <div
          className={"toast-message " + (isFade ? "fade" : "")}
          onTransitionEnd={handleTransitionEnd}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default MessageToast;
