import React, { FC } from "react";
import { format } from "date-fns";
import styled from "styled-components";

const CircularWrapper = styled.div`
  grid-area: date;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 4em;
  max-height: 4em;

  font-weight: bold;

  background-color: #1d242d;
  border-radius: 50%;

  padding: 2em;
  color: ${props => props.theme.colors.secondary};

  text-transform: uppercase;
`;

const Month = styled.div`
  font-size: 10px;
`;

const Day = styled.div`
  font-size: 16px;
`;

export const CircleDateLabel: FC<{ date: string }> = ({ date }) => {
  const dateArg = new Date(date);
  const month = format(dateArg, "MMM");
  const day = format(dateArg, "dd");
  return (
    <CircularWrapper>
      <Month>{month}</Month>
      <Day>{day}</Day>
    </CircularWrapper>
  );
};
