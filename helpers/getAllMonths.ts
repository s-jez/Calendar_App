import { CALENDAR_WEEK_DAYS } from "./calendar";

const getAllMonths = () => {
  let months = [] as string[];
  Object.values(CALENDAR_WEEK_DAYS).forEach((item) => months.push(item));
  return months;
};
export default getAllMonths;
