import { CALENDAR_WEEK_DAYS_NAMES } from "./calendar";

const getAllWeeks = () => {
  return Object.values(CALENDAR_WEEK_DAYS_NAMES).reduce((acc: string[], day) => [...acc, day], []);
};
export default getAllWeeks;
