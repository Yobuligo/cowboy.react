import ReactDOM from "react-dom";
import styles from "./DialogBackdrop.module.css";

export const DialogBackdrop: React.FC = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.dialogBackdrop}></div>,
        document.getElementById("backdrop")!
      )}
    </>
  );
};
