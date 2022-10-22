import React from "react";
import { Card } from "../card/Card";
import styles from "./Dialog.module.css";
import { DialogBackdrop } from "./DialogBackdrop";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";

export const Dialog: React.FC<{
  title?: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <>
      <DialogBackdrop />
      <div className={styles.dialog}>
        <Card>
          <DialogHeader title={props.title} />
          {props.children}
          <DialogFooter />
        </Card>
      </div>
    </>
  );
};
