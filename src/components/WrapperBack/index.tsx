import { ReactNode } from "react";
import styles from "./style.module.css";

interface IPropsBack {
  children: ReactNode;
}

export const WrapperBack = ({ children }: IPropsBack) => {
  return (
    <div className={styles.backGroundStyle}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
