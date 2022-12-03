import React from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CALENDAR_MONTH_NAMES } from "../../helpers/calendar";

const MonthInput = ({
  month,
  year,
  handlePrevMonth,
  handleNextMonth,
}: IMonthInput) => {
  return (
    <div className={styles.month}>
      <div className={styles.arrow} onClick={handlePrevMonth}>
        <SlArrowLeft />
      </div>
      <div className={styles.bold}>
        {CALENDAR_MONTH_NAMES[month - 1]} {year}
      </div>
      <div className={styles.arrow} onClick={handleNextMonth}>
        <SlArrowRight />
      </div>
    </div>
  );
};

export default MonthInput;
