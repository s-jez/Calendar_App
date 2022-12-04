import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import styles from "../../Calendar/Input/CalendarInput.module.scss";
import CalendarForm from "../Form/CalendarForm";
import {
  formatRangeOfDay,
  formatRangeOfMonth,
  formatRangeOfYear,
} from "../../../helpers/formatDate";
import { getDateISO } from "../../../helpers/getMonthDate";

const CalendarInput = () => {
  const [inputValue, setInputValue] = useState<{
    day: number;
    month: number;
    year: number;
  }>({ day: 2, month: 12, year: 2022 });
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [inputFocus, setInputFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const inputClickHandler = () => {
    if (document.activeElement !== inputRef.current) {
      inputRef.current?.focus();
    }
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value),
      year = formatRangeOfYear(date.getFullYear()),
      month = formatRangeOfMonth(date.getMonth() + 1),
      day = formatRangeOfDay(date.getDate(), year, month);
    setInputValue({
      year,
      month,
      day,
    });
  };

  useEffect(() => {
    setCurrentDate(
      getDateISO(
        new Date(inputValue.year, inputValue.month - 1, inputValue.day)
      )
    );
  }, [inputValue]);

  return (
    <div className={styles["calendar"]}>
      <div className={styles["calendar__white"]}>
        <input
          id="calendar-input"
          type="date"
          min="2020-01-01"
          max="2030-01-01"
          className={styles.input}
          placeholder="Od kiedy wolne"
          ref={inputRef}
          onChange={inputChangeHandler}
          value={currentDate}
          onClick={inputClickHandler}
          onFocus={() => setInputFocus(true)}
        />
        <CalendarForm
          inputValue={inputValue}
          onClick={inputClickHandler}
          inputFocus={inputFocus}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default CalendarInput;
