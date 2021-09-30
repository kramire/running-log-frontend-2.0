import React, { useEffect, useState } from "react";
import { TABLET } from "../../lib/constants";
import { format } from "date-fns";
import { Grid, Label } from "semantic-ui-react";
import { useWindowSize } from "../../hooks";
import { mockRun } from "../../lib/mockData";
import { Run } from "../../lib/types";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 0.5rem 1rem 0;
  }
`;

const DateHeader = styled.span`
  font-size: 1rem;
  color: #00b5ad;
`;

const RunType = styled(Label)`
  &&&&& {
    margin: 0 1em 1em 0;
  }
`;

const DetailRow = (props: {
  width: number;
  label: string;
  children: React.ReactNode;
}) => (
  <Grid.Row>
    <Grid.Column width={props.width > TABLET ? 2 : 4}>
      {props.label}
    </Grid.Column>
    <Grid.Column width={props.width > TABLET ? 6 : 12}>
      {props.children}
    </Grid.Column>
  </Grid.Row>
);

export const DayDetails = (props: { selectedDate: Date }) => {
  const { selectedDate } = props;
  const [run, setRun] = useState<Run>();
  const { width } = useWindowSize();
  useEffect(() => {
    setRun(mockRun);
  }, []);

  return (
    <div>
      <HeaderWrapper>
        <h3>Run Details</h3>
        <span>-</span>
        <DateHeader>{format(selectedDate, "EEE LLL do, yyyy")}</DateHeader>
      </HeaderWrapper>
      {!run ? (
        <div>No run data.</div>
      ) : (
        <Grid style={{ margin: 0 }}>
          <DetailRow
            width={width}
            label="Distance"
          >{`${run.distance} ${run.unit}`}</DetailRow>
          <DetailRow width={width} label="Location">
            {run.location}
          </DetailRow>
          <DetailRow width={width} label="Type">
            {run.runType.map(t => (
              <RunType key={t} color="teal">
                {t}
              </RunType>
            ))}
          </DetailRow>
          <DetailRow width={width} label="Note">
            {run.note || "N/A"}
          </DetailRow>
        </Grid>
      )}
    </div>
  );
};
