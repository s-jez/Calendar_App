import styles from "./Column.module.scss";
import React, { FC } from "react";

const Column: FC<IColumn> = ({ data, key }) => {
  return (
    <div className={styles.col} key={key}>
      <div key={key}>{data}</div>
    </div>
  );
};
export default Column;
