import React, { MutableRefObject, useRef, useState } from "react";
import styles from "../../Calendar/Input/CalendarInput.module.scss";
import form from "../../Calendar/Form/CalendarForm.module.scss";
import CalendarForm from "../Form/CalendarForm";

const CalendarInput = () => {
  const [focused, setFocused] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div className={styles["calendar"]}>
      <input
        id="calendar-input"
        type="text"
        className={styles.input}
        placeholder="Od kiedy wolne"
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
      <CalendarForm focused={focused} ref={ref} />
    </div>
  );
};

export default CalendarInput;
