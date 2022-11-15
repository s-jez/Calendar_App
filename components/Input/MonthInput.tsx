import React from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const MonthInput = () => {
  return (
    <div className={styles.month}>
      <div className={styles.arrow}>
        <SlArrowLeft />
      </div>
      <div className={styles.bold}>Maj 2022</div>
      <div className={styles.arrow}>
        {" "}
        <SlArrowRight />
      </div>
    </div>
  );
};

export default MonthInput;
