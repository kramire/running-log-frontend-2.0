import React, { FC } from "react";
import { Tag } from "../../components";
import { TagType } from "../../base";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  grid-area: details;
  font-size: 11px;
  color: ${props => props.theme.colors.primary};

  max-height: ${props => (props.isOpen ? "25vh" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;

  > div {
    margin: 0.25em 0;
  }
`;

interface LogDetailsProps {
  isOpen: boolean;
}

export const LogDetails: FC<LogDetailsProps> = ({ isOpen }) => {
  const tags: TagType[] = ["easy", "distance"];
  return (
    <Wrapper isOpen={isOpen}>
      <div>Location: Vienna, Austria</div>
      <div>
        Weather:
        <span>
          <Icon name="rain" />
        </span>
      </div>
      <div>
        Tags:
        {tags.map(tag => (
          <Tag tagName={tag} />
        ))}
      </div>
      <div>Notes: Really messy run in the rain!</div>
    </Wrapper>
  );
};
