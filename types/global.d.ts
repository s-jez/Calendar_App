export {};
declare global {
  export interface CalendarDate {
    day: number;
    month: number;
    year: number;
  }
  interface ICalendarForm {
    inputValue: {
      day: number;
      month: number;
      year: number;
    };
    onClick: MouseEventHandler<HTMLFormElement>;
    inputFocus: boolean;
    setInputValue: Dispatch<
      SetStateAction<{
        day: number;
        month: number;
        year: number;
      }>
    >;
  }
  interface IMonthInput {
    month: number;
    year: number;
    handlePrevMonth: MouseEventHandler<HTMLDivElement> | undefined;
    handleNextMonth: MouseEventHandler<HTMLDivElement> | undefined;
  }
  interface IColumn {
    data: string;
    key: number;
  }
}
