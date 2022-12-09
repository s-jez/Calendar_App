import React, { useRef, useState, ChangeEvent, useEffect } from "react";
import styles from "../../Calendar/Input/CalendarInput.module.scss";
import CalendarForm from "../Form/CalendarForm";
import {
  formatRangeOfDay,
  formatRangeOfMonth,
  formatRangeOfYear,
} from "../../../helpers/formatDate";
import { getDateISO } from "../../../helpers/getMonthDate";
import { CiCalendar } from "react-icons/ci";

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
    inputDataHandler({
      day,
      month,
      year,
    });
  };

  const inputDataHandler = (date: {
    day: number;
    month: number;
    year: number;
  }) => {
    const { day, month, year } = date;

    if (inputRef.current != null)
      inputRef.current.value = getDateISO(new Date(year, month, day));
    setInputValue(date);
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
      <div className={styles["calendar__background"]}>
        <div className={styles["calendar__white"]}>
          <div className={styles["calendar__input"]}>
            <div className={styles["calendar__left"]}>
              <label>Od kiedy wolne</label>
              <CiCalendar
                className={styles["icon"]}
                size={25}
                onClick={inputClickHandler}
              />
              <div>
                <input
                  id="calendar-input"
                  type="date"
                  min="2020-01-01"
                  max="2030-01-01"
                  placeholder="Od kiedy wolne"
                  ref={inputRef}
                  onChange={inputChangeHandler}
                  value={currentDate}
                  onClick={inputClickHandler}
                  onFocus={() => setInputFocus(true)}
                />
              </div>
            </div>
          </div>
          <CalendarForm
            inputValue={inputValue}
            onClick={inputClickHandler}
            inputFocus={inputFocus}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarInput;
