import { CURRENT_MONTH, CURRENT_YEAR } from "./calendar";

// Number of days in a month for a given year from 28 to 31 (int).
export const getMonthDays = (month: number, year: number) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

// First day of the month for a given year 1 - 7 (int) 1
// 1 => Niedziela, 7 => Sobota
export const getMonthFirstDay = (
  month = CURRENT_MONTH,
  year = CURRENT_YEAR
) => {
  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1;
};

// Gets the month and year before given date
// getPrevMonth(1, 2003) => {month: 12, 2002}
export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;
  return {
    month: nextMonth,
    year: nextMonthYear,
  };
};
// Gets the month and year after given date
// getNextMonth(1, 2003) => {month: 2, year: 2003}
export const getPrevMonth = (month: number, year: number) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;
  return {
    month: prevMonth,
    year: prevMonthYear,
  };
};

// Pads a string with zeroes zeroPad(5, 2) => "05"
export const zeroPad = (value: number, length: number) => {
  return `${value}`.padStart(length, "0");
};