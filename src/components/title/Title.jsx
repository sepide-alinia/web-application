import React from "react";

import styles from "./title.module.css";

export const Title = ({children}) => {
  return <div className={styles.title}>{children}</div>;
};
