import React, { useState } from "react";
import { CircleDateLabel } from "./CircleDateLabel";
import { LogDetails } from "./LogDetails";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1.5em;
  padding-bottom: 1.5em;

  color: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid #333;

  display: grid;
  grid-template-areas:
    "date distance icon"
    ". details details";
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 0.5em;
  align-items: center;
`;

const MileWrapper = styled.div`
  font-size: 18px;
  grid-area: distance;
`;

const StyledIcon = styled(Icon)`
  &&&&& {
    width: 100%;
    grid-area: icon;
    text-align: right;
    color: #bbb;
  }
`;

export const LogRow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <CircleDateLabel />
      <MileWrapper>6 miles</MileWrapper>
      <StyledIcon
        name={isOpen ? "chevron down" : "chevron right"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <LogDetails isOpen={isOpen} />
    </Wrapper>
  );
};
