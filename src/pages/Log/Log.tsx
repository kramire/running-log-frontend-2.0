import React from "react";
import { LogRow } from "./LogRow";
import { Header } from "../../components";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  > * {
    margin: 0.5em 0;
  }
`;

const RowWrapper = styled.div`
  height: 60vh;
  overflow-y: scroll;
  padding: 0 0.5em;
`;

export const Log = () => {
  return (
    <Wrapper>
      <Header>Log</Header>
      <RowWrapper>
        <LogRow />
        <LogRow />
        <LogRow />
        <LogRow />
        <LogRow />
        <LogRow />
      </RowWrapper>
    </Wrapper>
  );
};
