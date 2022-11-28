import React, { Dispatch, LegacyRef, RefObject, SetStateAction } from "react";
import CalendarInput from "../Input/CalendarInput";
import MonthInput from "../../Input/MonthInput";
import styles from "../Form/CalendarForm.module.scss";
import Calendar, { CALENDAR_WEEK_DAYS } from "../../../helpers/calendar";
import {
  getMonthDays,
  getNextMonth,
  getPrevMonth,
} from "../../../helpers/getMonthDate";

interface ICalendarForm {
  focused: boolean;
  ref: RefObject<HTMLInputElement>;
  setInputValue: Dispatch<SetStateAction<string>>;
  onBlur: () => void;
}

const CalendarForm = ({ focused, onBlur, setInputValue }: ICalendarForm) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const date = `${currentDay}/${currentMonth}/${currentYear}`;

  const maxMonthDays = getMonthDays(currentMonth, currentYear);

  const getAllDays = () => {
    var days = [];
    for (let i = 1; i <= maxMonthDays; i++) {
      days.push(
        <div key={i}>
          <div className={styles.col} key={i}>
            <div
              className={styles.day}
              onClick={() => setInputValue(i.toString())}
              key={i}
            >
              {i}
            </div>
          </div>
        </div>
      );
    }
    return days;
  };
  const getAllMonths = () => {
    let months: any[] = [];
    Object.values(CALENDAR_WEEK_DAYS).forEach((item) =>
      months.push(
        <div className={styles.col} key={item}>
          <div key={item}>{item}</div>
        </div>
      )
    );
    return months;
  };
  const handlePrevMonth = () => {
    const date = Object.assign(getPrevMonth(currentMonth, currentYear));
    console.log(date);
  };
  const handleNextMonth = () => {
    const date = Object.assign(getNextMonth(currentMonth, currentYear));
    console.log(date);
  };
  return (
    <>
      {focused && (
        <form className={styles.form} onBlur={onBlur}>
          {/* <h3>Dzisiaj jest: {date}</h3> */}
          <MonthInput
            month={currentMonth}
            year={currentYear}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
          />
          <div className={styles.card}>
            {getAllMonths()}
            {getAllDays()}
          </div>
        </form>
      )}
    </>
  );
};

export default CalendarForm;
