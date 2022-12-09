import React from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CALENDAR_MONTH_NAMES } from "../../helpers/calendar";

// Tutaj też można dodać FC i interface
const MonthInput = ({
  month,
  year,
  handlePrevMonth,
  handleNextMonth,
}: IMonthInput) => (
    <div className={styles.month}>
      <div className={styles.arrow} onClick={handlePrevMonth}>
        <SlArrowLeft size={13} />
      </div>
      <div className={styles.bold}>
        {CALENDAR_MONTH_NAMES[month - 1]} {year}
      </div>
      <div className={styles.arrow} onClick={handleNextMonth}>
        <SlArrowRight size={13} />
      </div>
    </div>
);


export default MonthInput;
