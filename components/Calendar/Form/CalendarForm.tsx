import React, { useState, useEffect, FC } from "react";
import MonthInput from "../../Input/MonthInput";
import styles from "../Form/CalendarForm.module.scss";
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

// propsy do komponentów można "wrzucać" poprzez FC
const CalendarForm: FC<ICalendarForm> = ({
  onClick,
  inputFocus,
  inputValue,
  setInputValue,
}) => {
  // Samo ustawienie dodatkowo Date nie jest nam potrzebne możemy operować na inputValue
  const { day, month, year } = inputValue;

  let firstDayCurrentMonth = getFirstDayOfMonth(year, month),
    daysInCurrentMonth = getDaysInMonth(year, month);

  firstDayCurrentMonth =
    firstDayCurrentMonth === 0 ? CALENDAR_WEEKS : firstDayCurrentMonth;


  // Dwie funkcje sa bardzo podobne do siebie także można z nich zrobić jedną
  // I potem można użyć currying'u
  // https://www.carlrippon.com/using-currying-to-pass-additional-data-to-react-event-handlers/
  const handleChangeMonth = (direction: 'prev' | 'next') => () => {
    const date = Object.assign(
      (direction === 'prev' ? getPrevMonth : getNextMonth)(formatRangeOfMonth(month), formatRangeOfYear(year))
    );

    setInputValue({
      day: day,
      month: date.month,
      year: date.year,
    });
  };

  // to można przenieść do osobnego komponentu Days
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
                {/* Dla i + 2 - firstDayCurrentMonth przydałaby się jakaś nazwa która mówi dokładnie co kryje się pod ta libczba  */}
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
        handlePrevMonth={handleChangeMonth('prev')}
        handleNextMonth={handleChangeMonth('next')}
      />
      <div className={styles.card}>
        <>
        
          {getAllMonths().map((item) => (
        //    z tego tez mozna zrobic odobny komponent
            <div className={styles.col} key={item}>
              <div key={item}>{item}</div>
            </div>
          ))}
        </>
        {getAllDays()}
      </div>
    </form>
  );
};

export default CalendarForm;
