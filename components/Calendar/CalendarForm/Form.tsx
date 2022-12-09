import React, { FC } from "react";
import MonthInput from "../../Input/MonthInput";
import styles from "../CalendarForm/Form.module.scss";
import { CALENDAR_WEEKS } from "../../../helpers/calendar";
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
import getAllMonths from "../../../helpers/getAllMonths";

const CalendarForm: FC<ICalendarForm> = ({
  onClick,
  inputFocus,
  inputValue,
  setInputValue,
}: ICalendarForm) => {
  const { day, month, year } = inputValue;

  let firstDayCurrentMonth = getFirstDayOfMonth(year, month),
    daysInCurrentMonth = getDaysInMonth(year, month);

  firstDayCurrentMonth =
    firstDayCurrentMonth === 0 ? CALENDAR_WEEKS : firstDayCurrentMonth;

  // https://www.carlrippon.com/using-currying-to-pass-additional-data-to-react-event-handlers/
  const handleChangeMonth = (direction: "prev" | "next") => () => {
    const date = Object.assign(
      (direction === "prev" ? getPrevMonth : getNextMonth)(
        formatRangeOfMonth(month),
        formatRangeOfYear(year)
      )
    );
    setInputValue({
      day: day,
      month: date.month,
      year: date.year,
    });
  };

  const getAllDays = () => {
    return new Array(daysInCurrentMonth + firstDayCurrentMonth - 1)
      .fill(0)
      .map((_, i) =>
        i + 2 <= firstDayCurrentMonth ? (
          <div key={i}></div>
        ) : (
          <div
            key={i}
            onClick={() =>
              setInputValue({
                day: i + 2 - firstDayCurrentMonth,
                month: month,
                year: year,
              })
            }
          >
            <div className={styles.col}>
              {i + 2 - firstDayCurrentMonth === day ? (
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

  return (
    <form
      className={styles.form}
      onClick={onClick}
      style={{ visibility: inputFocus ? "visible" : "hidden" }}
    >
      <MonthInput
        month={inputValue.month}
        year={inputValue.year}
        handlePrevMonth={handleChangeMonth("prev")}
        handleNextMonth={handleChangeMonth("next")}
      />
      <div className={styles.card}>
        {getAllMonths().map((item) => (
          <div className={styles.col} key={item}>
            <div key={item}>{item}</div>
          </div>
        ))}
        {getAllDays()}
      </div>
    </form>
  );
};

export default CalendarForm;
