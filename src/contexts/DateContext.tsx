import React, { useState, useMemo, FC, useEffect } from "react";
import { getWeekDays } from "../lib/utils/dateUtils";
import { addMonths, subMonths } from "date-fns";

interface Calendar {
  year: number;
  month: number;
}
interface DateContextProps {
  weekDays: string[];
  calendar: Calendar;
  selectedDate: Date;
  setSelectedDate(value: Date): void;
  incMonth(value: boolean): () => void;
}

export const DateContext = React.createContext<DateContextProps>({
  weekDays: [],
  calendar: { month: NaN, year: NaN },
  selectedDate: new Date(),
  setSelectedDate: () => {},
  incMonth: () => () => {},
});

export const DateProvider: FC = ({ children }) => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [calendar, setCalendar] = useState<Calendar>({ month: NaN, year: NaN });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const incMonth = (isNext: boolean) => () => {
    const nextSelected = isNext
      ? addMonths(selectedDate, 1)
      : subMonths(selectedDate, 1);
    const month = nextSelected.getMonth();
    const year = nextSelected.getFullYear();
    setCalendar({ month, year });
    setSelectedDate(nextSelected);
  };

  useEffect(() => {
    const days = getWeekDays(0);
    setWeekDays(days);
  }, []);

  useEffect(() => {
    const dt = new Date();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    setCalendar({ month, year });
  }, []);

  return useMemo(
    () => (
      <DateContext.Provider
        value={{
          weekDays,
          calendar,
          selectedDate,
          setSelectedDate,
          incMonth,
        }}
      >
        {children}
      </DateContext.Provider>
    ),
    [weekDays, calendar, selectedDate, setSelectedDate, incMonth]
  );
};
