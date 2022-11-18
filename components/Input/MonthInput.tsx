import React from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CALENDAR_MONTH_NAMES } from "../../helpers/calendar";

interface IMonthInput {
  month: number;
  year: number;
}

const MonthInput = ({ month, year }: IMonthInput) => {
  return (
    <div className={styles.month}>
      <div className={styles.arrow}>
        <SlArrowLeft />
      </div>
      <div className={styles.bold}>
        {CALENDAR_MONTH_NAMES[month - 1]} {year}
      </div>
      <div className={styles.arrow}>
        <SlArrowRight />
      </div>
    </div>
  );
};

export default MonthInput;
