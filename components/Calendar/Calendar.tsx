import React, { ChangeEvent, FC, useEffect, useState } from "react";
import calendar, {
  CALENDAR_MONTHS,
  CALENDAR_WEEK_DAYS,
} from "../../helpers/calendar";
import {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
} from "../../helpers/checkDates";
import { getNextMonth, getPrevMonth } from "../../helpers/getMonthDate";

interface ICalendar {
  date: Date;
  onChangeDate: ChangeEvent<HTMLInputElement>;
}

const Calendar: FC<ICalendar> = ({ date, onChangeDate }) => {
  const [dateState, setDateState] = useState<any>({
    current: 0,
    month: 0,
    year: 0,
  });
  const [dateToday, setDateToday] = useState(new Date());

  useEffect(() => {
    addDateToState(date);
  });

  const addDateToState = (date: Date) => {
    const isDataObj = isDate(date);
    const _date = isDataObj ? date : new Date();
    setDateState({
      current: isDataObj ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
  };

  const getCalendarDate = () => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || +current.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  const renderMonthAndYear = () => {
    const { month, year } = dateState;
    const monthName =
      Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
    return { monthName };
  };

  const renderDayLabel = (day: number, index: number) => {
    // const dayLabel = CALENDAR_WEEK_DAYS[day].toUpperCase();
    // return (
    //   {dayLabel}
    // )
  };

  const renderCalendarDate = (date: any, index: number) => {
    const { current, month, year } = dateState;
    const _date = new Date(date.join("-"));
    // Check if calendar date is the same as today
    const isToday = isSameDay(_date, dateToday);
    // Check if calendar date is same day as currenly selected
    const isCurrent = current && isSameDay(_date, current);
    // Check if calendar date in the same month as the state month and year
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));
    // the click handler
    // const onClick = this.gotoDate(_date);
    const props = {
      index,
      inMonth,
      title: _date.toDateString(),
    };
  };

  return (
    <div>
      <div>
        {Object.keys(CALENDAR_WEEK_DAYS)}
        {getCalendarDate()}
      </div>
    </div>
  );
};

export default Calendar;
