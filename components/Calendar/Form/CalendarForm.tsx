import React from "react";
import CalendarInput from "../Input/CalendarInput";
import MonthInput from "../../Input/MonthInput";
import styles from "../Form/CalendarForm.module.scss";
import Calendar, { CALENDAR_WEEK_DAYS } from "../../../helpers/calendar";
import { getMonthDays } from "../../../helpers/getMonthDate";

const CalendarForm = () => {
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
        <div>
          <div className={styles.col}>
            <div className={styles.day} key={i}>
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
        <div className={styles.col}>
          <div>{item}</div>
        </div>
      )
    );
    return months;
  };
  console.log(maxMonthDays);
  return (
    <form className={styles.form}>
      <h3>Dzisiaj jest: {date}</h3>
      <MonthInput month={currentMonth} year={currentYear} />
      <div className={styles.card}>
        {getAllMonths()}
        {getAllDays()}
      </div>
    </form>
  );
};

export default CalendarForm;
