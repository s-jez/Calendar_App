import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../CalendarForm/Form.module.scss";

interface Days {
  daysInCurrentMonth: number;
  firstDayCurrentMonth: number;
  inputValue: {
    day: number;
    month: number;
    year: number;
  };
  setInputValue: Dispatch<
    SetStateAction<{
      day: number;
      month: number;
      year: number;
    }>
  >;
}

const Days: FC<Days> = ({
  daysInCurrentMonth,
  firstDayCurrentMonth,
  inputValue,
  setInputValue,
}) => {
  const { day, month, year } = inputValue;
  let startIndex = 2;
  const getDays = new Array(daysInCurrentMonth + firstDayCurrentMonth - 1)
    .fill(0)
    .map((_, i) =>
      i + startIndex <= firstDayCurrentMonth ? (
        <div key={i}></div>
      ) : (
        <div
          key={i}
          onClick={() =>
            setInputValue({
              day: i + startIndex - firstDayCurrentMonth,
              month: month,
              year: year,
            })
          }
        >
          <div className={styles.col}>
            {i + startIndex - firstDayCurrentMonth === day ? (
              <div className={styles.focused}>
                {i + startIndex - firstDayCurrentMonth}
              </div>
            ) : (
              <div className={styles.day}>
                {i + startIndex - firstDayCurrentMonth}
              </div>
            )}
          </div>
        </div>
      )
    );
  return <div className={styles.card}>{getDays}</div>;
};
export default Days;
