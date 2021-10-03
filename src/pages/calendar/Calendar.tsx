import React, { useEffect, useState, useContext } from "react";
import { TABLET } from "../../lib/constants";
import { format, isToday, addMonths, subMonths } from "date-fns";
import { Label, Button } from "semantic-ui-react";
import { useWindowSize } from "../../hooks";
import { DateContext } from "../../contexts";
import {
  getMonthDates,
  emptyCalCells,
  isMDYEqual,
} from "../../lib/utils/dateUtils";
import { DayDetails } from "./";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 3fr;
  grid-gap: 2em;
  height: 100%;
`;

const HeaderWrapaper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const ChangeMYIcons = styled(Button.Group)`
  &&&&&& {
    border: none;
    button {
      font-size: 10px;
      border: none;
      padding: 0.5em 1em;
    }
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 0.1em;
  grid-template-columns: repeat(7, 1fr);
`;

const WeekdayWrapper = styled(GridWrapper)`
  margin-bottom: 1em;
`;

const CalendarWrapper = styled(GridWrapper)`
  flex: 1;
`;

const CalendarCell = styled.div.attrs(
  (props: {
    $offset: number;
    $hasBackground: boolean;
    $selected: boolean;
  }) => ({
    $offset: props?.$offset,
    $hasBackground: props?.$hasBackground || false,
    $selected: props?.$selected || false,
  })
)<{ $offset: number }>`
  grid-column-start: ${props => props.$offset ?? "inherit"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    flex: 1;
    text-align: center;
  }

  @media (min-width: ${props => props.theme.screen.tablet}) {
    background-color: ${props =>
      props.$hasBackground ? "rgb(238 238 238 / 50%)" : "transparent"};
    background-color: ${props =>
      props.$selected ? "rgb(0 181 173 / 30%)" : "transparent"};
  }

  :hover {
    cursor: pointer;
  }
`;

export const Calendar = () => {
  const { weekDays, calendar, selectedDate, setSelectedDate, incMonth } =
    useContext(DateContext);
  const [calDates, setCalDates] = useState<Date[]>([]);
  const [emptyCells, setEmptyCells] = useState<{
    before: number[];
    after: number[];
  }>({ before: [], after: [] });
  const { width } = useWindowSize();

  const handleClick = (value: Date) => () => setSelectedDate(value);

  useEffect(() => {
    const { month, year } = calendar;
    if (!isNaN(month) && !isNaN(year)) {
      const dates = getMonthDates(month, year);
      setCalDates(dates);
    }
  }, [calendar]);

  useEffect(() => {
    if (calDates.length) {
      const before = emptyCalCells(calDates[0].getDay(), true);
      const after = emptyCalCells(
        calDates[calDates.length - 1].getDay(),
        false
      );
      setEmptyCells({ before, after });
    }
  }, [calDates]);

  if (!selectedDate || !calDates.length) return null;
  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapaper>
          <h1>Calendar</h1>
          <HeaderWrapaper>
            {format(
              selectedDate,
              width > TABLET ? "MMMM yyyy" : "MMM yyyy"
            ).toUpperCase()}
            <ChangeMYIcons basic>
              <Button onClick={incMonth(false)} icon="chevron left" />
              <Button onClick={incMonth(true)} icon="chevron right" />
            </ChangeMYIcons>
          </HeaderWrapaper>
        </HeaderWrapaper>
        <WeekdayWrapper>
          {weekDays.map(wd => (
            <CalendarCell key={wd}>
              <div>{width > TABLET ? wd : wd.slice(0, 1)}</div>
            </CalendarCell>
          ))}
        </WeekdayWrapper>
        <CalendarWrapper>
          {emptyCells.before.map(el => (
            <CalendarCell key={`empty_${el}`} $hasBackground />
          ))}
          {calDates.map((dt, idx) => (
            <CalendarCell
              key={idx}
              $offset={dt.getDay() + 1}
              $hasBackground
              $selected={isMDYEqual(dt, selectedDate)}
              onClick={handleClick(dt)}
            >
              {isToday(dt) ? (
                <div>
                  <Label circular color="teal">
                    {format(dt, "d")}
                  </Label>
                </div>
              ) : (
                <div>{format(dt, "d")}</div>
              )}
            </CalendarCell>
          ))}
          {emptyCells.after.map(el => (
            <CalendarCell key={`empty_${el}`} $hasBackground />
          ))}
        </CalendarWrapper>
      </TopWrapper>
      <DayDetails selectedDate={selectedDate} />
    </Wrapper>
  );
};
