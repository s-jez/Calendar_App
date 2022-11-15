import React from "react";
import styles from "../Input/Input.module.scss";

const CalendarInput = () => {
  return (
    <div className={styles["calendar"]}>
      <label>Enter date:</label>
      <input
        id="calendar-input"
        type="text"
        className={styles["calendar__input"]}
        placeholder="DD/MM/YYYY"
      />
    </div>
  );
};

export default CalendarInput;
