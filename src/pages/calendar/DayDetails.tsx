import React, { useEffect, useState } from "react";
import { TABLET } from "../../lib/constants";
import { GridRow } from "../../components";
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

export const DayDetails = (props: { selectedDate: Date }) => {
  const { selectedDate } = props;
  const [run, setRun] = useState<Run>();

  const { width } = useWindowSize();
  const colWidths = {
    label: width > TABLET ? 2 : 4,
    content: width > TABLET ? 6 : 12,
  };

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
          <GridRow
            width={colWidths}
            label="Distance"
          >{`${run.distance} ${run.unit}`}</GridRow>
          <GridRow width={colWidths} label="Location">
            {run.location}
          </GridRow>
          <GridRow width={colWidths} label="Type">
            {run.runType.map(t => (
              <RunType key={t} color="teal">
                {t}
              </RunType>
            ))}
          </GridRow>
          <GridRow width={colWidths} label="Note">
            {run.note || "N/A"}
          </GridRow>
        </Grid>
      )}
    </div>
  );
};
