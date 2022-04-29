import { useSelector } from "react-redux";
import { RootState } from "store";
import "./MessageToast.css";
const MessageToast = () => {
  const showToast = useSelector((state: RootState) => state.system.showToast);
  const toastMessage = useSelector(
    (state: RootState) => state.system.toastMessage
  );
  return (
    <div id="toaster">
      {showToast && <div id="toast-message">{toastMessage}</div>}
    </div>
  );
};

export default MessageToast;
