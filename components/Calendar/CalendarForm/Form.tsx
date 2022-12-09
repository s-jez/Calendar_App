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
import Column from "../Column/Column";
import getAllWeeks from "../../../helpers/getAllMonths";
import Days from "../Days/Days";

const CalendarForm: FC<ICalendarForm> = ({
  onClick,
  inputFocus,
  inputValue,
  setInputValue,
}) => {
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
        {getAllWeeks().map((item, i) => (
          <Column data={item} key={i} />
        ))}
      </div>
      <Days
        daysInCurrentMonth={daysInCurrentMonth}
        firstDayCurrentMonth={firstDayCurrentMonth}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </form>
  );
};

export default CalendarForm;
