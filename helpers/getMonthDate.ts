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

export const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month - 1, 1).getDay();

export const getDaysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

// Pads a string with zeroes zeroPad(5, 2) => "05"
export const zeroPad = (value: number, length: number) => `${value}`.padStart(length, "0");

//
// YYYY-MM-DD Format 
// tak dużo krócej, wtedy też nie potrzebujemy funkcji zeroPad
export const getDateISO = (date: Date = new Date()) => date.toISOString().split("T")[0]
