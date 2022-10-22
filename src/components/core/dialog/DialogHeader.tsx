import styles from "./DialogHeader.module.css";

export const DialogHeader: React.FC<{ title?: string }> = (props) => {
  return <header className={styles.dialogHeader}>{props.title}</header>;
};
