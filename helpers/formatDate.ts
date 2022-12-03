export const formatRangeOfDay = (day: number, year: number, month: number): number => Math.max(Math.min(day, new Date(year, month, 0).getDate()), 1);

export const formatRangeOfMonth = (month: number): number => Math.max(Math.min(month, 12), 1);

export const formatRangeOfYear = (year: number): number => Math.max(Math.min(year, 2030), 2020);
