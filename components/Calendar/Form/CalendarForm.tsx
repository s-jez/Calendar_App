import React, { useState, useEffect } from "react";
import MonthInput from "../../Input/MonthInput";
import styles from "../Form/CalendarForm.module.scss";
import { CALENDAR_WEEKS, CALENDAR_WEEK_DAYS } from "../../../helpers/calendar";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  getNextMonth,
  getPrevMonth,
} from "../../../helpers/getMonthDate";
import {
  formatRangeOfMonth,
  formatRangeOfYear,
} from "../../../helpers/formatDate";

const CalendarForm = ({
  onClick,
  inputFocus,
  inputValue,
  setInputValue,
}: ICalendarForm) => {
  const [dateState, setDateState] = useState<{
    day: number;
    month: number;
    year: number;
  }>({
    day: 2,
    month: 12,
    year: 2022,
  });
  const month = dateState.month,
    year = dateState.year;

  let firstDayCurrentMonth = getFirstDayOfMonth(year, month),
    daysInCurrentMonth = getDaysInMonth(year, month);

  firstDayCurrentMonth =
    firstDayCurrentMonth === 0 ? CALENDAR_WEEKS : firstDayCurrentMonth;

  useEffect(() => {
    setDateState({
      day: inputValue.day,
      month: inputValue.month,
      year: inputValue.year,
    });
  }, [inputValue]);

  const getAllMonths = () => {
    let months: JSX.Element[] = [];
    Object.values(CALENDAR_WEEK_DAYS).forEach((item) =>
      months.push(
        <div className={styles.col} key={item}>
          <div key={item}>{item}</div>
        </div>
      )
    );
    return months;
  };

  const getAllDays = () => {
    return new Array(daysInCurrentMonth + firstDayCurrentMonth - 1)
      .fill(0)
      .map((_, i) =>
        i + 1 <= firstDayCurrentMonth ? (
          <div key={i}></div>
        ) : (
          <div
            key={i}
            onClick={() =>
              setInputValue({
                day: i + 2 - firstDayCurrentMonth,
                month: dateState.month,
                year: dateState.year,
              })
            }
          >
            <div className={styles.col}>
              {i + 2 - firstDayCurrentMonth === dateState.day ? (
                <div className={styles.focused}>
                  {i + 2 - firstDayCurrentMonth}
                </div>
              ) : (
                <div className={styles.day}>{i + 2 - firstDayCurrentMonth}</div>
              )}
            </div>
          </div>
        )
      );
  };

  const handleNextMonth = () => {
    const date = Object.assign(
      getNextMonth(formatRangeOfMonth(month), formatRangeOfYear(year))
    );

    setInputValue({
      day: dateState.day,
      month: date.month,
      year: date.year,
    });
  };

  const handlePrevMonth = () => {
    const date = Object.assign(
      getPrevMonth(formatRangeOfMonth(month), formatRangeOfYear(year))
    );
    setInputValue({
      day: dateState.day,
      month: date.month,
      year: date.year,
    });
  };
  return (
    <>
      {inputFocus && (
        <form className={styles.form} onClick={onClick}>
          <MonthInput
            month={inputValue.month}
            year={inputValue.year}
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
