import { getMonthDays, getMonthFirstDay, getNextMonth, getPrevMonth, zeroPad } from "./getMonthDate";

export const CURRENT_YEAR = +new Date().getFullYear();
// current month starting from 1 to 12, index start from 0.
export const CURRENT_MONTH = +(new Date().getMonth() + 1);
// Weeks displayed on a calendar.
export const CALENDAR_WEEKS = 6;

export const CALENDAR_WEEK_DAYS = {
  Monday: "Pn",
  Tuesday: "Wt",
  Wednesday: "Śr",
  Thursday: "Cz",
  Friday: "Pt",
  Saturday: "Sb",
  Niedziela: "Nd",
};
export const CALENDAR_MONTHS = {
  January: "Styczeń",
  February: "Luty",
  March: "Marzec",
  April: "Kwiecień",
  May: "Maj",
  June: "Czerwiec",
  July: "Lipiec",
  August: "Sierpień",
  September: "Wrzesień",
  October: "Październik",
  November: "Listopad",
  December: "Grudzień",
};

export const CALENDAR_MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (month = CURRENT_MONTH, year = CURRENT_YEAR) => {

    // Get number of days in the month and the month's first day 
    const monthDays = getMonthDays(month, year);
    const monthFirstDay = getMonthFirstDay(month, year);
  
    // Get number of days to be displayed from previous and next months
    // These ensure a total of 42 days (6 weeks) displayed on the calendar
    const daysFromPrevMonth = monthFirstDay - 1;
    const daysFromNextMonth = (CALENDAR_WEEKS * 7) - (daysFromPrevMonth + monthDays);
  
    // Get the previous and next months and years
    const { month: prevMonth, year: prevMonthYear } = getPrevMonth(month, year);
    const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year);

    // Get number of days in previous month
    const prevMonthDays = getMonthDays(prevMonth, prevMonthYear);
  
    // Builds dates to be displayed from previous month
    const prevMonthDates = [...new Array(daysFromPrevMonth)].map((_n, index) => {
      const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
      return [ prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2) ];
    });
  
    // Builds dates to be displayed from current month
    const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
      const day = index + 1;
      return [year, zeroPad(month, 2), zeroPad(day, 2)];
    });

    // Builds dates to be displayed from next month
    const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
      const day = index + 1;
      return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)];
    });

    // Combine all dates from previous, current and the next months.
    return [ ...prevMonthDates, ...thisMonthDates, ...nextMonthDates ];
  }