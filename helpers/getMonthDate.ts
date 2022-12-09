// getNextMonth(1, 2022) => {month: 2, year: 2022}
export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1;
  const nextMonthYear = month < 12 ? year : year + 1;
  return {
    month: nextMonth,
    year: nextMonthYear,
  };
};

// getPrevMonth(1, 2022) => {month: 12, year: 2021}
export const getPrevMonth = (month: number, year: number) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevMonthYear = month > 1 ? year : year - 1;
  return {
    month: prevMonth,
    year: prevMonthYear,
  };
};

export const getFirstDayOfMonth = (year: number, month: number) =>
  new Date(year, month - 1, 1).getDay();

export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

// YYYY-MM-DD
export const getDateISO = (date: Date = new Date()) => date.toISOString().split("T")[0]

