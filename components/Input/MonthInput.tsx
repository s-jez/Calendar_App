import React, { MouseEventHandler } from "react";
import styles from "../Input/Input.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CALENDAR_MONTH_NAMES } from "../../helpers/calendar";
import { getNextMonth, getPrevMonth } from "../../helpers/getMonthDate";

interface IMonthInput {
  month: number;
  year: number;
  handlePrevMonth: MouseEventHandler<HTMLDivElement> | undefined;
  handleNextMonth: MouseEventHandler<HTMLDivElement> | undefined;
}

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
