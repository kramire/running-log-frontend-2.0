import React, { FC } from "react";
import { Tag } from "../../components";
import { TagType } from "../../base";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  grid-area: details;
  font-size: 13px;
  color: ${props => props.theme.colors.primary};

  max-height: ${props => (props.isOpen ? "25vh" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;

  > div {
    margin: 0.5em 0;
  }
`;

const TagsOutterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagsInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;
`;

interface LogDetailsProps {
  isOpen: boolean;
}

export const LogDetails: FC<LogDetailsProps> = ({ isOpen }) => {
  const tags: TagType[] = ["easy", "distance", "progression", "intervals"];
  return (
    <Wrapper isOpen={isOpen}>
      <div>Location: Vienna, Austria</div>
      <div>
        Weather:
        <span>
          <Icon name="rain" />
        </span>
      </div>
      <TagsOutterWrapper>
        Tags:
        <TagsInnerWrapper>
          {tags.map(tag => (
            <Tag tagName={tag} />
          ))}
        </TagsInnerWrapper>
      </TagsOutterWrapper>
      <div>Really messy run in the rain!</div>
    </Wrapper>
  );
};
