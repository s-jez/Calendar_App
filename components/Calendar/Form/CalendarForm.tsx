import React from "react";
import CalendarInput from "../Input/CalendarInput";
import MonthInput from "../../Input/MonthInput";
import styles from "../Form/CalendarForm.module.scss";
import Calendar from "../../../helpers/calendar";
import { getMonthDays } from "../../../helpers/getMonthDate";

const CalendarForm = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const date = `${currentDay}/${currentMonth}/${currentYear}`;

  const maxMonthDays = getMonthDays(currentMonth, currentYear);
  console.log(maxMonthDays);
  return (
    <form className={styles.form}>
      <h3>Dzisiaj jest: {date}</h3>
      <MonthInput month={currentMonth} year={currentYear} />
      <div className={styles.card}>
        <div className={styles.col}>
          <div>Pn</div>
          <div className={styles.day}>1</div>
          <div className={styles.day}>8</div>
          <div className={styles.day}>15</div>
          <div className={styles.day}>22</div>
          <div className={styles.day}>29</div>
        </div>
        <div className={styles.col}>
          <div>Wt</div>
          <div className={styles.day}>2</div>
          <div className={styles.day}>9</div>
          <div className={styles.day}>16</div>
          <div className={styles.day}>23</div>
          <div className={styles.day}>30</div>
        </div>
        <div className={styles.col}>
          <div>Śr</div>
          <div className={styles.day}>3</div>
          <div className={styles.day}>10</div>
          <div className={styles.day}>17</div>
          <div className={styles.day}>24</div>
        </div>
        <div className={styles.col}>
          <div>Cz</div>
          <div className={styles.day}>4</div>
          <div className={styles.day}>11</div>
          <div className={styles.day}>18</div>
          <div className={styles.day}>25</div>
        </div>
        <div className={styles.col}>
          <div>Pt</div>
          <div className={styles.day}>5</div>
          <div className={styles.day}>12</div>
          <div className={styles.day}>19</div>
          <div className={styles.day}>26</div>
        </div>
        <div className={styles.col}>
          <div>Sb</div>
          <div className={styles.day}>6</div>
          <div className={styles.day}>13</div>
          <div className={styles.day}>20</div>
          <div className={styles.day}>27</div>
        </div>
        <div className={styles.col}>
          <div>Nd</div>
          <div className={styles.day}>7</div>
          <div className={styles.day}>14</div>
          <div className={styles.day}>21</div>
          <div className={styles.day}>28</div>
        </div>
      </div>
    </form>
  );
};

export default CalendarForm;
