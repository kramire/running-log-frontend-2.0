import React, { useState } from "react";
import { LogRow } from "./LogRow";
import { AddRun } from "./AddRun";
import { Header, AddButton } from "../../components";
import { StateInterface } from "../../base";
import { useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  > * {
    margin: 0.5em 0;
  }

  > :last-child {
    margin: 0;
  }
`;

const RowWrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;
  padding: 0 0.5em;
`;

export const Log = () => {
  const [isAddRunOpen, setIsAddRunOpen] = useState(false);
  const runs = useSelector((state: StateInterface) => state.runs);
  const runIds = Object.keys(runs);
  console.log("in log");

  return !runIds.length ? (
    <Loader inline="centered" size="mini" inverted />
  ) : (
    <Wrapper>
      <Header>Log</Header>
      <RowWrapper>
        {runIds.map(id => (
          <LogRow key={id} runId={id} />
        ))}
      </RowWrapper>
      <AddButton onClick={() => setIsAddRunOpen(true)}>+ Add Run</AddButton>
      <AddRun isOpen={isAddRunOpen} setIsOpen={setIsAddRunOpen} />
    </Wrapper>
  );
};
