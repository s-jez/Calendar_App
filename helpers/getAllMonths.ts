import { CALENDAR_WEEK_DAYS } from "./calendar";

// funkcja getAllMonths ale bierzemy values z CALENDAR_WEEK_DAYS?
// można tutaj użyć reduce, warto go sie nauczyć może dużo pomóc

const getAllMonths = () => 
  Object.values(CALENDAR_WEEK_DAYS).reduce((acc: string[], day) => [...acc, day], []);

export default getAllMonths;