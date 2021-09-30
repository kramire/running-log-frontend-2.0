import { eachDayOfInterval, getDaysInMonth, format } from "date-fns";

export const getMonthDates = (month: number, year: number) => {
  const totalDays = getDaysInMonth(new Date(year, month));
  return eachDayOfInterval({
    start: new Date(year, month, 1),
    end: new Date(year, month, totalDays),
  });
};

export const getWeekDays = (weekStart: number) => {
  const startIdx = weekStart > 6 || weekStart < 0 ? 0 : weekStart;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const start = days.slice(startIdx);
  const end = days.slice(0, startIdx);
  return start.concat(end);
};

export const emptyCalCells = (weekDay: number, isBefore: boolean) => {
  const arr = [];
  if (isBefore) {
    for (let i = 0; i < weekDay; i++) {
      arr.push(i);
    }
  } else {
    for (let i = weekDay + 1; i < 7; i++) {
      arr.push(i);
    }
  }
  return arr;
};

export const isMDYEqual = (d1: Date, d2: Date) =>
  format(d1, "MM/dd/yyyy") === format(d2, "MM/dd/yyyy");
