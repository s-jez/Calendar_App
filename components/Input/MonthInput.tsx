import React from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CALENDAR_MONTH_NAMES } from "../../helpers/calendar";
import { getNextMonth, getPrevMonth } from "../../helpers/getMonthDate";

interface IMonthInput {
  month: number;
  year: number;
}

const MonthInput = ({ month, year }: IMonthInput) => {
  const handlePrevMonth = () => {
    const date = Object.assign(getPrevMonth(month, year));
    console.log(date);
  };
  const handleNextMonth = () => {
    const date = Object.assign(getNextMonth(month, year));
    console.log(date);
  };
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
