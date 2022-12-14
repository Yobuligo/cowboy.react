import styles from "./DialogHeader.module.css";

export const DialogHeader: React.FC<{ title?: string }> = (props) => {
  return (
    <header className={props.title ? styles.dialogHeader : ""}>
      {props.title}
    </header>
  );
};
